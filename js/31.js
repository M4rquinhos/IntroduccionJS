// Async y Await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando nuevos clientes...');

        setTimeout( () => {
            resolve('Los clientes nuevos fueron descargados');
        }, 5000);

    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando ultimos pedidos...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000);

    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);

    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Continuo con el resto de mi aplicación');