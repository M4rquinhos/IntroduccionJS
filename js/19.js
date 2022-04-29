// metodos de propiedad 

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function() {
    console.log('Pausando canción ...');
    },
    crearPlaylist: function(nombre, nombreCancion) {
        console.log(`Creando playlist: ${nombre}`);
        nombre = new Array();
        nombre.push(nombreCancion);
        console.log(nombre);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }, 
    
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`)
}

// console.log(reproductor);
reproductor.reproducir(23423);
reproductor.pausar();
reproductor.borrarCancion(20);

reproductor.crearPlaylist('Rock mexicano', 'la celula que explota');
reproductor.crearPlaylist('Pop', 'digale');

reproductor.reproducirPlaylist('Rock mexicano');