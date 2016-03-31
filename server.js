var express = require("express")
var app = express();
var http = require('http').Server(app);
var io = require("socket.io").listen(http);

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/index.html");
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});
