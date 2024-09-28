import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "*",
      // "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      // "Content-Security-Policy": "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; object-src 'self';"

    },
  },
});
