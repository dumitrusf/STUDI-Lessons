# Comprender el código

## Objetivo

- Aprender a analizar el código

## Contexto

Porque "el error es humano", le ocurre al desarrollador escribir un código que va a producir un error: introduce un bug en su código. Por lo tanto, es muy importante saber identificar la causa del fallo para poder corregirla lo antes posible.

## Los tipos de bugs

### Aquí están los tres principales tipos de bugs:

- **Los bugs de sintaxis:**

    - Debidos a un error de escritura, un carácter de más o que falta. Estos bugs serán generalmente señalados por el intérprete JavaScript.

```javascript
var myText = 'Mi texto; //Aquí falta una comilla al final del texto
/* El intérprete podrá devolver un mensaje como: "Cadena sin cerrar. Falta punto y coma. Línea 1." o simplemente "SyntaxError" */
```

- **Los bugs de lógica:**

    - Debidos a un error en el razonamiento del desarrollador o en la escritura del script.

```javascript
//Aquí una función que se supone que suma sus 2 parámetros y devuelve el valor de la suma
function Suma ( primero , segundo ) {
  var resultado = primero + segundo ;
  return primero ; //El resultado devuelto no es el esperado.
}
```

- **Los bugs de arquitectura:**

    - Debidos a un error en el diseño del programa, una referencia que falta o todo lo que afecta a la estructura del código.

```javascript
//Aquí, se intenta usar el método myAwesomeFunction, presente en un archivo remoto, sin importar el módulo.
myAwesomeFunction ( 'David' , 'Marty' , 'USAP' );
```

```javascript
//Versión correcta:
import { myAwesomeFunction } from '/modules/fichero.js' ;
myAwesomeFunction ( 'David' , 'Marty' , 'USAP' );
```

## Comprender el código

Antes de depurar un código, hay que comprenderlo. ¿Cuál es el objetivo? ¿Qué hacen tal o cual función? ¿Cuáles son los pasos para llegar al resultado?

Determinar el objetivo del código equivale a determinar el resultado esperado. Aquí, el resultado esperado es la visualización de una alerta:

```javascript
function showAlert ( message ) {
  alert ( message );
}
const message = 'Hola Mundo' ;
showAlert ( message );
```

Sin embargo, no todos los códigos son tan simples y a menudo habrá que pasar por una serie de funciones para comprender el resultado esperado. Al deducir este resultado para cada función y conociendo el objetivo de las mismas, se podrá:

- Comparar el resultado esperado con el resultado realmente devuelto por la función
- Reorganizar el código para simplificarlo (factorizar una función compleja en varias funciones simples, eliminar funciones innecesarias, etc.)

Retomemos el caso de nuestro script que muestra una alerta, complicándolo un poco.

```javascript
function showAlert(message) {
  alert(message);
}

function getAlert(message) {
  showAlert(message)
}

<input type="text" id="message" value="Hola Mundo">
<button onclick="getAlert(document.getElementById('message').value)">Mostrar alerta</button>
```

Aquí, hemos añadido un input de tipo texto y un botón. Cuando se hace clic en el botón, se llama a la función getAlert() que toma como parámetro el valor del input. Esta función llama a su vez a otra función, showAlert() , cuyo papel es mostrar la alerta.

En este código, tenemos pues dos funciones cuyos roles podemos deducir según su nombre:

- getAlert('alerta'): recupera la alerta,
- showAlert('alerta'): muestra la alerta.

Este código, por simple que sea y aunque sea correcto, dispone sin embargo de una incoherencia lógica. Se observa que la función getAlert() llama directamente a la función showAlert(). Esto equivale a decir que la función getAlert() tiene como papel tanto recuperar la alerta como mostrarla.

Para restablecer la coherencia, hay que reflexionar sobre la utilidad y el nombramiento de las funciones. Sería más lógico mezclar las 2 funciones en 1 y que nuestra función getAlert() se llame showAlert().

```javascript
function showAlert ( message ) {
  alert ( message );
}
```

Hemos eliminado la complejidad y añadido claridad a nuestro código. Sin embargo, no es tan simple y, la mayoría de las veces, depurar un código es mucho más difícil. Existen métodos de depuración más avanzados, que veremos en los capítulos siguientes.

## A recordar

Para depurar un código, hay que:

- Comprender su objetivo,
- Comprender las funciones que lo componen,
- Restablecer la lógica renombrando las variables y las funciones correctamente, por ejemplo,
- Reducir su complejidad si es necesario.