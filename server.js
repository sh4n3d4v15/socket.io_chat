var app = require('express').createServer()
var io = require('socket.io').listen(app);

app.listen(16432);

// routing
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// usernames which are currently connected to the chat

io.sockets.on('connection', function (socket) {


	socket.on('moved',function(position){
		socket.broadcast.emit('newPos',position);
	})
	socket.on('start',function(position){
		socket.broadcast.emit('begun',position);
	})

});