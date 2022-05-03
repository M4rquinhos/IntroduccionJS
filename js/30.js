// Notification API

const boton = document.querySelector('#boton');


boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(mensaje => console.log(mensaje));
});


if(Notification.permission == 'granted'){
    new Notification('esta es una notificacion', {
        icon: 'img/blog1.jpg',
        body: 'este es el cuerpo de la notificacion'
    });
}