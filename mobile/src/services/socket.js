import socketio from 'socket.io-client';

const socket = socketio('http://192.168.25.113:3333', {
    autoConnect:false,
});

function subscribeToNewDevs(subscribeFunction){
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs){
    socketio.io.ops.query = {
        latitude,
        longitude,
        techs,
    };
    socket.connect();

    socket.on('message', text =>{
        console.log(text); 
    })

}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};