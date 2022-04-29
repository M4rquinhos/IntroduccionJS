const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 500,
    disponible: true
}

const medidas = {
    ancho: "20 pulgadas",
    alto: "20 pulgadas"
}

const nuevoProducto = {...producto, ...medidas};

console.log(nuevoProducto);
console.log(producto);