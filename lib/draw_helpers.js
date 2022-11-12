"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draw_scene3D = void 0;
var projection_helpers_1 = require("./projection_helpers");
var canvas_helpers_1 = require("./canvas_helpers");
var fill_shape2D = function (context, shape) {
    context.beginPath();
    shape.edges.forEach(function (edge, index) {
        if (index == 0)
            context.moveTo(edge.x, edge.y);
        else
            context.lineTo(edge.x, edge.y);
    });
    context.closePath();
    shape.material(context);
    return context;
};
var draw_scene3D = function (options, scene) {
    var scene2D = (0, projection_helpers_1.convert_Scene3D_to_Scene2D)(scene, 100);
    options.context.clearRect(-(0, canvas_helpers_1.get_width)(options) / 2, -(0, canvas_helpers_1.get_height)(options) / 2, (0, canvas_helpers_1.get_width)(options), (0, canvas_helpers_1.get_height)(options));
    scene2D.forEach(function (shape2D) {
        fill_shape2D(options.context, shape2D);
    });
};
exports.draw_scene3D = draw_scene3D;
