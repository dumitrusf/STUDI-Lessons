# ¿Qué es un objeto JavaScript?

## Objetivo

- Aprender qué es un objeto y cómo declararlo

## Mise en situation

Para manipular más fácilmente datos complejos, vamos a usar los objetos. Por ejemplo, para almacenar toda la información de un usuario y recuperarla fácilmente en una sola variable que contenga los valores asociados a las propiedades definidas (por ejemplo: `firstName`, `lastName`, `email`, `age`, `phoneNumber`).

## Definición

Un objeto va a contener asociaciones propiedad / valor (por ejemplo: `firstName: 'John'`). Así, si creamos todos nuestros usuarios usando el mismo objeto, será más fácil manipularlos. Una propiedad de objeto puede contener todo tipo de datos (texto, número, array, objeto, función, etc.). A diferencia de los arrays, un objeto tiene propiedades (`firstName`, etc.) y por lo tanto es más fácil encontrar y modificar un valor, ya que basta con llamar a la propiedad correspondiente. Vamos a ver las diferentes formas de declarar un objeto.

## Declarar un objeto con la notación literal

Podemos usar la notación literal para crear nuestro objeto. Aquí, listamos las propiedades asociadas a su valor entre llaves: para asignar un valor a la propiedad, usamos los dos puntos (`:`), seguidos de un espacio (para la legibilidad).

### Ejemplo

```javascript
let user = {
  firstName: 'John',
  lastName: 'DOE',
  age: 36,
  email: 'j.doe@email.com',
  phoneNumbers: ['0660504030', '0123456789'],
}
console.log(user)
```

La consola muestra:

```javascript
1 {
2   firstName: 'John',
3   lastName: 'DOE',
4   age: 36,
5   email: 'j.doe@email.com',
6   phoneNumbers: ['0660504030', '0123456789'],
7 }
8
9 John
```

## Declarar un objeto usando una función con las palabras "new" y "this"

La ventaja de usar una función para crear un objeto es que ésta va a servir de modelo y nos permitirá crear varios objetos con las mismas propiedades pero valores diferentes. Creamos primero nuestra función basándonos en el modelo anterior:

```javascript
function User(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.sayHello = function () {
    return 'Hello ' + this.firstName + ' ' + this.lastName
  }
}
```

Observa aquí el uso de la palabra clave "`this`", que corresponde por definición al objeto actual. Gracias a ella podemos por una parte reutilizar nuestras propiedades dentro de nuestra función (ver función `this.sayHello()`) y por otra parte acceder a las diferentes propiedades desde el exterior de nuestra función reemplazando la palabra clave "`this`" por el nombre de nuestro objeto. Veremos esto en ejemplos más abajo, será más claro.

Vamos a crear ahora dos usuarios usando nuestra función `User()` y la palabra clave "`new`":

```javascript
let user1 = new User('John', 'Doe', 36)
let user2 = new User('Jane', 'Smith', 42)
```

Ahora podemos mostrar en la consola nuestros objetos y sus propiedades:

```javascript
// Mostrar nuestros 2 usuarios
console.log(user1) // User {firstName: 'John', lastName: 'Doe', age: 36, sayHello: ƒ}
console.log(user2) // User {firstName: 'Jane', lastName: 'Smith', age: 42, sayHello: ƒ}

// Acceder a las propiedades de nuestros objetos reemplazando la palabra clave 'this' por el nombre del objeto
console.log(user1.firstName) // John
console.log(user2.firstName) // Jane

// Usar la función sayHello() creada dentro de nuestra función User()
console.log(user1.sayHello()) // Hello John Doe
console.log(user2.sayHello()) // Hello Jane Smith
```

## A recordar

Para crear un objeto, podemos:

- Usar la notación literal,
- Usar una función con las palabras clave "new" y "this".

## Complemento

- **[El JavaScript orientado a objetos para principiantes](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)**