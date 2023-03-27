# **Ejercicio para el tema: Definir e Instanciar clases**

<br>

---

## **Question-1**

---

<br>

Définissez une classe Rectangle avec 2 propriétés d’instance (longueur et largeur) et une méthode pour calculer son périmètre.

<br>

---

**Código:**

```js
//definition de la classe
const monRectangle = new Rectangle(10, 8);
console.log(monRectangle.calculerPerimetre());
```

---

---

<br>

---

## **Question-2**

---

<br>

Dans la classe Cercle, définissez une méthode permettant de renvoyer l’aire du cercle :

<br>

---

**Código:**

```js
class Cercle {
  constructor(area) {
    this.area = area;
  }
  //définition de la méthode
  }
}
cercle = new Cercle(4);
console.log(cercle.aire());
```

---

---

<br>

---

## **Question-3**

---

<br>

Dans la même classe Cercle, définissez une méthode permettant de renvoyer le périmètre du cercle :

<br>

---

**Código:**

```js
class Cercle {
  constructor(area) {
    this.area = area;
  }
  aire() {
    return Math.PI ** 2 * this.area;
  }
  //définition de la méthode
}
cercle = new Cercle(4);
console.log(cercle.perimetre());
```

---

---

<br>

---

## **Question-4**

---

<br>

Définissez un getter marque pour la propriété \_marque.

<br>

---

**Código:**

```js
class Produit {
  constructor(marque) {
    this._marque = marque;
  }
  //définition du getter
  }
}
produit = new Produit("HP");
console.log(produit.marque);
```

---

---

<br>

---

## **Question-5**

---

<br>

Définissez un setter pour la propriété \_marque.

<br>

---

**Código:**

```js
class Produit {
  constructor(marque) {
    this._marque = marque;
  }
  get marque() {
    return this._marque;
  }
  //définition du setter
}
produit = new Produit("HP");
produit.marque = "Acer";
console.log(produit.marque);
```

---

---

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

<br>

**Descripción en español:**

---

<br>---

## **Pregunta 1**

---

<br>

Define una `clase` Rectángulo con `2 propiedades de instancia` (longitud y anchura) y un `método` para calcular su perímetro.

<br>

---

**Código:**

```js
//definición de la clase
const miRectangulo = new Rectangulo(10, 8);
console.log(miRectangulo.calcularPerimetro());
```

<br>

---

**Resultado-1**

```js
// declaracion de la clase llamada Rectangulo
Class Rectangulo {

    //Declaración del constructor que es para asignarle valores iniciales a sus variables de instancia, para cuando creemos un objeto podamos instanciar esos objetos y otorgarles los argumentos como longitud y anchura
    constructor(longitud, anchura) {
        this.longitud = longitud;
        this.anchura = anchura;
    }


    //Definición de un método dentro de la clase que nos devolvera la suma de la longitud y la anchura y después por 2
    calcularPerimetro() {
        return 2 * (this.longitud + this.anchura);
    }

}


//Nuevo Objeto "miRectangulo", con los argumentos 10 y 8, a lo que equivale 10 de longitud y 8 de anchura
const miRectangulo = new Rectangulo(10, 8);

//Nos mostrara en consola "36"
console.log(miRectangulo.calcularPerimetro());
```

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

En la `clase` Círculo, define un `método` que devuelva el área del círculo:

<br>

---

**Código:**

```js
class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  //definición del método
}
círculo = new Circulo(4);

console.log(circulo.area());
```

<br>

---

**Resultado-2**

```js
// Definición de la clase Circulo
class Circulo {
  // Creación del constructor que nos servira dar argumento al objeto
  constructor(radio) {
    this.radio = radio;
  }

  // Definición del método (o llamemos función ... ), que calcula el radio elevado a 2 que es 16, y después por 3.14 que es igual a = 50.26548245743669
  area() {
    return Math.PI * this.radio ** 2;
  }
}

// Creación de un nuevo objeto, este sera un circulo de un radio de 4
círculo = new Circulo(4);

// En consola veremos el resultado, llamando al método area(), que nos dara 50.26548245743669
console.log(circulo.area());
```

<br>

---

---

<br>

---

## **Pregunta 3**

---

<br>

En la misma `clase` Círculo, define un `método` que devuelva el perímetro del círculo:

<br>

---

**Código:**

```js
class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  area() {
    return Math.PI * this.radio ** 2;
  }

  //definición del método
}
círculo = new Circulo(4);

console.log(circulo.perimetro());
```

<br>

---

**Resultado-3**

```js
// Definic...
class Circulo {
  // Su debido ...
  constructor(radio) {
    this.radio = radio;
  }

  // del metodo ....
  area() {
    return Math.PI * this.radio ** 2;
  }

  // definición del método perímetro para calcular la circunferencia del circulo NO EL AREA, con la típica formula matemática que sirve para calcularla 2 x 3.14 x el radio
  perimetro() {
    return 2 * Math.PI * this.radio;
  }
}

//El nuevo objeto circulo con el 4 como argumento
circulo = new Circulo(4);

//Mostrar en consola el perímetro de circulo, osea su circunferencia
console.log(circulo.perimetro());
```

---

---

<br>

---

## **Pregunta 4**

---

<br>

Define un `getter` marca para la `propiedad _marca`

<br>

---

**Código:**

```js
class Producto {
  constructor(marca) {
    this._marca = marca;
  }

  //definición del getter
}
producto = new Producto("HP");

console.log(producto.marca);
```

<br>

---

**Resultado-4**

```js
class Producto {
  constructor(marca) {
    this._marca = marca;
  }


  // Definimos get que sirve para extraer información, en este caso ver la información que tenemos en "_marca", a la hora de crear un producto y decir en consola (console.log) que queremos ver el valor de la propiedad de ese producto.
  // sin el getter, y con "product.marca", nos daría "UNDEFINED"
  get marca() {
    return this._marca;
  }
}

// Creacion de nuestro Objeto, argumentandole "HP", siglas de: Hijo Puta
producto = new Producto("HP");

// Aquí pedimos que se muestre, y se mostrara gracias al getter, el valor de la propiedad de marca dada en la Clase en el constructor con "this._marca", sera HP por que como parametro en la clase es marca y en el getter pedimos el parametro "marca"
console.log(producto.marca);
// Sin el Getter seria "UNDEFINED"
```

---

<br>

**[Perfecta explicacion en YouTube para get y set aqui que es identico el ejemplo al ejercicio3.md](https://youtu.be/tTXKLpztaSA?si=Pi1k6n2f3q596M4I)**

---

---

<br>

---

## **Pregunta 5**

---

<br>

Define un `setter` para la propiedad `_marca`

<br>

---

**Código:**

```js
class Producto {
  constructor(marca) {
    this._marca = marca;
  }

  get marca() {
    return this._marca;
  }

  //definición del setter
}
producto = new Producto("HP");

producto.marca = "Acer";

console.log(producto.marca);
```

<br>

---

**Resultado-5**

```js
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
```

---

---
