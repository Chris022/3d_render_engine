import { Point3D, Point2D, Shape3D, Shape2D, Scene3D, Scene2D } from "./types"
import {fill_shape2D} from "./draw_helpers"
import { convert_Scene3D_to_Scene2D } from "./projection_helpers";
import { init_canvas,on_screen_scale } from "./canvas_helpers";

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
if(!canvas) throw new Error("Canvas is null");

let context = init_canvas(canvas,800);

window.onresize = () => { 
    on_screen_scale(canvas,context,800);
}


//Create a simple shape
let c_1 = {x:-200,y:-600,z:200};
let c_2 = {x:0,y:-600,z:200};
let c_3 = {x:0,y:-600,z:400};
let c_4 = {x:-200,y:-600,z:400};

let base_square: Shape3D = {edges:[c_1,c_2,c_3,c_4]};

let scene1: Scene3D = [base_square];

//Convert into Shape2D
let scene2D = convert_Scene3D_to_Scene2D(scene1,100);

scene2D.forEach(shape2D =>{
    console.log(shape2D)
    fill_shape2D(context,shape2D,"blue","red");
})


