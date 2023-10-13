# Formatear las fechas

## Objetivo

Aprender a formatear las fechas de diferentes maneras según sus necesidades.

## Situación

Ahora que hemos aprendido a crear fechas, acceder a sus datos y manipularlos, vamos a ver cómo formatearlas para obtener un resultado que se ajuste a nuestras necesidades.

## toLocaleString()

Para formatear una fecha, vamos a utilizar este método del objeto Date. Devuelve una cadena de caracteres, que corresponde a una fecha dada según una configuración regional. Tiene dos parámetros opcionales:

- Locales: una cadena de caracteres de localización (por ejemplo: fr-FR para Francia, de-DE para Alemania, etc.) o un array de estas cadenas de caracteres. Si este parámetro no se especifica, se utilizará la configuración regional por defecto del navegador.
- Options: un objeto que contiene algunas o todas las propiedades, que no vamos a detallar aquí, pero que permiten por ejemplo definir la zona horaria, el formato de 12 horas (en lugar de 24), la representación del año, del mes, etc.

### ### El ejemplo siguiente va a mostrar en la consola:

- 29/02/2020 à 21:30:45
- samedi 29 février 2020 à 21:30

Ejemplo

```javascript
const date = new Date(2020, 1, 29, 21, 30, 45);
const dateDisplayed = date.toLocaleString("fr-FR");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};
const dateDisplayedLong = date.toLocaleString("fr-FR", options);
console.log(dateDisplayed); // 29/02/2020, 21:30:45
console.log(dateDisplayedLong); // samedi 29 février 2020, 21:30
```

## toLocaleDateString()

Este método es similar al primero, excepto que devuelve la fecha (día, mes, año) sin la hora. Sin embargo, los parámetros en el objeto options permiten mostrarlo todo si se desea.

### El ejemplo siguiente va a mostrar en la consola:

- 29/02/2020
- samedi 29 février 2020

Ejemplo

```javascript
const date = new Date(2020, 1, 29, 21, 30, 45);
const dateDisplayed = date.toLocaleDateString("fr-FR");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateDisplayedLong = date.toLocaleDateString("fr-FR", options);
console.log(dateDisplayed); // 29/02/2020
console.log(dateDisplayedLong); // samedi 29 février 2020
```

## toLocaleTimeString()

Este método es similar al primero, excepto que devuelve directamente la hora de la fecha. Sin embargo, los parámetros en el objeto options permiten mostrarlo todo si se desea.

### El ejemplo siguiente va a mostrar en la consola:

- 21:30:45

Ejemplo

```javascript
const date = new Date(2020, 1, 29, 21, 30, 45);
const dateDisplayed = date.toLocaleTimeString("fr-FR");
console.log(dateDisplayed); // 21:30:45
```

## Intl.DateTimeFormat

Se trata de otra forma de formatear las fechas, que es preferible utilizar por razones de rendimiento si tenemos que formatear un gran número de ellas.

Hay que crear un objeto Intl.DateTimeFormat y utilizar su propiedad format pasándole la fecha. Este objeto tiene como parámetros opcionales locales y options.

### El ejemplo siguiente va a mostrar en la consola:

- 29/02/2020
- samedi 29 février 2020 à 21:30

Ejemplo

```javascript
const date = new Date(2020, 1, 29, 21, 30, 45);
const dateDisplayed = new Intl.DateTimeFormat("fr-FR").format(date);⁶[6]
const options = {
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    hour : '2-digit',
    minute : '2-digit'
}
const dateDisplayedLong = new Intl.DateTimeFormat('fr-FR', options).format(date)⁶[6]
console.log(dateDisplayed) // 29/02/2020
console.log(dateDisplayedLong) // samedi 29 février 2020, 21:30
```

## A recordar

- **`toLocaleString()`:** devuelve una cadena de caracteres que representa la fecha según una configuración regional.

- **`toLocaleDateString()`:** devuelve una cadena de caracteres que representa la fecha (día, mes, año) según una configuración regional.

- **`toLocaleTimeString()`:** devuelve una cadena de caracteres que representa la hora de la fecha según una configuración regional.

- **`Intl.DateTimeFormat`:** objeto que permite formatear las fechas, a utilizar en caso de muchas fechas a formatear.

## Complemento

- **[toLocaleString()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)**

- **[toLocaleDateString()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)**

- **[toLocaleTimeString()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)**

- **[Intl.DateTimeFormat](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)**