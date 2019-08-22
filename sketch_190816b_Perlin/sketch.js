//var xoff1 = 0;
// var xoff2 = 10000;

var inc = 0.01;
//var start = 0;

function setup() {
  createCanvas(400,400,WEBGL);
}

function draw() {
  var zoff = 0;

  var yoff = 0;
    loadPixels();
    for (var y = 0; y < height; y++){
  var xoff = 0;
    for (var x = 0; x < width; x++){

    var index = (x + y * width) * 4;
    var r = noise(xoff, yoff, zoff) * 255;
    pixels [index+0]= 255;
    pixels [index+1]= r;
    pixels [index+2]= r;
    pixels [index+3]= 255;

    xoff += 0.01;
      }

    yoff += inc;

    zoff += inc;
  }


  updatePixels();
  noLoop();
} //end of draw

//endShape();




//
// stroke (255);
//
// var n = map(noise(xoff, yoff),0,1,50,height);
// var s = map(sin(xoff),0,1,-50,50);
// var y = n + s
//
// // var y = noise(xoff)*100 +height/2 + sin(xoff) * height/2;
// vertex (x,y);
//
// xoff += inc
//
// //inc += 0.02;
// } //end og for loop
//
// yoff += 0.02;
// vertex(width,height);
// start += inc

  //var x = random (width);
  // var x = map(noise(xoff1),0,1,0,width);
  // var y = map(noise(xoff2),0,1,0,height);
  //
  // xoff1 += 0.02;
  // xoff2 += 0.02;
  //
  // fill (200,80,180);
  // ellipse (x,y,50,50);


/* RESOURCES


*/
