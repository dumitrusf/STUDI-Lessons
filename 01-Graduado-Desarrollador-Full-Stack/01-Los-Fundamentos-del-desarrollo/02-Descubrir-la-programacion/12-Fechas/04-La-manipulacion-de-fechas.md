# **Manipulación de fechas**

<br>

## **_Objetivos:_**

- **Aprender a manipular fechas.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

En la sección anterior, vimos cómo construir fechas y acceder a sus datos.

Ahora vamos a aprender cómo manipular estas fechas para, por ejemplo, agregar días a una fecha dada y así calcular una fecha de vencimiento.

<br>

---

### **Método:**

---

<br>

Gracias a los diferentes métodos "getters", podemos recuperar los datos de una fecha, y gracias a los métodos "setters", podemos asignarles nuevos valores.

Dado que años, meses, días, etc. son números enteros, podemos realizar operaciones matemáticas fácilmente.

Por ejemplo, queremos crear una nueva fecha (date2) que sea 1 año, 6 meses y 15 días después de nuestra fecha original del 29 de febrero de 2020 (date).

Para lograrlo, utilizamos los métodos "setters" de date2 para asignarle valores obtenidos mediante los métodos "getters" de date, sumados a los números deseados.

<br>

---

**El siguiente ejemplo muestra el resultado en la consola:**

```
Mon Sep 13 2021 14:32:03 GMT+0200 (hora de verano de Europa central)
```

```js
const date = new Date(2020, 1, 29);
const date2 = new Date();
date2.setFullYear(date.getFullYear() + 1);
date2.setMonth(date.getMonth() + 6);
date2.setDate(date.getDate() + 15);
console.log(date2.toString()); // Lun Sep 13 2021 14:32:03 GMT+0200 (hora de verano de Europa central)
```

<br>

---

### **Método: Otro ejemplo con manipulación de horas, minutos y segundos**

---

<br>

A partir de la fecha del 29 de febrero a las 21:30:55, queremos crear una nueva fecha con 4 horas, 30 minutos y 30 segundos adicionales.

Creamos date2 con el mismo año, mes y día que la fecha original (date).

Luego, de manera similar a lo anterior, utilizamos los métodos "setters" de date2 para asignarle valores obtenidos mediante los métodos "getters" de date, sumados a los números deseados.

<br>

---

**El siguiente ejemplo muestra el resultado en la consola:**

```
Sun Mar 01 2020 02:01:25 GMT+0100 (hora estándar de Europa central)
```

```js
const date = new Date(2020, 1, 29, 21, 30, 55);
const date2 = new Date();
date2.setFullYear(date.getFullYear());
date2.setMonth(date.getMonth());
date2.setDate(date.getDate());
date2.setHours(date.getHours() + 4);
date2.setMinutes(date.getMinutes() + 30);
date2.setSeconds(date.getSeconds() + 30);
console.log(date2); // Dom Mar 01 2020 02:01:25 GMT+0100 (hora estándar de Europa central)
```

<br>

---

### **Métodos mas compactos**

---

<br>

Existen otros métodos que nos permiten establecer varias propiedades del objeto fecha en una sola línea (ejemplo 1), o incluso pasando los parámetros directamente al constructor de Date() (ejemplo 2).

<br>

---

**Los siguientes ejemplos muestran el resultado en la consola:**

```
Tue Sep 14 2021 01:01:15 GMT+0200 (hora de verano de Europa centrale)
```

```js
const date = new Date(2020, 1, 29, 20, 30, 45);
const date2 = new Date();
date2.setFullYear(
  date.getFullYear() + 1,
  date.getMonth() + 6,
  date.getDate() + 15
);
date2.setHours(
  date.getHours() + 4,
  date.getMinutes() + 30,
  date.getSeconds() + 30
);
console.log(date2);
// Mar Sep 14 2021 01:01:15 GMT+0200 (hora de verano de Europa central)
```

---

<br>

```
Tue Sep 14 2021 01:01:15 GMT+0200 (hora de verano de Europa central)
```

```js
const date = new Date(2020, 1, 29, 20, 30, 45);
const date2 = new Date(
  date.getFullYear() + 1,
  date.getMonth() + 6,
  date.getDate() + 15,
  date.getHours() + 4,
  date.getMinutes() + 30,
  date.getSeconds() + 30
);
console.log(date2);
// Mar Sep 14 2021 01:01:15 GMT+0200 (hora de verano de Europa central)
```

<br>

---

---

<br>

<br>

---

### **Método: Manipulaciones con `Timestamp`**

---

<br>

También es posible realizar manipulaciones basadas en marcas de tiempo para comparar y ordenar fechas.

Supongamos que tenemos tres fechas que queremos comparar. En lugar de comparar una por una las propiedades de años, meses, etc., con los métodos correspondientes (lo cual sería largo y tedioso), podemos obtener y comparar las marcas de tiempo de las fechas.

Luego, podemos comparar y ordenar estas marcas de tiempo, ya que sabemos que la más grande representa la fecha más reciente. En JavaScript, la marca de tiempo corresponde al número de milisegundos transcurridos entre el 1 de enero de 1970 a las 00:00:00 y una fecha dada.

<br>

---

**El siguiente ejemplo muestra el resultado en la consola:**

```
1582930800000

1597520700000

1597521600000
```

```js
const date = new Date(2020, 1, 29);
const date2 = new Date(2020, 7, 15, 21, 45);
const date3 = new Date(2020, 7, 15, 22);
console.log(date.getTime()); // 1582930800000
console.log(date2.getTime()); // 1597520700000
console.log(date3.getTime()); // 1597521600000
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

- **Mediante los métodos "getters", podemos obtener los datos necesarios para realizar cálculos.**

- **Con los métodos "setters", podemos construir fechas con nuevos valores calculados en JavaScript.**

- **Las marcas de tiempo (timestamp) nos permiten comparar y ordenar fechas de manera más sencilla.**

<br>

---

---
