function updateHTML(elmId, value) {
  document.getElementById(elmId).innerHTML = value;
}

function onPlayerError(errorCode) {
  alert("An error occured of type:" + errorCode);
}

function onPlayerStateChange(newState) {
  updateHTML("playerState", newState);
}

function updatePlayerInfo() {
  if(ytplayer && ytplayer.getDuration) {
    updateHTML("videoDuration", ytplayer.getDuration());
    updateHTML("videoCurrentTime", ytplayer.getCurrentTime());
    updateHTML("bytesTotal", ytplayer.getVideoBytesTotal());
    updateHTML("startBytes", ytplayer.getVideoStartBytes());
    updateHTML("bytesLoaded", ytplayer.getVideoBytesLoaded());
  }
}

function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("ytplayer");
  setInterval(updatePlayerInfo, 250);
  updatePlayerInfo();
  ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
  ytplayer.addEventListener("onError", "onPlayerError");
}