// @ts-check

/**
 * Import types
 * @typedef {import("./types").Shape2D} Shape2D
 * @typedef {import("./types").Scene3D} Scene3D
 * @typedef {import("./types").Options} Options
 */

import { convert_Scene3D_to_Scene2D } from "./projection_helpers.js";
import { get_height, get_width } from "./canvas_helpers.js";

/**
 * Accepts a context and a Shape2D and simply draws this shape onto the context.
 * @param {CanvasRenderingContext2D} context 
 * @param {Shape2D} shape 
 * @returns {CanvasRenderingContext2D}
 */
let fill_shape2D = (context, shape) => {
    context.beginPath();
    shape.edges.forEach((edge,index) => {
        if(index == 0) context.moveTo(edge.x, edge.y);
        else context.lineTo(edge.x,edge.y);
    })
    context.closePath();

    shape.material(context);
    return context;
}

/**
 * Accepts Options and a Scene3D. Draws the scene on the Canvas provided in the Options object
 * @param {Options} options 
 * @param {Scene3D} scene 
 */
export let draw_scene3D = (options,scene) => {
    let scene2D = convert_Scene3D_to_Scene2D(scene,100);

    options.context.clearRect(-get_width(options)/2, -get_height(options)/2, get_width(options), get_height(options));
    scene2D.forEach(shape2D =>{
        fill_shape2D(options.context,shape2D);
    })
}