var socket = io();
    
         
       
// Enviando coordenadas de la victima
setInterval(function(){
   socket.emit('victimaCoord',{
       msj: "Enviando mensaje por socket"
   })
},1000)