'use strict';

/**
 * Paquete npm de Shape
 * 
 * https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-alejandro-raul-35l2-p5
 * 
 * Autores: Alejandro Díaz Cueca y Raúl Martín Morales
 * 
 * Team: alejandro-raul-35l2
 * 
 * Aquí creamos la clase padre Shape de la que heredarán las demás clases.
 * 
 * @param {hash} options
 * @param {string} shape
 */

class Shape {

    /**
    * @construct Shape
    * @param{hash} options Ancho y Alto
    * @param{string} shape Shape
    */
    
    constructor(options, shape){
        Object.assign(this, options);
        this.shape =  shape || this.constructor.name;
    }
    
    /**
    * @function getArea
    * @return {value} retorna el valor del area de cualquier forma geométrica a la que apunte el objeto
    */
    
    getArea() {
        try {
            let shape = this;
            if (this.constructor.name === 'Shape') 
                shape = new Shape.Shapes[this.shape](this);
            return shape.area();
        }
        catch(e) {
            console.error(`Can't compute area of '${this.shape}' shape.`);
            return null;
        }
    }

}
Shape.Shapes = Shape.Shapes || {};
module.exports = Shape;