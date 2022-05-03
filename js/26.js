// This


const reservacion = {
    nombre: "Marco",
    apellido: "Gonzalez",
    total: 45345,
    pagado: true,
    informacion: function() {
        return `Nombre:${this.nombre} \n Apellido:${this.apellido} \n Total:${this.total} \n Pagado:${this.pagado}`;
    }
}

const info = reservacion.informacion();
console.log(info);