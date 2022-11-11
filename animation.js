const canvas_width = 800;
const canvas_height = 800;


function setup() {
  createCanvas(canvas_width, canvas_height);
  
}
let move = 600;
function draw() {

  //change coordinate system
  translate(canvas_width/2, canvas_height/2); 
  scale(1, -1);
  clear();
  background("#FFFFFF")

  let c_1 = {x:-200,y:-600,z:200-move};
  let c_2 = {x:0,y:-600,z:200-move};
  let c_3 = {x:0,y:-600,z:400-move};
  let c_4 = {x:-200,y:-600,z:400-move};

  let base_square = {points:[c_1,c_2,c_3,c_4]}

  let range = [0,1,2,3,4,5,6,7,8,9,10,]

  let world = []

  
  range.forEach(element => {
    world.push(move_shape(base_square,{x:0,y:0,z:element*200}));
    world.push(move_shape(move_shape(base_square,{x:200,y:0,z:0}),{x:0,y:0,z:element*200}));
    world.push(move_shape(move_shape(base_square,{x:-200,y:0,z:0}),{x:0,y:0,z:element*200}));
    world.push(move_shape(move_shape(base_square,{x:400,y:0,z:0}),{x:0,y:0,z:element*200}));
    world.push(move_shape(move_shape(base_square,{x:-400,y:0,z:0}),{x:0,y:0,z:element*200}));
    world.push(move_shape(move_shape(base_square,{x:600,y:0,z:0}),{x:0,y:0,z:element*200}));
  });


  draw_3d_world(world)

  if(move % 800 == 0){
    move = 600;
  }
  move += 10;

}

function move_shape(shape,move_vec) {
  let new_shape = {points:[]}

  shape.points.forEach(point => {
    new_shape.points.push({x:point.x+move_vec.x,y:point.y+move_vec.y,z:point.z+move_vec.z})
  })
  return new_shape;
}

function draw_3d_world(world){
  //order all objects in the world by each ones biggest z value -> biggest to smallest
  world.sort((a,b)=>{
    if(find_biggest_z_value(a) < find_biggest_z_value(b)) return 1;
    if(find_biggest_z_value(a) > find_biggest_z_value(b)) return -1;
  })

  world.forEach(shape=>draw_3d_square(shape))
}

function find_biggest_z_value(shape){
  let biggest_z = 0;
  shape.points.forEach(point => {
    if(point.z > biggest_z) biggest_z = point.z
  })
  return biggest_z;
}

function draw_3d_square(square){
  let p_1 = convert_3D_to_2D(no_points_behind_projection_plane_z(square.points[0]));
  let p_2 = convert_3D_to_2D(no_points_behind_projection_plane_z(square.points[1]));
  let p_3 = convert_3D_to_2D(no_points_behind_projection_plane_z(square.points[2]));
  let p_4 = convert_3D_to_2D(no_points_behind_projection_plane_z(square.points[3]));
  
  stroke('#5EDBA5');
  strokeWeight(1);
  quad(p_1.x, p_1.y, p_2.x, p_2.y, p_3.x, p_3.y,p_4.x,p_4.y);
}

function no_points_behind_projection_plane_z(point){
  if(point.z < 100){
    return {x:point.x,y:point.y,z:100}
  }
  return point;
}

function convert_3D_to_2D(point) {
  let projection_plane_pos_z = 100;

  let new_y = point.y * projection_plane_pos_z/point.z;
  let new_x = point.x * projection_plane_pos_z/point.z;
  return {x:new_x,y:new_y}
}