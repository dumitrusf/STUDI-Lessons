# **Profundizar en las bases `(Fundamentos)`**

<br>

## **_Objetivo_**

- **Revisar partes del curso con la ayuda de `MDN`.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Un lenguaje de programación como `JavaScript` es fácil de aprender, pero no es posible conocer todos los detalles en profundidad.

Además, es común necesitar utilizar, por primera vez, características muy específicas del lenguaje, incluso después de varios años de práctica.

Para esto, sitios como `MDN` son muy útiles y los recursos disponibles permiten profundizar en el conocimiento y comprender mejor el lenguaje que estamos utilizando.

<br>

---

---

<br>

<br>

---

## **Consejo**

---

<br>

`MDN` brinda la oportunidad de profundizar en ciertos conceptos para descubrir nuevos casos de uso o para abordar problemas específicos.

Se recomienda explorar la documentación para complementar tus conocimientos.

<br>

---

### **Modificación de Constantes**

---

<br>

**Es posible declarar constantes utilizando la palabra clave `const`.**

<br>

---

**EJEMPLO JavaScript:**

```javascript
const pi = { value: 3.1415, description: "Pi es la relación constante entre la circunferencia de un círculo y su diámetro en un plano euclidiano" };

pi = { value: 3.1416, description: "Pi, a veces llamado la constante de Arquímedes, es la relación constante entre la circunferencia de un círculo y su diámetro en un plano euclidiano" };
```

**El código anterior arrojará un error:**

- `TypeError: Assignment to constant variable`

    - porque la constante `pi` está protegida por `const`.

---

<br>

**Sin embargo, la página [Tipos y gramática](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types) en `MDN` nos enseña que los valores de un objeto, incluso si se declara con `const`, no están protegidos.**

```javascript
const pi = { value: 3.1415, description: "Pi es la relación constante entre la circunferencia de un círculo y su diámetro en un plano euclidiano" };

pi.value = 3.1416;
```

---

<br>

**Así, este código no arrojará un error, y un valor en un objeto declarado con `const` puede ser modificado.**

<br>

---

### **Parámetro por defecto de las funciones**

---

<br>

**En JavaScript, es necesario especificar cuándo una función requiere parámetros.**

**Esta página de MDN muestra cómo se pueden asignar valores por defecto a los parámetros de una función.**

<br>

---

**Ejemplo JavaScript:**

```javascript
/** Esta función agrega un usuario a la base de datos.
  Si la función se llama sin el argumento "nickname",
  se proporciona la cadena de caracteres "JohnDoe" por defecto.
*/
function addUser(database, id, nickname = 'JohnDoe') {
  database.push([id, nickname]);
  console.log('Añadiendo ' + id + ' a la base de datos.');
  return database;
}

let db = [[1, 'Alice']]; // Para el ejemplo, "db" reemplaza una base de datos remota.
db = addUser(db, 2, 'Bob');
db = addUser(db, 3);
console.log(db);
```

---

<br>

En el código de arriba, la función `addUser` tiene un parámetro por defecto llamado `nickname`.

Si se llama a la función sin proporcionar este parámetro, se utilizará el valor por defecto "JohnDoe".

Esto demuestra cómo se pueden definir valores predeterminados para los parámetros de una función en JavaScript.

<br>

---

---

<br>

<br>

---

## **Hora `UTC`**

---

<br>

**Un desarrollador que desee registrar las horas de registro en su sitio web se enfrentará rápidamente a problemas de incoherencias en los husos horarios si sus usuarios se encuentran en diferentes regiones del mundo.**

Podría ser interesante **almacenar en la base de datos solo la hora `UTC` y la zona horaria del usuario.**

<br>

**Para lograrlo:**

- una visita a **[la página de fechas en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)** nos muestra que existe un método:

  - llamado `getTimezoneOffset` que devuelve la diferencia en minutos entre la hora local del usuario y la hora UTC.

<br>

---

**Ejemplo JavaScript: Esta función agrega un mensaje a una base de datos**

```js
function logMessage(database, msg, user, time) {
  database.push([msg, user, time.getTime() + time.getTimezoneOffset() * 60, time.getTimezoneOffset()]);
  console.log('Mensaje agregado a la base de datos');
  return database;
}

let db = []; // Para el ejemplo, "db" reemplaza una base de datos remota.
db = logMessage(db, 'Un mensaje de Alice', 'Alice', new Date());
console.log(db);

```

---

<br>

En el ejemplo anterior, **imaginemos un servicio de mensajería que necesita almacenar los mensajes de un usuario en una base de datos.**

**La función `database.push()` toma como argumento una matriz que contiene el mensaje,** el usuario, la hora de envío sumada a la diferencia en minutos con respecto a la hora UTC para obtener la hora UTC, y finalmente el huso horario.**

Aquí, **`getTimezoneOffset()` se multiplica por `60`** para obtener segundos, **ya que `time.getTime()` está en milisegundos.**

<br>

---

### **Ejemplo: Los BigInt** 

---

<br>

**A diferencia de muchos lenguajes de programación, JavaScript tiene un solo tipo para enteros y números de punto flotante.**

En la página de **["Estructuras de datos"](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)** en `MDN` se nos informa que el tipo `Number` en realidad puede representar números desde:
```
-(2^53 - 1) hasta 2^53 - 1.
```

---

<br>

**Fuera de este intervalo,** JavaScript no arrojará un error, pero **no representará los números de manera precisa.**

En otras palabras, se convierten en aproximaciones que pueden causar errores difíciles de corregir.

**En la misma página, aprendemos que existe el tipo `BigInt` que permite representar enteros fuera del intervalo de `Number`.**

---

<br>

**Un `BigInt` se identifica con una `"n"` al final del número.**

```javascript
/** Esta variable contiene la cantidad de filas
  en una tabla de base de datos.
  Aquí, imaginamos que son 1000000.
*/
let numberOfRows = 2 ** 50;

/** Queremos almacenar esta cantidad de filas
  con el tipo correcto (number/bigint) para
  manipularla en otras partes del código
  sin problemas.
*/
if (numberOfRows >= Number.MAX_SAFE_INTEGER) {
  numberOfRows = BigInt(numberOfRows);
}

/** Ahora podemos continuar este código sin problemas
  de tipo entre Number y BigInt.
*/
console.log(typeof (numberOfRows));
```

---

<br>

En el ejemplo anterior, se ilustra cómo manejar números grandes utilizando `BigInt`.

Se verifica si el número de filas excede el límite seguro de `Number` y, en ese caso, se convierte en un `BigInt`.

Esto nos permite manipular números grandes de manera segura sin perder precisión.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Es fundamental educarse utilizando las páginas de `MDN` para profundizar en el conocimiento y evitar los errores que hemos visto.**

- **El modificador `const` no protege los valores de objetos y arreglos.**

- **Se debe utilizar `BigInt` para números enteros muy grandes.**

<br>

---

---