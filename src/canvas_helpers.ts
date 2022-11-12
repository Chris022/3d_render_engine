import { Options } from "./types";

export let init_canvas = (options:Options) : void => {
    options.canvas.width = options.canvas.clientWidth;
    options.canvas.height = options.canvas.clientHeight;

    options.context.setTransform(1, 0, 0, 1, 0, 0);
    options.context.translate(options.canvas.width / 2, options.canvas.height / 2);

    options.context.scale(options.canvas.height/options.fix_size,options.canvas.height/options.fix_size)
    
    options.context.scale(1,-1);
}

export let get_width = (options:Options):number => {
    return options.canvas.width*options.fix_size/options.canvas.height
}

export let get_height = (options:Options):number => {
    return options.fix_size
}