# Los tipos de variables

## Objetivos

- Conocer los diferentes tipos de variables y saber cómo usarlos
- Comprender por qué JavaScript es un lenguaje llamado de tipado débil

## Contexto

Ya sabemos cómo declarar una variable y asignarle un valor. En este curso, veremos qué tipos de valores podemos asignar a una variable y sus particularidades.

## Los diferentes tipos de variables

Las variables pueden ser de los siguientes tipos:

- `object`: el tipo `object` agrupa varios tipos de objetos frecuentemente utilizados, principalmente `Object`, `Array`, `Date`. Un objeto `Object` está compuesto por un conjunto de pares clave/valor. Las claves son cadenas de caracteres y los valores pueden ser de cualquier tipo. Un objeto `Array` es un arreglo de valores cuyos datos son indexables a partir de 0 (el primer elemento corresponderá al elemento 0 del arreglo). Un objeto `Date` devuelve una fecha.

```javascript
let ejemploObjetoPersona = {
  "nombre": "Paul",
  "edad": 20,
  "informaciones": ["informacion1", "informacion2"]
}
// Accedemos a los diferentes elementos con nombreDeLaVariable.nombreDeLaClave
console.log(ejemploObjetoPersona.nombre, " tiene ", ejemploObjetoPersona.edad, " años");
// Mostrará "Paul tiene 20 años"
```

```javascript
let ejemploArray = ["valor1", "valor2", 3];
// Accedemos al elemento "valor1" así: ejemploArray[0] porque el elemento "valor1" está en el índice 0 del array.
console.log("2º elemento: ", ejemploArray[1]); // Mostrará "2º elemento: valor2"
```

```javascript
let fecha = new Date(); // fecha será igual a la fecha del día
```

- `string`:

    - para las cadenas de caracteres, es una secuencia de caracteres que representa un valor textual. Cualquier conjunto de caracteres rodeado de comillas (") o apóstrofos (') se considera una cadena de caracteres, incluidos los números. Si la cadena de caracteres contiene un apóstrofo o una comilla mientras que éste es también el delimitador elegido, habrá que escapar este carácter precediéndolo por una barra invertida (\) o cambiar de delimitador.

```javascript
let miCadenaDeCaracteresComilla = "Me llamo Paul."
let miCadenaDeCaracteresApostrofoEscapado = 'Me llamo \'Paul\'.'⁵[5]
// Escapado sobre el '
let miCadenaDeCaracteresComillaEscapada = "Me llamo \"Paul\"."
// Escapado sobre el "
```

- `number`:

    - comprende todos los números reales y decimales. Sin embargo, hay que tener cuidado: el tipado simple de los números en JavaScript es una excepción. La mayoría de los otros lenguajes, con un tipado más estricto, diferencian los números reales (`int`) y los decimales (`float`, `long`, `double`).

- `symbol`:

    - para los símbolos, apareció con ECMAScript 2015 (ES6). Este tipo representa datos inmutables y únicos, que permiten evitar los problemas de duplicados en algunos casos (claves de un objeto, por ejemplo).

- `null`:

    - una palabra clave especial para indicar un valor nulo en el sentido informático. Dado que JavaScript es sensible a las mayúsculas y minúsculas, sólo `null` es un valor correcto. Cualquier otra forma de escribirlo (`Null`, `NULL`...) sería incorrecta.

- `undefined`:

    - para los valores no definidos.

- `boolean`:

    - este tipo sólo contiene dos valores: `true` (verdadero) y `false` (falso). Para que este valor se almacene como un booleano, no hay que rodearlo de comillas u otro. Es un tipo de datos propio, y no una cadena de caracteres.

```javascript
var ejemploBooleano = 1000 > 5;
console.log(ejemploBooleano); // Mostrará true
```

## JavaScript, un lenguaje de tipado débil y dinámico

JavaScript es un lenguaje llamado de tipado débil y dinámico: esto significa que no es necesario especificar el tipo de las variables que se declaran. El lenguaje detectará por sí mismo el tipo de valor asignado a una variable, y podremos realizar los tratamientos propios de su tipo gracias a ello. Esto significa que podremos almacenar diferentes tipos de valores en una misma variable a lo largo del tiempo. También es posible modificar el tipo de una variable ya definida durante la ejecución de un script.

```javascript
let x = 10;
console.log(typeof x); // Mostrará "number"
x = "10";
console.log(typeof x); // Mostrará "string"
// El tipo de la variable se ha modificado dinámicamente.
```

Cualquier operador devuelve un resultado, aunque tenga que transformar el tipo de uno de los elementos. Si la asignación de una variable mezcla cadenas de caracteres y valores numéricos así como el operador " + ", JavaScript convertirá los números en cadenas de caracteres.

```javascript
let x = "La respuesta es "
x = x + 25;
console.log(x); // Mostrará "La respuesta es 25" como una cadena de caracteres
```

Esto no ocurre para los otros operadores, para los que obtendremos este tipo de resultados:

```javascript
let x = "37" - 7;
console.log(x); // Mostrará 30 como número: convertirá la cadena de caracteres en números para realizar la operación
x = "37" + 7;
console.log(x); // Mostrará 377 como cadena de caracteres: incluirá el 7 a continuación de la cadena de caracteres
```

## Recordatorio

La concatenación consiste en encadenar variables o propiedades unas a continuación de otras, para crear un `string` único. Esta noción se explica más detalladamente en el curso sobre los operadores lógicos.

## Para recordar

- JavaScript es un lenguaje de tipado débil y dinámico, que detecta por sí mismo el tipo de datos almacenados en una variable.
- Es posible, gracias a funciones nativas, hacer un casting de variables, es decir, pasarlas de un tipo a otro tipo.

## Complemento

**[Tipos de variables](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures)**