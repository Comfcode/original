# Offline bilingual blog checks

Run from `artifacts/comfortline-website`:

- `pnpm run check:blog:source` — checks actual TypeScript article data, policy
  expectations and validator mutation tests. No built files required.
- `pnpm run check:blog` — also checks **all generated RU/EN blog pages** in
  `dist/public`. Missing output fails explicitly; run a build first.
- `node scripts/check-blog-content.mjs --rendered` — just the rendered-page
  checks, useful after prerendering.

`pnpm run build` runs source checks before bundling. `scripts/prerender.mjs`
always checks generated blog HTML before succeeding, including when run
directly. Failed checks stop the build before its existing IndexNow step.
The checks themselves do not use the network or submit anything.
Prerendering requires a fresh Vite template with an empty `#root`. Re-running
it on previously prerendered homepage output fails with an explicit message
instead of copying homepage metadata/content into article routes.

For a local production-render pass without the existing network-facing
IndexNow submission:

```sh
pnpm run check:blog:source
pnpm exec vite build --config vite.config.ts
node scripts/prerender.mjs
```

## Updating policy deliberately

`fixtures/blog-policy-expectations.mjs` pins article identities, required
localized guide links, checkpoint vehicle restrictions and the separate land
and airport visa regimes. Its visa/checkpoint baseline is the **16 October
2026 editorial inspection** of the official sources already linked in the
articles. Customs checks retain their separate 17 October review. These are
not legal rulings, travel-day confirmations or proof a source is still current.

When an official update changes a rule:

1. Read the current primary source and record its publication/effective dates
   and the date of editorial inspection beside the article's source.
2. Update both translations, other affected articles and checker rules.
3. Intentionally update the relevant dated expectations and explanatory
   comments. Do not copy the new guide into the tests as legal authority or
   loosen assertions merely to make them pass.
4. Run source checks, regenerate the pages, and run rendered checks.

The validator's negative tests prove that shared bilingual errors, a broken
localized link, missing translations, altered publication identities, changed
visa counts/cutoffs, wrong canonicals/hreflang and incomplete prerendered
content fail. Rendered checks use jsdom without scripts or resource loading;
no browser or running server is required.
