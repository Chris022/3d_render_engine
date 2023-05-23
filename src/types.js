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
export let create_Options = (fix_size,canvas,context) => {
    return {fix_size:fix_size,canvas:canvas,context:context};
}

/**
 * Constructor for creating a Point3D object
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {Point3D}
 */
export let create_Point3D = (x,y,z) => {
    return {x:x,y:y,z:z}
}

/**
 * Constructor for creating a Shape3D object
 * @param {Point3D[]} edges
 * @param {Material} material
 * @returns {Shape3D}
 */
export let create_Shape3D = (edges,material) => {
    return {edges:edges,material:material}
}

/**
 * Constructor for creating a Scene3D object
 * @param {Shape3D[]} shapes
 * @returns {Scene3D}
 */
export let create_Scene3D = (shapes) => {
    return shapes
}

/**
 * Constructor for creating a Point2D object
 * @param {number} x
 * @param {number} y
 * @returns {Point2D}
 */
export let create_Point2D = (x,y) => {
    return {x:x,y:y}
}

/**
 * Constructor for creating a Shape2D object
 * @param {Point2D[]} edges
 * @param {Material} material
 * @returns {Shape2D}
 */
export let create_Shape2D = (edges,material) => {
    return {edges:edges,material:material}
}

/**
 * Constructor for creating a Scene2D object
 * @param {Shape2D[]} shapes
 * @returns {Scene2D}
 */
export let create_Scene2D = (shapes) => {
    return shapes
}