import { Point3D, Shape3D } from "./types";

export let move_shape3D = (shape:Shape3D,move_vec:Point3D) : Shape3D => {
  let new_shape = Shape3D([]);

  shape.edges.forEach(edge => {
    new_shape.edges.push({x:edge.x+move_vec.x,y:edge.y+move_vec.y,z:edge.z+move_vec.z})
  })

  return new_shape;
}