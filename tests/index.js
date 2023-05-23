// @ts-check

import { init_canvas, draw_scene3D, OutlineMaterial, move_shape3D, Options, Shape3D } from "../src/index.js";



let canvas = /** @type {HTMLCanvasElement|null} */  (document.getElementById("canvas"));

if (!canvas) throw new Error("Div with id canvas not found");


let context = /** @type {CanvasRenderingContext2D} */ (canvas.getContext("2d"));

let fix_size = 400;

let options = Options(fix_size, canvas, context);

function init() {
    init_canvas(options);
    window.onresize = () => {
        init_canvas(options);
    }
}
let move = 600;


/**
 * Function that regularly updates the screen - used for animations
 * @param {number} delta 
 */
function loop(delta) {

    //Create a simple shape
    let c_1 = { x: -600, y: -400, z: 200 - move };
    let c_2 = { x: 0, y: -400, z: 200 - move };
    let c_3 = { x: 0, y: -400, z: 250 - move };
    let c_4 = { x: -600, y: -400, z: 250 - move };

    let base_square = Shape3D([c_1, c_2, c_3, c_4], OutlineMaterial("#47fffc", "black", 3));

    let scene1 = [base_square];


    for (var z = 0; z < 30; z++) {
        for (var x = 0; x < 30; x++) {
            scene1.push(move_shape3D(move_shape3D(base_square, { x: x * 600 - 15 * 600, y: 0, z: 0 }), { x: 0, y: 0, z: z * 50 }));
        }
    }

    draw_scene3D(options, scene1)

    if (move > 650) {
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