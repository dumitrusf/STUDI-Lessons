# Errores y Excepciones
## Tipos de Errores en JavaScript
En JavaScript, los errores son un tipo de objeto creado con la sintaxis `new Error()`. Son tratados como objetos y pueden ser devueltos o almacenados en variables. El propio intérprete de JavaScript genera errores.

Una excepción es un error lanzado. Puede ser lanzado por el contexto de ejecución o por el código usando la palabra clave `throw`, y ya no puede ser manipulado. Por lo tanto, termina los contextos de ejecución uno tras otro hasta mostrar un error en la consola. Puede ser interceptado con `try`, y el error que lanzan puede ser manejado mediante `catch (exception)`. Esto es lo que veremos en este curso.

En otras palabras, un error es un peligro que podría ocurrir. La clase `Error` nos proporciona una herramienta para manejar el error si ocurre. Cuando el error ocurre, se le llama "excepción".

## Errores de Sintaxis
Los errores de sintaxis ocurren cuando una instrucción es sintácticamente incorrecta. A menudo son señalados por mensajes de error en la consola del navegador. Para corregir un error de sintaxis, debes modificar tu código.

### Ejemplo de Errores de Sintaxis
```javascript
const x = 10;
if (x === 10 {
  console.log("x es igual a 10");
else {
  console.log("x no es igual a 10");
}
```
El error en este código es un paréntesis que falta después del `if`. El mensaje de error en la consola será:
```
Uncaught SyntaxError: Unexpected token 'else'
```

## Errores de Ejecución
Los errores de ejecución ocurren cuando una instrucción no puede ser ejecutada correctamente. Pueden ser causados por valores incorrectos o inesperados. Para corregir un error de ejecución, debes modificar tu código.

### Ejemplo de Errores de Ejecución
```javascript
let x = 10;
let y = x.toUpperCase();
console.log(y);
```
El problema aquí es que el método `toUpperCase` no se puede llamar en un número. El mensaje de error en la consola será:
```
Uncaught TypeError: x.toUpperCase is not a function
```

## Errores de Bibliotecas Externas
Los errores de biblioteca ocurren cuando usamos una biblioteca externa que no funciona correctamente o devuelve errores. Estos errores pueden ser difíciles de diagnosticar porque a menudo están relacionados con la biblioteca y no con tu código.

### Ejemplo de Errores de Bibliotecas Externas
```javascript
// Uso de la biblioteca moment.js
let date = moment("2022-12-31T23:59:59");
// Uso del método format que devuelve un error
let dateStr = date.format("DD-MM-YYYY");
console.log(dateStr);
```

## Errores de Red
Los errores de red ocurren cuando una petición de red no puede ser ejecutada correctamente. Pueden ser causados por una conexión lenta, un error del servidor o un servidor inaccesible. Estos son errores muy comunes, por lo que es fundamental saber cómo manejarlos.

### Ejemplo de Errores de Red
```javascript
// Uso del método fetch para obtener datos
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Ha ocurrido un error: ", error));
```