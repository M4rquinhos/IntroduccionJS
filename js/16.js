// declaracion de la funcion
function sumar() {
    console.log(1 + 2);
}

sumar();

// Expresion de la funcion
const sumar2 = function () {
    console.log(3 + 2);
}

sumar2();


// IIFE
(function() {
    console.log('IIFE');
})();