// Arreglos


const numeros = [1,2,3,4,5,6,7,8,9,10];

console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.table(meses);


// acceder a un elemento del arreglo
// console.log(meses[8]);


// Conocer la longitud del arreglo
// console.log(meses.length);

// console.log("meses");
// for(let i=0; i<meses.length; i++){
//     console.log(meses[i]);s
// }

// console.log("numeros")

// numeros.forEach( function(numero){
//     console.log(numero);
// });

// numeros.push(11);
// numeros.unshift(0);

// numeros.pop();
// numeros.shift();
// console.log(numeros);


const nuevoArreglo = [...meses, 'saludos'];
console.log(nuevoArreglo);