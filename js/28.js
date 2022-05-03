// clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precioo de: ${this.precio}`;
    }

    getPrecio() {
       console.log(this.precio);
    }
}

const producto1 = new Producto('Monitor curvo', 800);
const producto2 = new Producto('Laptop', 300);
const producto3 = new Producto('Teclado', 50);
const producto4 = new Producto('Mouse', 20);


class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }

    getPrecio() {
        super.getPrecio();
        console.log('y si hay en existencia');
    }
}

const libro1 = new Libro('El señor de los anillos', 100, '123456789');



// Prodcutos
console.log(producto1);
console.log(producto2.formatearProducto());
console.log(producto1.getPrecio(producto1));


// Libros
console.log(libro1.formatearProducto());
console.log(libro1.getPrecio());



try {
    console.log(producto45.getPrecio());
} 
catch (e) {
    console.log(e);
}