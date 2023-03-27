# Funcionamiento avanzado de las promesas

## Encadenamiento de promesas

Las promesas pueden encadenarse para ejecutar varias tareas asíncronas en secuencia. El método `then` devuelve una nueva promesa, lo que permite encadenar las llamadas. La sintaxis es la siguiente:

```javascript
myPromise
  .then((result) => {
    // Código a ejecutar después de la resolución de la primera promesa
    return new Promise((resolve, reject) => {
      // Código asíncrono
    });
  })
  .then((result) => {
    // Código a ejecutar después de la resolución de la segunda promesa
  })
  .catch((error) => {
    // Código a ejecutar en caso de error
  });
```

## Promesa múltiple

Varias promesas pueden ejecutarse simultáneamente usando el método `Promise.all`. El método toma un array de promesas y devuelve una nueva promesa. Se resuelve cuando todas las promesas del array se resuelven con éxito. La sintaxis es la siguiente:

```javascript
const promise1 = new Promise((resolve, reject) => {
  // Código asíncrono
});
const promise2 = new Promise((resolve, reject) => {
  // Código asíncrono
});

Promise.all([promise1, promise2])
  .then((results) => {
    // Código a ejecutar después de la resolución de todas las promesas
  })
  .catch((error) => {
    // Código a ejecutar en caso de error
  });
```

El método `Promise.all` devuelve una promesa que se resuelve con un array de valores devueltos por las promesas pasadas como argumento. Si todas las promesas se resuelven con éxito, la promesa devuelta por `Promise.all` se resuelve con un array que contiene los valores devueltos por las promesas, siguiendo el orden en el que se pasaron como argumento. Sin embargo, si alguna de las promesas pasadas como argumento se rechaza, entonces la promesa devuelta por `Promise.all` se rechaza inmediatamente con el motivo del rechazo de esa promesa. Las otras promesas pasadas como argumento no se ven afectadas y continúan ejecutándose hasta su resolución o rechazo, pero sus resultados no se incluyen en el array de valores devuelto por `Promise.all`. En otras palabras, si una promesa de `Promise.all` falla, la promesa devuelta por `Promise.all` se rechaza inmediatamente con el motivo del fallo de esa promesa. Las otras promesas pasadas como argumento continúan ejecutándose, pero sus resultados no se incluyen en el array de valores devuelto por `Promise.all`.

## Promesa carrera

El método `Promise.race` permite ejecutar varias promesas en paralelo y devolver la primera promesa resuelta o rechazada. Así que solo recibiremos la promesa resuelta más rápidamente. La sintaxis es la siguiente:

```javascript
Promise.race([promise1, promise2])
  .then((result) => {
    // Código a ejecutar después de la resolución de la primera promesa
  })
  .catch((error) => {
    // Código a ejecutar en caso de error
  });
```

## Promesa cualquiera

El método `Promise.any()` permite ejecutar varias promesas en paralelo y devolver la primera promesa resolvida con éxito. Este método ignora las promesas rechazadas, ya que su objetivo es devolvernos la primera resuelta. En cambio, si todas las promesas pasadas como argumento se rechazan, entonces el método `Promise.any()` devuelve una promesa rechazada con un array que contiene todos los motivos de rechazo de las promesas. La sintaxis del método `Promise.any()` es la siguiente:

```javascript
const promises = [
  Promise.reject("error 1"),
  Promise.resolve("success 1"),
  Promise.reject("error 2"),
  Promise.resolve("success 2"),
];

Promise.any(promises)
  .then((result) => {
    console.log(result); // 'success 1'
  })
  .catch((error) => {
    console.log(error); // no se lanzará una excepción aquí, porque al menos una promesa se resolvió
  });
```

En este ejemplo, hemos creado un array `promises` que contiene cuatro promesas, dos rechazadas y dos resueltas. Luego hemos llamado al método `Promise.any()` pasando este array como argumento. Como al menos una promesa se resolvió con éxito (`Promise.resolve('success 1')`), el método `Promise.any()` devuelve una promesa resuelta con el valor `success 1`. Luego hemos usado el método `.then()` para mostrar el valor devuelto (`'success 1'`) en la consola. Si todas las promesas pasadas como argumento se hubieran rechazado, el método `Promise.any()` habría devuelto una promesa rechazada con un array que contiene todos los motivos de rechazo de las promesas (`['error 1', 'error 2']` en este ejemplo). Entonces habríamos usado el método `.catch()` para manejar este error y mostrar el array de motivos de rechazo en la consola.

> Nota: Ten en cuenta que el método `Promise.any()` es una característica relativamente nueva, y no está soportada por todos los navegadores. Por lo tanto, se recomienda comprobar la compatibilidad antes de usarla en un proyecto.