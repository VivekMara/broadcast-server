import WebSocket from "ws";
import { WebSocketServer } from "ws";
import http from "http"

const server = http.createServer(function(req,res){
    res.end("hello there")
})

const wss = new WebSocketServer({server})

wss.on('connection', (socket) => {
    socket.on('error' , (err) => console.error(err));

    socket.on('message' , (data, isBinary) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN){
                client.send(data, { binary : isBinary})
            }
        })
    })

    socket.send("Message from the server")
})

server.listen(8080 , () => {
    console.log("The server is listening on port 8080")
})