import type { AstroIntegration } from "astro";

export default function elysiaAdapter(): AstroIntegration {
  return {
    name: "astro-elysia-adapter",
    hooks: {
      "astro:config:done": ({ setAdapter }) => {
        setAdapter({
          name: "astro-elysia-adapter",
          supportedAstroFeatures: {
            serverOutput: "stable",
            sharpImageService: "stable",
            hybridOutput: "stable",
            staticOutput: "stable",
          },
          entrypointResolution: "auto",
          serverEntrypoint: "./lib/entry.ts",
        });
      },
    },
  };
}
