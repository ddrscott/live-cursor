// Require.js allows us to configure shortcut alias
require.config({
  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim: {
    'socketio': {
      exports: 'io'
    }
  },
  paths: {
    jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
    socketio: 'http://live_cursor.ddrscott.c9.io/socket.io/socket.io'
  }
});
 
define([
  'jquery',
  'socketio'
], function( $, io ) {
 
    var socket = io.connect('http://live_cursor.ddrscott.c9.io/');
    
    $(window).mousemove(function(e) {
        socket.emit('move', {x: e.pageX, y:e.pageY});
    });
    
    var clients = {};
    
    socket.on('move', function (data) {
    
        var client_key = "client-" + data.from;
        var coord = $("#" + client_key);
        
        // add the element if needed
        if (coord.length == 0) {
            coord = $("<img id='" + client_key + "' />");
            coord.appendTo('body');
            coord.css({position: "absolute", 'z-index': 99999});
            console.log('adding ' + client_key);
        }
        if (!coord.attr('src')) {
            coord.attr('src', clients[data.from].cursor);
            coord.fadeIn();
        }
        
        // move the element
        coord.css({left: data.x, top: data.y});
    });
    
    socket.on('myself', function (data) {
        $('body, a, a:hover').css({cursor: "url('" + data.cursor + "'), auto"});
    });
    
    
    socket.on('clients', function (data) {
        clients = data;
        
        for (var otherId in data) {
            var other = data[otherId];
            var otherElm = $("#client-" + otherId);
            if (otherElm.length > 0) {
                otherElm.attr('src', other.cursor);
            }
        }
    });
    
    socket.on('disconnect', function (deletedId) {
        console.log('disconnecting: ' + deletedId);
        $("#client-" + deletedId).fadeOut();
    });
});
