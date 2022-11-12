import { Shape2D } from "./types";


export let fill_shape2D = (context:CanvasRenderingContext2D, shape:Shape2D,fill_color:string,stroke_color:string) : CanvasRenderingContext2D => {
    context.fillStyle = fill_color;
    context.strokeStyle = stroke_color;
    context.lineWidth = 3;

    context.beginPath();
    shape.edges.forEach((edge,index) => {
        if(index == 0) context.moveTo(edge.x, edge.y);
        else context.lineTo(edge.x,edge.y);
    })
    context.closePath();

    context.fill();
    context.stroke();
    return context;
}
