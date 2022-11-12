export let init_canvas = (canvas: HTMLCanvasElement,fixed_size: number): CanvasRenderingContext2D => {

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let context =  canvas.getContext("2d") as CanvasRenderingContext2D;

    //context.save();
    context.translate(canvas.width / 2, canvas.height / 2);

    if(canvas.width > canvas.height){
        context.scale(canvas.height/fixed_size,canvas.height/fixed_size)
    }else{
        context.scale(canvas.width/fixed_size,canvas.width/fixed_size)
    }
    
 
    context.scale(1,-1);

    return context;
}

export let on_screen_scale = (canvas: HTMLCanvasElement,context:CanvasRenderingContext2D,fixed_size: number) : void => {
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