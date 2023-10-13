# Definición y utilidad de una variable

## Objetivos

- Comprender para qué sirve una variable
- Aprender las reglas de nombramiento de una variable

## Mise en situation

Vamos a ver para qué sirven las variables y las buenas prácticas en lo que respecta a su nombramiento.

## Utilización de una variable

Una variable puede ser vista como una especie de contenedor que sirve para almacenar información de forma temporal con el fin de poder reutilizarla posteriormente. Puede evolucionar a lo largo del tiempo, de ahí el nombre "variable", y permite almacenar de forma simple y eficaz diferentes tipos de información, y manipularlas. Se define una variable con las palabras clave `var`, `let` o `const`.

### Ejemplo

En un programa, queremos recuperar el nombre del usuario actual para mostrarlo en la pantalla. Utilizar una variable nos va a permitir tratar y manipular el resultado sin necesidad de conocerlo al escribir el script. En este ejemplo, creamos una variable `nomUtilisateur` con la palabra clave `let` (la noción de palabras clave se detallará más adelante en este curso). Para que almacene un nombre de usuario personalizado, vamos a utilizar el método `prompt()`. El método `prompt()` abre una caja de diálogo en tu navegador que permite al usuario introducir un valor; este último será almacenado en la variable.

```javascript
// Almacenamos el nombre dado por el usuario en una variable llamada nomUtilisateur
let nomUtilisateur = prompt("¿Cuál es tu nombre?");

// Mostrará el nombre que has introducido en la caja de diálogo
console.log(nomUtilisateur);
```

Almacenar un valor en una variable también permite evitar reescribirlo varias veces, y facilita así cualquier evolución futura.

### Ejemplo

En un blog, el número máximo de posts mostrados en una pantalla pasa de 4 a 8. Bastará con modificar la variable en la que se almacena este valor para que el cambio sea efectivo en todas partes.

```javascript
let itemsPerPage = 4;
console.log(itemsPerPage); // Mostrará 4
itemsPerPage = 8;
console.log(itemsPerPage); // Mostrará 8
```

La variable muestra el valor que almacena. Por lo tanto, no hay necesidad de reescribirlo si es útil en varios lugares y, en caso de cambio, basta con modificarlo una sola vez en un lugar.

## A recordar

Una variable puede ser vista como un nombre simbólico que permite hacer referencia a un valor dado que puede ser modificado y manipulado. Debe ser nombrada de forma clara para facilitar la lectura del código.

## Complemento

**[Variable](https://developer.mozilla.org/fr/docs/Glossary/Variable)**