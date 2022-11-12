import { Shape2D, Scene3D, Options } from "./types";
import { convert_Scene3D_to_Scene2D } from "./projection_helpers";
import { get_height, get_width } from "./canvas_helpers";

let fill_shape2D = (context:CanvasRenderingContext2D, shape:Shape2D) : CanvasRenderingContext2D => {
    context.beginPath();
    shape.edges.forEach((edge,index) => {
        if(index == 0) context.moveTo(edge.x, edge.y);
        else context.lineTo(edge.x,edge.y);
    })
    context.closePath();

    shape.material(context);
    return context;
}

export let draw_scene3D = (options:Options,scene:Scene3D) => {
    let scene2D = convert_Scene3D_to_Scene2D(scene,100);

    options.context.clearRect(-get_width(options)/2, -get_height(options)/2, get_width(options), get_height(options));
    scene2D.forEach(shape2D =>{
        fill_shape2D(options.context,shape2D);
    })
}