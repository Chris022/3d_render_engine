import { Point3D, Point2D, Shape3D, Shape2D, Scene3D, Scene2D, Material, Options } from "./types"
import { draw_scene3D } from "./draw_helpers"

import { get_height, get_width, init_canvas } from "./canvas_helpers";
import { move_shape3D } from "./shape_helpers";
import { OutlineMaterialGlow,OutlineMaterial } from "./material_helpers";

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
if(!canvas) throw new Error("Canvas is null");

let context = canvas.getContext("2d") as CanvasRenderingContext2D;

let fix_size = 400;

let options = Options(fix_size,canvas,context)

function init(){
    init_canvas(options);
    window.onresize = () => { 
        init_canvas(options);
    }
}
let move = 600;


function loop(delta:number){

    //Create a simple shape
    let c_1 = {x:-600,y:-400,z:200-move};
    let c_2 = {x:0,y:-400,z:200-move};
    let c_3 = {x:0,y:-400,z:250-move};
    let c_4 = {x:-600,y:-400,z:250-move};

    let base_square: Shape3D = Shape3D([c_1,c_2,c_3,c_4],OutlineMaterial("#47fffc","black",3));

    let scene1: Scene3D = [base_square];


    for(var z = 0; z < 30;z++){
        for(var x = 0; x < 30; x++){
            scene1.push(move_shape3D(move_shape3D(base_square,{x:x*600-15*600,y:0,z:0}),{x:0,y:0,z:z*50}));
        }
    }

    draw_scene3D(options,scene1)
    
    if(move > 650){
        move = 600;
    }
    move += 100 * delta / 1000
}

window.onload = () => {
    init();
    var lastTs = Date.now();
    let game_loop = () => {
        var delta = Date.now() - lastTs;
        lastTs = Date.now();
        loop(delta);
        window.requestAnimationFrame(game_loop);
    }
    window.requestAnimationFrame(game_loop);
}






