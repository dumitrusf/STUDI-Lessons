# Los métodos

## Objetivos

- Definir los métodos
- Utilizar los métodos
- Poner en situación

Al igual que las propiedades, los métodos también son variables de un objeto. Se almacenan en variables, pero se definen con la sintaxis de las funciones. Los métodos nos permiten describir el comportamiento de nuestros objetos o definir acciones a realizar.

## Definir y acceder a los métodos

Un método está encapsulado en una clase y almacenado en una variable. Se puede acceder a él en la definición de la clase con la palabra clave `this`. Fuera de la clase, el uso de un método se hace llamando a la variable en la que se almacena nuestra instancia, seguida de un punto `.` y el nombre del método deseado, seguido de paréntesis `()`. Se trata de la sintaxis de llamada de una función clásica.

### Ejemplo: Añadamos algunos métodos a nuestro objeto `Voiture`

En la vida real, un coche sirve para conducir, y por lo tanto acelerar: le permitiremos hacerlo gracias a un método `accelere()`. Es posible pasarle parámetros, como una velocidad por ejemplo. Añadamos también a nuestros objetos una propiedad `vitesse`.

```javascript
// Versión ES5
function Voiture(moteur, roues, carroserie) {
  this.moteur = moteur;
  this.roues = roues;
  this.carroserie = carroserie;
  this.volant = "sport";
  this.vitesse = 0;

  // Método que permite a un coche conducir
  this.accelere = function (vitesse) {
    this.vitesse += vitesse;
    console.log(`Nous roulons à ${this.vitesse} Km/h.`);
  };

  // Método que permite mostrar las características de un coche
  this.affiche = function () {
    console.log(this.moteur, this.roues, this.carroserie, this.volant);
  };
}

let voiture = new Voiture("1.6L", 4, "Berline");
voiture.affiche();
voiture.accelere(50);
```

```javascript
// Versión ES6
class Voiture {
  constructor(moteur, roues, carroserie) {
    this.moteur = moteur;
    this.roues = roues;
    this.carroserie = carroserie;
    this.volant = "sport";
    this.vitesse = 0;
  }

  accelere(vitesse) {
    this.vitesse += vitesse;
    console.log(`Nous roulons à ${this.vitesse} Km/h.`);
  }

  affiche() {
    console.log(this.moteur, this.roues, this.carroserie, this.volant);
  }
}

let voiture = new Voiture("1.8L", 4, "Break");
voiture.affiche();
voiture.accelere(80);
```

Para resumir, los métodos son funciones que permiten a un objeto realizar una acción. Pueden utilizar las propiedades del objeto en lectura o escritura.

Resultado del ejemplo anterior:

![metodos](./04-Los-metodos/img/methodes.jpg)

## Nota: La sintaxis en ES6

>En ES6, la sintaxis de definición de un método difiere un poco. Es posible nombrar directamente un método sin asociarlo a una variable en la clase y prescindir del uso de `this`.

## Complemento: Definir sus métodos en un prototipo

Si creamos dos objetos:

```javascript
voiture1 = new Voiture("1.6L", 4, "Berline");
voiture2 = new Voiture("1.8L", 4, "Break");
```

Estos contienen las propiedades y los métodos siguientes:

```javascript
// Objeto voiture1
{
  moteur: "1.6L",
  roues: 4,
  carroserie: "Berline",
  volant: "Sport",
  vitesse: 0,
  accelere: function (vitesse) {
    this.vitesse = vitesse;
    console.log(`Nous roulons à ${this.vitesse} Km/h.`);
  },
}

//Objeto voiture2
{
  moteur: "1.8L",
  roues: 4,
  carroserie: "Break",
  volant: "Sport",
  vitesse: 0,
  accelere: function (vitesse) {
    this.vitesse = vitesse;
    console.log(`Nous roulons à ${this.vitesse} Km/h.`);
  },
}
```

A diferencia de las propiedades, los métodos son idénticos para cada objeto. Sin embargo, en el estado actual, se observa que se redefinen en cada construcción de objeto. Para remediar esto, es posible definir un método directamente en el prototipo.

```javascript
Voiture.prototype.accelere = function (vitesse) {⁷[7]
  this.vitesse = vitesse;
  console.log(`Nous roulons à ${this.vitesse} Km/h.`);
};
```

## A recordar

- En ES5, un método se define como una función anónima almacenada en una variable `this.maMethode = function() {}`
- En ES6, podemos nombrar directamente nuestro método en nuestra clase `maMethode() {}`
- Desde un objeto, un método se llama así: `monObjet.maMethode()`