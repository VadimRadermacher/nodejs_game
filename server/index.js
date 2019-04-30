let express = require('express');
let app = express();
let path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Game = require('./Game');

const players = {};
const games = {};

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/../index.html'));
});

app.use(express.static('public'));

const ex = (fct) => {
  return (...args) => {
    try {
      return fct(...args);
    } catch(e) {
      console.error("exception", e);
    }
  }
};

io.on('connection', ex((socket) => {
    console.log('bienvenue !' + socket.id);
    players[socket.id] = {
        playerName: "José",
        playerId: socket.id
    };

    socket.on('newGame', ex(() => {
        const game = new Game();
        games[game.id] = game;
        console.log(`user ${socket.id} asks for a new game, generated ${game.id}`);
        io.to(`${socket.id}`).emit("newGame", game.id);
    }));

    socket.emit('currentPlayers', players);
    socket.broadcast.emit('newPlayer', players[socket.id]);
    console.log(players[socket.id].playerName);

    socket.on('disconnect', function() {
    console.log('user disconnected');
  });
}));

http.listen(process.env.PORT || 4000, function(){
  console.log('Your server is running');
});