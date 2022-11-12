import * as data_types from "./types";
declare const _default: {
    OutlineMaterial: (edge_color: string, fill_color: string, line_width: number) => data_types.Material;
    OutlineMaterialGlow: (edge_color: string, fill_color: string, line_width: number, glow_stength: number) => data_types.Material;
    move_shape3D: (shape: data_types.Shape3D, move_vec: data_types.Point3D) => data_types.Shape3D;
    init_canvas: (options: data_types.Options) => void;
    get_width: (options: data_types.Options) => number;
    get_height: (options: data_types.Options) => number;
    Point3D: (x: number, y: number, z: number) => data_types.Point3D;
    Shape3D: (edges: data_types.Point3D[], material: data_types.Material) => data_types.Shape3D;
    Scene3D: (shapes: data_types.Shape3D[]) => data_types.Shape3D[][];
    Point2D: (x: number, y: number) => data_types.Point2D;
    Shape2D: (edges: data_types.Point2D[], material: data_types.Material) => data_types.Shape2D;
    Scene2D: (shapes: data_types.Shape2D[]) => data_types.Shape2D[][];
    Options: (fix_size: number, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => data_types.Options;
};
export default _default;
