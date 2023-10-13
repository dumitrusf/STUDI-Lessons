# Las constantes en JavaScript

## Objetivos

- Dominar el uso de las constantes

## Contexto

Vamos a ver ahora para qué sirven las constantes, en qué se diferencian de las variables clásicas y cómo utilizarlas, y luego qué es la inmutabilidad y por qué es útil en la programación funcional.

## El uso de las constantes

Una constante es una variable que solo puede definirse una vez, y es imposible modificar su valor una vez definida. Tiene obligatoriamente un valor y no puede ser no definida. Se define con la palabra clave `const`. El nombramiento del identificador responde a los mismos criterios que para una variable clásica, y es imposible declarar una constante con el mismo nombre que otra variable o función en el mismo ámbito. Aunque los nombres de las constantes en minúsculas funcionan perfectamente, estas se escriben por convención en mayúsculas. Su ámbito está limitado al bloque actual: si debe ser accesible de forma global, hay que declararla fuera de cualquier función. Una constante no puede cambiar de valor mediante una asignación ni ser declarada de nuevo durante la ejecución del script.

```javascript
const MACONSTANTE; // Devuelve un error porque no se le asigna ningún valor
const MACONSTANTE = "mi constante"; // No hay error porque se le asigna un valor
```

## A recordar

Las constantes son una forma de variables cuyo valor está siempre definido y no es modificable, existiendo en el ámbito del bloque en el que se definen, al igual que la palabra clave `let`.

## Complemento

**[MDN Constantes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/const)**