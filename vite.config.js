import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from /<repo-name>/.
// Update BASE_PATH to match your repository name before deploying,
// e.g. "/portfolio/". Keep it as "/" if using a custom domain or a
// <username>.github.io user/organization site.
const BASE_PATH = "/Portfolio/";

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
