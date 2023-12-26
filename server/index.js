const express = require('express');
const  cors = require('cors')
const socketIO = require('socket.io');
const moment = require('moment');
const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app);
app.use(cors())
const publicPath = path.resolve(__dirname, '../static');
const port = process.env.PORT || 4000;

app.use(express.static(publicPath));
module.exports.io  = socketIO(server);

require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);
    console.log(moment().format('LTS'));

});