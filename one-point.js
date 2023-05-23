// @ts-check

//Types

/**
 * An Object that defines basic options for the library
 * @typedef {{fix_size:number,canvas:HTMLCanvasElement,context:CanvasRenderingContext2D}} Options
 */

/**
 * An Object that represents the Material of a element. (Is a function, that accepts a context and does modifications to this context e.g. changes fill color)
 * @typedef {(context: CanvasRenderingContext2D) => CanvasRenderingContext2D} Material
 */

/**
 * An Object representing a point in 3D space
 * @typedef {{x:number,y:number,z:number}} Point3D
 */

/**
 * An Object representing a 3D Shape - consists out of a list of edges and a material
 * @typedef {{edges:Point3D[],material:Material}} Shape3D
 */

/**
 * An Object representing a collection of 3D shapes
 * @typedef {Shape3D[]} Scene3D
 */

/**
 * An Object representing a point on a 2D plane
 * @typedef {{x:number,y:number}} Point2D
 */

/**
 * An Object representing a 2D shape - list of Edges + Material
 * @typedef {{edges:(Point2D[]),material:Material}} Shape2D
 */

/**
 * An Object representing a collection of 2D shapes
 * @typedef {Shape2D[]} Scene2D
 */


//Constructors

/**
 * Constructor for creating a Option object
 * @param {number} fix_size
 * @param {HTMLCanvasElement} canvas
 * @param {CanvasRenderingContext2D} context
 * @returns {Options}
 */
let create_Options = (fix_size,canvas,context) => {
    return {fix_size:fix_size,canvas:canvas,context:context};
};

/**
 * Constructor for creating a Point3D object
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {Point3D}
 */
let create_Point3D = (x,y,z) => {
    return {x:x,y:y,z:z}
};

/**
 * Constructor for creating a Shape3D object
 * @param {Point3D[]} edges
 * @param {Material} material
 * @returns {Shape3D}
 */
let create_Shape3D = (edges,material) => {
    return {edges:edges,material:material}
};

/**
 * Constructor for creating a Scene3D object
 * @param {Shape3D[]} shapes
 * @returns {Scene3D}
 */
let create_Scene3D = (shapes) => {
    return shapes
};

/**
 * Constructor for creating a Point2D object
 * @param {number} x
 * @param {number} y
 * @returns {Point2D}
 */
let create_Point2D = (x,y) => {
    return {x:x,y:y}
};

/**
 * Constructor for creating a Shape2D object
 * @param {Point2D[]} edges
 * @param {Material} material
 * @returns {Shape2D}
 */
let create_Shape2D = (edges,material) => {
    return {edges:edges,material:material}
};

/**
 * Constructor for creating a Scene2D object
 * @param {Shape2D[]} shapes
 * @returns {Scene2D}
 */
let create_Scene2D = (shapes) => {
    return shapes
};

// @ts-check


/**
 * Takes the z position of the projection plane and a 3DPoint and converts it to a 2DPoint on the projection plane
 * @param {Point3D} point 
 * @param {number} projection_distance 
 * @returns {Point2D}
 */
let convert_Point3D_to_Point2D = (point,projection_distance) => {
    let new_y = point.y * projection_distance/point.z;
    let new_x = point.x * projection_distance/point.z;
    return create_Point2D(new_x,new_y);
};

/**
 * Takes a 3DPoint and sets it to the minimum Z value if it is behind the projection plane (= projection distance)
 * @param {Point3D} point 
 * @param {number} projection_distance 
 * @returns {Point3D}
 */
let no_points_behind_projection_plane = (point,projection_distance) => {
    if(point.z < projection_distance){
        return {x:point.x,y:point.y,z:projection_distance}
    }
    return point;
};

/**
 * Accepts a Shap3D and returns the z postion of the edge, with the biggest z value
 * @param {Shape3D} shape 
 * @returns {number}
 */
let get_biggest_z_value_of_shape = (shape) => {
    var biggest_z = 0;
    shape.edges.forEach(edge => {
      if(edge.z > biggest_z) biggest_z = edge.z;
    });
    return biggest_z;
};


/**
 * Compare function for sorting objects by visibility (objects to the front after objects to the back)
 * @param {Shape3D} shape1 
 * @param {Shape3D} shape2 
 * @returns {number}
 */
let compare_shapes_by_z = (shape1,shape2) => {
    if(get_biggest_z_value_of_shape(shape1) < get_biggest_z_value_of_shape(shape2)) return 1;
    if(get_biggest_z_value_of_shape(shape1) > get_biggest_z_value_of_shape(shape2)) return -1;
    return 0;
};

/**
 * Taks a Scene3D and a distance. Returns a Scene2D containing all the 3DShapes rendered on a Plane that is "projection_distance" away from the camara at the world center
 * @param {Scene3D} scene 
 * @param {number} projection_distance 
 * @returns {Scene2D}
 */
let convert_Scene3D_to_Scene2D = (scene,projection_distance) => {
    //Start by ordering the shapes in the scene by their biggest z value (biggest to lowest)
    // --> has to be done so that objects behind of other objects are not visible
    var sorted_scene = [...scene].sort(compare_shapes_by_z);

    var scene_2D = [];
    sorted_scene.forEach(shape=>{
        var shape_2d = create_Shape2D([],shape.material);
        shape.edges.forEach(edge => {
            var normalized_edge = no_points_behind_projection_plane(edge,projection_distance);
            shape_2d.edges.push(
                convert_Point3D_to_Point2D(
                    normalized_edge,
                    projection_distance
                )
            );
        });
        scene_2D.push(shape_2d);
    });
    return scene_2D;
};

// @ts-check

/**
 * Import types
 * @typedef {import("./types").Options} Options
 */

/**
 * Function that prepares the canvas set in the Options object for drawing a Scene3D
 * @param {Options} options
 * @returns {void}
 */
let init_canvas = (options) => {
    options.canvas.width = options.canvas.clientWidth;
    options.canvas.height = options.canvas.clientHeight;

    options.context.setTransform(1, 0, 0, 1, 0, 0);
    options.context.translate(options.canvas.width / 2, options.canvas.height / 2);

    options.context.scale(options.canvas.height/options.fix_size,options.canvas.height/options.fix_size);
    
    options.context.scale(1,-1);
};

/**
 * Returns the width of the canvas set in the Options object
 * @param {Options} options 
 * @returns {number}
 */
let get_width = (options) => {
    return options.canvas.width*options.fix_size/options.canvas.height
};

/**
 * Returns the height of the canvas set in the Options object
 * @param {Options} options 
 * @returns {number}
 */
let get_height = (options) => {
    return options.fix_size
};

// @ts-check


/**
 * Accepts a context and a Shape2D and simply draws this shape onto the context.
 * @param {CanvasRenderingContext2D} context 
 * @param {Shape2D} shape 
 * @returns {CanvasRenderingContext2D}
 */
let fill_shape2D = (context, shape) => {
    context.beginPath();
    shape.edges.forEach((edge,index) => {
        if(index == 0) context.moveTo(edge.x, edge.y);
        else context.lineTo(edge.x,edge.y);
    });
    context.closePath();

    shape.material(context);
    return context;
};

/**
 * Accepts Options and a Scene3D. Draws the scene on the Canvas provided in the Options object
 * @param {Options} options 
 * @param {Scene3D} scene 
 */
let draw_scene3D = (options,scene) => {
    let scene2D = convert_Scene3D_to_Scene2D(scene,100);

    options.context.clearRect(-get_width(options)/2, -get_height(options)/2, get_width(options), get_height(options));
    scene2D.forEach(shape2D =>{
        fill_shape2D(options.context,shape2D);
    });
};

// @ts-check


/**
 * Function that can be used to move a 3D shape by some 3D vector
 * @param {Shape3D} shape 
 * @param {Point3D} move_vec 
 * @returns {Shape3D}
 */
let move_shape3D = (shape,move_vec) => {
  let new_shape = create_Shape3D([],shape.material);

  shape.edges.forEach(edge => {
    new_shape.edges.push({x:edge.x+move_vec.x,y:edge.y+move_vec.y,z:edge.z+move_vec.z});
  });

  return new_shape;
};

// @ts-check

/**
 * Import types
 * @typedef {import("./types").Material} Material
 */

/**
 * A helper function for creating a material that styles the outline of a shape
 * @param {string} edge_color 
 * @param {string} fill_color 
 * @param {number} line_width 
 * @returns {Material}
 */
let OutlineMaterial = (edge_color,fill_color,line_width) => {
    return (context) => {
        context.fillStyle = fill_color;
        context.strokeStyle = edge_color;
        context.lineWidth = line_width;

        context.stroke();
        context.fill();
        return context;
    }
};

/**
 * A helper function for creating a material that styles the outline of a shape and adds a glow to the outline
 * @param {string} edge_color 
 * @param {string} fill_color 
 * @param {number} line_width 
 * @param {number} glow_stength 
 * @returns {Material}
 */
let OutlineMaterialGlow = (edge_color,fill_color,line_width,glow_stength) => {
    return (context) => {
        context.fillStyle = fill_color;
        context.strokeStyle = edge_color;
        context.lineWidth = line_width;
        context.shadowBlur = glow_stength;
        context.shadowColor = edge_color;

        context.fill();
        context.stroke();
        return context;
    }
};

export { OutlineMaterial, OutlineMaterialGlow, create_Options, create_Point2D, create_Point3D, create_Scene2D, create_Scene3D, create_Shape2D, create_Shape3D, draw_scene3D, get_height, get_width, init_canvas, move_shape3D };
