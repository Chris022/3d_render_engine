export declare type Material = (context: CanvasRenderingContext2D) => CanvasRenderingContext2D;
export declare type Point3D = {
    x: number;
    y: number;
    z: number;
};
export declare let Point3D: (x: number, y: number, z: number) => Point3D;
export declare type Shape3D = {
    edges: Point3D[];
    material: Material;
};
export declare let Shape3D: (edges: Point3D[], material: Material) => Shape3D;
export declare type Scene3D = Shape3D[];
export declare let Scene3D: (shapes: Shape3D[]) => Shape3D[][];
export declare type Point2D = {
    x: number;
    y: number;
};
export declare let Point2D: (x: number, y: number) => Point2D;
export declare type Shape2D = {
    edges: (Point2D[]);
    material: Material;
};
export declare let Shape2D: (edges: Point2D[], material: Material) => Shape2D;
export declare type Scene2D = Shape2D[];
export declare let Scene2D: (shapes: Shape2D[]) => Shape2D[][];
export declare type Options = {
    fix_size: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
};
export declare let Options: (fix_size: number, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => Options;
