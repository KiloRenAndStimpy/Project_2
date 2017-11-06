var express = require('express');
var app = express();
var server = require('http').Server( app )


var io = require('socket.io')(server)

app.use(express.static('public'))

io.on('connection', function(socket){
  console.log(socket.id);

  socket.on("doing everything"$(function(){

    console.log('yo');

    $('.button').click(function(){

      if( $(this).hasClass('circle') ){
        $("<img class='burstShort' src='png/01_Circle.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('triCircle') ){
        $("<img class='burstLong' src='png/04_TriCircle.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('triangle') ){
        $("<img class='burstShort' src='png/02_Triangle.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('triTriangle') ){
        $("<img class='burstLong' src='png/05_TriTriangle.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('square') ){
        $("<img class='burstShort' src='png/03_Square.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('triSquare') ){
        $("<img class='burstLong' src='png/06_TriSquare.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('star') ){
        $("<img class='burstShort' src='png/07_Star.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('diamond') ){
        $("<img class='burstShort' src='png/08_Diamond.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('triDiamond') ){
        $("<img class='burstLong' src='png/09_TriDiamond.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('triLine') ){
        $("<img class='burstLong' src='png/10_TriLine.png' alt=''>").appendTo('.center')
      }
      if( $(this).hasClass('squiggleHor') ){
        $("<img class='burstLong' src='png/11_SquigglyH.png' alt=''>").appendTo('.center')
      }
      // if( $(this).hasClass('squiggleVer') ){
      //   $("<img class='burstLong' src='png/12_SquigglyV.png' alt=''>").appendTo('.center')
      // }
      if( $(this).hasClass('squiggleDia') ){
        $("<img class='burstLong' src='png/13_SquiggleD.png' alt=''>").appendTo('.center')
      }
      // if( $(this).hasClass('linesHor') ){
      //   $("<img class='burstLong' src='png/14_LinesHor.png' alt=''>").appendTo('.center')
      // }
      // if( $(this).hasClass('linesVer') ){
      //   $("<img class='burstLong' src='png/15_LinesVer.png' alt=''>").appendTo('.center')
      // }
      //cleanup
      $('.burstShort').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });

      $('.burstLong').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
    })
  }))

    socket.on('doing everything', function(data){
    emojiHistory.push(data); //pushes the incoming client data (the click) into the storage array for later recall
    io.emit('doing everything', data) //send the massSendEmoji message out to all of the connected clients.
  })

})

server.listen(3000, function(){
  console.log("app listening on port 3000!")
})
