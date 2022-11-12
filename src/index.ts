import * as data_types from "./types"
import { draw_scene3D } from "./draw_helpers"

import * as canvas_functions from "./canvas_helpers";
import * as shape_functions from "./shape_helpers";
import * as materials from "./material_helpers";

export default {
    ...data_types,
    ...draw_scene3D,
    ...canvas_functions,
    ...shape_functions,
    ...materials
};
