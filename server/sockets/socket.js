const { io } = require('../index');

// escuchar informacion
io.on('connection', (client)=>{
    
        console.log('Usuario conectado ');
       
       
    
        client.on('disconnect', (data)=>{
            console.log('Usuario desconectado');
           
           
        });
        // escuchar coordenadas del acusado
        client.on('acusadoCoord', data=>{
           
            console.log(data);
             // Enviando coordenadas del Acusado
            client.broadcast.emit('acusadoCoord', data)
           
           
        })
         // escuchar coordenadas de la victima
         client.on('victimaCoord', data=>{
            
            console.log(data);
            // Enviando coordenadas de la Victima
            client.broadcast.emit('victimaCoord', data)
                   
        })

        // Alerta de la victima
        client.on('AcusadoNoConecta', data =>{
            client.broadcast.emit('AcusadoNoConecta', data)
        })

        // enviar aviso al acusado
        client.on('PedirAcusadoConexion', data =>{
            client.broadcast.emit('PedirAcusadoConexion', data)
        } )
    });