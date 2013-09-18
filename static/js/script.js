var caption = [
  {time: 13, caption: "Hold your breath Make a wish"},
  {time: 15, caption: "Count to three"},
  {time: 17, caption: "Come with me And you'll be"},
  {time: 21, caption: "In a world of pure imagination"},
  {time: 26, caption: "Take a look and you'll see Into your imagination"},
  {time: 38, caption: "We'll begin with a spin"},
  {time: 43, caption: "Travelling in the world of my creation"},
  {time: 47, caption: "What we'll see will defy explanation"},
  {time: 64, caption: "If you want to view paradise"},
  {time: 67, caption: "Simply look around and view it"},
  {time: 71, caption: "Anything you want to, do it"},
  {time: 76, caption: "Wanna change the world?"},
  {time: 80, caption: "There's nothing to it"},
  {time: 101, caption: "There is no life I know"},
  {time: 104, caption: "To compare with pure imagination"},
  {time: 107, caption: "Living there you'll be free"},
  {time: 110, caption: "If you truly wish to be"},
  {time: 155, caption: "If you want to view paradise"},
  {time: 159, caption: "Simply look around and view"},
  {time: 163, caption: "Anything you want to do it"},
  {time: 167, caption: "Wanna change the world"},
  {time: 170, caption: "There's nothing to it"},
  {time: 185, caption: "There is no life I know"},
  {time: 191, caption: "To compare with pure imagination"},
  {time: 197, caption: "Living there you'll be free"},
  {time: 204, caption: "If you truly wish to be"}
]

var captionStatus = 0;

function updateHTML(elmId, value) {
  document.getElementById(elmId).innerHTML = value;
}

function onPlayerError(errorCode) {
  alert("An error occured of type:" + errorCode);
}

function onPlayerStateChange(newState) {
  updateHTML("playerState", newState);
}

function getCaption(time) {
  if(caption[captionStatus].time < time) {
    console.log(caption[captionStatus].caption)
    captionStatus++;
  }
}

function updatePlayerInfo() {
  if(ytplayer && ytplayer.getDuration) {
    updateHTML("videoDuration", ytplayer.getDuration());
    updateHTML("videoCurrentTime", ytplayer.getCurrentTime());
    updateHTML("bytesTotal", ytplayer.getVideoBytesTotal());
    updateHTML("startBytes", ytplayer.getVideoStartBytes());
    updateHTML("bytesLoaded", ytplayer.getVideoBytesLoaded());
  }
  if(ytplayer.getPlayerState() == 1) {
    getCaption(ytplayer.getCurrentTime());
  }
}

function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("ytplayer");
  setInterval(updatePlayerInfo, 250);
  updatePlayerInfo();
  ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
  ytplayer.addEventListener("onError", "onPlayerError");
}