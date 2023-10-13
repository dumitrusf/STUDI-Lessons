# Las funciones JavaScript predefinidas

## Objetivo

Descubrir las posibilidades que ofrecen las funciones JavaScript predefinidas

## Contexto

El lenguaje JavaScript dispone de muchas funciones que podemos utilizar para realizar diferentes tareas. Las funciones definidas en el lenguaje se llaman funciones predefinidas o funciones listas para usar, porque nos basta con llamarlas para usarlas. Para ser más precisos, las funciones predefinidas en JavaScript son métodos. Un método es simplemente el nombre que se da a una función definida dentro de un objeto. Por el momento, vamos a considerar que son simplemente funciones. Ya las has usado sin darte cuenta cada vez que añades un `console.log()` en tu aplicación.

El principal interés de las funciones predefinidas es que nos permiten realizar operaciones complejas de forma muy sencilla: llamándolas, simplemente. De hecho, debes entender que detrás de estos nombres de funciones se esconden códigos a veces largos y complejos que se van a ejecutar cuando llamamos a la función y que van a permitir realizar una operación precisa (generar un número aleatorio, etc.). Además de eso, el código de una función es reutilizable: eso significa que podemos llamar a una misma función tantas veces como queramos para que realice varias veces la misma operación.

## `toUpperCase()`

Este método, del objeto global `String`, modifica una cadena de caracteres para pasarla a mayúsculas. Este objeto dispone de muchas otras funciones para el tratamiento de las cadenas de caracteres (poner en minúsculas, eliminar los espacios blancos al principio y al final, recuperar una subcadena, extraer, reemplazar, etc.).

### Ejemplo:

```javascript
let hello = 'hello world'
// Muestra en la consola: HELLO WORLD
console.log(hello.toUpperCase())
```

## `Math.round()`

Redondea un valor al entero más cercano. El objeto `Math` ofrece muchas funciones (por ejemplo: conocer el mayor o el menor número de una lista, seno, tangente, potencia, etc.).

### Ejemplo:

```javascript
// Muestra en la consola: 0
console.log(Math.round(0.4))
// Muestra en la consola: 1
console.log(Math.round(0.5))
// Muestra en la consola: -1
console.log(Math.round(-1.5))
```

## `Number.isInteger()`

Permite determinar si el valor pasado es un entero, y devuelve verdadero o falso (`true`/`false`). El objeto `Number` también permite determinar si el valor proporcionado es un número finito, analizar y convertir una cadena de caracteres en un número flotante o un entero, etc.

### Ejemplo:

```javascript
// Muestra en la consola: true
console.log(Number.isInteger(5));
// Muestra en la consola: false
console.log(Number.isInteger(5.05));
```

## A recordar

Antes de crear una función, es importante verificar si no hay ya una función existente que responda a la necesidad. Para ello, existen varias documentaciones JavaScript, algunas de las cuales se han puesto como complemento de este curso.

## Complemento

- **[String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)**

- **[Math](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)**

- **[Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number)**
