var socket = io();
// var form = document.getElementById("chatForm");
// var message = document.getElementById("m");

//jQuery version
$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});


//need vanilla js version
