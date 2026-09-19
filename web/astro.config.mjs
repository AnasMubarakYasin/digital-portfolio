<<<<<<< HEAD
import { defineConfig } from 'astro/config';

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
=======
// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

>>>>>>> 75f4020 (feat: add storage service)
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  output: 'server',
=======
  server: {
    port: 3907,
  },
  output: "server",
>>>>>>> 75f4020 (feat: add storage service)
  integrations: [solidJs()],
  vite: {
    server: {
      proxy: {
<<<<<<< HEAD
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  },
  adapter: node({
    mode: "middleware"
  })
});
=======
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
>>>>>>> 75f4020 (feat: add storage service)
