export let scale_canvas = (canvas: HTMLCanvasElement,context:CanvasRenderingContext2D,fixed_size: number) : void => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(canvas.width / 2, canvas.height / 2);

    context.scale(canvas.height/fixed_size,canvas.height/fixed_size)
    
    context.scale(1,-1);
}

export let get_width = (canvas:HTMLCanvasElement,fixed_size: number):number => {
    return canvas.width*fixed_size/canvas.height
}

export let get_height = (canvas:HTMLCanvasElement,fixed_size: number):number => {
    return fixed_size
}