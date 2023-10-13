# Escapar caracteres especiales y longitud de una cadena

## Objetivos

- Aprender a escapar los caracteres especiales
- Saber encontrar la longitud de una cadena de caracteres

## Contexto

Cuando manipulamos cadenas de caracteres, éstas pueden contener caracteres especiales (apóstrofes, comillas, barra invertida) que pueden causar problemas, ya sea al manipularlas o simplemente al mostrarlas. Vamos a ver cómo escapar estos caracteres. También veremos cómo obtener la longitud de una cadena de caracteres.

## Escapar caracteres

Para escapar caracteres especiales en una cadena en JavaScript, es necesario utilizar la barra invertida (barra invertida): `\`. La barra invertida va a preceder al carácter a escapar y puede ser utilizada para escapar una barra invertida.

### Ejemplo: Mostrar caracteres especiales

El siguiente ejemplo va a mostrar en la consola: `Bienvenido al usuario John \o/`.

```javascript
let mensaje = 'Bienvenido al usuario John \\o/'
console.log(mensaje)
```

## Longitud de una cadena de caracteres

En JavaScript, es posible conocer la longitud de una cadena de caracteres utilizando la propiedad `length`¹[1]. Para utilizarla, bastará con proceder de la siguiente manera: `objeto_a_identificar.length`. Esto puede ser utilizado para verificar que una cadena no está vacía o que ésta no excede una longitud mínima/máxima.

### Ejemplo: Mostrar la longitud de una cadena

Este ejemplo mostrará por ejemplo 9 en la consola:

```javascript
let mensaje = 'Bienvenido'
console.log(mensaje.length)
```

Atención, sin embargo: el siguiente ejemplo va a mostrar 34 en la consola y no 36, porque los caracteres de escape son ignorados.

```javascript
let mensaje = 'Bienvenido al usuario John \\o/'
console.log(mensaje.length)
```

## A recordar

- La barra invertida va a preceder al carácter a escapar.
- La propiedad `length` permite conocer la longitud de una cadena de caracteres¹[1].
- Los caracteres de escape son ignorados cuando se determina la longitud de un objeto²[2].

## Complemento

**[String.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length)**