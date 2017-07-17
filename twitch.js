var users = ["brunofin","roxybear_gaming", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlS = "https://wind-bow.gomix.me/twitch-api/streams/";
var urlC = "https://wind-bow.gomix.me/twitch-api/channels/";
var html = "";




for (let i=0;i<users.length;i++) {

  $.getJSON(`${urlS + users[i]}?callback=?`, function(data) {
            //html += `<div class = "userObject"> <div class = "userName"><h2> ${users[i]} </h2> </div>`;

            if (data.stream === null) {
              html += `<div class = "userObject offline"> <div class = "userName"><h2> ${users[i]} </h2> </div><a href = 'http://twitch.tv/${users[i]}' target='_blank'><h4><i class="fa fa-circle noStream" aria-hidden="true"></i> Not currently streaming.</h4></a><img class = userLogo src = './twitch.png'></div>`
            }
            else {
              html += `<div class = "userObject online"> <div class = "userName"><h2> ${users[i]} </h2> </div><a href = 'http://twitch.tv/${users[i]}' target='_blank'><h4><i class="fa fa-circle yesStream" aria-hidden="true"></i>Streaming ${data.stream.game}</h4></a><img class = "userLogo" src = ${data.stream.channel.logo} alt = "channel logo"></div>`

            }
              $(".accountRow").html(html);


    })
  }


  $("#offlineButton").click(function() {
    $(".offline").show(1000);
    $(".online").hide(1000);
  })

  $("#onlineButton").click(function() {
    $(".online").show(1000);
    $(".offline").hide(1000);
  })

  $("#allButton").click(function() {
    $(".online").show(1000);
    $(".offline").show(1000);
  })
