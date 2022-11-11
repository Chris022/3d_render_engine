type Point3D = {x:number,y:number,z:number}
let Point3D = (x:number,y:number,z:number):Point3D => {
    return {x:x,y:y,z:z}
}

type Shape3D = {edges:Point3D[]}
let Shape3D = (edges:Point3D[]):Shape3D => {
    return {edges:edges}
}

type Scene3D = Shape3D[]
let Scene3D = (shapes:Shape3D[]) => {
    return [shapes]
}



type Point2D = {x:number,y:number}
let Point2D = (x:number,y:number):Point2D => {
    return {x:x,y:y}
}

type Shape2D = {edges:(Point2D[])}
let Shape2D = (edges:Point2D[]):Shape2D => {
    return {edges:edges}
}

type Scene2D = Shape2D[]
let Scene2D = (shapes:Shape2D[]) => {
    return [shapes]
}