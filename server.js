var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/index.html");
});

var server = require('http').Server(app);

var io = require("socket.io").listen(server);

io.on('connection', function(socket){
  console.log('a user connected');
});

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});
