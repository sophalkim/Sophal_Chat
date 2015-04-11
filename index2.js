var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// GET: /
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

// Load and setup chat feature
io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

// Starts Server
http.listen(3000, function(){
	console.log('listening on *:3000');
});