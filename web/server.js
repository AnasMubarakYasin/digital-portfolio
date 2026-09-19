import express from 'express';
<<<<<<< HEAD
import { handler as ssrHandler } from './dist/server/entry.mjs';
import WebSocket from 'ws';

console.log('application pid', process.pid)

const INSTANCE_ADDRESS = "localhost:5010"
=======
import compression from 'compression'
import WebSocket from 'ws';
import { handler as ssrHandler } from './dist/server/entry.mjs';

console.log('application pid', process.pid)

const INSTANCE_ADDRESS = "localhost:3902"
>>>>>>> 75f4020 (feat: add storage service)
let id = 1;
let ws = new WebSocket(`ws://${INSTANCE_ADDRESS}/monitor/web`)
await new Promise((res, rej) => {
  ws.once('open', res)
  ws.once('error', rej)
})

ws.send(JSON.stringify({
  name: "Set",
  ParamSet: {
    name: "web",
    status: "starting",
    time: new Date(),
  }
}))

const app = express();
app.use((req, res, next) => {
<<<<<<< HEAD
  console.log(id++,req.method, req.hostname, req.path)
  next()
})
=======
  console.log(req.method, req.hostname, req.path)
  next()
})
app.use(compression())
>>>>>>> 75f4020 (feat: add storage service)
app.use(express.static('dist/client/'))
app.use(ssrHandler);


let res = await fetch(`http://${INSTANCE_ADDRESS}/env/address_web`)
let address_web = await res.json()
let [hostname, port] = address_web.value.split(":")

app.listen(+port, hostname).addListener('listening', () => {
  ws.send(JSON.stringify({
    name: "Set",
    ParamSet: {
      name: "web",
      status: "running",
      time: new Date(),
    }
  }))
  console.log(`Server listening on http://${address_web.value}`)
});


