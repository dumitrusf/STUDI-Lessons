# El objeto Date

## Objetivos

- Aprender las nociones básicas sobre el objeto Date
- Saber crear una fecha

## Contexto

Vamos a ver en esta parte qué son el objeto Date y su uso básico, para mostrar en la consola del navegador una simple fecha.

Una fecha en JavaScript se representa generalmente de tres maneras diferentes:

- En formato textual, por ejemplo December 17, 1995 03:24:00
- En timestamp UNIX, es decir, el número de milisegundos transcurridos desde el 1 de enero de 1970 a medianoche (UTC) (por ejemplo, 1584028448 equivale al 12 de marzo de 2020 a las 15:54:08)
- En forma de un objeto Date que contiene todos sus componentes (año, mes, día, zona horaria...).

Vamos a centrarnos más en esta tercera forma, porque es la que nos va a permitir manipular más fácilmente una fecha gracias a los numerosos métodos que nos ofrece el lenguaje.

### Ejemplo

```javascript
const date = new Date()
console.log(date)
// Ejemplo en la consola de Firefox (versión francesa): Thu Mar 05 2020 17:20:00 GMT+0100 (hora estándar de Europa central)
```

En el ejemplo anterior, hemos creado una variable date asignándole un nuevo objeto Date (new Date()). Como veremos más adelante, el constructor del objeto Date puede tomar parámetros (poniéndolos entre paréntesis); pero si no se especifica ningún parámetro, se devuelve la fecha actual. Por ejemplo, el 05/03/2020 a las 17:20, la consola muestra:

Thu Mar 05 2020 17:20:00 GMT+0100 (hora estándar de Europa central)

## Zonas horarias

No les voy a descubrir nada si les digo que en un momento dado, la hora no es la misma en todas partes del mundo. Por eso, cuando se manipulan fechas en informática, suelen tener una noción de zona horaria. Por lo tanto, es muy importante, si queremos tener el mismo día de entrada y salida, mostrar una fecha en la misma zona horaria con la que se introdujo.

Si su código se ejecuta en su navegador (en el caso de una instalación local), lo más probable es que trate su fecha de entrada y salida con la misma zona horaria. Por lo tanto, no deberíamos tener ningún problema. Sin embargo, si su fecha es tratada por otro medio (por ejemplo, un tratamiento del lado del servidor con repl.it), puede que se muestre con otra zona horaria.

Por ejemplo, si intentamos ejecutar console.log(new Date()) en un navegador, obtendremos Thu Mar 05 2020 17:20:00 GMT+0100 (hora estándar de Europa central) (el formato puede variar). El final de la cadena indica que la fecha se da en la zona horaria GMT+1. Sin embargo, si intentamos ejecutar este código en repl.it, la consola de la interfaz web mostrará 2020-03-05T16:20:00.000Z. El carácter Z indica que la fecha se da en la zona horaria GMT. En sí mismo, aunque el desfase sea sólo de una hora, podemos pasar de un día a otro si ejecutamos este código entre medianoche y la 1 de la madrugada. Por otro lado, si comprobamos la consola de nuestro navegador (F12 > Pestaña Consola), veremos la fecha en la zona horaria correcta.

Lo que hay que recordar es que aquí nuestro código es bueno en ambos casos, ya sea que la consola muestre Thu Mar 05 2020 17:20:00 GMT+0100 (hora estándar de Europa central) o 2020-03-05T16:20:00.000Z, porque es el mismo momento en dos lugares del globo.

### Ejemplo

```javascript
const date = new Date('February 29, 2020 09:30:59')
console.log(date)
// Sat Feb 29 2020 09:30:59 GMT+0100 (hora estándar de Europa central)
```

En el ejemplo anterior, hemos pasado como parámetro una fecha en formato cadena de caracteres. La consola muestra:

Sat Feb 29 2020 09:30:59 GMT+0100 (hora estándar de Europa central)

Si una cadena pasada no es correcta, como por ejemplo const date = new Date('Test'), entonces el constructor devolverá "Invalid Date".

## Atención

Este método no es el que se recomienda para crear una fecha, porque la cadena de caracteres debe estar en un formato conforme a una de las normas (a RFC 1123 del IETF o a ISO 8601). Por ejemplo, se dará cuenta de que está escrita en inglés y con un formato particular. Además, la cadena puede ser analizada de forma diferente según el navegador, lo que devolverá diferentes fechas para esta misma cadena. Afortunadamente, existen otros parámetros que se pueden pasar al objeto Date(), que veremos a continuación.

El método también puede tomar como parámetros:

- año (obligatorio): un entero que representa el año (nota: si no pone el año completo, sepa que 0 a 99 corresponde a los años 1900 a 1999).
- mes (obligatorio): un entero que va de 0 (enero) a 11 (diciembre).
- día (opcional): el día del mes en forma de entero (1 a 31).
- horas (opcional): la hora del día (0 a 23).
- minutos (opcional): los minutos (0 a 59).
- segundos (opcional): los segundos (0 a 59).
- milisegundos (opcional): los milisegundos (0 a 999).

Le recomendamos que utilice estos parámetros para construir sus fechas y evitar los problemas mencionados anteriormente al utilizar las fechas en cadenas de caracteres.

### Ejemplo

```javascript
const date = new Date(2020, 1, 25)
console.log(date)
// Tue Feb 25 2020 00:00:00 GMT+0100 (hora estándar de Europa central)
```

El ejemplo anterior mostrará en la consola:

Tue Feb 25 2020 00:00:00 GMT+0100 (hora estándar de Europa central)

Como la notación de los meses empieza en 0 para el mes de enero, la fecha mostrada es el 25 de febrero de 2020. Si no se especifica el mes (parámetro obligatorio), por ejemplo: const date = new Date(2020), el objeto devolverá la fecha del:

Thu Jan 01 1970 01:00:02 GMT+0100 (hora estándar de Europa central)

## Complemento: Timestamp

Al convertir una fecha en timestamp, se pueden hacer más fácilmente comparaciones de fechas, ordenaciones, etc., ya que se tratará de una simple comparación de números enteros.

## A recordar

- Para construir y utilizar fechas en JavaScript, se utiliza el objeto Date().
- Si no le pasamos ningún parámetro, devuelve la fecha actual.
- En los parámetros, no hay que utilizar las fechas en cadenas de caracteres (por ejemplo: 'February 29, 2020 09:30:59'), sino utilizar los parámetros "año", "mes"...
- Los meses van de 0 (enero) a 11 (diciembre).

## Complemento:

- **[Date (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)**