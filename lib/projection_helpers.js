"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert_Scene3D_to_Scene2D = void 0;
var types_1 = require("./types");
//Takes the z position of the Projection Plane and a 3D Point and converts it to a 2DPoint on the Projection Plane
var convert_Point3D_to_Point2D = function (point, projection_distance) {
    var new_y = point.y * projection_distance / point.z;
    var new_x = point.x * projection_distance / point.z;
    return (0, types_1.Point2D)(new_x, new_y);
};
//Takes a 3DPoint and sets it to the minimum Z value if it is behind the Projection Plane (= projection distance)
var no_points_behind_projection_plane = function (point, projection_distance) {
    if (point.z < projection_distance) {
        return { x: point.x, y: point.y, z: projection_distance };
    }
    return point;
};
//
var get_biggest_z_value_of_shape = function (shape) {
    var biggest_z = 0;
    shape.edges.forEach(function (edge) {
        if (edge.z > biggest_z)
            biggest_z = edge.z;
    });
    return biggest_z;
};
//Compare function for sorting objects by visibility (objects to the front after objects to the back)
var compare_shapes_by_z = function (shape1, shape2) {
    if (get_biggest_z_value_of_shape(shape1) < get_biggest_z_value_of_shape(shape2))
        return 1;
    if (get_biggest_z_value_of_shape(shape1) > get_biggest_z_value_of_shape(shape2))
        return -1;
    return 0;
};
var convert_Scene3D_to_Scene2D = function (scene, projection_distance) {
    //Start by ordering the shapes in the scene by their biggest z value (biggest to lowest)
    // --> has to be done so that objects behind of other objects are not visible
    var sorted_scene = __spreadArray([], scene, true).sort(compare_shapes_by_z);
    var scene_2D = [];
    sorted_scene.forEach(function (shape) {
        var shape_2d = (0, types_1.Shape2D)([], shape.material);
        shape.edges.forEach(function (edge) {
            var normalized_edge = no_points_behind_projection_plane(edge, projection_distance);
            shape_2d.edges.push(convert_Point3D_to_Point2D(normalized_edge, projection_distance));
        });
        scene_2D.push(shape_2d);
    });
    return scene_2D;
};
exports.convert_Scene3D_to_Scene2D = convert_Scene3D_to_Scene2D;
