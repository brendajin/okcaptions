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

var caption = {
  "13": "Hold your breath Make a wish",
  "15": "Count to three",
  "17":"Come with me And you'll be",
  "21": "In a world of pure imagination",
  "26":"Take a look and you'll see Into your imagination",
  "38":"We'll begin with a spin",
  "43":"Travelling in the world of my creation",
  "47":"What we'll see will defy explanation",
  "64":"If you want to view paradise",
  "67":"Simply look around and view it",
  "71":"Anything you want to, do it",
  "76":"Wanna change the world?",
  "80":"There's nothing to it",
  "101":"There is no life i know",
  "104":"To compare with pure imagination",
  "107":"Living there you'll be free",
  "110":"If you truly wish to be",
  "155":"If you want to view paradise",
  "159":"Simply look around and view",
  "163":"Anything you want to do it",
  "167":"Wanna change the world",
  "170":"There's nothing to it",
  "185":"There is no life i know",
  "191":"To compare with pure imagination",
  "197":"Living there you'll be free",
  "204":"If you truly wish to be"
  }