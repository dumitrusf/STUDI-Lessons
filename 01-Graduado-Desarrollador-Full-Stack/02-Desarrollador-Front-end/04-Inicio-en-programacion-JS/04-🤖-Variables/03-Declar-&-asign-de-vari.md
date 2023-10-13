# Declaración y asignación de una variable

## Objetivos
- Declarar e inicializar una variable
- Comprender la diferencia entre var y let
- Dominar la reasignación y la asignación por transitividad

## Contexto
Para poder utilizar nuestra variable, vamos a ver cómo declararla y asignarle un valor.

## Declarar una variable
Antes de inicializar una variable, hay que declararla primero. Para ello, basta con utilizar una de las palabras clave que permiten declarar una variable, seguida del nombre que se le da.

Se puede declarar una variable de varias formas:

- Declarando la variable y asignándole un valor inmediatamente mediante el operador "=", que no actúa entonces como un operador de igualdad, sino como un operador de asignación.
- Declarando la variable sin asignarle un valor directamente. Tendrá entonces el valor undefined, hasta que se le asigne otro valor.

Ejemplo

```javascript
var maVariable = "ma variable";
```

En este ejemplo, se ha asignado el valor a la derecha del operador de asignación (=) a la variable declarada a la izquierda.

```javascript
var maVariableSinValor;
console.log(maVariableSinValor); // El resultado mostrado será undefined
maVariableSinValor = 10;
console.log(maVariableSinValor); // El resultado mostrado será 10
```

En este ejemplo, se ha declarado primero la variable sin asignarle ningún valor. Por lo tanto, valía undefined (no definido). Luego se le ha asignado el valor 10: en ese momento, no hay que poner la palabra var, porque el ordenador entendería que queremos declarar de nuevo la variable.

Antes de intentar acceder a una variable, hay que haberla declarado previamente.

## Nombrar una variable
Una variable se compone de una clave única y un valor. Esta clave no puede estar formada por cualquier carácter alfanumérico, en efecto, debe empezar por una letra, un guión bajo o un signo dólar. Los nombres de las variables son sensibles a las mayúsculas y minúsculas, lo que significa que la variable llamada myVariable es diferente de otra variable llamada myvariable.

Es imposible tener dos variables con el mismo nombre en el mismo bloque o en el bloque padre y el bloque hijo.

El nombramiento es libre, excepto algunos nombres reservados, como boolean, abstract, return, var, etc.

Para hacer el código más fácil de leer, debe ser lo más significativo posible. Por ejemplo, para la variable que servirá para almacenar la fecha de nacimiento del usuario, es conveniente nombrarla dateNaissance en lugar de variableAtHasard, para que al leer el código se pueda entender fácilmente a qué se refiere.

De forma general, las variables se nombran utilizando la sintaxis camelCase, lo que significa que la primera letra del primer palabra está en minúscula, y la primera letra de cada palabra siguiente está en mayúscula. Por lo tanto, el nombre de la variable estará compuesto por la primera letra minúscula seguida de una letra mayúscula, por ejemplo: dateNaissance.

## Nota: La noción de bloque

>Se llama bloque de código a todo código que está encapsulado y es autónomo. Veremos más adelante las funciones JavaScript, pero en esencia, es posible crear partes de código autónomas (bloques) dentro de un mismo archivo o de un mismo bloque. Encontrará en el siguiente párrafo una explicación más detallada.

### Ejemplo

Aquí hay algunos ejemplos de nombres de variables sintácticamente correctos e incorrectos:

```javascript
let nommageOk; // Nombre OK, caracteres alfanuméricos
let nommage-KO; // Nombre KO, guión no incluido en los caracteres permitidos
let #symboles; // Nombre KO, diéresis no incluido en los caracteres permitidos
let _variableAvecTiretBas; // Nombre OK, caracteres alfanuméricos y guión bajo permitidos en el nombramiento
let boolean; // Nombre KO, boolean es un nombre reservado
let mavariableavecunnomok; // Nombre OK, pero es mejor preferir el lowerCamelCase que facilita la lectura del nombre de la variable
```

## Las palabras clave var y let
Hay diferentes palabras clave que permiten declarar una variable:

- La palabra clave var: tiene un alcance limitado a la función y no al bloque actual, y puede ser declarada sin valor inicial. Las variables declaradas con la palabra clave var pueden ser declaradas después del primer uso. En efecto, las declaraciones de variables definidas con la palabra clave var son tratadas antes que el resto del código en JavaScript. Después de la introducción de let, var ya no tiene sentido, porque la función de let es esencialmente la misma que var, pero el efecto es mejor. Prefiera siempre usar let para evitar los conflictos en el código.
- La palabra clave let tiene un alcance limitado al bloque actual (acolchados más cercanos) y puede ser declarada sin valor inicial. Un bloque de código es, de forma general, todo lo que verá entre dos acolchados ( { } ). El alcance (o scope en inglés) es la porción de código en la que existe una variable. El alcance es diferente según las palabras clave utilizadas durante la declaración. Esta noción se verá más en detalle siguiendo el recorrido Javascript, pero es interesante conocer las grandes líneas antes de encontrarse con ella. Retenga que let y const tienen el mismo alcance y que var tiene un alcance ligeramente superior, sin que ello sea siempre una ventaja.

```javascript
inicio del alcance de función {
  inicio del alcance de bloque {
    //código
    //código
  fin del alcance de bloque
}
//código
fin del alcance de función
}
```

La declaración de una variable sin la palabra clave var o let creará una variable de un alcance global no declarado (a nivel del elemento window), pero no es una práctica recomendada, porque puede tener efectos inesperados. Por lo tanto, es mejor definir la variable en cuestión a nivel del bloque en el que debe ser accesible.

El uso de las palabras clave var y let sólo es útil cuando se declara las variables: basta con utilizar su nombre para manipularlas una vez que han sido declaradas.

## Reasignación de una variable
Para asignar un nuevo valor a una variable ya inicializada, basta con utilizar de nuevo el operador de asignación "=". El nuevo valor asignado a la variable va a sobrescribir el antiguo valor.

```javascript
var a = "Una cadena de caracteres";
console.log("a : ", a); // Mostrará "a  : Una cadena de caracteres"
a = 10;
console.log("a : ", a); // Mostrará "a  : 10", el antiguo valor ha sido sobrescrito.
```

## Asignación por transitividad
Si se asigna un valor a una variable asignándole otra variable como valor, entonces la variable en cuestión tomará el valor de la segunda variable en el momento de la asignación.

```javascript
var a = 0;
var b = a;
console.log("a : ", a, "& b : ", b); // Mostrará "a  : 0 & b  : 0", b vale el valor de a en el momento en que se hace la asignación.
a = 10;
console.log("a : ", a, "& b : ", b); // Mostrará "a  : 10 & b  : 0", b no cambia de valor con a²¹[21].
```

## A recordar

Hay varias formas de declarar una variable, según el alcance deseado: let para un alcance propio al bloque, y var para un alcance propio a la función en la que se declara.

A fin de respetar las buenas prácticas, es preferible elegir un método al principio de un proyecto y mantenerlo después, para mantener una coherencia en el código producido.

## Complemento

**[Declaración de variables](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_types#D%C3%A9clarations)**
