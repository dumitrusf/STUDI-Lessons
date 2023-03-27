# **Estructura de control `if/else`**

<br>
<br>

---

## **Uso de la condición `if`**

---

<br>

Como sabes, los operadores de comparación pueden devolver **un booleano:** `true` o `false`.

Se pueden utilizar para verificar si un valor es:

- igual, a otro.
- desigual, a otro.
- mayor, a otro.
- o etc, a otro.

<br>

---

**Finalmente, si escribimos:**

```js
let a = 1;

let b = 1;

console.log(a == b);
```
---

<br>

La expresión a == b devolverá un booleano, en este caso true, ya que las dos variables son iguales.
---

<br>

Si no fuera así, devolvería false.
---

<br>

Pero, ¿qué tiene que ver esto con la condición if?
---

<br>

Bueno, podremos usar esta estructura de control especificando una condición como parámetro, es decir, una expresión que devolverá true o false.

Si y solo si esta expresión devuelve true, entonces se ejecutarán las instrucciones especificadas.

<br>

Pero, ¿cómo se escribe una condición if?

---

<br>

---

**He, aquí un ejemplo:**

---

```js
if (/*condición*/) {

  //instrucciones;

}
```
---

Como pueden ver, la sintaxis es bastante simple.

<br>

---

**Tomemos un ejemplo sencillo de una condición:**

```js
(1)  const numero = 11;

(2)  if (numero > 10) {

(3)    console.log("El numero " + numero + " es mas grande que 10");

    }
```

<br>

Podemos ver que hemos especificado la expresión `numero > 10` como condición en la condición `(2)`.

Dado que la **constante** `numero` `(1)` **tiene un valor de 11**, y `11 es mayor que 10`, se ejecuta la instrucción `(3)` `console.log("El numero " + numero + " es mas grande que 10");`.

Por lo tanto, la consola muestra: "El numero 11 es mas grande que 10".

<br>

---

**Sin embargo, podemos ver que si definimos `numero` como 10, por ejemplo:**

```js
const numero = 10;

if (numero > 10) {

  console.log("el numero " + numero + " es mas grande que 10");

}
```

<br>

Dado que `numero` no es mayor que 10, la expresión `numero > 10` devuelve false.

Ya que 10 es igual a 10.

Por lo tanto, la instrucción `console.log("El numero " + numero + " es mas grande que 10");` no se ejecutará.

**La consola no mostrará nada en este caso.**

Podemos ver que se pueden insertar varias líneas de código que se ejecutarán si la condición devuelve true.

<br>

---

**Veamos otro ejemplo:**

```js
const marca = "Peugeot";

const cv = 120;

const puertas = 5;

let precio;

if marca == "Peugeot" || marca == "BMW") {

  precio = (cv * 100 + puertas * 30);

  console.log ("precio = " + precio);

}
```

<br>

En este caso, la expresión `marca == "Peugeot" || marca == "BMW"` **devolverá true**, ya que la variable `marca` está definida como la cadena de caracteres "Peugeot".

Por lo tanto, las dos líneas en el cuerpo del `if` (es decir, las líneas dentro de las llaves del `if`) se ejecutan, se calcula el precio y se muestra en una cadena a través de la consola.

Finalmente, esta condición permite ejecutar las dos líneas del cuerpo del `if` solo si la marca es Peugeot o BMW.

<br>

---

**Si tomamos la marca Renault como ejemplo:**

```js
const marca = "Renault";

const cv = 120;

const puertas = 5;

let precio;

if (marca == "Peugeot" || marca == "BMW") {

  precio = (cv * 100 + puertas * 30);

  console.log ("precio = " + precio);

}
```

<br>

**Podemos ver que ninguna de las dos instrucciones del cuerpo de la condición `if` se ejecutan.**

---

---

<br>

<br>

---

## **Uso de la palabra clave `else`**

---

<br>

La palabra clave `else` **(que significa literalmente "sino")** permite decir de alguna manera: "Si una condición se cumple (en `if`),pues se ejecutan las primeras instrucciones, sino (else), ejecuta las segundas instrucciones".

En resumen, la palabra clave else se utiliza para indicar las instrucciones a ejecutar si la expresión de la condición anterior devuelve false.

<br>

---

**La sintaxis es muy simple:**

```js
if (/*condition*/) {

  //instructions;

}

else {

  //instructions;

}
```

<br>

**Retomemos el ejemplo anterior y agreguemos un else para mostrar en la consola una cadena de caracteres si la marca no es ni Peugeot ni BMW.**

<br>

---

**EJEMPLO:**

```js
const marca = "Renault";

const cv = 120;

const puertas = 5;

let precio;

if (marca == "Peugeot" || marca == "BMW") {

  precio = (cv * 100 + puertas * 30);

  console.log ("precio = " + precio);

}

else {

  console.log("La marca " + marca + " no es valida");

}
```

<br>

**En este caso, como la expresión de la condición devuelve false, se ejecuta la instrucción del else.**

<br>

---

**Por lo tanto, la consola muestra:**

```
TERMINAL:

  La marca Renault no es valida
```
---

<br>

**Si cambiamos la marca Renault por la de BMW:**

<br>

**EJEMPLO:**

```js
const marca = "BMW";

const cv = 120;

const puertas = 5;

let precio;

if (marca == "Peugeot" || marca == "BMW") {

  precio = (cv * 100 + puertas * 30);

  console.log ("precio = " + precio);

}

else {

  console.log("La marca " + marca + " no es valida");

}
```

---

<br>

**Entonces, se ejecutan las primeras instrucciones (las del if).**

<br>

**La consola muestra:**

```
TERMINAL:

  Precio = 12150
```

---

<br>

Con lo cual, el script funciona perfectamente!


---

---

<br>

<br>

---

## **Uso de `else if`**

---

<br>

Ahora podemos hablar de la instrucción else if, literalmente "si if no cumple / sino if ...".

La estructura else if nos permite agregar una condición si la expresión de la condición anterior de if devuelve false.

<br>

---

**La sintaxis no es mucho más complicada:**

```js
if (/*condición 1*/) {

  //instrucciones;

}

else if (/*condición 2*/) {

  //instrucciones;

}

else {

  //instrucciones;

}
```
---

<br>

**Para poner un ejemplo, podemos mejorar nuestro script anterior para que la estructura de control ejecute lo siguiente:**

<br>

- " `Si (if)` la marca es 'Peugeot' o 'BMW' y si el número de CV es menor o igual a 150, calcular el precio y mostrarlo."

<br>

- " `Sino if (else if)`, si la marca es 'Peugeot' o 'BMW', calcular el precio agregando un impuesto de 2.000 € y mostrar el precio con impuestos."

<br>

- " `Sino (else)`, mostrar que la marca no es válida". Esta condición es coherente, así que podemos escribir nuestro script:

<br>

---

**EJEMPLO:**

```js
const marca = "Peugeot";

const cv = 180;

const puertas = 5;

let precio;

if ((marca == "Peugeot" || marca == "BMW") && cv <= 150) {

  precio = (cv * 100 + puertas * 30);

  console.log ("Precio = " + precio);

}

else if (marca == "Peugeot" || marca == "BMW") {

  precio = ((cv * 100 + puertas * 30) + 2000);

  console.log ("Precio taxé = " + precio);

}

else {

  console.log("La marca " + marca + " no es valida");

}
```

---

<br>

En este ejemplo, **la condición verifica si la marca es "Peugeot" o "BMW"**, `y` **si el número de CV es menor o igual a 150.**

Como el número de CV no es menor o igual a 150 (y es 180cv), la expresión de la condición devuelve false.

Las instrucciones del **if no se ejecutan** y `se procesa la condición del else if`.

Como la marca es igual a "Peugeot", la expresión de la condición (del else if) es verdadera (por culpa de los cv que son 180) y las instrucciones del cuerpo del else if se ejecutan:

- se calcula el precio con un impuesto de 2.000 
  
  y
  
- se muestra el precio con impuestos.

<br>

---

**El sino (osea `else`) se habría ejecutado solo si la condición del sino if (`else if`) hubiera sido falsa, es decir, _si la marca no hubiera sido ni "Peugeot" ni "BMW"._**
---

<br>

---
---