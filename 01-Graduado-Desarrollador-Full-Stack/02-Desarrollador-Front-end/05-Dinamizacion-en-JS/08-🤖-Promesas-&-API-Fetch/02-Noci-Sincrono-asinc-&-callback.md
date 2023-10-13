# Notion de synchrone, asynchrone et callback

## Objectifs

- Comprender synchrone y asynchrone
- Comprender las funciones de rappel (callback)

## Contexto

En su forma más elemental, JavaScript es un lenguaje sincrónico, bloqueante y de un solo proceso, en el que una sola operación puede estar en curso a la vez. Pero los navegadores web definen funciones y API que nos permiten registrar funciones que no deben ejecutarse de manera sincrónica, sino que deben invocarse de manera asíncrona cuando se produce un evento cualquiera (el paso del tiempo, la interacción del usuario con el ratón o la llegada de datos por la red, por ejemplo). Esto significa que puedes dejar que tu código haga varias cosas al mismo tiempo sin detener o bloquear tu proceso principal.

## Diferencia: synchrone y asynchrone

En informática, se dice que dos operaciones son sincrónicas cuando la segunda espera a que la primera haya terminado su trabajo para empezar. Lo que hay que recordar de esta definición es el concepto de dependencia (la noción de «sincronización» en la primera definición dada de synchrone arriba): el inicio de la operación siguiente depende de la completitud de la operación anterior.

Por el contrario, dos operaciones se califican de asíncronas en informática cuando son independientes. Es decir, cuando la segunda operación no necesita esperar a que la primera termine para empezar.

Por defecto, toda función definida en JavaScript es sincrónica. Esto significa que cuando se llama:

- Esta función ejecuta inmediatamente la totalidad de sus instrucciones y devuelve un valor enseguida;
- Y que el resto del programa espera el final de la ejecución de esta función antes de ejecutarse a su vez.

Así, cuando se llaman varias funciones sincrónicas seguidas, tenemos la garantía de que se ejecutan de manera secuencial. Una tras otra.

### Ejemplo

```javascript
// console.log() es una función sincrónica
console.log('a');
console.log('b');
console.log('c');
// => las letras a, b y c se mostrarán sistemáticamente en orden
```

Para permitir la ejecución de varias operaciones en paralelo, sin bloquear la ejecución del resto del programa, el lenguaje JavaScript proporciona varias formas de definir y llamar a funciones asíncronas.

### Ejemplo

La método setTimeout() que permite ejecutar una función de rappel (un callback) después de un cierto retraso.

```javascript
/*setTimeout() es asíncrono: el resto del script podrá ejecutarse
*sin tener que esperar el final de la ejecución de setTimeout()*/
setTimeout(alert, 5000, 'Mensaje mostrado después de 5 segundos');
//Esta alerta se mostrará antes que la definida en setTimeout()
alert('Continuación del script');
```

## Las funciones de rappel, del callback al callback hell (el infierno de los callbacks)

Un rappel es una función que se pasa a otra función como argumento para ejecutarse posteriormente. Los desarrolladores dicen que «llamas» a una función cuando ejecutas una función, por eso los rappels se llaman callbacks.

### Ejemplo

Un ejemplo de función que acepta un callback es addEventListener:

```javascript
const button = document.querySelector('button');
button.addEventListener('click', function(e) {
  // Añade la clase clicked al botón
  this.classList.add('clicked');
});
```

¿No ves por qué se trata de un callback?

```javascript
const button = document.querySelector('button');
// Función que añade la clase 'clicked' al elemento
function clicked(e) {
  this.classList.add('clicked');
}
// Añade la función click como un callback al listener del evento
button.addEventListener('click', clicked);
```

Aquí, le hemos dicho a JavaScript que escuche el evento click en un botón. Si se detecta un clic, JavaScript debe disparar la función clicked. Así que en este caso, clicked es el callback mientras que addEventListener es una función que acepta un callback.

```javascript
// Crea una función que acepta otra función como argumento
const callbackAcceptingFunction = (fn) => {
  // Llama a la función con los argumentos requeridos
  return fn(1, 2, 3);
};
// El callback recibe los argumentos de la llamada anterior
const callback = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3;
};
// Pasando un callback a una función que acepta un callback
const result = callbackAcceptingFunction(callback);
console.log(result); // 6
```

Los problemas llegan cuando una función está anidada en una función, en una función, en una función, ... El callback hell es un fenómeno donde varios callbacks están anidados unos dentro de otros. Esto puede ocurrir cuando realizas una actividad asíncrona que depende de una actividad asíncrona anterior. Estos callbacks anidados hacen que el código sea mucho más difícil de leer.

### Ejemplo

Ejemplo de código no testeable pero que puedes encontrar en un proyecto

```javascript
const makeBurger = (nextStep) => {
  getBeef(function(beef) {
    cookBeef(beef, function(cookedBeef) {
      getBuns(function(buns) {
        putBeefBetweenBuns(buns, beef, function(burger) {
          nextStep(burger);
        });
      });
    });
  });
};
// Hacer y servir la hamburguesa
makeBurger(function(burger) => {
  serve(burger);
});
```

Afortunadamente, existen otras soluciones para luchar contra el infierno de los callbacks en las nuevas versiones de JavaScript, como las promesas y async/wait.