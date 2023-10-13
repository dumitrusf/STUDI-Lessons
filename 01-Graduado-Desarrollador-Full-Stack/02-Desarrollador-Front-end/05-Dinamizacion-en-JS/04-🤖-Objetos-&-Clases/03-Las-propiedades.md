# Las propiedades

## Objetivos

- Definir propiedades
- Acceder a las propiedades

## Contexto

Las propiedades, también llamadas atributos, son las variables de un objeto. Se definen o encapsulan en la clase del objeto. En JavaScript, podemos añadir o eliminar propiedades en cualquier momento durante la ejecución del programa.

## Acceso a las propiedades

Para acceder a las propiedades, distinguimos dos casos:

- Dentro de la clase, el acceso se hace gracias a la palabra clave `this`, que hace referencia al objeto actual.
- Fuera de la clase, a nivel del objeto, el acceso a una propiedad se hace llamando a la variable en la que está instanciado, seguida de un punto `.` y el nombre de la propiedad deseada.

### Ejemplo

El objeto `Voiture` en ES5

```javascript
// Versión ES5
function Voiture() {
  this.moteur // Acceso a la propiedad moteur dentro de la clase
}

let voiture = new Voiture()
voiture.moteur // Acceso a la propiedad moteur fuera de la clase
```

El objeto `Voiture` en ES6

```javascript
class Voiture {
  constructor() {
    this.moteur
  }
}

let voiture = new Voiture()
voiture.moteur // Acceso a la propiedad moteur fuera de la clase
```

## Definir propiedades

En este nivel, nuestras propiedades no tienen valores. Podemos asignarles uno de forma estática dentro de la clase, o pasando un parámetro a nuestra función constructora.

### Ejemplo

```javascript
// Versión ES5
function Voiture(moteur, roues, carroserie) {
  this.moteur = moteur
  this.roues = roues
  this.carroserie = carroserie
  this.volant = 'sport'
}

let voiture = new Voiture('1.6L', 4, 'Berline')
```

```javascript
// Versión ES6
class Voiture {
  constructor(moteur, roues, carroserie) {
    this.moteur = moteur
    this.roues = roues
    this.carroserie = carroserie
    this.volant = 'sport'
  }
}

let voiture = new Voiture('1.8L', 4, 'Break')
```

Pasar parámetros a nuestro objeto se hace durante la instanciación, de la misma forma que pasamos parámetros a una función clásica. Deben ser asociados a las propiedades deseadas dentro de la clase.

## Nota: El tipado de las propiedades

>En JavaScript las propiedades no están tipadas, a diferencia de otros lenguajes de programación orientada a objetos.

## Complemento: La propiedad `prototype`

El JavaScript objeto se basa en los prototipos. No entraremos en detalle, pero un objeto JavaScript tiene, como acabamos de ver, propiedades específicas y una propiedad global llamada `prototype`. Esta nos permitirá definir propiedades compartidas entre todos los objetos de una misma clase.

Recordemos la propiedad `this.volant` de nuestra clase `Voiture`. Le hemos asignado un valor directamente dentro de la clase: es por tanto idéntica para cada objeto.

La propiedad `prototype` puede ser útil para funciones de concatenación de cadenas de caracteres o funciones relacionadas con las propiedades del objeto. Como en el ejemplo siguiente:

```javascript
function Voiture(moteur, roues, carroserie) {
  this.moteur = moteur
  this.roues = roues
  this.carroserie = carroserie
  this.vitesse = 0 // La función affiche() está vinculada al objeto voiture // gracias a la palabra clave this.
  this.affiche = function () {
    console.log(this.moteur, this.roues, this.carroserie, this.volant)
  }
}

// La propiedad volant es compartida entre todos los objetos Voiture.
Voiture.prototype.volant = 'Sport'

let voiture1 = new Voiture('1.6L', 4, 'Berline')
let voiture2 = new Voiture('1.8L', 4, 'Break')

voiture1.affiche() // 1.6L 4 Berline Sport
voiture2.affiche() // 1.8L 4 Break Sport
```

Resultado del ejemplo anterior:

![prototipos](./03-Las-propiedades/img/prototypes.jpg)

Se habla en este caso concreto de herencia.

## Para recordar

- Dentro de una clase, declaramos y accedemos a las propiedades gracias a la palabra clave `this` y accedemos a la propiedad de esta forma: `this.miPropiedad`
- El uso de `this` es importante, porque las instancias de una clase disponen de las mismas propiedades: nos va a permitir utilizar valores propios de cada instancia
- Fuera de una clase, accedemos a las propiedades de la siguiente forma: `miInstancia.miPropiedad`