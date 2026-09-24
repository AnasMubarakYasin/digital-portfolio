import { Elysia } from "elysia";
import { staticPlugin } from "@elysia/static";
// import { compression } from "@chneau/elysia-compression";
import WebSocket from "ws";

import { render } from "../dist/server/entry.mjs";

console.log("application process", process.pid);

const ws = new WebSocket(`${process.env.WS_HOST}/monitor/web`);

await new Promise((res, rej) => {
  ws.once("open", res);
  ws.once("error", rej);
});

ws.send(
  JSON.stringify({
    name: "Set",
    ParamSet: {
      name: "web",
      status: "starting",
      time: new Date(),
    },
  }),
);

const [hostname, port] = await fetch(
  `${process.env.HTTP_HOST}/env/address_web`,
  {
    method: "GET",
  },
)
  .then((res) => res.json())
  .then((body) => body.value.split(":"));

const app = new Elysia();

app.use(
  staticPlugin({
    assets: "dist/client",
    prefix: "",
    ignorePatterns: [],
    indexHTML: false,
    bunFullstack: false,
    alwaysStatic: true,
    // ignorePatterns: ["", /^.*\.[^.]+$/i]
    // indexHTML: false,
    // bunFullstack: false,
  }),
);
app.get("*", async ({ request }) => {
  console.log(request.method, request.url);
  return render(request);
});
app.get("/hello", () => "Hello World");

app.listen(
  {
    hostname,
    port,
  },
  (server) => {
    ws.send(
      JSON.stringify({
        name: "Set",
        ParamSet: {
          name: "web",
          status: "running",
          time: new Date(),
        },
      }),
    );
    console.log(`listen on ${server.url}`);
  },
);
