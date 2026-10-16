// Focused offline checks for the source inspection and safety decisions.
// Run: node artifacts/comfortline-website/scripts/check-border-guide.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data");
const cache = new Map();
function load(name) {
  const path = resolve(root, `${name}.ts`);
  if (cache.has(path)) return cache.get(path).exports;
  const module = { exports: {} };
  cache.set(path, module);
  const code = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: path,
  }).outputText;
  new Function("require", "module", "exports", code)((p) => load(p), module, module.exports);
  return module.exports;
}

const { evaluate, DEFAULT_INPUT, SOURCES } = load("border-checker-logic");
const { SOURCE_REVIEW, SOURCE_REVIEW_DATE } = load("border-source-review");
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
    assert(link.description.includes(SOURCE_REVIEW_DATE));
    assert(link.description.includes(SOURCE_REVIEW[source.id][lang]));
  }
}
const article = ARTICLES.find((a) => a.slugEn === "driving-to-belarus-by-car-2026-rules-checker");
assert.equal(article.dateModified, SOURCE_REVIEW_DATE);
assert.equal(article.citation.length, 26);
assert.deepEqual(article.citation, SOURCES.map((s) => s.url));
console.log("Border guide checks passed: thresholds, special CN, visas, BY returns, customs and 26 bilingual source notes.");
