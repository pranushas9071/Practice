const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8090 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    //console.log("Got", typeof message);
    console.log(message);
    wss.clients.forEach((client) => {
      client.send(message);
    });
  });
});

