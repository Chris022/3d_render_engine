// @ts-check

/**
 * Import types
 * @typedef {import("./types").Point3D} Point3D
 * @typedef {import("./types").Shape3D} Shape3D
 */

import { create_Shape3D } from "./types.js";

/**
 * Function that can be used to move a 3D shape by some 3D vector
 * @param {Shape3D} shape 
 * @param {Point3D} move_vec 
 * @returns {Shape3D}
 */
export let move_shape3D = (shape,move_vec) => {
  let new_shape = create_Shape3D([],shape.material);

  shape.edges.forEach(edge => {
    new_shape.edges.push({x:edge.x+move_vec.x,y:edge.y+move_vec.y,z:edge.z+move_vec.z})
  })

  return new_shape;
}