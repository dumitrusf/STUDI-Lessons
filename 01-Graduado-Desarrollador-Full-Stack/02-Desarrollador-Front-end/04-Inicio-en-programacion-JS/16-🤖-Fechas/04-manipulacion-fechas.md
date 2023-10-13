# Manipulación de fechas

## Objetivo

- Aprender a manipular las fechas

## Contexto

En la parte anterior vimos cómo construir una fecha y acceder a sus datos, ahora veremos cómo manipularlas para, por ejemplo, añadir días a una fecha dada y poder calcular así un vencimiento.

## Método

Gracias a los diferentes getters, podemos recuperar los datos de una fecha y, gracias a los setters, podemos asignarle nuevos valores. Como los años, meses, días, etc. son enteros, podemos realizar fácilmente operaciones matemáticas. Por ejemplo, queremos crear una nueva fecha (date2) que tenga 1 año, 6 meses y 15 días más que nuestra fecha original del 29 de febrero de 2020 (date). Para ello, usamos los setters de date2 para asignarle como valores los que obtenemos con los getters de date, sumados a los números deseados. El ejemplo siguiente muestra en la consola: Mon Sep 13 2021 14:32:03 GMT+0200 (hora de verano de Europa central)

```javascript
const date = new Date(2020, 1, 29)
const date2 = new Date()
date2.setFullYear(date.getFullYear() + 1)
date2.setMonth(date.getMonth() + 6)
date2.setDate(date.getDate() + 15)
console.log(date2.toString()) // Mon Sep 13 2021 16:16:41 GMT+0200 (hora de verano de Europa central)
```

### Otro ejemplo con la manipulación de las horas, minutos y segundos

A partir de la fecha del 29 de febrero a las 21 h 30 m 55 s, queremos crear una nueva fecha con 4 horas, 30 minutos y 30 segundos más. Creamos entonces date2 con el mismo año, el mismo mes y el mismo día que la fecha inicial (date). Luego, de la misma forma que antes, usamos los setters de date2 para asignarle como valores los que obtenemos con los getters de date, sumados a los números deseados. El ejemplo siguiente muestra en la consola: Sun Mar 01 2020 02:01:25 GMT+0100 (hora estándar de Europa central)

```javascript
const date = new Date(2020, 1, 29, 21, 30, 55)
const date2 = new Date()
date2.setFullYear(date.getFullYear())
date2.setMonth(date.getMonth())
date2.setDate(date.getDate())
date2.setHours(date.getHours() + 4)
date2.setMinutes(date.getMinutes() + 30)
date2.setSeconds(date.getSeconds() + 30)
console.log(date2) // Sun Mar 01 2020 02:01:25 GMT+0100 (hora estándar de Europa central)
```

El desglose muy fino de los ejemplos anteriores permite entender bien. Existen otros métodos que nos permiten introducir varias propiedades del objeto date en una sola línea (ejemplo 1), o directamente pasando los parámetros al constructor de Date() (ejemplo 2). Los ejemplos siguientes muestran en la consola: Tue Sep 14 2021 01:01:15 GMT+0200 (hora de verano de Europa central) Tue Sep 14 2021 01:01:15 GMT+0200 (hora de verano de Europa central)

```javascript
// Ejemplo 1
const date = new Date(2020, 1, 29, 20, 30, 45)
const date2 = new Date()
date2.setFullYear(date.getFullYear() + 1, date.getMonth() + 6, date.getDate() + 15)
date2.setHours(date.getHours() + 4, date.getMinutes() + 30, date.getSeconds() + 30)
console.log(date2) // Tue Sep 14 2021 01:01:15 GMT+0200 (hora de verano de Europa central)

// Ejemplo 2
const date = new Date(2020, 1,29 ,20 ,30 ,45 )
const date2 = new Date(
    date.getFullYear() +1 ,
    date.getMonth() +6 ,
    date.getDate() +15 ,
    date.getHours() +4 ,
    date.getMinutes() +30 ,
    date.getSeconds() +30
)
console.log(date2) // Tue Sep14  202101 :01 :15 GMT+0200 (hora de verano de Europa central)
```

## Manipulaciones con timestamp

También es posible hacer manipulaciones a partir de los timestamps, para comparar las fechas y ordenarlas, por ejemplo. Imaginemos tres fechas que queremos comparar, en lugar de comparar una a una los años, meses, etc., con los métodos dedicados (lo que sería largo y tedioso). Vamos a recuperar y comparar los timestamp de las fechas. Podemos luego comparar y ordenar estos valores, ya que sabemos que el más grande es el más reciente: el timestamp JavaScript corresponde al número de milisegundos transcurridos entre el 1 de enero de 1970 a las 00:00:00 y una fecha dada. El ejemplo siguiente muestra en la consola: 

- 1582930800000 

- 1597520700000 

- 1597521600000

```javascript
const date = new Date(2020, 1, 29)
const date2 = new Date(2020, 7, 15, 21, 45)
const date3 = new Date(2020, 7, 15, 22)
console.log(date.getTime()) // 1582930800000
console.log(date2.getTime()) // 1597520700000
console.log(date3.getTime()) // 1597521600000
```

## A recordar

- Con los getters, podemos recuperar los datos necesarios para hacer cálculos.
- Con los setters, podemos construir fechas con estos nuevos datos calculados en JavaScript.
- Gracias a los timestamps, podemos comparar y ordenar más fácilmente las fechas.