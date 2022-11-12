export let scale_canvas = (canvas: HTMLCanvasElement,context:CanvasRenderingContext2D,fixed_size: number) : void => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(canvas.width / 2, canvas.height / 2);

    if(canvas.width > canvas.height){
        context.scale(canvas.height/fixed_size,canvas.height/fixed_size)
    }else{
        context.scale(canvas.width/fixed_size,canvas.width/fixed_size)
    }
    
    context.scale(1,-1);
}