// const myDisplay=require("./display");
// console.log("Hello Pranusha...");
// function check(msg){
// console.log(msg);
// }
// myDisplay("Hello...");

// const bubble = require("./bubble");
// function Myclass() {
//   function main() {
//     const arr = [76, 12, 3, 45, 38, 68];
//     console.log(arr);
//     bubble(arr);
//     console.log(arr);
//   }
//   main();
// }
// Myclass();
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8090 });
//const allMessage = [{ name: "ashwin", message: "hello" }];

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("Got", typeof message);
    console.log(message);
    
    wss.clients.forEach(client => {
      client.send(message);
    });
    //const obj = JSON.parse(message);
    // allMessage.push(message);
    //ws.send(JSON.stringify(allMessage));
  });
});



