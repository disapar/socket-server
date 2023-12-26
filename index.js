// const express = require('express');
// const { resolve } = require('path');

// const app = express();
// const port = 3010;

// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server,{
  cors:{
    origin: 'http://localhost:5173/'
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
