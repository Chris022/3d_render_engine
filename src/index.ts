import { Point3D, Point2D, Shape3D, Shape2D, Scene3D, Scene2D } from "./types"
import {fill_shape2D} from "./draw_helpers"
import { convert_Scene3D_to_Scene2D } from "./projection_helpers";
import { scale_canvas } from "./canvas_helpers";
import { move_shape3D } from "./shape_helpers";

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
if(!canvas) throw new Error("Canvas is null");

let context = canvas.getContext("2d") as CanvasRenderingContext2D;


function init(){
    scale_canvas(canvas,context,800);
    window.onresize = () => { 
        scale_canvas(canvas,context,800);
    }
}
let move = 600;
function loop(){
    //Create a simple shape
    let c_1 = {x:-200,y:-600,z:200-move};
    let c_2 = {x:0,y:-600,z:200-move};
    let c_3 = {x:0,y:-600,z:400-move};
    let c_4 = {x:-200,y:-600,z:400-move};

    let base_square: Shape3D = {edges:[c_1,c_2,c_3,c_4]};

    let scene1: Scene3D = [base_square];

    let range = [0,1,2,3,4,5,6,7,8,9,10]
    range.forEach(element => {
        scene1.push(move_shape3D(base_square,{x:0,y:0,z:element*200}));
        scene1.push(move_shape3D(move_shape3D(base_square,{x:200,y:0,z:0}),{x:0,y:0,z:element*200}));
        scene1.push(move_shape3D(move_shape3D(base_square,{x:-200,y:0,z:0}),{x:0,y:0,z:element*200}));
        scene1.push(move_shape3D(move_shape3D(base_square,{x:400,y:0,z:0}),{x:0,y:0,z:element*200}));
        scene1.push(move_shape3D(move_shape3D(base_square,{x:-400,y:0,z:0}),{x:0,y:0,z:element*200}));
        scene1.push(move_shape3D(move_shape3D(base_square,{x:600,y:0,z:0}),{x:0,y:0,z:element*200}));
      });

    //Convert into Shape2D
    let scene2D = convert_Scene3D_to_Scene2D(scene1,100);

    scene2D.forEach(shape2D =>{
        fill_shape2D(context,shape2D,"blue","red");
    })

    if(move % 800 == 0){
        move = 600;
    }
    move += 10;
}

window.onload = () => {
    init();
    let game_loop = () => {
        loop();
        window.requestAnimationFrame(game_loop);
    }
    window.requestAnimationFrame(game_loop);
}






