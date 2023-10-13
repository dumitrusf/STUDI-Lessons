Hola, este es Bing. Estoy aquí para ayudarte con la traducción y el formato de la página web que tienes abierta. Aquí está mi traducción del francés al español de la página, usando el formato markdown para resaltar los títulos y otros elementos:

# Métodos del objeto String

## Objetivo

- Aprender a usar algunas de las métodos para gestionar las cadenas de caracteres

## Situación

Para manipular las cadenas de caracteres, podemos usar los métodos del objeto String en JavaScript. Vamos a estudiar algunas de las métodos más usadas (poner en minúsculas, eliminar los espacios blancos al principio y al final, obtener una subcadena, extraer, reemplazar, etc.).

## Conversión mayúsculas/minúsculas

Los métodos toUpperCase() y toLowerCase() , del objeto global String , modifican una cadena de caracteres para ponerla en mayúsculas o en minúsculas.

### Ejemplo: Concatenar elementos

El ejemplo siguiente va a mostrar en la consola: BIENVENIDO A NUESTRO SITIO / john .

```javascript
let hello = 'Bienvenido a nuestro sitio'
let userName = 'JOHN'
console.log(hello.toUpperCase() + ' / ' + userName.toLowerCase())
// Con literales de plantilla
console.log(`${hello.toUpperCase()} / ${userName.toLowerCase()}`)
```

## Eliminar los blancos

Los métodos trimStart() , trimEnd() y trim() permiten eliminar los espacios blancos respectivamente al principio, al final o los dos, en una cadena de caracteres. Estos métodos son útiles para quitar los caracteres blancos al manipular cadenas (extraer, concatenar, etc.).

### Ejemplo

Muestra en la consola: Bienvenido a nuestro sitio : John .

```javascript
let hello = ' Bienvenido a nuestro sitio : '
let userName = ' John '
console.log(hello.trimStart() + userName.trim())
```

## Obtener una subcadena

El método substring() permite obtener una parte de una cadena, indicando un carácter de inicio y opcionalmente un carácter de fin.

## Atención

El primer carácter va de la posición 0 a 1, el segundo de 1 a 2, y así sucesivamente.

### Ejemplo

```javascript
let hello = 'Bienvenido a nuestro sitio'
// Mostrará: Bienvenido
console.log(hello.substring(0, 9))
// Mostrará: a nuestro sitio
console.log(hello.substring(10))
```

## Reemplazar una cadena de caracteres con replace()

El método replace permite buscar una cadena de caracteres y reemplazarla por otras nuevas. Por defecto, solo reemplazará la primera ocurrencia de una cadena: si queremos reemplazar caracteres que están presentes varias veces en una cadena, tendremos que usar las expresiones regulares (regex).

### Ejemplo

```javascript
let hello = "Bienvenido a mi sitio !";
// Reemplaza « a mi sitio » por « a tu casa » lo que mostrará « Bienvenido a tu casa ! »
console.log(hello.replace("a mi sitio", "a tu casa"));
// Para reemplazar todas las ocurrencias de esta cadena de caracteres, debemos usar las expresiones regulares
let presidents = "John Madison, John Monroe, John Earl Carter";
// El marcador « g » significa « global », todas las ocurrencias serán transformadas
console.log(presidents.replace(/John/g, "James"));
```

## Detectar si una cadena de caracteres está contenida en otra con includes()

El método includes permite por ejemplo determinar si una palabra está presente en una frase. Es sensible a las mayúsculas y minúsculas y puede incluir un parámetro de posición, que buscará la cadena de caracteres solicitada solo a partir de la posición indicada. Los valores devueltos son true o false.

### Ejemplo

```javascript
let hello = "Hola y bienvenido a tu casa !";
// Devolverá « true » porque la frase contiene « bienvenido »
console.log(hello.includes("bienvenido"))
let hello = "Hola y bienvenido a tu casa !";
// Devolverá “false” porque la palabra a buscar « bienvenido » no está presente entera antes de la posición 12
console.log(hello.includes("bienvenido", 12))
```

## Extracción avanzada con slice()

El método slice ofrece muchas posibilidades para extraer una sección de una cadena de caracteres sin modificar la cadena original. Le indicamos un índice de inicio y opcionalmente un índice de fin de extracción. El funcionamiento es similar a substring() , con la diferencia de que slice() acepta también índices negativos, para extraer desde el final de la cadena (-1 para el último carácter, -2 para el penúltimo, etc.).

### Ejemplo

```javascript
let hello = 'Bienvenido a nuestro sitio'
// Mostrará: Bienvenido
console.log(hello.slice(0, 9))
// Mostrará: a nuestro sitio
console.log(hello.slice(10))
// Mostrará: a nuestro
console.log(hello.slice(-14, -5))
```

## A recordar

- Es posible aplicar varias métodos a una cadena de caracteres:
    - toUpperCase() / toLowerCase() : para poner en mayúsculas o minúsculas.
    - trimStart() , trimEnd() y trim() : para eliminar los espacios blancos.
    - substring() : para obtener una parte de una cadena.
    - slice() : para extraer una sección de una cadena.
    - replace : para reemplazar caracteres por otros.
    - includes : para buscar una cadena de caracteres en otra.

## Complemento

**[string](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String)**

**[RegExp6](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)**