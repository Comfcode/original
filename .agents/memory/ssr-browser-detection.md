---
name: SSR browser detection
description: Why the prerender CLI needs server-style cache lifetime even though jsdom globals are installed.
---

Keep SSR-only query caches free of finite browser GC timers when rendering with jsdom globals.

**Why:** jsdom can make a library detect a browser despite running in a build process. React Query's browser cache timers kept prerender alive after it had written every page and closed Vite, causing verification timeouts.

**How to apply:** Preserve server-style infinite GC lifetime in the build-only query client; do not apply that policy to the interactive browser client. When adding libraries to SSR, consider whether jsdom changes their runtime detection.
