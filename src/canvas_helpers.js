import { Options } from "./types.js";

/**
 * Function that prepares the canvas set in the Options object for drawing a Scene3D
 * @param {Options} options
 * @returns {void}
 */
export let init_canvas = (options) => {
    options.canvas.width = options.canvas.clientWidth;
    options.canvas.height = options.canvas.clientHeight;

    options.context.setTransform(1, 0, 0, 1, 0, 0);
    options.context.translate(options.canvas.width / 2, options.canvas.height / 2);

    options.context.scale(options.canvas.height/options.fix_size,options.canvas.height/options.fix_size)
    
    options.context.scale(1,-1);
}

/**
 * Returns the width of the canvas set in the Options object
 * @param {Options} options 
 * @returns {number}
 */
export let get_width = (options) => {
    return options.canvas.width*options.fix_size/options.canvas.height
}

/**
 * Returns the height of the canvas set in the Options object
 * @param {Options} options 
 * @returns {number}
 */
export let get_height = (options) => {
    return options.fix_size
}