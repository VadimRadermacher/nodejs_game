let express = require('express');
let app = express();
let path = require('path');
let http = require('http').Server(app);
let io = require('socket.io')(http);
let players = {};

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static('public'));

http.listen(process.env.PORT || 4000, function(){
  console.log('Your server is running');
});

io.on('connection', function(socket){
    console.log('bienvenue !' + socket.id);
    players[socket.id] = {
    	playerName: "José",
    	playerId: socket.id
    };
    socket.emit('currentPlayers', players);
    socket.broadcast.emit('newPlayer', players[socket.id]);
    console.log(players[socket.id].playerName);

    socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});
