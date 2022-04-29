// forEach y Map

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

// forEach  para iterar y mostrar en consola o en HTML
carritoCompras.forEach((producto) => console.log(producto.nombre));


//  Map para crear un nuevo arreglo (como filtrar nombre o precios, etc.)
const arreglo2 = carritoCompras.map((producto) => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);



