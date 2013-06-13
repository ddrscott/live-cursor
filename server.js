var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
  
var cursors = require('./cursors.js');

var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;

server.listen(port, ipaddr);

app.configure(function(){
    // app.use(express.logger());
    app.use(express.static(__dirname + '/public'));
});

io.configure(function() {
    io.enable('browser client minification');
    io.enable('browser client gzip');
    io.set('transports', ['websocket', 'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling']);
});

var clients = {};
var sites = {};

io.sockets.on('connection', function (socket) {

    socket.on('join', function(data) {
        console.log("socket: " + socket.id + " received: " + data);
        
        var myself = {
            cursor: cursors.nextCursor()
        };
        clients[socket.id] = myself;
        sites[socket.id] = data.room;
        
        socket.join(data.room);

        socket.emit('myself', myself);
        
        io.sockets.in(data.room).emit('clients', clients);
    });

    socket.on('move', function(data) {
        //console.log("socket: " + socket.id + " received: " + data);
        var room = sites[socket.id];
        data.from = socket.id;
        io.sockets.in(room).except(socket.id).emit('move', data);
    });
    
    socket.on('disconnect', function () {
        var room = sites[socket.id];
        delete clients[socket.id];
        io.sockets.in(room).except(socket.id).emit('disconnect', socket.id);
        io.sockets.in(room).except(socket.id).emit('clients', clients);
    });    
});
