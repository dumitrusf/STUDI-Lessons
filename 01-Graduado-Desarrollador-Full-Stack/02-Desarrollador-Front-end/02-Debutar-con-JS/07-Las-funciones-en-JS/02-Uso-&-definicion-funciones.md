# **Utilización y definición de funciones**

<br>

---

## **Funciones predefinidas**

---

<br>

En JavaScript y en general en todos los lenguajes de programación, existen funciones predefinidas.

Hay varias funciones predefinidas que se pueden llamar en cualquier parte de un código JS.

<br>

---

**Por ejemplo: La función `eval()`.** 

Esta permite evaluar un script de JavaScript que esta dentro de una cadena de caracteres.

<br>

---

**Por ejemplo, si escribimos un script dentro de una cadena:**

```js
const numero = 15; console.log(numero * 2);
```
---

<br>

---

**Podemos llamar a la función `eval()` indicando la cadena entre paréntesis:**

```js
eval("const numero = 15; console.log(numero * 2);")
```

---

<br>

Podemos ver que con esta función 👆, el código dentro de la cadena (el código entre comillas) se evalúa y, por lo tanto, se ejecuta.

La consola muestra 30.

Este es un ejemplo sencillo de una función predefinida.

<br>

---

Se encuentra una lista de funciones predefinidas en la documentación de Mozilla en la dirección: 

[developer.mozilla.org](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions) en la sección **"Funciones Predefinidas"**. 

Pero centrémonos en la definición de "funciones personalizadas".

---
---

<br>
<br>

---

## **Sintaxis para definir funciones**

Para definir funciones en JavaScript.

<br>

---

**Se debe respetar la siguiente sintaxis:**

```js
function nombreDeLaFuncion(parametros) {
  instrucciones;
}
```

---

<br>

Se usa la palabra clave `function` para definir una función.

Los parámetros (en caso de haber) se declaran entre paréntesis y las instrucciones se definen entre llaves.

 Pero ¿cómo llamamos a nuestra función para ejecutar las instrucciones que contiene?

---
---

<br>
<br>

--- 

## **Sintaxis de la llamada a una función**

---

<br>

---

**Para llamar a una función en JavaScript, se puede utilizar la siguiente sintaxis:**

```javascript
nombreDeLaFuncion(parametros);
```

---

**Tomemos un ejemplo simple:**

<br>

### **Primera definición de una `function`**

---

<br>

Deseamos crear una función que calcule el doble de un número y lo muestre en una cadena de caracteres.

Definimos una función que llamaremos **`calcDouble()`:**

<br>

---

```js
const numero = 100;
/*Declaramos una variable Const 
su valor es 100*/


function calcDoble() {
  /*Declaramos el nombre de la función llamada calcDoble*/
  
  let doble = numero * 2;
  /*Dentro de esta función, le otorgamos unas
  instrucciones diciendo que una nueva 
  variable llamada, "doble" contendrá el valor de
   la variable numero "que es 100" pero multiplicado
    por 2 "osea el doble" */
  
  
  console.log("El doble del número " + numero + " es " + doble);
  /*Finalmente indicamos en las instrucciones del cuerpo
  que vamos a mostrar en consola el siguiente mensaje:
  El doble del numero "100" es "200"*/
  
}
```
---

<br>

Hemos definido la función **`calcDoble`**.

Sin embargo, si ejecutamos este código, no mostrara nada, por que esta función no ha sido llamada todavía.

<br>

---

**Debemos llamar a nuestra función para que se ejecuten sus instrucciones:**

```javascript
const nombre = 100;

function calcDouble() {
  let double = nombre * 2;
  console.log("El doble del número " + nombre + " es " + double);
}

calcDouble();
/*"calcDouble();" estamos llamando a la función "function calcDouble()".
Al hacer esto, se ejecutan las "instrucciones que están dentro del cuerpo de la función".
Es una forma de invocar o activar la función para que realice su tarea.*/
```

Podemos ver que funciona, la consola muestra: "El doble del número 100 es 200".

Ahora, supongamos que cambiamos el valor de la variable `numero` (cambiando `const` por `let`) y lo establecemos en 40, por ejemplo.

Queremos calcular nuevamente el doble de `numero`.

¿Necesitamos volver a escribir las instrucciones para calcular el doble de `numero`?

<br>

---

**No, solo tenemos que llamar a la función `calcDouble()` nuevamente:**

```js
let numero = 100;
/* Declaramos una variable que vale 100 */

function calcDoble() {
    /*Creamos Una función sin parametros,
    pero con el nombre de "calcDoble"*/

  let doble = numero * 2;
  /* Le decimos que una variable declarada con
  let llamada "doble" sea igual a la variable numero (osea 100)
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

---

<br>

---

**Podemos ver que funciona, la consola muestra 2 veces:**

```
El doble del número 100 es 200
El doble del número 40 es 80
```
---

<br>

Por lo tanto, podemos llamar a la función **`calcDouble()`** tantas veces como sea necesario, sin tener que volver a escribir las mismas instrucciones cada vez.

Ahora sabes cómo definir una función básica en JavaScript.