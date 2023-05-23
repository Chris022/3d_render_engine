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
export let OutlineMaterial = (edge_color,fill_color,line_width) => {
    return (context) => {
        context.fillStyle = fill_color;
        context.strokeStyle = edge_color;
        context.lineWidth = line_width;

        context.stroke();
        context.fill();
        return context;
    }
}

/**
 * A helper function for creating a material that styles the outline of a shape and adds a glow to the outline
 * @param {string} edge_color 
 * @param {string} fill_color 
 * @param {number} line_width 
 * @param {number} glow_stength 
 * @returns {Material}
 */
export let OutlineMaterialGlow = (edge_color,fill_color,line_width,glow_stength) => {
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
}