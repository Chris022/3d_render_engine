export type Point3D = {x:number,y:number,z:number}
export let Point3D = (x:number,y:number,z:number):Point3D => {
    return {x:x,y:y,z:z}
}

export type Shape3D = {edges:Point3D[]}
export let Shape3D = (edges:Point3D[]):Shape3D => {
    return {edges:edges}
}

export type Scene3D = Shape3D[]
export let Scene3D = (shapes:Shape3D[]) => {
    return [shapes]
}



export type Point2D = {x:number,y:number}
export let Point2D = (x:number,y:number):Point2D => {
    return {x:x,y:y}
}

export type Shape2D = {edges:(Point2D[])}
export let Shape2D = (edges:Point2D[]):Shape2D => {
    return {edges:edges}
}

export type Scene2D = Shape2D[]
export let Scene2D = (shapes:Shape2D[]) => {
    return [shapes]
}