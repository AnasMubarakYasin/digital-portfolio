// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3907,
  },
  output: "server",
  integrations: [solidJs()],
  vite: {
    server: {
      proxy: {
        "/api": {
          changeOrigin: true,
          target: "http://localhost:3901",
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
  adapter: node({
    mode: "middleware",
  }),
});
