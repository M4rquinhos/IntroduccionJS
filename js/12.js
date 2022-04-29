// "use strict"; // modo estricto


const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 500,
    disponible: true
}

Object.freeze(producto); //freeze para que no se pueda modificar el objeto ni agregar nuevos atributos
                        //Object.seal para que no se pueda agregar nuevos atributos, pero si se puede modificar

producto.imagen = "imagen.jpg";

delete producto.disponible;

console.log(producto);

