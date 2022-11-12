"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = exports.Scene2D = exports.Shape2D = exports.Point2D = exports.Scene3D = exports.Shape3D = exports.Point3D = void 0;
var Point3D = function (x, y, z) {
    return { x: x, y: y, z: z };
};
exports.Point3D = Point3D;
var Shape3D = function (edges, material) {
    return { edges: edges, material: material };
};
exports.Shape3D = Shape3D;
var Scene3D = function (shapes) {
    return [shapes];
};
exports.Scene3D = Scene3D;
var Point2D = function (x, y) {
    return { x: x, y: y };
};
exports.Point2D = Point2D;
var Shape2D = function (edges, material) {
    return { edges: edges, material: material };
};
exports.Shape2D = Shape2D;
var Scene2D = function (shapes) {
    return [shapes];
};
exports.Scene2D = Scene2D;
var Options = function (fix_size, canvas, context) {
    return { fix_size: fix_size, canvas: canvas, context: context };
};
exports.Options = Options;
