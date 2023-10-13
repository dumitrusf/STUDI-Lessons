# Concatenación y literales de gabarit

## Objetivos

- Aprender a concatenar cadenas JavaScript
- Saber usar los literales de plantilla

## Contexto

Cuando manipulamos cadenas de caracteres, podemos necesitar unir cadenas entre sí usando el operador de concatenación, para completar un mensaje, por ejemplo, o mostrar directamente el valor de una variable en la cadena de caracteres usando los literales de plantilla.

## Concatenar cadenas JavaScript

Para concatenar cadenas JavaScript, vamos a usar el signo más ( + ) entre las diferentes cadenas a concatenar.

### Ejemplo: Concatenar elementos

El ejemplo siguiente va a mostrar en la consola: Bienvenido a nuestro sitio: John, 36 años.

```javascript
let hello = 'Bienvenido a nuestro sitio'
let userName = 'John'
let age = 35 + 1
console.log(hello + ' : ' + userName + ', ' + age + ' años')
```

### Complemento: Sumar y concatenar elementos

El uso del signo + después de una cadena de caracteres provoca la conversión de los números en cadenas, mientras que, si el signo se usa primero sobre números, estos se suman. Para evitar esto, es posible poner los números que queremos sumar entre paréntesis.

```javascript
// Mostrará: Tienes 351 años
console.log('Tienes ' + 35 + 1 + ' años')

// Mostrará: 36 años
console.log(35 + 1 + ' años')

// Mostrará: Tienes 36 años
console.log('Tienes ' + (35 + 1) + ' años')
```

También es posible concatenar tablas (arrays), concepto que se detallará en un curso dedicado, usando el método concat().

Corrección: También es posible concatenar cadenas de caracteres usando el método concat(), sin embargo la concatenación usando los operadores + o += es preferida por razones de rendimiento.

```javascript
let hello = "Bienvenido";
let username = "John";
let age = 35 + 1;

//Mostrará “Bienvenido John, tienes 36 años.”
console.log(hello.concat(' ', username, ', tienes ', age, ' años.'));
```

## Los literales de plantilla (Template literals / Template strings)

Con esta técnica, vamos a rodear nuestras cadenas de caracteres con acentos graves ( ` ) y no con apóstrofes o comillas, como hacíamos hasta ahora. Al usar los acentos graves, podemos mostrar directamente los valores de nuestras variables rodeándolos de llaves, y precedidos del símbolo dólar (ej: ${myVar} ). A diferencia de la concatenación con el signo + , no es necesario aquí cerrar la cadena de caracteres para concatenar una variable.

### Ejemplo: Sumar y concatenar elementos

El ejemplo siguiente va a mostrar en la consola: Bienvenido a nuestro sitio: John, 36 años. La suma se ha efectuado dentro de la cadena.

```javascript
let hello = 'Bienvenido a nuestro sitio'
let userName = 'John'
let age = 35
console.log(`${hello} : ${userName}, ${age + 1} años`)
```

### Ejemplo: Mostrar saltos de línea

El uso de los acentos graves permite también conservar los saltos de línea y los desplazamientos. Como en el ejemplo siguiente, donde la consola muestra: Bienvenido a nuestro sitio: John, 36 años.

```javascript
let hello = 'Bienvenido a nuestro sitio'
let userName = 'John'
let age = 35
console.log(`${hello} : ${userName}, ${age + 1} años`)
```

## A recordar

- El signo más ( + ) permite concatenar cadenas de caracteres. Podrás también concatenar cadenas de caracteres con el método concat().
- Los literales de plantilla ( template literals ) están rodeados de acentos graves ( ` ) y pueden mostrar los valores de las variables con la sintaxis: ${myVar} .

## Complemento:

**[Literales de gabarit](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals)**