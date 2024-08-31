import WebSocket from "ws";
import { WebSocketServer } from "ws";
import http from "http"

const createHTTPserver = () => {
  const server = http.createServer(function(req,res){
    res.end("hello there")
  });
  server.listen(8080 , () => {
    console.log("The server is listening on port 8080")
  });

}

const WSS = () => {
  createHTTPserver();
  const wss = new WebSocketServer({server})

  wss.on('connection', function connection(ws) {
      ws.on('error', console.error);
    
      ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(data, { binary: isBinary });
          }
        });
      });

      ws.send("Hello from the server")
    });

  
}





export default WSS