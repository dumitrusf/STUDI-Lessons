# **Conceptos `String` y `Array`**

<br>
<br>

---

## **El concepto `string` en JavaScript**

---

<br>

En lenguaje de programación, **el término `"string"`** (que significa "cadena" en inglés) **se refiere a una secuencia de caracteres.**

**Las cadenas de caracteres se consideran** como **un tipo de dato primitivo en programación.**

En JavaScript, **las cadenas de caracteres pueden representarse** tanto **como tipos de datos primitivos** **como objetos `string`**.

**Todos las valores literales colocados entre `comillas simples (')`, `comillas dobles (")` o ``backticks ( ` )`` se consideran como cadenas de caracteres primitivas en JavaScript.**

<br>

---

<br>

**La distinción entre las cadenas de caracteres primitivas y los objetos string es la siguiente:**

- **En JavaScript, las cadenas de caracteres primitivas son:**

    - valores simples que **no poseen métodos ni propiedades asociadas**

    ---

    <br>

- En cambio, **los objetos string se crean usando el `constructor string`** (con o sin la palabra clave “new”):

    - poseen métodos y propiedades específicas

<br>

---

<br>

Como hemos dicho, **un objeto string permite envolver** ("wrapper") **un valor primitivo string.**

**Permite utilizar métodos y propiedades específicos de los objetos "sobre el valor primitivo envuelto"**

---

<br>

**Tomemos un ejemplo para entender mejor:**

<br>

---

### **La cadena de caracteres de tipo `string` pasa al tipo `objeto`**

---

<br>

```js
let str_primi = "mandarina";
// Una variable normal primitiva de tipo string

let str_obj = new String(str_primi);
// una nueva variable llamada `str_obj` instanciando como objeto la variable `str_obj` que contiene el tipo de dato primitivo string "mandarina"

console.log(typeof str_primi);
// Vemos que typeof nos indica que "str_primi" es de tipo string primitivo

console.log(typeof str_obj);
// y ahora vemos que "mandarina", es un objeto gracias a que la convertimos en objeto gracias a `new string`
```

<br>

---

<br>

**El resultado en la consola será:**

```
String
Object
```

---

<br>

**Explicaciones:**

1. **La primera línea:**

    - crea una variable `str_primi` que **contiene una `"cadena de caracteres"` primitiva** `"mandarina"`.

    ---

    <br>

2. **La segunda línea:**

    - crea una variable `str_obj` que **contiene un `"objeto string"` creado a partir de la variable `str_primi`.**

---

<br>

**Las dos últimas líneas usan la función `typeof` para mostrar el tipo de cada variable en la consola.**

- La primera línea mostrará `"string"`:

    - **lo que indica que la variable `"str_primi"` contiene una "cadena de caracteres primitiva".**

    ---

    <br>

- La segunda línea mostrará `"object"`:

    - **lo que indica que la variable `"str_obj"` contiene un "objeto string".**

---

<br>

**Así, el ejemplo muestra que AUNQUE LAS DOS VARIABLES CONTIENEN LA MISMA CADENA DE CARACTERES:**

- una es **una cadena de caracteres primitiva**

    y
    
- la otra es **un objeto string**

<br>

---

---

<br>

<br>

---

## **Cómo usar la propiedad `"length"` para obtener la longitud de una cadena de caracteres en JavaScript**

---

<br>

**Los objetos `string`** en JavaScript son objetos que **poseen propiedades y métodos** que les son **propios**.

Es importante conocerlos para poder utilizarlos eficazmente.

**Una de las propiedades principales de un objeto `string` es `"length"`.**

**Esta propiedad permite determinar la longitud de la cadena** primitiva envuelta **devolviendo el número exacto de caracteres que contiene.**

Pero esta propiedad **también es accesible a través del tipo primitivo string**, aparte de serlo en con el tipo objeto string.

---

<br>

```
De hecho, cuando buscamos acceder a un método sobre una cadena de caracteres primitiva, JavaScript crea un objeto temporal que envuelve esta cadena, para llamar a este método.
```

Es este principio **(el principio de que js crea temporalmente el primitivo string en un objeto)** el que permite llamar a métodos como `"length"` sobre valores primitivos string.

---

<br>

---

### **Formas de usar `.length`**

---

<br>

**Existen 2 formas comunes de usar la propiedad `"length"` sobre una cadena de caracteres primitiva.**

<br>

---

1. **La primera "consiste en crear una variable que contiene la cadena de caracteres", por ejemplo:**

```js
let str = 'abcd';
```

**Luego, para obtener la longitud de la cadena, usamos la propiedad `"length"` de esta manera:**

```js
console.log(str.length);
```

---

<br>

2. **La segunda forma "consiste en CREAR UNA NUEVA CADENA DE CARACTERES directamente EN EL argumento" del `console.log`, así:**

```js
console.log('efghi'.length);
```

---

<br>

**EN ESTA FORMA, LA NUEVA CADENA DE CARACTERES DEBE ESTAR COLOCADA ENTRE COMILLAS SIMPLES.**

En ambos casos, obtendremos respectivamente los valores cuatro y cinco, que corresponden a la longitud de la cadena almacenada en la variable `str` y la de la nueva cadena creada directamente en el argumento del `console.log`.

---

---

<br>

<br>

---

## **Métodos más comúnmente utilizados para manipular las cadenas de caracteres**

---

<br>

Una cadena de caracteres en JavaScript posee varios métodos que permiten manipularla de diferentes formas.

**Es importante conocer los métodos más comúnmente utilizados, tales como:** 

- **`CharAt()`**

- **`indexOf()`**

- **`lastIndexOf()`**

- **`slice()`**

- **`split()`**

- **`etc.`**

---

**Estos métodos pueden ser útiles para agregar o extraer elementos de una cadena.**

<br>

---

<br>

**Primero, vamos a ver cómo escapar algunos caracteres.**

**Si no los escapamos correctamente, el navegador puede confundir estos caracteres y eso puede causar errores.**

<br>

---

<br>

**Hay que saber cómo los caracteres están posicionados dentro de una cadena de caracteres, porque eso puede afectar el funcionamiento de algunos métodos.**

**Abordaremos esto más en detalle cuando hablemos de la manipulación del objeto string usando métodos.**

---

---

<br>

<br>

---

## **Atención!: El escapado de algunos caracteres**

---

<br>

Los caracteres son reconocidos como una cadena porque están colocados entre comillas simples o entre comillas dobles.

Si una cadena está rodeada de comillas simples, puede haber una confusión cuando insertamos apóstrofes, por ejemplo.

Para evitarlo, es necesario colocar el ``"backslash (`)"`` antes de este apóstrofe para escaparlo.

---

<br>

---

### **Ejemplo: El escapado del apóstrofe, de `las comillas dobles` y de los `backslashes`**

---

<br>

```js
let str = 'C\'est un exemple d\'utilisation de l\'échappement de caractères';
```

---

<br>

En este ejemplo, **hemos escapado los apóstrofes `(C\'est)` precediéndoles con un carácter de backslash `(\)`.**

**Esto permite que JavaScript reconozca que estos caracteres son parte de la cadena de caracteres y no de la sintaxis del lenguaje.**

---

---

<br>

<br>

---

## **Entendiendo el posicionamiento de los caracteres**

---

<br>

- Una cadena de caracteres está compuesta por `"n"` caracteres donde **`"n"` representa el número de caracteres.**

- **Cada carácter** en una cadena de caracteres `(string)` **está asociado con una posición numérica** llamada `"índice"`.

    - El índice del primer carácter en la cadena es generalmente `0`
    
    - el índice del segundo carácter es 1
    
    - el índice del tercer carácter es `2`
    
    - y así sucesivamente.

    ---

    <br>

Para saber en un futuro mas fácilmente, **en una cadena de caracteres compuesta por** `"n"` **caracteres**, **el último carácter se encuentra en la posición `"n restamos menos 1"`.**

Por ejemplo, si la cadena de caracteres contiene `"20"` caracteres, entonces **el último carácter se encuentra en la posición `19`**.

De hecho, las cadenas de caracteres están construidas como matrices compuestas por diferentes caracteres, con un índice para cada carácter.

<br>

---

**Ejemplo JavaScript:**

```js
const str = "iuhzefpj";
console.log(str[0]); // i: en consola nos muestra que en la posición [0] se encuentra la "i"
console.log(str[3]); // z: en consola nos muestra que en la posición [3] se encuentra la "z"
```

---

<br>

**En resumen, hemos aprendido que una cadena de caracteres `(string)` está compuesta por una secuencia de caracteres cuya longitud y posición individual podemos determinar.**

**Es importante asegurarse de escapar correctamente los caracteres especiales para evitar confusiones para el navegador.**

---

---

<br>

<br>

---

## **Distinción entre `cadenas primitivas` y `objetos string` en JavaScript**

---

<br>

**Es esencial distinguir** `los objetos string` de los `valores primitivos string`.

**Los valores literales entre:** 

- comillas simples: `''`

- dobles: `""`

    o
    
- backticks: ``` `` ```

**son cadenas primitivas.**

---

<br>

**Sin embargo, los `objetos string` permiten:**

- envolver valores `primitivos string` en un `objeto string`.

---

Como hemos visto anteriormente, **cuando usamos una propiedad como `length` con un valor `primitivo string`**, **JavaScript CREA AUTOMÁTICAMENTE un `OBJETO temporal string` que "envuelve el valor primitivo" para dar acceso a la propiedad llamada.**

**Pero también podemos crear directamente un `objeto string` que envuelve una `cadena de caracteres primitiva` para acceder constantemente a las propiedades y métodos de string.**

**Para ello, tendremos que llamar al `constructor string`.**

<br>

---

### **Ejemplo: Cadenas primitivas y objetos string**

---

<br>

```js
let str1 = "Cadena de caracteres primitiva entre comillas dobles" 

let str2 = 'Cadena de caracteres primitiva entre comillas simples';

let str3 = `Cadena de caracteres primitiva entre backticks`;

let str4 = new String("Cadena de caracteres"); //objeto String
```

---

<br>

En muchos casos, `los valores primitivos` y `los objetos` de cadena de caracteres pueden ser utilizados de manera intercambiable.

Los valores literales para las cadenas están indicados por comillas simples, dobles o backticks.

Los backticks permiten definir literales de plantillas de cadenas para interpolar expresiones dentro de una cadena.

---

---

<br>

<br>

---

## **Comprender los arreglos `(Arrays)` en JavaScript**

---

<br>

En JavaScript, **los arreglos `(array)` son una estructura de datos** especial **que nos permite almacenar colecciones ordenadas de valores.**

**A diferencia de las cadenas, en los Arreglos no existe un tipo primitivo de ellos (de los Array no hay primitivo u cosa asi).**

**Los array son objetos**, y no hay algún otro como primitivo.

**Son indispensables cuando necesitamos almacenar una lista de elementos:**

- como nombres de usuarios.

<br>

---

**Los arreglos nos permiten:**

- **conservar el orden de los elementos**

    **y**
    
- **manipularlos fácilmente**

<br>

---

<br>

Para **crear un arreglo en JavaScript**, podemos **usar `corchetes []` y separar los elementos con `comas ( , )`.**

---

<br>

---

### **Ejemplo: Los elementos de un arreglo**

---

<br>

**Por ejemplo, si queremos almacenar una lista de `nombres de usuarios`, podemos escribir:**

```javascript
let usuarios = ['John', 'Peter', 'Chris'] ;
```

---

<br>

**En este ejemplo 👆 , la variable usuarios contiene un arreglo con tres elementos:**

- **"John"**

- **"Peter"**

    y
    
- **"Chris"**.

---

<br>

**Podemos "acceder a los elementos del arreglo" utilizando su posición en el arreglo, también llamado `"índice"`.**

<br>

---

**Por ejemplo, para acceder al segundo elemento `(que es "Peter")`, podemos usar el `índice 1`:**

```javascript
console.log(usuarios[1]); // muestra "Peter"
```

---

<br>

**También es posible "llamar" al `constructor array` para construir un arreglo:**

```javascript
let usuarios = new Array('John', 'Peter', 'Chris');
```

---

<br>

- **Nuestro arreglo es un objeto que contiene varios valores entre corchetes separados por comas.**

- **Los objetos array pueden ser almacenados a través de variables.**

- **El interés de los array es que podemos usar individualmente cada uno de estos valores.**

- **Sin arreglo, cada valor debe ser asignado a una variable, lo que puede ser tedioso si tenemos cientos.**

- **Además, podemos usar un bucle para recorrer varios valores de un arreglo almacenados en una misma variable.**

<br>

----

<br>

**Los arreglos serán útiles cuando almacenemos varios datos ordenados a través de un mismo objeto.**

---

---

<br>

<br>

---

## **Propiedades y métodos útiles para manipular arreglos en JavaScript**

---

<br>

**Es importante conocer estos métodos de array ya que nos permiten:** 

- agregar

- eliminar

- ordenar

    y
    
- manipular

**los elementos del arreglo de manera eficiente.**

---

<br>

**Entre los métodos más comúnmente utilizados se encuentran:** 

- `concat()`

- `join()`

- `pop()`

- `push()`

- `shift()`

- `unshift()`

- `slice()`

- `splice()`

    y

- `reverse()`

**Cada uno de estos métodos puede ser utilizado para resolver problemas específicos en la manipulación de arreglos.**

<br>

---

### **Método: La sintaxis para usar un método**

---

<br>

**Para tener una idea de la sintaxis, aquí está cómo proceder:**

```js
let arreglo = ['a', 'b', 'c'];

let otroArreglo = arreglo.push('d', 'e');

console.log(otroArreglo);
// la consola muestra 
// 5

console.log(arreglo);
// la consola muestra
// [ 'a', 'b', 'c', 'd', 'e' ]
```

---

<br>

**Este código crea un arreglo llamado `"arreglo"` que contiene los valores:**

- `'a'`

- `'b'`

    y
    
- `'c'`.

---

<br>

**Luego, crea otro arreglo llamado `"otroArreglo"` utilizando el método `push()` que agrega los valores:**

- `'d'`

    y
    
- `'e'`

**al final del arreglo `"arreglo"`.**

---

<br>

**EL MÉTODO `.push()` TAMBIÉN DEVUELVE "LA NUEVA LONGITUD DEL ARREGLO", QUE SE ALMACENA EN LA VARIABLE `"otroArreglo"`.**

<br>

---

<br>

**Luego, el código utiliza la función `console.log` para mostrar ambos arreglos en la consola del navegador o del editor de código.**

<br>

---

1. **La primera línea de código MUESTRA LA NUEVA LONGITUD DEL ARREGLO `"otroArreglo"` (que ahora es 5).**

2. **Mientras que la segunda línea muestra el arreglo `"arreglo"` ACTUALIZADO, QUE AHORA CONTIENE LOS VALORES `'a'`, `'b'`, `'c'`, `'d'` y `'e'`.**

---

---

<br>

<br>

---

## **A recordar**

---

<br>

**Hemos examinado 2 conceptos básicos en JavaScript:**

<br>

- **Las cadenas de caracteres `("string")`**

    y
    
- **Los arreglos `("array")`**

---

<br>

- **Las cadenas de caracteres `(string)` y los arreglos `(Arrays)` tienen propiedades y métodos que permiten manipular los datos de manera eficiente.**

- **Las propiedades y métodos asociados con las cadenas de caracteres `(string)` y los arreglos `(Arrays)` son muy útiles para manipular diferentes tipos de datos.**

- **Las cadenas de caracteres permiten almacenar datos simples:**

    - como una palabra o un texto colocado entre comillas

    ---

    <br>
    
- **mientras que los los arreglos `(Arrays)` son adecuados para datos más complejos:** 

    - como una colección ordenada de cadenas de caracteres.

    ---

    <br>
    
**Al utilizar los métodos adecuados, podemos** 

- **agregar**

- **eliminar**

- **ordenar**

    y
    
- **manipular**

---

<br>

**fácilmente estos datos para satisfacer nuestras necesidades de programación.**

---

---