const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


const carritoCompras = [
    { nombre: 'Camisa', precio: 50 },
    { nombre: 'Pantalon', precio: 100 },
    { nombre: 'Calcetines',precio: 10 },
    { nombre: 'Zapatos', precio: 150 },
    { nombre: 'Gorra', precio: 20 },
    { nombre: 'Bolso', precio: 80 },
    { nombre: 'Cinturon', precio: 30 },
    { nombre: 'Guantes', precio: 40 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Tablet', precio: 700 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 200 },
    { nombre: 'Mouse', precio:  50},
    { nombre: 'Cargador', precio: 100 },
    { nombre: 'Bateria', precio:  200},
    { nombre: 'Cable', precio: 20 }
];


// foreach
meses.forEach(function(mes){
    if(mes === "Marzo"){
        console.log("El mes de Marzo si existe");
    }
});

// Inlcudes
let resultado = meses.includes('Marzo');


// Some ideal para arreglo de objetos 
resultado = carritoCompras.some(function(producto){
    return producto.nombre === "Celular";
});


// Reduce suma todos los precios de los productos del carrito de compras 
resultado = carritoCompras.reduce(function(total, producto){
    return total + producto.precio
}, 0);


// Filter filtra los productos que cumplan con la condicion
resultado = carritoCompras.filter(function(producto){
    return producto.precio > 50
});

resultado = carritoCompras.filter(function(producto){
    return producto.nombre.startsWith('C')
});

console.log(resultado);