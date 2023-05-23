// @ts-check

import { Point3D, Shape3D } from "./types.js";

/**
 * Function that can be used to move a 3D shape by some 3D vector
 * @param {Shape3D} shape 
 * @param {Point3D} move_vec 
 * @returns {Shape3D}
 */
export let move_shape3D = (shape,move_vec) => {
  let new_shape = Shape3D([],shape.material);

  shape.edges.forEach(edge => {
    new_shape.edges.push({x:edge.x+move_vec.x,y:edge.y+move_vec.y,z:edge.z+move_vec.z})
  })

  return new_shape;
}