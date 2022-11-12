"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_height = exports.get_width = exports.init_canvas = void 0;
var init_canvas = function (options) {
    options.canvas.width = options.canvas.clientWidth;
    options.canvas.height = options.canvas.clientHeight;
    options.context.setTransform(1, 0, 0, 1, 0, 0);
    options.context.translate(options.canvas.width / 2, options.canvas.height / 2);
    options.context.scale(options.canvas.height / options.fix_size, options.canvas.height / options.fix_size);
    options.context.scale(1, -1);
};
exports.init_canvas = init_canvas;
var get_width = function (options) {
    return options.canvas.width * options.fix_size / options.canvas.height;
};
exports.get_width = get_width;
var get_height = function (options) {
    return options.fix_size;
};
exports.get_height = get_height;
