# Setters y getters

## Objetivos

- Saber construir una fecha
- Aprender a recuperar los datos de una fecha

## Contexto

Después de haber descubierto el objeto Date en una primera parte, vamos a estudiar ahora los diferentes métodos de los que dispone y que nos permitirán:

- Construir una fecha (definiendo sus segundos, minutos, etc.): los setters.
- Recuperar sus datos (día del mes, de la semana, etc.): los getters.

## setFullYear(), setMonth(), setDate()¹[1]

Como sus nombres lo indican, estos métodos permiten definir respectivamente el año completo, el mes o el día de un objeto date:

- setFullYear(): toma como parámetro un entero que indica el año y opcionalmente un entero para el mes (de 0 a 11) y un entero para el día (1 a 31).
- setMonth(): toma como parámetro un entero que define el mes (de 0 a 11) y opcionalmente un entero para el día (1 a 31).
- setDate(): toma como parámetro un entero que define el día. Si el valor pasado es 0, entonces la fecha será el último día del mes anterior. Si el valor pasado es negativo, la fecha se definirá sobre los N días a partir del último día del mes anterior²[2]. Ej: -10 significa 10 días antes del último día del mes anterior.

### El ejemplo siguiente muestra (en la consola Firefox):

Thu Dec 31 2020 10:07:21 GMT+0100 (hora estándar de Europa central)

```javascript
const date = new Date()
date.setFullYear(2020)
date.setMonth(11)
date.setDate(31)
console.log(date.toString()) // Thu Dec 31 2020 09:29:10 GMT+0100 (hora estándar de Europa central)
```

## setHours(), setMinutes(), setSeconds(), setMilliseconds()¹[1]

Como lo indican, estos métodos permiten definir las horas, minutos, segundos o milisegundos de una fecha:

- setHours(): toma como parámetro un entero que define la hora (0 a 23). Puede también tomar como parámetros opcionales los minutos, segundos y milisegundos.
- setMinutes(): toma como parámetro un entero que define los minutos (0 a 59). Puede también tomar como parámetros opcionales los segundos y milisegundos.
- setSeconds(): toma como parámetro un entero que define los segundos (0 a 59). Puede también tomar como parámetro opcional los milisegundos.
- setMilliseconds(): toma como parámetro un entero que define los milisegundos (0 a 999).

### El ejemplo siguiente muestra en la consola:

Sat Feb 29 2020 22:30:45 GMT+0100 (hora estándar de Europa central)

```javascript
const date = new Date(2020, 1, 29)
date.setHours(22)
date.setMinutes(30)
date.setSeconds(45)
date.setMilliseconds(500)
console.log(date.toString()) // Sat Feb 29 2020 22:30:45 GMT+0100 (hora estándar de Europa central)
```

## setTime()

El parámetro pasado es el timestamp (número de milisegundos transcurridos entre el 1 de enero de 1970 a las 00:00:00 y una fecha dada) de la fecha deseada.

### El ejemplo siguiente mostrará:

Thu Oct 31 2019 00:00:00 GMT+0100 (hora estándar de Europa central)

```javascript
const date = new Date()
// El número 1572303600000 corresponde al número de milisegundos transcurridos entre el 1 de enero de 1970 a medianoche y el 29 de octubre de 2019 a medianoche
date.setTime(1572303600000)
console.log(date) // Tue Oct 29 2019 00:00:00 GMT+0100 (hora estándar de Europa central)
```

## getFullYear(), getMonth(), getDate()¹[1]

Estos métodos permiten devolver respectivamente el año completo, el mes o el día de una fecha dada. En función del dato que necesitemos o del formato que queramos darle, podemos elegir con precisión el que nos interese, sin tener que hacer manipulaciones complejas.

```javascript
const date = new Date(2020, 1, 29)
console.log(date.getFullYear()) // 2020
console.log(date.getMonth()) // 1
console.log(date.getDate()) // 29
```

## getHours(), getMinutes(), getSeconds(), getMilliseconds()

Estos métodos permiten devolver la hora, los minutos, los segundos o los milisegundos de una fecha dada.

```javascript
const date = new Date(2020, 1, 29, 22, 30, 45, 500)
console.log(date.getHours()) // 22
console.log(date.getMinutes()) // 30
console.log(date.getSeconds()) // 45
console.log(date.getMilliseconds()) // 500
```

## getDay()

Devuelve el día de la semana de la fecha dada. Devuelve un entero de 0 a 6 con 0 para domingo, 1 para lunes, y hasta 6 para sábado.

```javascript
const date = new Date(2020, 1, 29)
console.log(date.getDay()) // 6
```

## getTime()

Devuelve el timestamp de la fecha dada. Este método se puede utilizar para asignar una nueva fecha a una fecha existente (con setTime()).

```javascript
const date = new Date(2020, 1, 29)
console.log(date.getTime()) // 1582930800000
```

## Date.now()

Devuelve el timestamp actual.

```javascript
const date = Date.now()
console.log(date) // 1583751043304
```

## A recordar

- **`setFullYear(), setMonth(), setDate()`:**

    - asigna el año, el mes o el día a una fecha.

    ---

- **`setHours(), setMinutes(), setSeconds(), setMilliseconds()`:**

    - asigna las horas, minutos, segundos o milisegundos a una fecha.

    ---

- **`setTime()`:**

    - asigna una fecha a partir de un timestamp.

    ---

- **`getFullYear(), getMonth(), getDate()`:**

    - recupera el año, el mes o el día de una fecha dada.

    ---

- **`getHours(), getMinutes(), getSeconds(), getMilliseconds()`:**

    - recupera la hora, los minutos, segundos o milisegundos de una fecha dada.

    ---

- **`getDay()`:**

    - recupera el día de la semana de una fecha dada (0 domingo a 6 sábado).

    ---

- **`getTime()`:**

    - recupera el timestamp de una fecha dada.

    ---

- **`Date.now()`:**

    - recupera el timestamp actual³[3].

    ---

## Complemento

- **[setFullYear()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)**

- **[setMonth()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)**

- **[setDate()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)**

- **[setHours()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)**

- **[setMinutes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)**

- **[setSeconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)**

- **[setMilliseconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds)**

- **[setTime()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime)**

- **[getFullYear()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)**

- **[getMonth()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)**

- **[getDate()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)**

- **[getHours()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)**

- **[getMinutes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)**

- **[getSeconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)**

- **[getMilliseconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds)**

- **[getDay()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)**

- **[getTime()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)**

- **[Date.now()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/now)**