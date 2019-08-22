color [] fl = {#8D6B94, #B185A7, #C3A29E, #E8DBC5};
int sz = 50;


void setup (){
  size (500,500);
  rectMode (CENTER);
}

void draw (){
 background (255);
 
 for (int x = sz; x <= 480; x += sz){
   for (int y = sz; y <= 480; y += sz){
     // random number for color?
     // our array is always from 0 to 4
    int r = int (random (4) );
    fill (fl [r]);

//if statement that will test random variable
    int s = int ( random (4)); 
    if (s == 0){
      shp1(x,y);
      // = we store a variable
      // == we compare sth, we're checking if sth is equal to 0
    } else if (s == 1){
    shp2 (x,y);
   } else if (s == 2) {
     shp3 (x,y);
   } else {
     shp4 (x,y);
   
    } 
   }
 }
 noLoop ();
}//end of draw

void shp1 (int _x, int _y){
  ellipse (_x,_y,sz,sz); 
}

void shp2 (int _x, int _y){
  rect (_x, _y, sz, sz);
}

void shp3 (int _x, int _y){
  pushMatrix ();
  translate (_x, _y);
  // when I want to start from the middle sz/2
    triangle (0,-sz/2, sz/2,sz/2, -sz/2,sz/2);
  popMatrix ();
}

void shp4 (int _x, int _y){
  line (_x, _y, 10, 10);

//void shp4 (int _x, int _y){
//  pushMatrix ();
//  translate (_x, _y);
//  ellipseMode (arc);
//    arc (sz, sz, sz/2, sz/2, PI+QUARTER_PI, PIE );
//  popMatrix ();
  
//void shp4 (int _x, _y);
  
  
}
