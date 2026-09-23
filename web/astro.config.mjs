// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import adapter from "@lib/adapter";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [solidJs()],
  adapter: adapter(),
  server: {
    port: 3907,
  },
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://127.0.0.1:3901",
          changeOrigin: true,
        },
      },
    },
  },
});
