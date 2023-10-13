# Las buenas prácticas de JavaScript

## Objetivos

- Aprender más sobre el estándar de codificación JavaScript Standard Style
- Aprender más sobre el estándar de codificación Airbnb JavaScript Style Guide() {
- Conocer las buenas prácticas

## Contexto

Cuando desarrolles en JavaScript, tendrás que seguir ciertas reglas para crear un código que cumpla con los estándares de codificación clásicos o los que se usan en tu empresa. Esto permite asegurar la coherencia del código, independientemente de quién lo cree. Así, será más fácil leer o modificar un código que no es tuyo, y, al revés, otra persona tendrá más facilidad para retomar el tuyo.

## Método

Aunque es posible usar herramientas que automatizan el formato del código (como eslint, prettier que son herramientas que van a analizar el código, detectar los problemas y corregir la mayoría de ellos), es importante que conozcas estas reglas. No hace falta que las aprendas de memoria, pero piensa en seguirlas cuando escribas tu código, y se convertirá en un automatismo.

Entre las buenas prácticas de JavaScript, también hay:

- Probar el código JavaScript en los diferentes navegadores web (Firefox, Chrome, Edge, Internet Explorer) para validar su buen funcionamiento en las diferentes plataformas objetivo.
- Desarrollar en inglés (comentarios, nombres de variables, funciones...) para que el código sea entendido por el mayor número de personas.
- Incluir el JavaScript antes de la etiqueta HTML de fin de body "</body>" para estar seguro de que todo el código HTML ha sido recorrido antes de ejecutar el código JavaScript, que es, la mayoría de las veces, dependiente del código HTML.

## JavaScript Standard Style

Entre las reglas que te permitirán crear un código JavaScript que respete los estándares de codificación JavaScript Standard Style, encontrarás por ejemplo:

- Dos espacios para la indentación.
- Comillas simples (') para el texto, salvo para evitar un carácter de escape.
- No hay variables no utilizadas.
- No hay puntos y comas.
- ...

Puedes consultar la lista completa en: https://standardjs.com/rules-fr.html#javascript-standard-style .

### Ejemplo

Dos espacios para la indentación, comillas simples (') para el texto, ...

```javascript
function hello (name) {
  console.log('Bonjour', name) // My comment
  let list = [1, 2, 3, 4]
  /* Another comment */
  if (condition === value) {
    // ...
  } else {
    // ...
  }
}
```

## Airbnb JavaScript Style Guide()

Muchas empresas también usan los estándares de codificación JavaScript Airbnb creados por la empresa Airbnb. Definen un cierto enfoque de JavaScript sobre la asignación de las variables, el uso de los arreglos, los objetos, etc. Esta guía está disponible en el repositorio Github de Airbnb: https://github.com/airbnb/javascript .

### Ejemplo

Uso de puntos y comas, comillas simples

```javascript
function hello(name) {
  console.log('Bonjour', name); // My comment
  const array = [1, 2, 3, 4];
  if (condition === value) {
    // ...
  } else {
    // ...
  }
}
```

## Observación: Dos estándares de codificación distintos

Se trata de dos estándares de codificación distintos, pero hay otros, algunas empresas tienen incluso su propio "code-style" generalmente derivado e inspirado de los dos presentados aquí. Hay puntos comunes, pero también diferencias entre estos dos estándares, como puedes ver en los ejemplos (lista no exhaustiva):

- Airbnb usa puntos y comas, pero no JavaScript Standard Style.
- Airbnb no pone espacio entre el nombre de la función y los parámetros "hello(name)", mientras que JavaScript Standard Style sí lo hace "hello (name)".

La idea no es aprenderlos de memoria, sino conocer sus "grandes líneas". De hecho, según el estándar de codificación adoptado en el proyecto, usarás uno u otro., o incluso una norma propia de tu empresa.

## A recordar

Es indispensable seguir una norma de codificación cuando se escribe código. Esto permite asegurar la coherencia del código producido, así como su mantenibilidad. Los dos estándares entre los más conocidos son JavaScript Standard Style y Airbnb JavaScript Style Guide. No olvides también:

- Probar tu código en varios navegadores.
- Desarrollar en inglés.
- Insertar tu JavaScript justo antes de la etiqueta "</body>".

## Complemento

- JavaScript Standard Style
- Airbnb JavaScript Style Guide()