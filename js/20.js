// Arrow functionss
const sumar2 = (n1, n2) => n1 + n2 ;

console.log(sumar2(2, 4));


const aprendiendo = tec => console.log(`Aprendiendo ${tec} con funciones flecha`);

aprendiendo('JavaScript');


const metodoPago = 'bitcoin';

switch (metodoPago) {
    case 'efectivo':
        console.log("El pago se hará en efectivo");
        break;
    case 'tarjeta':
        console.log("El pago se hará con tarjeta");
        break;
    case 'cheque':
        console.log("El pago se hará con cheque");
        break;

    default:
        console.log('el metodo de pago no es valido');
        break;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numeros.forEach( (numero) => console.log(numero));


// for
// for (let i = 1; i <=100 ; i++) {
//     if(i%2 == 0) {
//         // console.log(`el numero ${i} es par`);
//     }
//     else {
//         // console.log(`el numero ${i} es impar`)
//     }
// }

// while
// let i = 1;
// while (i <= 100) {
//     if (i%2 == 0) {
//         console.log(`el numero ${i} es par`);
//     }
//     else {
//         console.log(`el numero ${i} es impar`)
//     }
//     i++;
// }

// do while
let  i = 1;
do {
    if(i%2 == 0) {
        console.log(`el numero ${i} es par`);
    }
    else {
        console.log(`el numero ${i} es impar`)
    }
    i++;
} while (i <= 100);