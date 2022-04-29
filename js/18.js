// function sumar(a, b) { //parametros
//     return a + b;
// }

// const suma = sumar(2, 5); //argumentos
// console.log(suma);

// const sumar2 = function (n1, n2) {
//     console.log(n1 + n2);
// }

// sumar2(34, 56);


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(600);
total = agregarCarrito(600);

console.log(total);
const totalImpueto = calcularImpuesto(total);
console.log(totalImpueto);