// objetos
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 500,
    disponible: true
}

// Forma anterior de destructurar objetos
const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


// Nueva forma de destructurar objetos
const {precio, nombreProducto, disponible} = producto;

console.log(precio);
console.log(nombreProducto);
console.log(disponible);