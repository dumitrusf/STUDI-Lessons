# ¿Qué es una clase?

## Objetivos

- Comprender el interés de las clases
- Declarar una clase
- Instanciar un objeto

## Contexto

En primer lugar, recordemos, de forma sucinta y simplificada, lo que es la Programación Orientada a Objetos. Se trata de una visión en la que los elementos del mundo real se describen por objetos del mundo programático. Así, podemos modelar más fácilmente las características y las acciones realizables por estos objetos.

## La composición de los objetos

Diremos que los objetos contienen datos, las propiedades , y que describen un comportamiento, los métodos , que deseamos aplicarles. Estas propiedades y métodos se almacenan generalmente dentro del objeto: se dice entonces que están encapsulados . Todo esto representa la definición de un objeto, y lo llamamos clase .

Consideremos el siguiente modelo objeto: a partir de un programa, queremos mostrar información sobre coches y su conductor.

### Ejemplo

Hasta ES5

```javascript
// Función que describe un coche
function Coche() {
  this.marca = 'Peugeot';
}

// Función que describe un conductor
function Conductor() {
  this.nombre = 'Philippe';
}
```

Hasta la versión 5 de la norma ECMAScript, las clases no son más que simples funciones. Se llaman funciones constructoras . Su sintaxis es la misma que una función JavaScript clásica, con la única diferencia de que su nombre empieza por una mayúscula.

### Ejemplo

A partir de ES6

```javascript
class Coche {
  constructor() {
    this.marca = 'Peugeot';
  }
}

class Conductor {
  constructor() {
    this.nombre = 'Philippe';
  }
}
```

A partir de la versión 6 de la norma ECMAScript, se introdujo la palabra clave class , así como la noción de constructor, para acercarse a los lenguajes de programación orientada a objetos clásicos. Sin embargo, hay que tener cuidado, se trata solo de una simplificación sintáctica, las clases siguen siendo funciones especiales.

## Instanciar una clase

Ahora que hemos definido nuestras clases, ¿cómo podemos utilizarlas? Las vamos a instanciar gracias a la palabra clave new .

```javascript
let coche = new Coche();
let conductor = new Conductor();
```

Instanciar un objeto consiste en utilizar la palabra clave new seguida del nombre de la función constructora que queremos utilizar, seguida de posibles parámetros o propiedades que veremos más adelante.

Para terminar, es totalmente posible instanciar varias veces objetos.

```javascript
let coche1 = new Coche();
let coche2 = new Coche();
```

## Complemento

### Otras formas de hacerlo

Existen otras formas de instanciar un objeto, por ejemplo utilizando el constructor Object() . En JavaScript, todos nuestros objetos son en realidad Object .

```javascript
let persona1 = new Object({ nombre: 'Doe', apellido: 'John' });
```

En este caso, no definimos una clase Persona : la clase Object es nativa de JavaScript, pero podemos pasarle los parámetros que necesitamos.

También es posible utilizar el método create() de Object .

```javascript
let persona1 = new Object({ nombre: 'Doe', apellido: 'John' });
let persona2 = Object.create(persona1);
persona2.nombre = 'Doe';
persona2.apellido = 'Jane';
```

Aquí, persona2 tiene las mismas propiedades que persona1 , y podemos asociar valores.

![create](./02-Que-es-una-clase/img/create.jpg)

## Para recordar

- Para declarar una clase en ES5, se utilizan funciones constructoras: function MiClase(){}
- En ES6, es posible utilizar la palabra clave class : class MiClase(){} , lo que equivale a lo mismo
- Los nombres de las funciones o clases deben empezar por una mayúscula
- Para instanciar un nuevo objeto, es necesario utilizar la palabra clave new