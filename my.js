var text = "u r invited";

for(var i in text) {
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") );
  } else {
    $(".wavetext").append( $("<span>").text(text[i]) );
  }
}

$("#envelope-wrapper").click(function() {
  if ($("#sup").css("display", "none")) {
    $("#envelope-wrapper").css("display", "none")
    $("#sup").fadeIn("6000")
  }
})

$("#fire").click(function() {
  if ($("#housewarming").css("display", "none")) {
    $("#sup").css("display", "none")
    $("#housewarming").fadeIn("6000")
  }
})

// function setup () {
//   createCanvas(600, 600);
// }
//
// function draw () {
//   colorMode(RGB, 255, 255, 255, 1);
//   background(255);
//
//   textSize(32);
//   noFill();
//   stroke(255, 0, 10, 0.3);
//   text('; )', 10, 30);
//
//   noFill();
//   strokeWeight(4);
//   stroke(255, 0, 10, 0.3);
//   ellipse(240, 240, 50, 50);
//   ellipse(250, 250, 40, 40);
//   ellipse(420, 50, 30, 30);
//   ellipse(160, 333, 20, 20);
//   ellipse(520, 128, 35, 35);
//   ellipse(110, 505, 40, 40);
//   ellipse(20, 432, 40, 40);
//
// }

var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//
// }
//
// function draw() {
//
// 	//distance from center of the screen
// 	var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);
//
//   textSize(32);
//   noFill();
//   stroke(255, 0, 10, 0.3);
//   text('; )', d, d);
//
//   	//bouncing horizontally
//  	 x = x + xspeed;
//
//   	 if (x > windowWidth || x < 0)  {
//      	xspeed = -xspeed;
//   	}
//
//   	//bouncing veritcally
//   	y = y + yspeed;
//
//   	if (y > windowHeight || y < 0) {
// 	 	  yspeed = -yspeed;
//   	}
//
// }
