// Require.js allows us to configure shortcut alias
require.config({
  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim: {
    'socketio': {
      exports: 'io'
    },
    'underscore': {
      exports: '_'
    }
  },
  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
    socketio: '/socket.io/socket.io',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min'
  }
});
 
define([
  'jquery',
  'underscore',
  'socketio'
], function( $, _, io ) {
 
    var socket = io.connect(); // 'http://live_cursor.ddrscott.c9.io/'
    
    var clients = {};
    
    socket.on('move', _.throttle(function(data) {
    
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
    }, 10));

    $('html, body').css({cursor: "wait"});

    socket.on('myself', function (data) {
        $('html, body').css({cursor: "url('" + data.cursor + "'), auto"});
    
        // don't register move handler till server responds
        $(document).mousemove(function(e) {
            socket.emit('move', {x: e.pageX, y:e.pageY});
        });
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
