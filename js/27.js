// POO

// Object literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}


// Object constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

Producto.prototype.formatearProdcuto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('tablet', 200, false);
const producto3 = new Producto('laptop', 200, true);
const cliente = new Cliente('Juan', 'Perez');


console.log(cliente.formatearCliente());
console.log(producto2);
console.log(producto2.formatearProdcuto());
console.log(producto3.formatearProdcuto());




// crear funciones que solo se utilizan en un objeto especifico 
