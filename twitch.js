var users = ["brunofin","roxybear_gaming", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404"];
var urlS = "https://wind-bow.gomix.me/twitch-api/streams/";
var urlC = "https://wind-bow.gomix.me/twitch-api/channels/";
var html = "";




for (let i=0;i<users.length;i++) {

  $.getJSON(`${urlS + users[i]}?callback=?`, function(data) {
    $.getJSON(`${urlC + users[i]}?callback=?`, function(data2) {
        console.log(data2);
            if (data.stream === null) {
              if (data2.error === "Not Found") {
                html += `<div class = "userObject notFound"> <div class = "userName"><h2> ${users[i]} </h2> </div> <h2><i class="fa fa-circle noUser" aria-hidden="true"></i>Account Not Found</h2><img class = "userLogo" src = './twitch.png'></div>`
              }
              else {
                html += `<div class = "userObject offline"> <div class = "userName"><h2> ${users[i]} </h2> </div> <a href = 'http://twitch.tv/${users[i]}' target='_blank'><h2><i class="fa fa-circle noStream" aria-hidden="true"></i> Not currently streaming.</h2></a><img class = userLogo src = './twitch.png'></div>`
              }
            }
            else {
              html += `<div class = "userObject online"> <div class = "userName"><h2> ${users[i]} </h2> </div> <a href = 'http://twitch.tv/${users[i]}' target='_blank'><h2><i class="fa fa-circle yesStream" aria-hidden="true"></i>Streaming ${data.stream.game}</h2></a><img class = "userLogo" src = ${data.stream.channel.logo} alt = "channel logo"></div>`

            }
              $(".accountRow").html(html);

        })
    })
  }


  $("#offlineButton").click(function() {
    $(".offline").show(1000);
    $(".notFound").hide(1000);
    $(".online").hide(1000);
  })

  $("#onlineButton").click(function() {
    $(".online").show(1000);
    $(".notFound").hide(1000);
    $(".offline").hide(1000);
  })

  $("#allButton").click(function() {
    $(".online").show(1000);
    $(".notFound").show(1000);
    $(".offline").show(1000);
  })
