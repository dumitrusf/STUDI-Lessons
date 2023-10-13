# Funciones flecha

## Objetivo

- Aprender qué es una función flecha y saber cómo utilizarla.

## Contexto

El JavaScript se basa en el lenguaje ECMAScript, que evoluciona cada año. Cada año, se añaden nuevas especificaciones, pero por lo general nos basamos en el Ecmascript 5 o el Ecmascript 6. Hasta ahora, hemos utilizado el ES5, pero vamos a aprender cómo declarar una función en ES6. Es imprescindible conocer esta notación.

## Función flecha (arrow function)

Una expresión de función flecha permite obtener una sintaxis más corta para nuestras funciones.

### Función nombrada:

Régulière:

```javascript
function sayHello() {
  return "Hello World!";
}
```

ES6:

```javascript
sayHello = () => {
  "Hello World!";
};
```

## Forma abreviada de la función flecha

Cuando el retorno de una función se reduce a una acción (comparación, concatenación, etc.), se puede utilizar la forma abreviada de la función flecha. Esta forma permite que la función ocupe una línea, elimina los {} y el término return.

```javascript
sayHello = () => "Hello World!";
```

### Ejemplo: Función asignada a una variable

ES5:

```javascript
const hello = function (name) {
  return "Bienvenido! " + name;
};
const name = hello("Jane");
```

ES6:

```javascript
const hello = (name) => {
  return "Bienvenido! " + name;
};
const name = hello("Jane");
```

### Función asociada a un evento

ES5:

```javascript
let cgvButton = document.getElementById("cgv");
cgvButton.addEventListener("click", function () {
  alert("Acabas de aceptar nuestras CGV");
});
```

ES6:

```javascript
let cgvButton = document.getElementById("cgv");
cgvButton.addEventListener("click", () => {
  alert("Acabas de aceptar nuestras CGV");
});
```

### Ejemplo: Función autoejecutada

ES5:

```javascript
(function () {
  alert("Bienvenido!");
})();
```

ES6:

```javascript
(() => {
  alert("Bienvenido!");
})();
```

### Ejemplo: Uso a partir del método filter() del objeto Array()

El método filter() sobre un array crea un nuevo array con los elementos que cumplen un criterio dado a partir de un array existente:

En el siguiente ejemplo cada valor del array studentAge se tratará independientemente como age y se comparará con > 15.

```javascript
const studentsAge = [17, 18, 15, 16, 13];
const ageSup15 = studentsAge.filter((age) => age > 15);
console.log(ageSup15); // [17, 18, 16];
```

## A recordar

- La función flecha es parte del ES6.

- Esta sintaxis permite acortar las líneas de código y mejorar la legibilidad.

- Es posible utilizar simultáneamente, en un mismo código, el ES5 y el ES6.

- Para que la notación simplificada de la función flecha funcione, hace falta que que la instrucción de retorno ocupe una línea.

## Complemento

- **[Funciones flechas](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)**

- **[Lambda-calcul (Wikipedia)](https://fr.wikipedia.org/wiki/Lambda-calcul)**