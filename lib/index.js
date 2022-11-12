"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_types = require("./types");
var draw_helpers_1 = require("./draw_helpers");
var canvas_functions = require("./canvas_helpers");
var shape_functions = require("./shape_helpers");
var materials = require("./material_helpers");
exports.default = __assign(__assign(__assign(__assign(__assign({}, data_types), draw_helpers_1.draw_scene3D), canvas_functions), shape_functions), materials);
