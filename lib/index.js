"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var draw_helpers_1 = require("./draw_helpers");
var canvas_helpers_1 = require("./canvas_helpers");
var shape_helpers_1 = require("./shape_helpers");
var material_helpers_1 = require("./material_helpers");
var canvas = document.getElementById("canvas");
if (!canvas)
    throw new Error("Canvas is null");
var context = canvas.getContext("2d");
var fix_size = 400;
var options = (0, types_1.Options)(fix_size, canvas, context);
function init() {
    (0, canvas_helpers_1.init_canvas)(options);
    window.onresize = function () {
        (0, canvas_helpers_1.init_canvas)(options);
    };
}
var move = 600;
function loop(delta) {
    //Create a simple shape
    var c_1 = { x: -600, y: -400, z: 200 - move };
    var c_2 = { x: 0, y: -400, z: 200 - move };
    var c_3 = { x: 0, y: -400, z: 250 - move };
    var c_4 = { x: -600, y: -400, z: 250 - move };
    var base_square = (0, types_1.Shape3D)([c_1, c_2, c_3, c_4], (0, material_helpers_1.OutlineMaterial)("#47fffc", "black", 3));
    var scene1 = [base_square];
    for (var z = 0; z < 30; z++) {
        for (var x = 0; x < 30; x++) {
            scene1.push((0, shape_helpers_1.move_shape3D)((0, shape_helpers_1.move_shape3D)(base_square, { x: x * 600 - 15 * 600, y: 0, z: 0 }), { x: 0, y: 0, z: z * 50 }));
        }
    }
    (0, draw_helpers_1.draw_scene3D)(options, scene1);
    if (move > 650) {
        move = 600;
    }
    move += 100 * delta / 1000;
}
window.onload = function () {
    init();
    var lastTs = Date.now();
    var game_loop = function () {
        var delta = Date.now() - lastTs;
        lastTs = Date.now();
        loop(delta);
        window.requestAnimationFrame(game_loop);
    };
    window.requestAnimationFrame(game_loop);
};
