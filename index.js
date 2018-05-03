var play = document.getElementById('play');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');
var FastForward = document.getElementById('FastForward');
var random = document.getElementById('randomAudio');
var text = document.getElementById('text');

var songs = ["WARLORD LOVES YOU.mp3", "DJ Warlord - Picasso.mp3","07 7. BIG BRAT.mp3"]
var i = 0;
var audio = new Audio (songs [i]) ;

function skipAudio(){
  if (i === songs.length-1){
    i = 0
    audio.pause();
    audio = new Audio(songs[i]);
    audio.play();
  }else{
    audio.pause();
    i++
    audio = new Audio(songs[i]);
    audio.play(songs[i]);
  }

}

  function playAudio(){
    audio.play(songs[i]);
  }

function pauseAudio(){
  audio.pause();
}

function randomAudio(){
  audio.pause()
  audio.currentTime = 0.0;
  var n = Math.floor(Math.random()*songs.length)
  console.log(n)
  audio = new Audio(songs[n])
  audio.play()
}


function stopAudio(){
  audio.pause();
  audio.currentTime = 0.0;
}
