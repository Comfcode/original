import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createDataLoader } from "./lib/load-blog-data.mjs";
import { validateBlogSources, validateRenderedBlogPages } from "./lib/blog-content-validation.mjs";
import { collectAllRoutes, SITE_URL } from "./route-manifest.mjs";
import { EXPECTED_ORIGIN, POLICY_REVIEW_DATE } from "./fixtures/blog-policy-expectations.mjs";
import assert from "node:assert/strict";

const args = process.argv.slice(2);
if (args.some((arg) => !["--source", "--rendered"].includes(arg))) {
  console.error("Usage: node scripts/check-blog-content.mjs [--source | --rendered]");
  process.exit(1);
}
try {
  assert.equal(SITE_URL, EXPECTED_ORIGIN, "Canonical origin changed: review the explicit identity baseline");
  const load = createDataLoader();
  const { ARTICLES } = load("blog-articles");
  if (!args.length || args.includes("--source")) {
    validateBlogSources(ARTICLES, {
      routes: collectAllRoutes().blogArticleRoutes,
      europeanCountries: load("border-checker-logic").EUROPE_38,
    });
    console.log(`[blog-content] Source checks passed: ${ARTICLES.length} bilingual article identities, localized links, checkpoint parity, distinct visa regimes. Policy baseline ${POLICY_REVIEW_DATE}; not live legal verification.`);
  }
  if (!args.length || args.includes("--rendered")) {
    const count = validateRenderedBlogPages(ARTICLES, resolve(dirname(fileURLToPath(import.meta.url)), "../dist/public"));
    console.log(`[blog-content] ${count} rendered blog pages passed: full content, tables, links, canonical/hreflang and structured identities.`);
  }
} catch (error) {
  console.error(`[blog-content] FAILED: ${error.message}`);
  process.exit(1);
}
