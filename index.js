
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { server } = require('socket.io');
const io = new SocketServer(server,{
  cors:{
    origin: 'https://eclectic-chebakia-28f1f2.netlify.app/'
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
