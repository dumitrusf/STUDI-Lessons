# **Objeto `Date` (fecha)**

<br>

## **_Objetivos:_**

- **Aprender a crear una fecha.**

- **Aprender a recuperar datos de una fecha.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Después de haber explorado el `objeto Date` en la primera parte, vamos a estudiar ahora los distintos métodos que posee y que nos permitirán:**

- **Construir una fecha (definiendo sus "segundos", "minutos", "etc".):** los setters.

- **Recuperar los datos de una fecha (día del "mes", "día" de la semana, "etc".):** los getters.

<br>

---

### **Métodos: `setFullYear()`, `setMonth()`, `setDate()`**

---

<br>

**Como sus nombres indican, estos métodos permiten definir respectivamente el año completo, el mes o el día de un objeto fecha:**

- **setFullYear():**

    - toma como parámetro un **número entero que indica el año**, "opcionalmente" **un número entero para el mes (de 0 a 11) y un número entero para el día (de 1 a 31)**.

    ---

    <br>
    
- **setMonth():**

    - toma como parámetro un **número entero que define el mes (de 0 a 11)**, "opcionalmente" un **número entero para el día (de 1 a 31)**.


    ---

    <br>
    
- **setDate():**

    - toma como parámetro un número entero que define el día.
    
    Si el valor pasado es 0, entonces la fecha será el último día del mes anterior.
    
    Si el valor pasado es negativo, la fecha se definirá `N` días antes del último día del mes anterior.

<br>

---
    
**Por ejemplo, -10 significa 10 días antes del último día del mes anterior.**

```js
const fecha = new Date();
fecha.setFullYear(2020);
fecha.setMonth(11);
fecha.setDate(31);
console.log(fecha); // Jue Dic 31 2020 09:29:10 GMT+0100 (hora estándar de Europa central)
```

<br>

---

### **Método de `setHours()`, `setMinutes()`, `setSeconds()`, `setMilliseconds()`**

---

<br>

**Como indican sus nombres, estos métodos permiten definir las horas, minutos, segundos o milisegundos de una fecha:**

- **setHours():** toma como parámetro un número entero que define la hora (de 0 a 23). También puede tomar opcionalmente los minutos, segundos y milisegundos.

- **setMinutes():** toma como parámetro un número entero que define los minutos (de 0 a 59). También puede tomar opcionalmente los segundos y milisegundos.

- **setSeconds():** toma como parámetro un número entero que define los segundos (de 0 a 59). También puede tomar opcionalmente los milisegundos.

- **setMilliseconds():** toma como parámetro un número entero que define los milisegundos (de 0 a 999).

<br>

---

**El ejemplo a continuación se muestra en la consola:**

```
Sat Feb 29 2020 22:30:45 GMT+0100 (heure normale d'Europe centrale)**
```

```js
const fecha = new Date(2020, 1, 29);
fecha.setHours(22);
fecha.setMinutes(30);
fecha.setSeconds(45);
fecha.setMilliseconds(500);
console.log(fecha); // Sáb Feb 29 2020 22:30:45 GMT+0100 (hora estándar de Europa central)

```

<br>

---

---

<br>

<br>

---

## **`setTime()`**

---

<br>

El parámetro pasado es la marca de tiempo (cantidad de milisegundos transcurridos entre el 1 de enero de 1970 a las 00:00:00 y una fecha dada) de la fecha deseada.

<br>

---

**El siguiente ejemplo se mostrará :**

```
Thu Oct 31 2019 00:00:00 GMT+0100 (heure normale d'Europe centrale)
```

```js
const fecha = new Date();
fecha.setTime(1572303600000); // El número 1572303600000 corresponde a la cantidad de milisegundos transcurridos hasta el 29 de octubre de 2019 a la medianoche
console.log(fecha); // Mar Oct 29 2019 00:00:00 GMT+0100 (hora estándar de Europa central)
```

<br>

---

---

<br>

<br>

---

## **`getFullYear()`, `getMonth()`, `getDate()`**

---

<br>

Estos métodos permiten obtener respectivamente: el año completo, el mes o el día de una fecha dada.

Dependiendo de los datos que necesitemos o de cómo queramos mostrarlos, podemos elegir con precisión cuál nos interesa, sin necesidad de realizar manipulaciones complejas.

<br>

---

**Ejemplo:**

```js
const fecha = new Date(2020, 1, 29);
console.log(fecha.getFullYear()); // 2020
console.log(fecha.getMonth());    // 1
console.log(fecha.getDate());     // 29
```


<br>

---

---

<br>

<br>

---

## **`getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`**

---

<br>

**Estos métodos permiten obtener respectivamente:** 

- la hora

- los minutos

- los segundos

    o
    
- los milisegundos de una fecha dada.

<br>

---

**Ejemplo:**

```js
const fecha = new Date(2020, 1, 29, 22, 30, 45, 500);
console.log(fecha.getHours());        // 22
console.log(fecha.getMinutes());      // 30
console.log(fecha.getSeconds());      // 45
console.log(fecha.getMilliseconds()); // 500
```

<br>

---

---

<br>

<br>

---

## **`getDay()`**

---

<br>

Devuelve el día de la semana de la fecha dada.

Devuelve un número entero del 0 al 6, siendo 0 para domingo, 1 para lunes y hasta 6 para sábado.

<br>

---

**Ejemplo:**

```js
const fecha = new Date(2020, 1, 29);
console.log(fecha.getDay()); // 6
```

<br>

---

---

<br>

<br>

---

## **`getTime()`**

---

<br>

- Devuelve la marca de tiempo de la fecha dada.

- Este método puede utilizarse para asignar una nueva fecha a una fecha existente (`con setTime()`).

<br>

---

**Ejemplo:**

```js
const fecha = new Date(2020, 1, 29);
console.log(fecha.getTime()); // 1582930800000
```

<br>

---

---

<br>

<br>

---

## **`Date.now()`**

---

<br>

Devuelve la marca de tiempo actual.

<br>

---

**Ejemplo:**

```js
const fecha = Date.now();
console.log(fecha); // 1583751043304
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

- **setFullYear(), setMonth(), setDate() :**

    - affecte l'année, le mois ou le jour à une date.

---

<br>

- **setHours(), setMinutes(), setSeconds(), setMilliseconds() :**

    - affecte les heures, minutes, secondes ou millisecondes à une date.

---

<br>

- **setTime() :**

    - affecte une date à partir d'un timestamp.

---

<br>

- **getFullYear(), getMonth(), getDate() :**

    - récupère l'année, le mois ou le jour d'une date donnée.

---

<br>

- **getHours(), getMinutes(), getSeconds(), getMilliseconds() :**

    - récupère l'heure, les minutes, secondes ou millisecondes d'une date donnée.

---

<br>

- **getDay() :**

    - récupère le jour de la semaine d'une date donnée (0 dimanche à 6 samedi).

---

<br>

- **getTime() :**

    - récupère le timestamp d'une date donnée.

---

<br>

- **Date.now() :**

    - récupère le timestamp actuel.

---

<br>

<br>

---

### **Complemento**

---

<br>

**[setFullYear()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/setFullYear)**

**[setMonth()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/setMonth)**

**[setDate()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/setDate)**

**[setHours()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/setHours)**

**[setMinutes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/setMinutes)**

**[setSeconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/setSeconds)**

**[setMilliseconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/setMilliseconds)**

**[setTime()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/setTime)**

**[getFullYear()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getFullYear)**

**[getMonth()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getMonth)**

**[getDate()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getDate)**

**[getHours()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getHours)**

**[getMinutes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getMinutes)**

**[getSeconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getSeconds)**

**[getMilliseconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getMilliseconds)**

**[getDay()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getDay)**

**[getTime()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getTime)**

**[Date.now()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/now)**

<br>

---

---
