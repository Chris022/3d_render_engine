"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutlineMaterialGlow = exports.OutlineMaterial = void 0;
var OutlineMaterial = function (edge_color, fill_color, line_width) {
    return function (context) {
        context.fillStyle = fill_color;
        context.strokeStyle = edge_color;
        context.lineWidth = line_width;
        context.stroke();
        context.fill();
        return context;
    };
};
exports.OutlineMaterial = OutlineMaterial;
var OutlineMaterialGlow = function (edge_color, fill_color, line_width, glow_stength) {
    return function (context) {
        context.fillStyle = fill_color;
        context.strokeStyle = edge_color;
        context.lineWidth = line_width;
        context.shadowBlur = glow_stength;
        context.shadowColor = edge_color;
        context.fill();
        context.stroke();
        return context;
    };
};
exports.OutlineMaterialGlow = OutlineMaterialGlow;
