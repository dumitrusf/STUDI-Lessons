# **Formateo de fechas**

<br>

## **_Objetivos:_**

- **Aprender a formatear fechas de diferentes maneras según las necesidades.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Ahora que hemos aprendido a crear fechas, acceder a sus datos y manipularlas, veremos cómo formatearlas para obtener una representación acorde a nuestras necesidades.

<br>

---

---

<br>

<br>

---

## **`toLocaleString()`**

---

<br>

Para formatear una fecha, utilizaremos este método del `objeto Date`.

Devuelve una cadena de caracteres que representa una fecha dada según una localidad.

**Tiene dos parámetros opcionales:**

- **Localidades:**

    - una cadena de caracteres de localización (por ejemplo, "fr-FR" para Francia, "de-DE" para Alemania, etc.) o una matriz de estas cadenas de caracteres. Si no se especifica este parámetro, se utilizará la localidad predeterminada del navegador.

    ---

    <br>
    
- **Opciones:**

    - un objeto que contiene una o varias propiedades que permiten, por ejemplo, definir la zona horaria, el formato de 12 horas (en lugar de 24), la representación del año, el mes, etc.

<br>

---

**El siguiente ejemplo se mostrará en la consola :**

```
29/02/2020 à 21:30:45

sábado 29 FEBRERO 2020 à 21:30
```

```js
const date = new Date(2020, 1, 29, 21, 30, 45);
const dateDisplayed = date.toLocaleString('fr-FR');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const dateDisplayedLong = date.toLocaleString('fr-FR', options);
console.log(dateDisplayed); // 29/02/2020, 21:30:45
console.log(dateDisplayedLong); // sábado 29 de febrero de 2020, 21:30
```

<br>

---

---

<br>

<br>

---

## **`toLocaleDateString()`**

---

<br>

Este método es similar al anterior, excepto que devuelve la fecha (día, mes, año) sin la hora.

Sin embargo, los parámetros en el objeto options aún permiten mostrar todos los componentes si así se desea.

<br>

---

**El siguiente ejemplo mostrará en la consola:**

```
29/02/2020

sábado 29 FEBRERO 2020
```

```js
const date = new Date(2020, 1, 29, 21, 30, 45);
const dateDisplayed = date.toLocaleDateString('fr-FR');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateDisplayedLong = date.toLocaleDateString('fr-FR', options);
console.log(dateDisplayed); // 29/02/2020
console.log(dateDisplayedLong); // sábado 29 de febrero de 2020
```

<br>

---

---

<br>

<br>

---

## **`toLocaleTimeString()`**

---

<br>

Este método es similar al primero, pero devuelve directamente la hora de la fecha.

Sin embargo, los parámetros en el objeto options aún permiten mostrar todos los componentes si así se desea.

<br>

---

**El siguiente ejemplo mostrará en la consola:**

```
21:30:45
```

```js
const date = new Date(2020, 1, 29, 21, 30, 45);
const dateDisplayed = date.toLocaleTimeString('fr-FR');
console.log(dateDisplayed); // 21:30:45
```

<br>

---

---

<br>

<br>

---

## **`Intl.DateTimeFormat`**

---

<br>

Esta es otra manera de formatear fechas, y es preferible para mejorar el rendimiento cuando se necesita formatear muchas fechas.

En este caso, se crea un objeto `Intl.DateTimeFormat` y se utiliza su propiedad format, pasándole la fecha.

Este objeto acepta los parámetros opcionales `locales` y `options`.

<br>

---

**El siguiente ejemplo mostrará en la consola:**

```
29/02/2020

samedi 29 février 2020 à 21:30
```

```js
const date = new Date(2020, 1, 29, 21, 30, 45);
const dateDisplayed = new Intl.DateTimeFormat('fr-FR').format(date);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const dateDisplayedLong = new Intl.DateTimeFormat('fr-FR', options).format(date);
console.log(dateDisplayed); // 29/02/2020
console.log(dateDisplayedLong); // sábado 29 de febrero de 2020, 21:30
```

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **`toLocaleString()`:**

    - devuelve una cadena de caracteres que representa la fecha según una localidad.

    ---

    <br>

- **`toLocaleDateString()`:**

    - devuelve una cadena de caracteres que representa la fecha (día, mes, año) según una localidad.

    ---

    <br>

- **`toLocaleTimeString()`:**

    - devuelve una cadena de caracteres que representa la hora de la fecha según una localidad.

    ---

    <br>

- **`Intl.DateTimeFormat`:**

    - objeto que permite formatear fechas y es útil para muchas fechas a formatear.

    ---

    <br>

<br>

---

### **Complemento**

---

<br>

**[toLocaleString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleString)**

**[toLocaleDateString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleDateString)**

**[toLocaleTimeString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleTimeString)**

**[Intl.DateTimeFormat](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat)**

<br>

---

---
