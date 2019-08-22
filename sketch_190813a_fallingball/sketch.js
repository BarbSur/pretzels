let yPos = 0;
let xPos = 20;

function setup() {
  // put setup code here
  createCanvas (400,600);

}

function draw() {
  // put drawing code here
  background('#060573');

//for (let i = 0; i < random (5); i++){
//   ellipse.push (new ellipse ());
// }

  yPos = yPos + 2;
  if (yPos > height){
    yPos = 0;

  xPos = random (width);

}
 //snowflake class
//function snowflake (){
//   this.posX = 10;
//   this.posY = 10;
//   this.size = (2,5);



//function display(){
  ellipse(xPos, yPos, 50, 50);
  //fill (255);
//}
}
