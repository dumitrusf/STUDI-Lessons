# Funciones anónimas JavaScript

## Objetivo

Aprender qué es una función anónima, cuándo usarla y cómo declararla.

## Contexto

En algunos casos, necesitamos crear bloques de instrucciones que se ejecuten después de un evento (por ejemplo, clic en un botón) o para un uso único, sin tener que crear una función nombrada y, por lo tanto, tener que llamarla por su nombre. Para ello, vamos a utilizar las funciones anónimas.

Las funciones anónimas son, como su nombre lo indica, funciones que no van a tener un nombre. De hecho, cuando creamos una función, no estamos obligados a darle un nombre propiamente dicho. Generalmente, usamos las funciones anónimas cuando no necesitamos llamar a nuestra función por su nombre, es decir, cuando el código de nuestra función solo se llama en un lugar de nuestro script y no se reutiliza. En otras palabras, las funciones anónimas a menudo simplemente nos permiten ahorrar un poco de tiempo en la escritura de nuestro código y (aunque esto sea objeto de debate) hacerlo más claro al no contaminarlo con nombres innecesarios.

## Creación y ejecución o llamada de una función anónima

Podemos crear una función anónima de la misma manera que una función clásica, usando la palabra clave `function` pero omitiendo el nombre de la función después.

```javascript
function (){
  alert ( '¡Soy una función anónima!' )
}
```

Arriba declaramos una función anónima cuyo rol es desencadenar una función `alert()`. Vimos en el módulo anterior que para desencadenar una función había que llamarla, pero ¿cómo llamar a una función que no tiene nombre? Para ello hay tres métodos:

- Encerrar el código de nuestra función en una variable y usar la variable como una función.
- Usar un evento para desencadenar la ejecución de nuestra función.
- Autoinvocar nuestra función anónima.

### Almacenar la función anónima en una variable

Con esta técnica, vamos a crear una variable que tenga como valor la función anónima. Luego, cuando queramos hacer ejecutar nuestra función, usaremos nuestra variable seguida de paréntesis (que lanzarán la ejecución).

### Ejemplo

Si retomamos nuestro ejemplo que permite mostrar un mensaje de bienvenida, obtenemos el resultado siguiente usando una variable. La función solo se ejecuta cuando la variable se llama seguida de paréntesis. Aquí, puede ser llamada varias veces ya que basta con reutilizar la variable, como en el ejemplo siguiente donde se desencadena tres veces.

```javascript
let showHello = function () {⁴[4]
  alert ( '¡Bienvenido!' )
}
showHello ()⁴[4]
showHello ()
showHello ()
```

El mismo ejemplo añadiendo el parámetro `name`, permitiendo así personalizar nuestro mensaje de bienvenida:

```javascript
let showHello = function (name) {⁴[4]
  alert('¡Bienvenido! ' + name)
}
showHello('John')⁴[4]
showHello('Jane')
```

## Complemento: Función nombrada vs función anónima almacenada en una variable

No hay ninguna diferencia de funcionamiento entre una función nombrada y una función anónima almacenada en una variable. La diferencia es únicamente sintáctica.

## Función anónima ejecutada después del desencadenamiento de un evento

Veremos en detalle en otro curso qué es la programación orientada a eventos en JavaScript, solo vamos a mostrar aquí cómo se hace la asociación de una función anónima a un evento.

### Ejemplo

En el código HTML, hemos creado un botón que permite al internauta indicar que acepta las condiciones generales de venta.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Fonctions anonymes</title>
</head>
<body>
  <button id="cgv">J'accepte les CGV</button>
  <script src="main.js"></script>
</body>
</html>
```

Queremos mostrarle un mensaje de confirmación cuando hace clic en él. Afectamos nuestro elemento botón a la variable `cgvButton`, luego asociamos nuestra función anónima al evento `click` del botón usando el método `addEventListnener()`.

```javascript
cgvButton.addEventListener('click', function () {
```

Esta línea de código puede ser traducida en lenguaje oral por "venimos a escuchar (Listener) nuestro botón en espera de un evento (event), este evento debe ser de tipo `click` para desencadenar nuestra función anónima `function()`". Así, al hacer clic en él, nuestro método se ejecutará y el mensaje de confirmación se mostrará al internauta. Puede ser ejecutada varias veces, ya que lo será a cada clic en el botón.

```javascript
let cgvButton = document.getElementById('cgv')
cgvButton.addEventListener('click', function () {
  alert('Acabas de aceptar nuestras CGV')
})
```
### Atención!:

Hay que diferenciar a veces entre buenas prácticas y claridad de código. Imaginemos que el código de la función desencadenada al clic haga 200 líneas. Entonces será quizás más interesante usar una función nombrada y agrupar los métodos de acciones y las funciones en dos lugares separados. Hay que encontrar el justo medio entre claridad de código y ahorro de líneas.

## Función anónima autoejecutada

En este caso, la función se ejecuta apenas se crea. Para declararla, englobamos la función entera entre paréntesis (antes de `function` y después de la llave cerrada `}`), ellas mismas seguidas de paréntesis (que permiten ejecutarla). Esto puede ser usado si queremos ejecutar una sola vez un bloque de código apenas se crea y sin tener que reutilizarlo, como en el ejemplo siguiente donde mostramos un mensaje de bienvenida cuando el internauta llega al sitio.

### Ejemplo

La función siguiente se ejecuta apenas se crea:

```javascript
(function () {
  alert ( '¡Bienvenido!' )
})()
```

Puedes notar dos cosas sobre las funciones autoinvocadas. En primer lugar, debes saber que la noción de autoinvocación no está reservada solo a las funciones anónimas: vamos a poder autoinvocar una función que tenga un nombre. Sin embargo, en la práctica, esto no tendrá mucho interés (ya que si una función tiene un nombre, podemos simplemente llamarla usando ese nombre). Luego, debes entender bien que cuando autoinvocamos una función, la función se ejecuta inmediatamente y no tenemos flexibilidad con respecto a eso: una función autoinvocada se ejecutará siempre justo después de su declaración.

## A recordar

Una función anónima es una función que no tiene nombre y que no puede ser llamada gracias a él. Puede:

- Ser afectada a una variable, que será usada para llamar a la función añadiendo paréntesis al final.
- Ser ejecutada después de un evento (clic en un botón, etc.).
- Ser autoejecutada.

## Complemento

- **[Función anónima (Wikipedia)](https://fr.wikipedia.org/wiki/Fonction_anonyme)**

- **[Expresiones de funciones inmediatamente invocadas](https://fr.wikipedia.org/wiki/JavaScript#Expressions_de_fonctions_imm%C3%A9diatement_invoqu%C3%A9es)**

- **[IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/fr/docs/Glossary/IIFE)**

- [Funciones flechadas](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [Cálculo lambda (Wikipedia)](https://fr.wikipedia.org/wiki/Lambda-calcul)