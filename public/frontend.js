var socket = io.connect();

socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})
