# **Ejercicio Operadores-de-compar-&-Oper-logi**

<br>

---

## **Question-1**

---

<br>

Insérer le bon opérateur pour savoir si "a" est égal à "b".

<br>

---

```js
let a = "Hello World";

let b = "Hello World";

console.log(a /*operateur*/ b);
```

---

<br>

---

---

<br>

---

## **Question-2**

---

<br>

Vous réalisez un script permettant de savoir si un prix d’ordinateur est dans votre budget.

Il doit être inférieur ou égal à 1 500 et strictement supérieur à 800.

<br>

---

**Complétez le code et lancez-le:**

```js
let prix = 1238;

console.log(/*code*/);
```

---

---

<br>

---

## **Question-3**

---

<br>

Vous souhaitez réaliser un script vous permettant de déterminer si un vélo correspond ou non à vos critères d’achat.

Le vélo doit être de la marque « Rodkrider » ou « Btwin » et doit avoir un prix strictement inférieur à 500.

<br>

---

```js
let marque = "Btwin";

let prix = 800;

console.log(/*code*/);
```

---

---

<br>

---

## **Question-4**

---

<br>

Vous souhaitez que la console affiche true si la marque n’est pas « Btwin », et uniquement dans ce cas.

<br>

---

**L’objectif est d’insérer le bon opérateur :**

```js
let marque = "Btwin";

console.log(marque /*operateur*/ "Btwin");
```

---

---

<br>

---

## **Question-5**

---

<br>

Vous souhaitez à nouveau que votre script affiche true si la marque n’est pas « Btwin », et uniquement dans ce cas.

Cependant, la configuration n’est pas la même.

<br>

---

**Insérer le bon opérateur :**

```js
let marque = "Btwin";

console.log(/*operateur*/(marque == "Btwin"));
```


---

---

<br>

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

---

**Ejercicio en español:**

---

<br>

---

## **Pregunta-1**

---

<br>

Inserta el operador adecuado para verificar si "a" es igual a "b".

<br>

---

```js
let a = "Hello World";

let b = "Hello World";

console.log(a /*operador*/ b);
```

---

<br>

---

**Resultado**

```js
let a = "Hello World";

let b = "Hello World";

console.log(a == b);
```

---

---

<br>

<br>

---

## **Pregunta-2**

---

<br>

Vous réalisez un script permettant de savoir si un prix d’ordinateur est dans votre budget.

Il doit être inférieur ou égal à 1 500 et strictement supérieur à 800.

<br>

---

**Complete el código e inicia:**

---

```js
let prix = 1238;

console.log(/*code*/);
```

---

<br>

---

**Resultado**

```js
let prix = 1238;

console.log( prix <= 1500 && prix > 800);
```

---

---

<br>

<br>

---

## **Pregunta-3**

---

<br>

Deseas crear un script que te permita determinar si una bicicleta cumple con tus criterios de compra.

La bicicleta debe ser de la marca "Rodkrider" o "Btwin" y su precio debe ser estrictamente inferior a 500.

<br>

---

**Complete el código e inicia:**

---

```js
let marque = "Btwin";

let prix = 800;

console.log(/*code*/);
```

---

<br>

---

**Resultado**

```js
let marque = "Btwin";

let prix = 800;

console.log( (marque == "Btwin" || marque == "Rodkrider") && (prix < 500));
```

---

---

<br>

<br>

---

## **Pregunta-4**

---

<br>

Deseas que la consola muestre true si la marca no es "Btwin", y solo en ese caso.

El objetivo es insertar el operador correcto.

<br>

---

**Complete el código e inicia:**

---

```js
let marque = "Btwin";

console.log(marque /*operateur*/ "Btwin");
```

---

<br>

---

**Resultado**

```js
let marque = "Btwin";

console.log(marque != "Btwin");  /* Aquí
nos dará false ya que Btwin no es diferente de la variable marque*/


let marque = "Btwin";

console.log(marque != "Corsa");  /* Aquí
nos dará true ya que Corsa es diferente/desigual de la variable marque, osea afirma lo que el operador dice*/
```

---

---

<br>

---

## **Pregunta-5**

---

<br>

Deseas que tu script muestre true nuevamente si la marca no es 'Btwin', y solo en ese caso.

Sin embargo, la configuración no es la misma.

<br>

---

**Inserte el operador correcto :**

```js
let marca = "Btwin";

console.log(!(marca == "Btwin"));/* Aquí dará False
por que  no estamos evitando el valor de la marca Btwin
(el valor entre comillas es Btwin)

si la marca fuera otra entonces evitaríamos que esa marca fuera Btwin, siendo esta otra marca confirmamos la evitación de la declaración entre paréntesis y daría True: */

// EJEMPLO:

marca = "Btwin";
console.log(!(marca == "Giant")); /* true en el filtro estamos evitando
la marca Btwin, en este caso tenemos un Giant con lo cual se confirma, que solo lo que tenemos entre paréntesis se niega o se evita!, si tuviéramos otra mas al lado y quisiéramos evitar solo la declaración de Btwin, tan solo lo dejaríamos tal cual, este "!", solo afectaría al paréntesis de Btwin 👇*/

marca = "Btwin";
console.log(!(marca == "Giant") || champions >= 14);


```


---

---