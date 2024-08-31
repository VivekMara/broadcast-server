import WebSocket from 'ws';

const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
  console.log('connected')
}

socket.onerror = (err) => {
  console.error(err)
}

socket.onmessage = (message) => {
  console.log(message.data)
}

socket.emit("hello server")
