const canvas_width = 400;
const canvas_height = 400;


function setup() {
  createCanvas(canvas_width, canvas_height);
}

function draw() {
  draw_triangle();
}

function draw_triangle(p1,p2,p3){
  
  
  //DO Magic, to convert 3D coordinates into 2D
  let focal_point_2D = [canvas_width/2,20];
  

  //Start by darawing a simple 3D Grid 
  //  -> its best to let (0,0,0) be the lower center of the canvas

  let origin_point_2D = [canvas_width/2,canvas_height];
  
  
  //
  
  stroke('#5EDBA5');
  strokeWeight(3);
  triangle(38, 31, 86, 20, 69, 63);
}