---
name: jsdom and undici security overrides
description: Compatibility constraint when remediating undici advisories in projects that use jsdom.
---

Do not force a patched undici major or minor beneath an older jsdom release without testing jsdom-based build scripts. Upgrade jsdom to a release designed for the patched undici API when possible.

**Why:** Some jsdom releases import undici internal modules rather than only public APIs. A security override can remove the vulnerable undici version while causing prerender or test scripts to fail at runtime because those internal paths changed.

**How to apply:** After any undici override, run the actual jsdom consumer such as prerendering or DOM-based tests. If an internal-module import fails, upgrade the direct jsdom dependency and verify its Node engine requirement instead of weakening the security override.