# **Operadores de comparación y Operadores lógicos**

<br>

---

## **Operadores de comparación**

---

<br>

**Hablemos ahora sobre los operadores de comparación:**

Ya has escuchado hablar de los famosos booleanos?

VARIABLES cuyo valor puede ser **true o false**.

---

```
Los operadores de comparación nos permitirán comparar valores y verificar "hipótesis" devolviendo un valor booleano (true si la hipótesis es verdadera y false si no lo es).


Los operadores de comparación son indispensables cuando utilizamos sistemas de condicionales.


Veamos diferentes operadores de comparación y cómo funcionan:
```

<br>

**👇 Aquí tienes algunos ejemplos:**

<br>

---

### **El operador << == >>**

---

<br>

El operador "==", conocido como <i>`<operador de igualdad>`</i> verifica si 2 valores son iguales o no.

Si estos son iguales, la expresión nos devuelve **TRUE**, de lo contrario **FALSE**.

<br>

---

**Por ejemplo: 2 valores**

```js
let a = 1;

let b = 2;

let c = 1;

console.log(a == b);

console.log (a == c);
```
---

<br>

**o también este ejemplo:**

```js
let a = "Ordenador";

let b = "Teléfono";

let c = "Ordenador";

console.log(a == b);

console.log (a == c);
```

---

<br>

**[Enlace 19 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-19-DumitruSF1)**

<br>

Podemos ver que `console.log(a == b)` muestra false porque las dos cadenas de caracteres no son iguales, mientras que `console.log(a == c)` muestra true porque las dos cadenas de caracteres son iguales.

---

---

<br>

<br>

---

### **El operador << != >>**

---

<br>

El operador "!=", <i>`<operador de desigualdad>`</i> verifica si dos valores NO son iguales:

<br>

---

**Por ejemplo:**

```js
let a = 17.2;

let b = 17.5;

let c = 17.2;

console.log(a != b);

console.log (a != c);
```

<br>

**[Enlace 20 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-20-DumitruSF1)**

<br>

En este caso, `console.log(a != b)` muestra `true` en la consola porque `a` y `b` no son iguales.

Sin embargo, `console.log(a != c)` muestra `false` porque `a` y `c` son iguales.

---

---

<br>

<br>

---

### **Complemento: Los operadores << === >> & << !== >>**

---

<br>

Los operadores `=== (igualdad estricta)` y `!== (desigualdad estricta)` verifican si un `valor` es `igual` `o` `desigual a otro`, teniendo en cuenta también el tipo de valor (entero, booleano, cadena de caracteres, etc.).

El `operador "==="`, verifica `si` un valor `es igual` a otro y si sus tipos son iguales.

En este caso, devuelve `true`.

<br>

El `operador "!=="` devuelve `true` `si hay` al menos una `diferencia` de tipo o valor entre los dos valores.

`Si no hay diferencia`, y los valores son iguales!, este `devolverá false!`

---

**Por ejemplo:**

```js
let a = 1; // Tipo number

let b = "1"; // Tipo string

console.log(a == b); //igualdad : true (igual?, si por que esta el carácter 1)

console.log(a === b); //igualdad estricta : false (del todo igual?, No!, por que uno es string y otro number)

console.log(a != b); //desigualdad : false (son distintos?, No!, por lo tanto False, ya que son lo mismo (1))
// recordemos, operador de desigualdad sera true cuando sea diferentes y no iguales los valores


console.log (a !== b); ////desigualdad estricta : true (True!, por que no son lo mismo!)
/* Aunque veamos un 1! estos no son iguales!, ya que uno es 
completamente diferente en cuanto a lo que indica
uno es number y otro STRING!! */
```
---

<br>

**[Enlace 21 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-21-DumitruSF1)**


---

---

<br>

<br>

---

### **Complemento: Los operadores << _`<`_ >>, << _`>`_ >>, << _`<=`_ >> & << _`>=`_ >>**

---

<br>

Para comprender mejor, enumeremos y expliquemos cada uno de estos operadores:

- **`<`** : Menor que. 

    - Verifica si un valor es estrictamente menor que otro.

<br>

- **`>`** : Mayor que. 
    
    - Verifica si un valor es estrictamente mayor que otro.

<br>

- **`<=`** : Menor o igual que. 
    
    - Verifica si un valor es menor o igual que otro.

<br>

- **`>=`** : Mayor o igual que.
    
    - Verifica si un valor es mayor o igual que otro.

<br>

---

**Ejemplo, simple:**

```js
let a = 17.2;

let b = 17.5;

let c = 17.2;

console.log(a < b); //true

console.log (a <= c); //true

console.log (a > b); //false

console.log (a >= c); //true
```

<br>

**[Enlace 22 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-22-DumitruSF1)**

<br>

Para cada línea de `console.log`, un comentario especifica en el código el valor booleano que se muestra.

Se puede observar que es coherente.

---


<br>


👇 Ahora abordemos los operadores lógicos y cómo funcionan con ejemplos concretos.

---

---

<br>

<br>

---

## **Los operadores Lógicos**

---

<br>

**Podemos mencionar 3 operadores lógicos fundamentales en JavaScript:**

<br>

- && = AND

<br>

- || = OR

<br>

- ! = NOT

<br>

En esta sección, utilizaremos solo ejemplos donde las expresiones devuelven un valor booleano.

<br>

---

### **El operador << && >> AND**

---

<br>

**El operador && significa literalmente "y".**

En el caso de utilizar "`&&`" entre dos expresiones que devuelven un valor booleano, `el operador devolverá true si ambas expresiones se confirman` lo indicado, `de lo contrario` de no ser confirmado `sera false`.
 
Por lo tanto, al utilizar el **operador "`&&`"**, `estamos verificando si ambas expresiones son "verdaderas".`

`Si` solo una de ellas lo es, pero `la otra NO!`, **el operador devolverá false.**

<br>

---

**Veamos un ejemplo concreto:**

```js
let a = 17.5;

let b = 17.5;

let c = 17.2;

console.log(a > c && a < b); //false, como solo uno es verdadero, pues no devuelve true

console.log(a == b && a > c); //true, los dos se confirman por lo tanto devuelve True!
```

---

<br>

**[Enlace 23 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-23-DumitruSF1)**

<br>

La instrucción `console.log(a > c && a < b)` **muestra false** en la consola, porque una de las expresiones no es verdadera, `la expresión a < b`.

Aunque `la expresión a > c` **se cumple**, la expresión `a < b` **es falsa**.

Por otro lado, `la instrucción console.log(a == b && a > c)` **muestra true** porque **ambas expresiones** a == b y a > c **son verdaderas**.

---

---

<br>

<br>

---

### **El operador << || >> OR**

---

<br>

**El operador || significa literalmente "o"**

En el caso de utilizar "`||`" entre dos expresiones que devuelven un valor booleano, `el operador devolverá true si al menos una de las dos expresiones se confirman` lo indicado, `de lo contrario` **de no ser confirmado ninguno** `sera false`.

Por lo tanto, al utilizar el operador "`||`", estamos verificando si como mínimo una de estas es "verdadera".

Si no hay ninguna de ellas!, el operador devolverá false.

<br>

---

**Veamos un ejemplo concreto:**

```js
let a = 17.5;

let b = 17.5;

let c = 17.2;

console.log(a == b || a < c); //true, uno de ellos se confirma, por lo tanto sera true



console.log(a < c || a == c); //false, ninguno es verdadero, con lo cual, no basta para que sea true
```

---

<br>

**[Enlace 24 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-24-DumitruSF1)**

<br>

La instrucción `console.log(a > c && a < b)` **muestra false** en la consola, porque una de las expresiones no es verdadera, `la expresión a < b`.

Aunque `la expresión a > c` **se cumple**, la expresión `a < b` **es falsa**.

Por otro lado, `la instrucción console.log(a == b && a > c)` **muestra true** porque **ambas expresiones** a == b y a > c **son verdaderas**.

La instrucción `console.log(a == b || a > c)` **muestra true** en la consola, porque una de las dos expresiones se confirma, `la expresión a == b se cumple`. 

Si ambas expresiones fueran verdaderas, la instrucción también habría mostrado "true", ya que **"OR", significa que se cumple AL MENOS UNO.**

<br>

---

Por otro lado, la instrucción "console.log(a < c || a == c)" muestra "false" porque ninguna de las dos expresiones es verdadera.

Con lo cual ninguna se cumple.

---

---

<br>

<br>

---

### **El operador << ! >> NOT**

---

<br>

**El operador ! significa literalmente "NO"**

`Se utiliza para devolver "true" si una expresión devuelve "false" y viceversa:`

<br>

---

**Veamos un ejemplo concreto:**

```js
let a = 17.5;

let b = 17.5;

let c = 17.2;

let d = true;

let e = false;

console.log(!(a == b)); // seria true por que A y B son iguales, pero al añadir el NOT antes de esa declaración, le decimos que NO sea true y que sea False 

console.log(!(a > b)); //Seria False, Por que A y B son iguales , y la expresión no se cumple, pero con El NO, esto ahora sera True!

console.log(! d); //false, Lo mismo

console.log(! e); //true, Lo mismo
```

---

<br>

**[Enlace 25 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-25-DumitruSF1)**

<br>

_En los dos primeros_ `console.log`, colocamos las expresiones **a == b y a > b entre paréntesis** `para indicar` que `si` la expresión completa `devuelve true`,` entonces false será mostrado` y viceversa.

**Los paréntesis permiten escoger la expresión envuelta en el paréntesis e invertir el booleano devuelto por toda la expresión y no solo la variable que sigue inmediatamente al operador: !.**

---

---

<br>

<br>

---

### **Uso de varios operadores en un mismo ejemplo**

---

<br>

Los operadores de comparación y los operadores lógicos se pueden utilizar para crear estructuras más complejas y verificar si un conjunto de expresiones se cumplen.

Sin embargo, el principio básico sigue siendo el mismo.

<br>

---

**Veamos un ejemplo concreto:**

```js
//Voiture

let marque = "Renault"

let cv = 100;

let portes = 3;

let prix = 10000;


let condition = ((marque == "Peugeot" || marque == "Renault") && (cv >= 80 && cv <= 100) && portes != 3 &&prix <= 10000)

// sera FALSE por que se cumple todos menos las puertas que son 3!, y en la condición, esta claramente declarado que no sea de 3 que sea desigual a 3 con el operador desigual !=, si cambiamos por un 5 esta sera TRUE!

console. log(condition);

```

---

<br>

Los operadores en JavaScript ya no tienen muchos secretos por aguardarnos.

La documentación de MDN proporciona listas bastante completas de los operadores de JS, acompañados de ejemplos.

Puedes encontrarlos en la página mencionada anteriormente:

**[mdn web docs JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**.
---

<br>

Esta página detalla todos los puntos que hemos visto y también aborda operadores que no hemos discutido.

No dudes en consultarla !

---

---

<br>

<br>