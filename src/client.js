import WebSocket from 'ws';



export default function client() {
  const socket = new WebSocket('ws://localhost:8080');
  socket.onopen = () => {
    console.log('connected');
    socket.send("jalgaara!");
  }
  
  socket.onerror = (err) => {
    console.error(err)
  }
  
  socket.onmessage = (message) => {
    console.log(message.data)
  }
}




