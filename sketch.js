function setup () {
  createCanvas(900, 900);
  img1 = loadImage("./img/shapes-large.png");
  img2 = loadImage("./img/shapes-small.png");
  img3 = loadImage("./img/shapes-med.png");
}

const imageOneCoords = [
  [10, 10],
  [500, 40],
  [700, 9],
  [900, 200],
  [800, 100],
  [40, 200],
  [60, 220],
  [600, 600],
  [700, 700],
  [510, 510]
];

const imageTwoCoords = [
  [105, 105],
  [340, 300],
  [7, 800],
  [720, 140],
  [200, 200],
  [330, 120],
  [340, 560],
  [400, 460],
  [500, 650],
  [600, 720],
  [310, 610]
];

const imageThreeCoords = [
  [55, 120],
  [40, 800],
  [230, 870],
  [672, 230],
  [201, 430],
  [781, 402],
  [890, 250],
  [634, 291],
  [100, 370],
  [600, 460],
  [220, 690],
  [800, 20],
  [410, 690]
];

function draw () {

  translate(mouseX, mouseY);

// then rotate the grid around the pivot point by a
// number of degrees equal to the frame count of the sketch
  rotate(radians(frameCount));

  imageOneCoords.forEach((x) => {
    image(img1, imageOneCoords[x][0], imageOneCoords[x][1], img1.height/10, img1.width/10);
  }, console.log("Done");)

  for(i = 0; i < imageOneCoords.length; i++) {
    image(img1, imageOneCoords[i][0], imageOneCoords[i][1], img1.height/10, img1.width/10);
  }

  for(j = 0; j < imageTwoCoords.length; j++) {
    image(img2, imageTwoCoords[j][0], imageTwoCoords[j][1], img2.height/10, img2.width/10);
  }

  for(k = 0; k < imageThreeCoords.length; k++) {
    image(img3, imageThreeCoords[k][0], imageThreeCoords[k][1], img3.height/10, img3.width/10);
  }
}
