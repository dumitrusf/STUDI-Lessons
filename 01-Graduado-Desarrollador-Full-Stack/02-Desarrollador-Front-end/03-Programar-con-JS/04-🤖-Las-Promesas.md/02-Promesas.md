# Las promesas

## Escucha las promesas

Antes que nada, es importante entender qué es lo asincrónico para comprender qué es una promesa.

Podemos tomar para ello un ejemplo de la vida real.

Supongamos que pides una comida en un restaurante.

Pasas tu pedido y esperas que la comida se prepare.

Si el restaurante usara un enfoque de programación sincrónico, tendrías que esperar a que tu comida estuviera lista antes de poder hacer otra cosa.

Mientras esperas tu comida, no podrías hacer nada, ni siquiera hablar con tus amigos.

Esto es tedioso e impráctico, sobre todo si el tiempo de espera es largo.

En cambio, el restaurante puede usar un enfoque de programación asincrónico para preparar tu comida en segundo plano, mientras te permite seguir charlando con tus amigos o leer el menú.

El camarero te informará de que tu comida estará lista pronto y podrás seguir disfrutando de tu velada.

Este ejemplo es similar al uso de lo asincrónico.

En lugar de esperar a que cada tarea se termine antes de pasar a la siguiente, lo asincrónico permite que varias tareas se ejecuten en paralelo, lo que ahorra tiempo y hace que las aplicaciones sean más responsivas.

En el contexto de JavaScript, esto significa que puedes usar lo asincrónico para ejecutar tareas que llevan tiempo, como solicitudes a API remotas, sin bloquear la interfaz de usuario.

## ¿Qué es una promesa?

Para empezar, usamos las promesas para desarrollar de forma asincrónica.

Una promesa (Promise) en JavaScript es un objeto que representa un valor que puede no estar disponible inmediatamente.

Se entiende entonces que las promesas nos permiten ejecutar tareas asíncronas, sin usar el sistema de callback (limitados en algunos casos).

## Crear una promesa

```javascript
const maPromesse = new Promise (( resolve , reject ) => {
  // Tratamiento asincrónico
  // Si el tratamiento tiene éxito, se llama a resolve() con el valor de retorno
  // Si el tratamiento falla, se llama a reject() con el error
});
```

El constructor toma una función de retorno con dos argumentos: `resolve` y `reject`. `Resolve` se llama cuando la tarea asíncrona tiene éxito, mientras que `reject` se llama cuando la tarea falla.

## Ejemplo

### Ejecutar una promesa

Ahora que hemos declarado la promesa, tenemos que ejecutarla. Una promesa se puede ejecutar usando el método `then`. El método `then` permite definir una función que se llamará cuando la promesa se resuelva con éxito. La sintaxis es la siguiente:

```javascript
maPromesse . then ( resultado => {
  // Tratamiento a realizar con el valor de retorno de la promesa
}). catch ( error => {
  // Tratamiento a realizar en caso de error
});
```

Las promesas en JavaScript se pueden gestionar con los métodos `then()`, `catch()` y `finally()`.
- `then()`: para gestionar el éxito de la promesa,
- `catch()`: para gestionar los errores,
- `finally()`: para ejecutar código después de que la promesa haya sido resuelta o rechazada.

### Nuestra primera promesa

```javascript
const maPromesse = new Promise (( resolve , reject ) => {
  // Simulamos una operación asíncrona que lleva tiempo, gracias al setTimeout que va a esperar aquí 2000ms o 2 segundos
  setTimeout (() => {
    //para el ejemplo, generamos un número entre 0 y 1
    const alea = Math . random ();
    //para el ejemplo, consideramos que la promesa tiene éxito si el número es mayor que 0.5
    if ( alea > 0.5 ) {
      // Si la operación tiene éxito, se llama a resolve() con un valor
      resolve ( "La operación ha tenido éxito!" );
    } else {
      // Si la operación falla, se llama a reject() con un error
      reject ( new Error ( "La operación ha fallado." ));
    }
  }, 2000 );
});

maPromesse . then ( resultado => {
  // Tratamiento a realizar con el valor de retorno de la promesa
  console . log ( resultado ); //Esto mostrará La operación ha tenido éxito
}). catch ( error => {
  // Tratamiento a realizar en caso de error
  console . error ( error );
}). finally (() => {
  // Tratamiento a realizar una vez que la promesa haya terminado, ya sea con éxito o con error
  console . log ( "La promesa ha terminado." );
});
```

En este ejemplo, creamos una promesa que simula una operación asíncrona que tarda dos segundos en terminar. Luego, usamos los métodos `then()`, `catch()` y `finally()` para encadenar tratamientos en función del resultado de la promesa:
- Si la promesa se resuelve con éxito, el método `then()` se llama con el valor de retorno de la promesa como argumento.
- Si la promesa falla, el método `catch()` se llama con el error como argumento.
- El método `finally()` se llama siempre una vez que la promesa ha terminado, ya sea con éxito o con error.

## Las propiedades de una promesa

El objeto promise tiene dos propiedades:
- `State`, que tiene tres estados posibles:
  - `pending`: cuando la promesa está esperando una respuesta,
  - `fulfilled` o `resolved`: cuando la promesa se resuelve con éxito y devuelve un valor,
  - `rejected`: cuando la promesa falla y devuelve un error,
- `Result`, que contiene el valor devuelto por el desarrollador como parámetro de `resolve()` o `reject()`.

Origen: Conversación con Bing, 8/10/2023
(1) Supposons .... undefined.
(2) Qu’est-ce .... undefined.
(3) Une promes.... undefined.
(4) Une promes.... undefined.
(5) La méthode.... undefined.
(6) Ensuite, o.... undefined.
(7) Si la prom.... undefined.
(8) La méthode.... undefined.