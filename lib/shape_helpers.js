"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.move_shape3D = void 0;
var types_1 = require("./types");
var move_shape3D = function (shape, move_vec) {
    var new_shape = (0, types_1.Shape3D)([], shape.material);
    shape.edges.forEach(function (edge) {
        new_shape.edges.push({ x: edge.x + move_vec.x, y: edge.y + move_vec.y, z: edge.z + move_vec.z });
    });
    return new_shape;
};
exports.move_shape3D = move_shape3D;
