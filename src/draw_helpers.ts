import { Shape2D } from "./types";


export let fill_shape2D = (context:CanvasRenderingContext2D, shape:Shape2D) : CanvasRenderingContext2D => {
    
    context.beginPath();
    shape.edges.forEach((edge,index) => {
        if(index == 0) context.moveTo(edge.x, edge.y);
        else context.lineTo(edge.x,edge.y);
    })
    context.closePath();

    shape.material(context);
    return context;
}
