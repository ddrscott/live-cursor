var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
  
var cursors = require('./cursors.js');

server.listen(process.env.PORT, process.env.IP);

app.configure(function(){
    // app.use(express.logger());
    app.use(express.static(__dirname + '/public'));
});

io.configure(function() {
    io.enable('browser client minification');
    io.enable('browser client gzip');
    io.set('transports', ['websocket', 'flashsocket']);
});

var clients = {};

io.sockets.on('connection', function (socket) {

    var myself = {
        cursor: cursors.nextCursor()
    };
    clients[socket.id] = myself;

    io.sockets.emit('clients', clients);

    socket.emit('myself', myself);
  
    socket.on('move', function(data) {
        //console.log("socket: " + socket.id + " received: " + data);
        data.from = socket.id;
        socket.broadcast.emit('move', data);
    });
    
    socket.on('disconnect', function () {
        delete clients[socket.id];
        socket.broadcast.emit('disconnect', socket.id);
        io.sockets.emit('clients', clients);
    });    
});
