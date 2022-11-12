import { Material } from "./types";

export let OutlineMaterial = (edge_color:string,fill_color:string,line_width:number) : Material => {
    return (context:CanvasRenderingContext2D) : CanvasRenderingContext2D => {
        context.fillStyle = fill_color;
        context.strokeStyle = edge_color;
        context.lineWidth = line_width;

        context.stroke();
        context.fill();
        return context;
    }
}

export let OutlineMaterialGlow = (edge_color:string,fill_color:string,line_width:number,glow_stength:number) : Material => {
    return (context:CanvasRenderingContext2D) : CanvasRenderingContext2D => {
        context.fillStyle = fill_color;
        context.strokeStyle = edge_color;
        context.lineWidth = line_width;
        context.shadowBlur = glow_stength;
        context.shadowColor = edge_color;

        context.fill();
        context.stroke();
        return context;
    }
}