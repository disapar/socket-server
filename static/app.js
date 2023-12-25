var socket = io();

console.log('viendo el home');
// Enviando coordenadas de la victima
setInterval(function () {
  socket.emit('victimaCoord', {
    msj: 'hola estoy conectado',
  });
}, 1000);
