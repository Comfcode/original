// Focused offline checks for the source inspection and safety decisions.
// Run: node artifacts/comfortline-website/scripts/check-border-guide.mjs
import assert from "node:assert/strict";
import { createDataLoader } from "./lib/load-blog-data.mjs";
const load = createDataLoader();

const { evaluate, DEFAULT_INPUT, SOURCES } = load("border-checker-logic");
const { SOURCE_REVIEW, SOURCE_REVIEW_DATE } = load("border-source-review");
const { CUSTOMS_REVIEW_DATE, CUSTOMS_REFERENCES, CUSTOMS_ANNEX_2_URL } = load("border-customs-import");
const { BORDER_BY_CAR_BODY_RU, BORDER_BY_CAR_BODY_EN } = load("blog-border-by-car-2026");
const { ARTICLES } = load("blog-articles");
const base = { ...DEFAULT_INPUT, citizenship: "DE", registration: "DE" };
const screen = (input) => evaluate({ ...base, ...input });
const has = (findings, kind, src) => findings.some((f) => f.kind === kind && f.src === src);

// Inclusive clearance, exclusive displacement, every ordinary powertrain.
for (const power of ["petrol", "diesel"]) {
  assert(has(screen({ power, volume: "1900", clearance: "165" }), "nomatch", "S2"));
  assert(has(screen({ power, volume: "1901", clearance: "165" }), "risk", "S2"));
  assert(has(screen({ power, volume: "3001", clearance: "164" }), "nomatch", "S2"));
}
for (const power of ["hev", "phev", "bev"]) {
  assert(has(screen({ power, volume: "", clearance: "165" }), "risk", "S2"));
  assert(has(screen({ power, volume: "", clearance: "164" }), "nomatch", "S2"));
}
for (const clearance of ["", "100", "180"]) {
  const findings = screen({ power: "other", clearance });
  assert(!has(findings, "nomatch", "S2"));
  assert(findings.some((f) => f.detail.en.includes("8703 90")));
}
assert(!has(screen({ volume: "", clearance: "" }), "nomatch", "S2"));
assert(has(screen({ value: "68000", clearance: "140" }), "info", "S26"));
assert(!has(screen({ value: "68000", clearance: "140" }), "risk", "S26"));

// BY-plate findings cannot imply that historical Lithuanian exceptions are current.
for (const ownership of ["own", "passenger", "other"]) {
  const findings = screen({ registration: "BY", citizenship: "BY", border: "LT", ownership, returnVisa: "ltvisa" });
  assert(has(findings, "risk", "S6"));
  assert(findings.some((f) => f.detail.en.includes("18 January 2025")));
}
assert(has(screen({ registration: "BY", border: "PL", ownership: "passenger" }), "caution", "S5"));
assert(has(screen({ registration: "BY", border: "PL", ownership: "other" }), "risk", "S5"));
assert(has(screen({ registration: "BY", border: "LV" }), "risk", "S7"));
assert(!has(screen({ registration: "BY", border: "LV", returnTrip: "no" }), "risk", "S7"));
assert(has(screen({ border: "LV" }), "info", "S10"));
assert(has(screen({ residence: "eu" }), "caution", "S13"));

for (const citizenship of ["PL", "LT", "LV", "XN-LV", "DE", "GB"]) {
  const finding = screen({ citizenship }).find((f) => f.src === "S11" && f.kind === "info");
  assert(finding.detail.ru.includes("31.12.2026"));
  assert(finding.detail.en.includes("31 December 2026"));
}
assert(!screen({ citizenship: "DE", passport: "special" }).some((f) => f.kind === "info" && f.src === "S11"));

assert.equal(SOURCES.length, 26);
assert.equal(Object.keys(SOURCE_REVIEW).length, 26);
assert.equal(SOURCE_REVIEW_DATE, "2026-10-16");
for (const lang of ["ru", "en"]) {
  const body = lang === "ru" ? BORDER_BY_CAR_BODY_RU : BORDER_BY_CAR_BODY_EN;
  for (const source of SOURCES) {
    assert(SOURCE_REVIEW[source.id][lang].length > 30);
    const link = body.find((b) => b.type === "link" && b.label.startsWith(`[${source.id}]`));
    assert.equal(link.href, source.url);
    assert(link.description.includes(source.id === "S23" ? CUSTOMS_REVIEW_DATE : SOURCE_REVIEW_DATE));
    assert(link.description.includes(SOURCE_REVIEW[source.id][lang]));
  }
}
const article = ARTICLES.find((a) => a.slugEn === "driving-to-belarus-by-car-2026-rules-checker");
assert.equal(article.dateModified, CUSTOMS_REVIEW_DATE);
assert.equal(article.citation.length, SOURCES.length + CUSTOMS_REFERENCES.length);
assert.equal(new Set(article.citation).size, article.citation.length);
for (const source of [...SOURCES, ...CUSTOMS_REFERENCES]) {
  assert(article.citation.includes(source.url));
}
assert.equal(SOURCES.find((s) => s.id === "S23").url, CUSTOMS_ANNEX_2_URL);

// Permanent-import guidance is conditional on classification, never inferred from year.
for (const power of ["petrol", "diesel", "hev", "phev", "bev", "other"]) {
  const getAge = (year) => screen({ power, year }).find((f) => f.src === "S23");
  const age = getAge("2023");
  assert(age, `Missing customs guidance for ${power}`);
  assert.deepEqual(age, getAge("2021"), "Model year alone must not assign a band or quote");
  for (const lang of ["ru", "en"]) {
    assert(!/unconfirmed|не подтверждена/.test(age.detail[lang]));
  }
  assert(age.detail.en.includes("does not determine"));
  if (["petrol", "diesel"].includes(power)) {
    assert(age.detail.en.includes("exactly 3 included"));
    assert(age.detail.en.includes("exactly 5 included"));
    assert(age.detail.en.includes("not Article 264"));
  } else if (power === "bev") {
    assert(age.detail.en.includes("Table 2(4)"));
    assert(age.detail.en.includes("not the ICE age scale"));
    assert(age.detail.en.includes("remaining availability is unverified"));
    assert(age.detail.en.includes("31 December 2028"));
  } else {
    assert(age.detail.en.includes("8703 80 000 5"));
    assert(age.detail.en.includes("does not extend to hybrids"));
  }
}
for (const lang of ["ru", "en"]) {
  const body = lang === "ru" ? BORDER_BY_CAR_BODY_RU : BORDER_BY_CAR_BODY_EN;
  for (const source of CUSTOMS_REFERENCES) {
    const link = body.find((b) => b.type === "link" && b.label.startsWith(`[${source.id}]`));
    assert.equal(link.href, source.url);
    assert(link.description.includes(CUSTOMS_REVIEW_DATE));
    assert(link.description.includes(source.note[lang]));
  }
  const customsIndex = body.findIndex((b) => b.type === "h2" && b.id === "customs");
  const customs = JSON.stringify(body.slice(customsIndex, body.findIndex((b) => b.id === "documents")));
  assert(customs.includes(lang === "ru" ? "статья 264" : "Article 264"), "Preserve separate temporary-entry law");
  assert(customs.includes(lang === "ru" ? "ровно 3 года включено" : "exactly 3 included"));
  assert(customs.includes(lang === "ru" ? "ровно 5 лет включено" : "exactly 5 included"));
  assert(customs.includes("8703 80 000 5"));
  assert(customs.includes(lang === "ru" ? "двойного НДС" : "double-counting VAT"));
}
console.log("Border guide checks passed, including official customs sources, exact age boundaries, powertrain distinctions, dated limits and no year-based quote.");
