import { Point3D, Point2D, Shape3D, Shape2D, Scene3D, Scene2D } from "./types"

//Takes the z position of the Projection Plane and a 3D Point and converts it to a 2DPoint on the Projection Plane
let convert_Point3D_to_Point2D = (point:Point3D,projection_distance:number): Point2D => {
    let new_y = point.y * projection_distance/point.z;
    let new_x = point.x * projection_distance/point.z;
    return Point2D(new_x,new_y);
}

//Takes a 3DPoint and sets it to the minimum Z value if it is behind the Projection Plane (= projection distance)
let no_points_behind_projection_plane = (point:Point3D,projection_distance:number):Point3D => {
    if(point.z < projection_distance){
        return {x:point.x,y:point.y,z:projection_distance}
    }
    return point;
}

export let convert_Scene3D_to_Scene2D = (scene:Scene3D,projection_distance:number): Scene2D => {
    //Start by ordering the shapes in the scene by their biggest z value (biggest to lowest)
    // --> has to be done so that objects behind of other objects are not visible
    var sorted_scene = [...scene].sort(compare_shapes_by_z);

    var scene_2D: Scene2D = [];
    sorted_scene.forEach(shape=>{
        var shape_2d = Shape2D([]);
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

//
let get_biggest_z_value_of_shape = (shape:Shape3D):number => {
    var biggest_z = 0;
    shape.edges.forEach(edge => {
      if(edge.z > biggest_z) biggest_z = edge.z
    })
    return biggest_z;
}

//Compare function for sorting objects by visibility (objects to the front after objects to the back)
let compare_shapes_by_z = (shape1:Shape3D,shape2:Shape3D) : number => {
    if(get_biggest_z_value_of_shape(shape1) < get_biggest_z_value_of_shape(shape2)) return 1;
    if(get_biggest_z_value_of_shape(shape1) > get_biggest_z_value_of_shape(shape2)) return -1;
    return 0;
}