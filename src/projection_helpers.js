// @ts-check


import { Point3D, Point2D, Shape3D, Shape2D, Scene3D, Scene2D } from "./types.js"

/**
 * Takes the z position of the projection plane and a 3DPoint and converts it to a 2DPoint on the projection plane
 * @param {Point3D} point 
 * @param {number} projection_distance 
 * @returns {Point2D}
 */
let convert_Point3D_to_Point2D = (point,projection_distance) => {
    let new_y = point.y * projection_distance/point.z;
    let new_x = point.x * projection_distance/point.z;
    return Point2D(new_x,new_y);
}

/**
 * Takes a 3DPoint and sets it to the minimum Z value if it is behind the projection plane (= projection distance)
 * @param {Point3D} point 
 * @param {number} projection_distance 
 * @returns {Point3D}
 */
let no_points_behind_projection_plane = (point,projection_distance) => {
    if(point.z < projection_distance){
        return {x:point.x,y:point.y,z:projection_distance}
    }
    return point;
}

/**
 * Accepts a Shap3D and returns the z postion of the edge, with the biggest z value
 * @param {Shape3D} shape 
 * @returns {number}
 */
let get_biggest_z_value_of_shape = (shape) => {
    var biggest_z = 0;
    shape.edges.forEach(edge => {
      if(edge.z > biggest_z) biggest_z = edge.z
    })
    return biggest_z;
}


/**
 * Compare function for sorting objects by visibility (objects to the front after objects to the back)
 * @param {Shape3D} shape1 
 * @param {Shape3D} shape2 
 * @returns {number}
 */
let compare_shapes_by_z = (shape1,shape2) => {
    if(get_biggest_z_value_of_shape(shape1) < get_biggest_z_value_of_shape(shape2)) return 1;
    if(get_biggest_z_value_of_shape(shape1) > get_biggest_z_value_of_shape(shape2)) return -1;
    return 0;
}

/**
 * Taks a Scene3D and a distance. Returns a Scene2D containing all the 3DShapes rendered on a Plane that is "projection_distance" away from the camara at the world center
 * @param {Scene3D} scene 
 * @param {number} projection_distance 
 * @returns {Scene2D}
 */
export let convert_Scene3D_to_Scene2D = (scene,projection_distance) => {
    //Start by ordering the shapes in the scene by their biggest z value (biggest to lowest)
    // --> has to be done so that objects behind of other objects are not visible
    var sorted_scene = [...scene].sort(compare_shapes_by_z);

    var scene_2D = [];
    sorted_scene.forEach(shape=>{
        var shape_2d = Shape2D([],shape.material);
        shape.edges.forEach(edge => {
            var normalized_edge = no_points_behind_projection_plane(edge,projection_distance)
            shape_2d.edges.push(
                convert_Point3D_to_Point2D(
                    normalized_edge,
                    projection_distance
                )
            )
        })
        scene_2D.push(shape_2d)
    })
    return scene_2D;
}