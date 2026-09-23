// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import adapter from "@lib/adapter";
import node from "@astrojs/node";
import bun from "@nurodev/astro-bun";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3907,
  },
  output: "server",
  integrations: [solidJs()],
  adapter: adapter(),
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
  // build: {
  //   assetsPrefix: "/assets",
  // },
  // adapter: node({
  //   mode: "middleware",
  // }),
  // adapter: bun(),
});
