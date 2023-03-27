# **Parámetros, valor de retorno y expresiones de funciones**

<br>

Ahora que sabemos cómo definir una función básica, veamos cómo pasar parámetros y cuál es su importancia.

---

<br>
<br>

---

## **Parámetros**

---

<br>

Un parámetro en el contexto de las funciones se refiere a los valores que se pueden pasar a una función para que los utilice en su lógica interna.

Los parámetros son variables locales dentro de la función y actúan como marcadores de posición para los valores que se proporcionarán cuando se llame a la función.

Al crear o definir una función en JavaScript, se pueden especificar parámetros dentro de los paréntesis que siguen al nombre de la función.

<br>

---

**Por ejemplo:**

```js
function suma(a, b) {
  return a + b;
}
```

En este caso, `a` y `b` son los parámetros de la función creada `suma`.

Cuando se llama a la función `suma` y se le proporcionan argumentos, los valores de esos argumentos se asignan a los parámetros correspondientes.

<br>

---

**Por ejemplo:**

```js
let resultado = suma(3, 5);
console.log(resultado); // Output: 8
```

En este caso, el valor 3 se asigna al parámetro `a` y el valor 5 se asigna al parámetro `b`.

La función realiza la operación de suma y devuelve el resultado `8`.

Los parámetros en JavaScript son opcionales y se puede definir cualquier número de ellos en una función.

También es posible establecer valores predeterminados para los parámetros en caso de que no se proporcionen argumentos correspondientes al llamar a la función.

<br>

---

**Explicación mejorada:**

```js
// En este fragmento de código, se define una función llamada "suma" que toma dos parámetros: "a" y "b".


// Esta función realiza la operación de suma entre los valores de "a" y "b" y devuelve el resultado, recordemos que creamos una función, para reutilizar el código con cualquier otra suma en este caso.
function suma(a, b) {
  return a + b;
}


// A continuación, se llama a la función "suma" y se le pasan los argumentos 3 y 5.
let resultado = suma(3, 5);
// El valor devuelto por la función se guarda en la variable "resultado".


// Finalmente, se imprime el valor de "resultado" en la consola.
console.log(resultado); // Salida: 8
// El resultado esperado es 8, ya que se está sumando 3 y 5.
```

En este caso, se ha definido una función simple llamada "suma" que toma dos parámetros: "a" y "b". Al llamar a esta función con los argumentos 3 y 5, se realiza la operación de suma y se devuelve el resultado 8. Luego, ese resultado se imprime en la consola utilizando `console.log(resultado)`.

Este ejemplo ilustra cómo se pueden utilizar parámetros en una función para aceptar valores específicos y realizar operaciones con ellos. Los parámetros permiten que una función sea más flexible y reutilizable, ya que pueden tomar diferentes valores cada vez que se llama a la función.

<br>

---

### **Que son los argumentos?** 

---

<br>

Un argumento en el contexto de la programación se refiere a **`los valores concretos que se pasan`** a una función **cuando se la llama.**

En el código proporcionado, los argumentos se pasan a la función `suma(a, b)` cuando se la llama utilizando **`suma(3, 5)`**. 

Aquí, los valores `3` y `5` son los argumentos que se pasan a los parámetros `a` y `b` de la función.

En términos más generales, los argumentos son los valores con los que se llama a una función para que pueda realizar su tarea, y reutilizar ese código.

Estos argumentos pueden ser constantes, variables o incluso expresiones más complejas.

**En el ejemplo dado**, los argumentos `3` y `5` se utilizan como operandos en la operación de suma dentro de la función `suma(a, b)`.

Luego, el resultado de esa operación se devuelve y se asigna a la variable `resultado`.

Los argumentos permiten que la función trabaje con valores específicos sin tener que conocerlos de antemano, lo que aumenta la flexibilidad y la reutilización del código.

---
<br>

---

**cuando tenemos un parámetro en una función, podemos definir su valor al llamar a la función.**

**Por lo tanto, podemos definir un valor diferente en cada llamada**

**Retomemos un ejemplo visto anteriormente**

```js
let numero = 100;
/* Declaramos una variable que vale 100 */

function calcDoble() {
    /*Creamos Una función sin parametros,
    pero con el nombre de "calcDoble"*/

  let doble = numero * 2;
  /* Le decimos que una variable declarada con
  let llamada "doble" sea igual a la variable numero (o sea 100)
  pero multiplicada por 2 */

  console.log("El doble del numero " + numero + " es " + doble);
/* en el console.log definido dentro de esta función mostrara 
al ser llamada esta función, el siguiente mensaje:
El doble del numero 100 es 200*/
}

calcDoble();
/* Aquí llamaríamos a nuestra función y nos mostrara 
El doble del numero 100 es 200*/

numero = 40;
/* Aquí redefinimos la variable de 100 que ahora valdrá 40 */

calcDoble();
/* Con lo cual en esta nueva llamada a nuestra función
nos mostrara un console.log diferente:
El doble del numero 40 es 80 */
```

<br>

Supongamos que en este ejemplo queremos calcular el doble de un número pasado como parámetro.

Esto evitará tener que declarar una variable fuera de la función llamada `numero` y tener que cambiar su valor cada vez.

<br>

---

**Por lo tanto, si eliminamos esta variable, obtenemos lo siguiente:**

```js
function calcDoble(?) {

  let doble = ? * 2;

  console.log("Le doble del numero " + ? + " es " + doble);

}

calcDouble(?);

calcDouble(?);
```

---

<br>

**Hemos colocado puntos de interrogación para indicar los lugares donde falta un valor.**

<br>

**¿Cómo se puede inicializar un parámetro que almacenará el valor de un número?**

<br>

_<mark>**Tomemos un ejemplo matemático:**</mark>_

---

`f(x) = x * 2`

---

<u><b>Aquí tenemos una función matemática.</b></u>

Podemos ver que **`x`** es un parámetro de esta función matemática.

**Si calculamos** **`f(4)`**, <u><b>entonces todos los _`x`_ toman el valor 4:</b></u>

<br>

---

**`f(4) = 4 * 2`**

---

<br>

El mismo principio se aplica a las funciones en programación.
---

<br>

<mark><b>Vamos a inicializar un parámetro, que podríamos llamar _"nb"_ por ejemplo.</b></mark>, _este parámetro recordemos es esto_ 👉 **function llamadaFuncion**`(parámetro)`.

Es lo que va dentro de los paréntesis, _esto recibirá el argumento que tendra entre paréntesis la función al ser llamada_ 👉 **llamadaFuncion`(argumento)`**

<br>

También podríamos llamarlo **`x`** o **`a`** o cualquier otro nombre.

<br>

Luego como mostrado mas arriba, al hacer la llamada a la función, especificamos el argumento entre los paréntesis.

<br>

---

**Es decir, el valor que tomará el parámetro **`nb`**:**

```js
function calcDoble(nb) {
  /* Creamos la función llamada "calcDoble",
  y como parámetro tendrá nb */

  let doble = nb * 2;
  /* creamos una nueva variable con let al 
  interior de la función como instrucción 
  diciéndole que se llame doble, y que
  esta contenga la variable/parámetro "nb" 
  por 2 */

  console.log("El doble del numero " + nb + " es " + doble);
/* siguiendo dentro del cuerpo de la función,
le indicamos que como resultado de esta función,
que se indique en la consola el mensaje declarado en ese console.log*/
}

calcDoble(100); //El doble del número 100 es 200
/* Este argumento (entre paréntesis el numero 100), equivale 
al parámetro "nb", ya que llamamos a la función
"calcDoble" y justo después donde tendría que ir el
parámetro "nb", va EL ARGUMENTO! que se enviara a "nb"*/


calcDoble(40); //El doble del número 40 es 80

/* Y aquí mas de la misma cosa 40 ira a suplantar nb y 
toda la función girara en torno al 40 y no a nb*/
```

---

<br>

Podemos ver que esto funciona y que podemos llamar a la función un número ilimitado de veces pasando como parámetro el número para el cual se calculará el doble.

Cuando definimos una función, podemos pasar varios parámetros.

**Por ejemplo, definamos una función que permita calcular el perímetro de un rectángulo:**

<br>

---

**Ejemplo: Perímetro de un rectángulo**

```js
function perimetroRectangulo(largo, longitud) {
  let perimetre = 2 * largo + 2 * longitud;
  console.log("El perimetro del rectangulo es : " + perimetre + " cm2");
}
```

---

<br>

**Cuando llamamos a nuestra función, simplemente necesitamos especificar los argumentos, es decir, los valores correspondientes al ancho y a la longitud, en el orden correspondiente al paso de los parámetros:**

```js
function perimetroRectangulo(largo, longitud) {
  let perimetro = 2 * largo + 2 * longitud;
  console.log("El Perimetro del Rectangulo es de " + perimetro + " cm2");
}
perimetroRectangulo(4, 5);
perimetroRectangulo(2, 4);
perimetroRectangulo(1, 2);
perimetroRectangulo(18, 20);
```

---

Podemos ver que **las diferentes llamadas a la función permiten mostrar el perímetro de un rectángulo con un ancho de** 

- 4 y una longitud de 5

- un ancho de 2 y una longitud de 4

- etc.

<br>

---

---

<br>

<br>

---

## **Valor de retorno**

---

<br>

**¿Qué es un valor de retorno?**

**Recordemos, hace un momento tomamos un ejemplo de una función matemática:**

```
f(x) = x * 2
```

En este caso, hay un parámetro especificado que es `x`.

<br>

---

<br>

Pero, **¿a qué puede corresponder el valor de retorno?**

- Podemos decir que el valor de retorno de esta función es **`f(x)`**.

**En el caso en que x = 4, tenemos:**

```
f(4) = 4 * 2 = 8
```

En el caso en que **`x = 4`**, el valor de retorno de la función será 8.

El **valor de retorno de la función es**, por lo tanto, **`x * 2`**.

Hasta ahora, no hemos definido un valor de retorno.

**Pero podríamos preguntarnos:**

**¿tienen las funciones que hemos definido un valor de retorno?**

El valor de retorno de una función se devuelve mediante la expresión que llama a una función.

**Por ejemplo:**

**El valor de retorno de `perimetroRectangulo(4, 5)`**, se devuelve **mediante la misma expresión que es `perimetroRectangulo(4, 5)`**.

<br>

---

<br>

Veamos si nuestra función tiene un valor de retorno haciendo `un console.log` de la expresión **`perimetroRectangulo(4, 5)`**.

```javascript
function perimetroRectangulo(largo, longitud) {
  let perimetro = 2 * largo + 2 * longitud;
  console.log("El perímetro del rectángulo es de " + perimetro + " cm2");
}
console.log(perimetroRectangulo(4, 5));
```

**Podemos ver que la función se llama**, **pero** que **devuelve** (o tiene un valor de retorno) **undefined**.

---
<br>

**Nuestra función**, por lo tanto, **no tiene un valor de retorno explícito**, es una función que **se puede llamar `"procedimiento"`**.

**Pero imaginemos que queremos que el valor de retorno de nuestra función sea precisamente el perímetro de nuestro rectángulo.**

**Sería más lógico, ya que es el valor que intentamos obtener con la `función perimetroRectangulo()`.**

**Podemos (aunque no es obligatorio) eliminar el console.log que muestra la cadena de caracteres con el perímetro.**

```js
function perimetroRectangulo(largo, longitud) {
    let perimetro = 2 * largo + 2 * longitud;
    return perimetro
  }

console.log("El perímetro del rectángulo es de " + perimetroRectangulo(4, 5) + " cm2")
```

<br>

---

**Para definir el valor de retorno** de una función, **usamos** la palabra clave **`return`:**

```javascript
function perimetroRectangulo(largo, longitud) {
  let perimetro = 2 * largo + 2 * longitud;
  return perimetro;
}
console.log(perimetroRectangulo(4, 5));
```

---

<br>

**En este último ejemplo, la `función perimetroRectangulo()` tiene como valor de retorno el valor de la` variable perimetro`.**

La expresión perimetroRectangulo(4, 5) devolverá 2 * 4 + 2 * 5, es decir, 18.

Como estamos mostrando perimetroRectangulo(4, 5) en la consola, la consola mostrará 18.

<br>

---

**Podemos probar la función con varios argumentos de la siguiente manera:**

```javascript
function perimetroRectangulo(largo, longitud) {
  let perimetro = 2 * largo + 2 * longitud;
  return perimetro;
}
console.log(perimetroRectangulo(4, 5)); //18
console.log(perimetroRectangulo(8, 5)); //26
console.log(perimetroRectangulo(4.4, 1.67)); //12.14
console.log(perimetroRectangulo(64, 45)); //218
```

<br>

---

---

<br>

<br>

---

### **Complemento: Crear una función gracias a una expresión de función**

---

<br>

**En todos los ejemplos de este curso, hemos definido funciones utilizando una instrucción (desde un punto de vista sintáctico).**

**Sin embargo, también es posible crear una función utilizando una `expresión`.**

**Una expresión es una unidad de código que devuelve un valor.**

<br>

---

**Por ejemplo, la siguiente expresión devuelve `4`.**

```javascript
2 * 2
```

<br>

---

**Podemos asignar el valor devuelto por esta expresión a una variable, por ejemplo:**

```javascript
let a = 2 * 2;
```

<br>

---

**Pero, ¿cómo creamos una función mediante una expresión?**

**Aquí tienes un ejemplo muy simple:**

```javascript
let raiz = function raizCuadrada(numero) {return Math.sqrt(numero);};
```

**Podemos observar que asignamos a la `variable "raiz"` la expresión de `nuestra función "raizCuadrada()"`.**

**El propósito de esta función es devolver la raíz cuadrada del número pasado como parámetro, utilizando `"Math.sqrt()"`.**

**En este caso, creamos la función mediante una expresión de función.**

<br>

---

**Sin embargo, también podemos utilizar este enfoque para crear una función anónima, es decir, una función que no tiene nombre:**

```javascript
let raiz = function (numero) {return Math.sqrt(numero);};
```

<br>

---

**En ambos casos, podemos llamar a nuestra función a través de la variable `"raiz"`.**

**Por ejemplo:**

```javascript
console.log(raiz(9));
```

La consola mostrará `3`.

**Ahora ya sabemos cómo declarar una función utilizando parámetros, devolviendo un valor y empleando una expresión de función.**

<br>

---

---