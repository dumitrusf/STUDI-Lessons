# **Ejercicio para el tema: Formateo de fechas con el Objeto `Date`**

<br>

---

## **Question-1**

---

<br>

Instancier Date pour représenter la date suivante : le 03 janvier 2023, 00:00:00, heure locale.

<br>

---

**Código:**

```js
const date = //code
console.log(date.toString());
```

---

---

<br>

---

## **Question-2**

---

<br>

Définir FormatedDate sur la date stockée avec le format français : dd/mm/yyyy.

<br>

---

**Código:**

```js
const date = new Date (2023, 2, 1);
const FormatedDate = //code
console.log(FormatedDate);
```

---

---

<br>

---

## **Question-3**

---

<br>

Définir FormatedDate sur la date stockée avec le format français similaire à : Lundi 6 avril 2022

<br>

---

**Código:**

```js
const date = new Date (2023, 2, 1);
let options = //
const FormatedDate = //
console.log(FormatedDate);
```

---

---

<br>

---

## **Question-4**

---

<br>

Définir FormatedTime sur l’heure stockée avec le format : hh:mm (00:00).

<br>

---

**Código:**

```js
const date = new Date (2023, 2, 1, 10, 30, 12);
let options = //code
const FormatedTime = //code
console.log(FormatedTime);
```

---

---

<br>

---

## **Question-5**

---

<br>

Afficher dans la console la date avec le fuseau horaire universel UTC.

<br>

---

**Código:**

```js
const date = new Date (2023, 2, 1, 10, 30, 12);
//code
```

---

---

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

<br>

**Descripción en español:**

---

<br>---

## **Pregunta 1**

---

<br>

Instanciar Date para representar la siguiente fecha: el 03 de enero de 2023, 00:00:00, hora local.

<br>

---

**Código:**

```js
const date = //código

console.log(date.toString());
```

<br>

---

**Resultado-1**

```js
// Salida esperada: "Wed Mar 01 2023 00:00:00 GMT+0100 (hora estándar de Europa central) "

const date = new Date (2023, 2, 1);

console.log(date.toString());
```

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

Definir FormatedDate con la fecha almacenada con el formato francés: dd/mm/yyyy.

<br>

---

**Código:**

```js
const date = new Date (2023, 2, 1);
const FormatedDate = //código
console.log(FormatedDate);
```

<br>

---

**Resultado-2**

```js
// Salida esperada: « 01/03/2023 »

const date = new Date (2023, 2, 1);


const FormatedDate = date.toLocaleDateString();

console.log(FormatedDate);
```

<br>

---

---

<br>

---

## **Pregunta 3**

---

<br>

Definir FormatedDate con la fecha almacenada con el formato francés similar a: Lunes 6 abril 2022

<br>

---

**Código:**

```javascript
const date = new Date (2023, 2, 1);

let options = //

const FormatedDate = //

console.log(FormatedDate);
```

<br>

---

**Resultado-3**

```js
// Salida esperada: « miércoles 1 marzo 2023 »

const date = new Date (2023, 2, 1);

let options = {year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'};

const FormatedDate = date.toLocaleDateString("fr-FR", options);

console.log(FormatedDate);
```

---

---

<br>

---

## **Pregunta 4**

---

<br>

Definir FormatedTime con la hora almacenada con el formato: hh:mm (00:00).

<br>

---

**Código:**

```javascript
const date = new Date (2023, 2, 1, 10, 30, 12);

let options = //código

const FormatedTime = //código

console.log(FormatedTime);
```

<br>

---

**Resultado-4**

```js
// Salida esperada: « 10:30 »

const date = new Date (2023, 2, 1, 10, 30, 12);

let options = {hour: 'numeric', minute: 'numeric'};

const FormatedTime = date.toLocaleTimeString("fr-FR", options);

console.log(FormatedTime);
```

---

---

<br>

---

## **Pregunta 5**

---

<br>

Mostrar en la consola la fecha con la zona horaria universal UTC.

<br>

---

**Código:**

```javascript
const date = new Date (2023, 2, 1, 10, 30, 12);
//código
```

<br>

---

**Resultado-5**

```js
// Salida esperada: « Wed, 01 Mar 2023 09:30:12 GMT »

const date = new Date (2023, 2 ,1 ,10 ,30 ,12);


console.log(date.toUTCString());
```

---

---
