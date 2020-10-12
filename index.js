var express = require('express');
var socket = require('socket.io')
//App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('Listen to request')
});

//static files
app.use(express.static('public'))

//socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('Made socket connection', socket.id);

    socket.on('chat', function(data) {
        io.sockets.emit('chat', data)
    })
    socket.on("typing", function(data){
        socket.broadcast.emit("typing", data)
    })
})