import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from /<repo-name>/, while Vercel serves
// from the root of its own domain. Vercel automatically sets a VERCEL env var
// during its build, so we use that to pick the right base path without any
// manual toggling between deploy targets.
const BASE_PATH = process.env.VERCEL ? "/" : "/Portfolio/";

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
