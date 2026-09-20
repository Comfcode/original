---
name: Fleet page structured data
description: Why fleet detail pages with prices available only on request should use Service schema rather than nested Vehicle product entities.
---

Model fleet detail pages as `Service` entities and expose seating, model year, and class through `PropertyValue` entries. Do not add a nested `Vehicle` product entity unless a genuine public offer price or verified review data is available.

**Why:** Google treats `Vehicle` as a product eligible for merchant results and reports it as invalid when none of `offers`, `review`, or `aggregateRating` is present. Adding a price-free offer only replaces that error with an invalid-offer warning.

**How to apply:** Keep the runtime JSON-LD and build-time prerender output aligned whenever fleet-page structured data changes.