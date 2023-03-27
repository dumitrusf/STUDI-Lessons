# **Objeto `Date` (fecha)**

<br>

## **_Objetivos:_**

- **Aprender los conceptos básicos del objeto `Date` (Fecha)**

- **Saber cómo crear una fecha**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

En esta sección, veremos qué es el objeto `Date` y su uso básico para mostrar una fecha simple en la consola del navegador.

<br>

---

---

<br>

<br>

---

## **Una fecha en JavaScript generalmente se representa de tres maneras diferentes:**

---

<br>

- En formato de texto, por ejemplo "December 17, 1995 03:24:00".

- En formato de `timestamp UNIX`, es decir, el número de segundos transcurridos desde el 1 de enero de 1970 a la medianoche (UTC) (por ejemplo, 1584028448 equivale al 12 de marzo de 2020 a las 15:54:08).

- En forma de un objeto Date que contiene todos los componentes (año, mes, día, zona horaria, etc.).

Nos centraremos más en esta tercera forma, ya que nos permitirá manipular más fácilmente una fecha utilizando los numerosos métodos que el lenguaje ofrece.

<br>

---

**Ejemplo: JavaScript**

```js
const fecha = new Date();
console.log(fecha); // Ejemplo en la consola de Firefox (versión en francés): Thu Mar 05 2020 17:20:00 GMT+0100 (heure normale d'Europe centrale)
```

<br>

---

### **Método de 👆**

---

<br>

En el ejemplo anterior, creamos una variable "fecha" asignándole un nuevo objeto `Date (new Date())`.

Como veremos más adelante, el constructor del objeto `Date` puede tomar parámetros (colocados entre paréntesis); pero si no se proporciona ningún parámetro, devolverá la fecha actual.

**Por ejemplo, el `05/03/2020` a las `17:20`, la consola muestra:**

**"Thu Mar 05 2020 17:20:00 GMT+0100 (heure normale d'Europe centrale)"**

<br>

---

---

<br>

<br>

---

### **Observación: Zonas horarias**

---

<br>

No es ninguna novedad decir que en un momento determinado, la hora no es la misma en todo el mundo.

Por lo tanto, cuando manipulamos fechas en informática, a menudo se incluye una noción de zona horaria.

Por lo tanto, es muy importante, si queremos obtener el mismo día tanto en entrada como en salida, mostrar una fecha en la misma zona horaria en la que se ingresó.

<br>

---

<br>

Si su código se ejecuta en su navegador (en el caso de una instalación local), es probable que trate su fecha de entrada y salida con la misma zona horaria.

Por lo tanto, no deberíamos tener problemas.

Sin embargo, si su fecha es procesada de alguna otra manera (por ejemplo, un proceso del lado del servidor con repl.it), es posible que se muestre con una zona horaria diferente.

<br>

---

<br>

Por ejemplo, si intentamos ejecutar console.log(new Date()) en un navegador, obtendremos "Thu Mar 05 2020 17:20:00 GMT+0100 (heure normale d'Europe centrale)" (el formato puede variar).

El final de la cadena indica que la fecha se proporciona en la zona horaria GMT+1.

Sin embargo, si intentamos ejecutar este código en repl.it, la consola de la interfaz web mostrará "2020-03-05T16:20:00.000Z".

El carácter "Z" indica que la fecha se proporciona en la zona horaria GMT.

En sí mismo, incluso si la diferencia es solo de una hora, podemos pasar de un día a otro si ejecutamos este código entre la medianoche y la 1 de la mañana.

Sin embargo, si verificamos la consola de nuestro navegador (F12 > Pestaña Consola), veremos la fecha en la zona horaria correcta.

<br>

---

<br>

Lo que debemos recordar es que aquí nuestro código es correcto en ambos casos, ya sea que la consola muestre "Thu Mar 05 2020 17:20:00 GMT+0100 (heure normale d'Europe centrale)" o "2020-03-05T16:20:00.000Z", ya que es el mismo momento en dos lugares diferentes del mundo.

<br>

---

**Ejemplo JavaScript:**

```js
const fecha = new Date('February 29, 2020 09:30:59');
console.log(fecha);
// Sat Feb 29 2020 09:30:59 GMT+0100 (heure normale d’Europe centrale)
```

<br>

---

### **Método: 👆**

---

<br>

En el ejemplo anterior, pasamos una fecha en forma de cadena como parámetro.

La consola muestra:

"Sat Feb 29 2020 09:30:59 GMT+0100 (heure normale d'Europe centrale)"

Si se pasa una cadena incorrecta, como por ejemplo const fecha = new Date('Test'), el constructor devolverá "Invalid Date".

<br>

---

---

<br>

<br>

---

### **Atención!: Solicitud de un Entero**

---

<br>

**Este método no es el más recomendado para crear una fecha, ya que la cadena debe estar en un formato conforme a una de las normas `(RFC 1123 de la IETF o ISO 8601)`**.

Por ejemplo, notará que está escrito en inglés y con un formato particular.

Por otro lado, la cadena puede ser interpretada de manera diferente según el navegador, **lo que devolverá diferentes fechas para la misma cadena.**

Afortunadamente, **existen otros parámetros que se pueden pasar al `objeto Date()`, que veremos a continuación.**

<br>

---

### **Método 👆**

---

<br>

**El método también puede tomar los siguientes parámetros:**

- **Año (obligatorio):**

  - un entero que representa el año (nota: si no se proporciona el año completo, se asume que 0 a 99 corresponden a los años 1900 a 1999).

  ---

  <brr>

- **Mes (obligatorio):**

  - un entero de 0 (enero) a 11 (diciembre).

  ---

  <br>

- **Día (opcional):**

  - el día del mes como un número entero (1 a 31).

  ---

  <br>

- **Horas (opcional):**

  - las horas del día (0 a 23).

  ---

  <br>

- **Minutos (opcional):**

  - los minutos (0 a 59).

  ---

  <br>

- **Segundos (opcional):**

  - los segundos (0 a 59).

  ---

  <br>

- **Milisegundos (opcional):**

  - los milisegundos (0 a 999).

  ---

  <br>

**Se recomienda usar estos parámetros para construir fechas y evitar los problemas mencionados anteriormente al usar fechas en forma de cadenas.**

<br>

---

**Ejemplo JavaScript:**

```python
const fecha = new Date(2020, 1, 25);
console.log(fecha); // Tue Feb 25 2020 00:00:00 GMT+0100 (heure normale d'Europe centrale) {}
```

<br>

---

### **Método 👆**

---

<br>

**El ejemplo anterior mostrará en la consola:**

- "Tue Feb 25 2020 00:00:00 GMT+0100 (heure normale d'Europe centrale)"

**Dado que la notación de los meses comienza en 0 para enero, la fecha mostrada es el 25 de febrero de 2020.**

**Si no se proporciona el mes (parámetro obligatorio), por ejemplo:** 

```js
const fecha = new Date(2020)
```

**el objeto devolverá la fecha del:**

- "Thu Jan 01 1970 01:00:02 GMT+0100 (heure normale d'Europe centrale)"

<br>

---

### **Complemento: `Timestamp`**

---

<br>

- **Al convertir una fecha a un `timestamp`, es más fácil realizar comparaciones de fechas, clasificaciones, etc., ya que se trata de una simple comparación de números enteros.**

<br>

---

**Ejemplo: JS**

```js
// Para convertir una fecha en timestamp:
const timestamp = fecha.getTime();

// Para crear una fecha a partir de un timestamp:
const fecha = new Date(timestamp);
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

- **Para construir y utilizar fechas en JavaScript, se utiliza el `objeto Date()`.**

- **Si no se le pasa ningún parámetro, devuelve la fecha actual.**

- **Cuando se pasan parámetros, no se deben usar fechas en forma de cadenas (por ejemplo, 'February 29, 2020 09:30:59'), sino que se deben usar los parámetros "año", "mes", etc.**


- **Los meses van de 0 (enero) a 11 (diciembre).**


- **Se recomienda utilizar los parámetros de año, mes, día, etc.**

  **para construir fechas y evitar problemas con el formato de cadenas.**


- **Para hacer comparaciones y manipulaciones más avanzadas de fechas, se pueden usar `timestamps`.**

<br>

---

### **Complemento**

---

<br>

**[Date (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)**

<br>

---

---
