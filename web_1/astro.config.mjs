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
          target: "http://127.0.0.1:3901",
          changeOrigin: true,
        },
        // "/api": {
        //   changeOrigin: true,
        //   target: "http://127.0.0.1:3901",
        //   rewrite: (path) => path.replace(/^\/api/, ""),
        // },
      },
    },
  },
  // adapter: node({
  //   mode: "middleware",
  // }),
});
