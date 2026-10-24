# Hosting architecture

- Preserve TanStack Start routing and use the Nitro Vercel preset for production; the Vercel output includes both static assets and the server handler.
- The local build uses the same source with the Nitro node-server preset to verify server rendering and browser hydration before deployment.
- Keep dependency versions pinned and commit package-lock.json so Vercel can reproduce the tested installation with npm ci.
