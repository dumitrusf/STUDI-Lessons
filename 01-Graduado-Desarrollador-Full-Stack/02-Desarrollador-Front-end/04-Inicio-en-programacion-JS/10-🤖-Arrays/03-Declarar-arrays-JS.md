# Cómo declarar un array JavaScript
## Objetivos
- Aprender a crear un array JavaScript
- Aprender a crear un array JavaScript multidimensional

## Contexto
Empezarás con un caso relativamente simple que consiste en crear un array a partir de una lista de elementos. Luego, seguirás con un caso más complejo: crear una lista que tenga categorías, y cada una de ellas contenga elementos (array multidimensional).

## Crear un array JavaScript
Veremos que hay varias formas de declarar un array JavaScript, pero solo una se debe usar, porque está definida en las normas de buenas prácticas de codificación.

La forma literal, definida en las buenas prácticas (entre corchetes [...] ):
```javascript
let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
```
Notarás que los diferentes valores están separados por comas seguidas de espacios. Estos espacios no son obligatorios pero se recomiendan para mejorar la legibilidad.

Arriba, hemos creado un array en una variable "animals" que contiene 6 valores (6 nombres de animales). Para poder contar, añadir, eliminar y modificar, manipularemos directamente la variable "animals".

También es posible inicializar un array vacío como se muestra a continuación (los valores se añaden luego en JavaScript):
```javascript
let animals = []
```
## Atención
La "mala" forma de declarar un array, usando el constructor new Array()
Esta forma no se debe usar, porque no es una buena práctica. Sin embargo, es posible encontrarla en ejemplos de código en Internet o en código escrito por otras personas. Por eso te la presentamos a continuación:
```javascript
let animals = new Array('Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours')
```
## Crear un array JavaScript multidimensional
En algunos casos, necesitarás un array multidimensional, es decir, un array que tenga como valores otros arrays, y cada uno de ellos tenga sus propios valores.

Retomemos nuestro ejemplo de los animales: imaginemos que quieres categorizarlos en animales "salvajes" y "domésticos". Tendremos entonces un array "animals" que contenga dos valores, que serán:

- Un array que contenga los animales salvajes (con tres valores).
- Un array que contenga los animales domésticos (con tres valores).
```javascript
let animals = [
  ['Lion', 'Tigre', 'Ours'],
  ['Chat', 'Chien', 'Cheval']
]
```
Explicaciones:

- El corchete de la primera línea abre el array "animals".
- En la segunda línea, el primer valor del array "animals", es el array referente a los animales salvajes (que contiene 3 valores). A continuación, hay una coma que permite separar este primer valor del segundo.
- En la tercera línea, tenemos el segundo valor del array "animals", que es el array de los animales domésticos (que contiene 3 valores).
- Finalmente, en la última línea está el corchete que cierra el array "animals".

## A recordar
- La buena práctica para declarar un array es usar los corchetes: let animals = ['Lion', 'Chat']
- Los valores de un array están separados por comas seguidas de un espacio.
- Un array multidimensional es un array que tiene como valores otros arrays, que tienen sus propios valores.

## Complemento
Existen algunas sutilezas al crear un array JavaScript, que veremos a continuación:
```javascript
let array = new Array(5)
```
El ejemplo anterior, que usa la mala sintaxis y que no hay que reproducir, no contendrá el valor 5, sino que creará un array de longitud 5 con 5 valores vacíos: [, , , ,].
```javascript
let array = new Array('5')
```
El ejemplo anterior creará bien un array que contenga solo el valor '5', ya que al estar entre comillas, constituye una cadena de caracteres.
```javascript
let array = [5]
```
El ejemplo anterior creará bien un array que contenga solo el valor 5.