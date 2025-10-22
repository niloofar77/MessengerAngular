const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let messages = []; 

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('loadMessages', messages);

  socket.on('sendMessage', (msg) => {
    messages.push(msg); 
    io.emit('newMessage', msg); 
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
