# Las propiedades de un objeto JavaScript

## Objetivo

Saber acceder a las propiedades y manipularlas

## Contexto

Sabemos crear objetos con sus propiedades y vamos a ver ahora cómo manipularlas, para mostrarlas o modificarlas.

## Las propiedades

Una propiedad de un `Object()` puede almacenar todos los tipos. Así, cada propiedad de un objeto es independiente de las otras. Si tomamos el ejemplo de un usuario, la propiedad `firstName` será un `string`, `age` será un `number` y `phoneNumbers` un `Array()`.

```javascript
let user = {
  firstName: 'John',
  lastName: 'DOE',
  age: 36,
  email: 'j.doe@email.com',
  phoneNumbers: ['0660504030', '0123456789'],
}
```

## Con el punto (.)

Para acceder a una propiedad, podemos usar el nombre de nuestra variable seguido de un punto, y luego el nombre de la propiedad. Si el valor de la propiedad es un array, entonces podemos manipularlo como tal, por ejemplo mostrando el primer valor (`user.phoneNumbers[0]`). Si el valor de la propiedad es una función, entonces hay que añadirle paréntesis para llamarla (`user.fullName()`).

### Ejemplo

```javascript
let user = {
  firstName: 'John',
  lastName: 'DOE',
  age: 36,
  email: 'j.doe@email.com',
  phoneNumbers: ['0660504030', '0123456789'],
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

// Muestra: John
console.log(user.firstName)

// Muestra el primer número de teléfono del array: 0660504030
console.log(user.phoneNumbers[0])

// Muestra el retorno de la función fullName(): John DOE
console.log(user.fullName())
```

## Con los corchetes ([])

También es posible manipular las propiedades como si fueran un array, colocando a continuación de nuestra variable el nombre de la propiedad entre corchetes. El nombre de la propiedad tendrá que ir entre comillas dentro de los corchetes (`user['firstName']`).

### Ejemplo

```javascript
let user = {
  firstName: 'John',
  lastName: 'DOE',
  age: 36,
  email: 'j.doe@email.com',
  phoneNumbers: ['0660504030', '0123456789'],
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

// Muestra: John
console.log(user['firstName'])

// Muestra el primer número de teléfono del array: 0660504030
console.log(user['phoneNumbers'][0])

// Muestra el retorno de la función fullName(): John DOE
console.log(user['fullName']())
```

## Modificar un valor de propiedad

Para modificar el valor de una propiedad, vamos a llamarla con uno de los métodos anteriores y le asignaremos un nuevo valor.

### Ejemplo

```javascript
let user = {
  firstName: 'John',
  lastName: 'DOE',
}

user.firstName = 'Bob'

// Muestra: Bob
console.log(user.firstName)
```

## Añadir una nueva propiedad

Para añadir una nueva propiedad, aunque la variable que contiene el objeto ya esté creada, usamos nuestra variable, y le añadimos nuestra nueva propiedad con el método elegido, y le asignamos el valor deseado.

### Ejemplo

```javascript
let user = {
  firstName: 'John',
  lastName: 'DOE',
}

user.userName = 'jdoe'

// Muestra: { firstName: 'John', lastName: 'DOE', userName: 'jdoe' }
console.log(user)
```

## Recorrer las propiedades de un objeto con for...in

Esta instrucción va a crear un bucle que permite ejecutar un bloque de instrucciones sobre cada propiedad de un objeto.

### Ejemplo

Aquí el ejemplo es simple porque el objeto solo tiene dos propiedades, pero podría tener muchas más.

```javascript
let user = {
  firstName: 'John',
  lastName: 'DOE',
}

for (let property in user) {
  console.log(property)
}
```

El ejemplo anterior, sobre un objeto, va a mostrar en la consola:

```
firstName
lastName
```

## A recordar

Para acceder a las propiedades de un objeto, podemos:

- Usar el punto (ej: `user.firstName`)
- Usar los corchetes y comillas (ej: `user['firstName']`)

Es posible añadir una propiedad usando uno de los métodos anteriores y asignándole un valor con el signo igual. También se puede usar la asignación de valor para modificar el valor de una propiedad existente. Por último, se usa el método for...in para recorrer las propiedades de un objeto.

## Complemento

- **[Usar los objetos](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_objects)**

- **[Inicializador de objeto](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer)**

- **[Las bases de JavaScript, orientado a objetos](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Basics)**

- **[Métodos del constructor Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#M%C3%A9thodes_du_constructeur_Object)**