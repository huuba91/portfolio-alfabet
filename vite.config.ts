// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // Static hosting (GitHub Pages / Netlify): TanStack Start's own prerenderer builds the
    // client + SSR bundles into dist/ and crawls every route, writing plain HTML into
    // dist/client. That folder is a fully static site — deploy it anywhere.
    prerender: { enabled: true },
  },
  // Disable the Nitro (Cloudflare-worker) deploy plugin: the static prerender flow needs
  // Vite's own client/server environments under dist/ (Nitro would redirect them to .output/).
  nitro: false,
  vite: {
    // GitHub Pages hosts project sites under /portfolio-alfabet/ — set via
    // GITHUB_PAGES=1 npm run build. Default (empty) keeps root-relative paths
    // for the VPS preview and custom-domain hosting.
    base: process.env.GITHUB_PAGES ? "/portfolio-alfabet/" : "/",
    server: {
      // VPS preview: the public agent37 hostname must be allowed through Vite's host check.
      allowedHosts: true,
    },
  },
});
