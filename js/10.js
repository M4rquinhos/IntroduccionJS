// Objetos

// const nombreProducto = 'Monitor 20 pulgadas';
// const precio = 500;
// const disponible = true;

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 500,
    disponible: true
}


console.log(producto.nombreProducto = "Monitor 20 pulgadas HD"); // Cambia el valor del objeto

console.log(producto['disponible'] = false); // Cambia el valor del objeto y otra forma de acceder a los elementos del objeto

producto.imagen = "imagen.jpg"; // Agrega un elemento o propiedades al objeto

delete producto.imagen; // Elimina un elemento o propiedades del objeto 

console.log(producto);