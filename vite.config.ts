import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Static build: every page is pre-rendered to plain HTML in dist/client.
// No server is needed on Vercel, so there is no server crash / white screen.
export default defineConfig({
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
    }),
    react(),
    tailwindcss(),
  ],
});
