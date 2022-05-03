// promesas 

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;
    if(auth){
        resolve('Usuario autenticado');
    }
    else{
        reject('Usuario no autenticado');
    }   
});

 usuarioAutenticado
.then( mensaje => console.log(mensaje) ) //promesa resuelta
.catch( error => console.log(error) ); //promesa rechazada


    




// Los promises tienen 3 valores:
// 1. Pending: cuando la promesa esta en proceso
// 2. fullfilled - Resolved: cuando la promesa se resolvio o se realizo con exito
// 3. Rejected: cuando la promesa se rechazo o fallo