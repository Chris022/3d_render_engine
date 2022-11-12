export type Material = (context: CanvasRenderingContext2D) => CanvasRenderingContext2D

export type Point3D = {x:number,y:number,z:number}
export let Point3D = (x:number,y:number,z:number):Point3D => {
    return {x:x,y:y,z:z}
}

export type Shape3D = {edges:Point3D[],material:Material}
export let Shape3D = (edges:Point3D[],material:Material):Shape3D => {
    return {edges:edges,material:material}
}

export type Scene3D = Shape3D[]
export let Scene3D = (shapes:Shape3D[]) => {
    return [shapes]
}



export type Point2D = {x:number,y:number}
export let Point2D = (x:number,y:number):Point2D => {
    return {x:x,y:y}
}

export type Shape2D = {edges:(Point2D[]),material:Material}
export let Shape2D = (edges:Point2D[],material:Material):Shape2D => {
    return {edges:edges,material:material}
}

export type Scene2D = Shape2D[]
export let Scene2D = (shapes:Shape2D[]) => {
    return [shapes]
}

export type Options = {fix_size:number,canvas:HTMLCanvasElement,context:CanvasRenderingContext2D}
export let Options = (fix_size:number,canvas:HTMLCanvasElement,context:CanvasRenderingContext2D) : Options => {
    return {fix_size:fix_size,canvas:canvas,context:context};
}