import data from "./twitchStaticData"

$(document).ready(function() {

  var url = "https://api.twitch.tv/kraken/streams/freecodecamp";
  $.getJSON(url, (data1) => {
    if(data1.stream === null) {
      $("#fccStatus").html("Free Code Camp is Offline.")
    }
    else {
      $("#fccStatus").html("Free Code Camp is online!")
    }
  })
})
