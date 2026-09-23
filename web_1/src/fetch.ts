import { Hono } from "hono";
import { logger } from "hono/logger";
import { actions, middleware, pages, i18n } from "astro/hono";

const app = new Hono();

// Hono middleware
app.use(logger());

// Astro handlers (as Hono middleware)
app.use(actions());
app.use(middleware());
app.use(pages());
app.use(i18n());

console.log("use Hono");

export default app;
