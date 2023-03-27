class Producto {
  constructor(marca) {
    this._marca = marca;
  }

  get marca() {
    return this._marca;
  }

  set marca(nuevaMarca) {
    this._marca = nuevaMarca;
  }
}


producto = new Producto("HP");


// Aquí muestra HP, ya que el primer objeto es HP, y conseguimos la información del valor de la propiedad marca gracias al getter
console.log(producto.marca);


// Aqui, cambiamos el valor de HP por Acer, se cambia por que el setter se encarga de hacerlo.
// Por que?: Pues por que en el setter seguimos mencionando marca.
//Incluso le indicamos el contexto con this._marca = nuevaMarca, que le daremos un nuevo valor
// Como le cambiamos el valor ?:
// Con mencionar el nombre de la clase que es producto, y seguido del punto y del nombre de la propiedad a cambiar en este caso marca le decimos que es igual al nuevo valor que queramos, en este caso "Acer"
producto.marca = "Acer";


// Aqui mostrara Acer y no mas HP
console.log(producto.marca);

// get y set son muy usados para securizar nuestros valores