# Promesas múltiples

## Objetivos

- Comprender el encadenamiento de promesas
- Descubrir la composición de promesas

## Contexto

Una operación asíncrona rara vez se ejecuta de forma aislada. En general, de una acción asíncrona básica se derivará una serie de acciones, también asíncronas. También es posible que una acción dependa del resultado de varias métodos asíncronos. El objeto Promise contiene varios métodos que facilitarán el encadenamiento y la composición de promesas.

## Encadenamiento de promesas

El método .then() devuelve una promesa, por eso es posible encadenarla con .catch() y .finally(). Y como el retorno del método .then() es una promesa, nada impide encadenar este retorno con otro método .then(). Sabiendo esto, se vuelve posible ejecutar una serie de acciones en un orden definido.

```javascript
var myPromise = new Promise (( resolve , reject ) => {
  if ( myAsyncFunction ()) //Función asíncrona que devuelve un booleano
    resolve ( "Es un éxito" );
  else {
    reject ( "Ha ocurrido un error" );
  }
});

myPromise . then (( result ) => {
  console . log ( "Resultado de myPromise : " + result );
})
.then (() => {
  console . log ( "Promesa 2" );
})
.then (() => {
  console . log ( "Promesa 3" );
});
//Resultado :
//Resultado de myPromise : Es un éxito
//Promesa 2
//Promesa 3
```

El método .then() tiene dos parámetros:

- El primero corresponde a la función ejecutada en caso de éxito. Esta función tendrá un parámetro, aquí result, que será valorado por el argumento pasado a la función resolve.
- El segundo corresponde a la función ejecutada en caso de fracaso. Esta función tendrá un parámetro, aquí error, que será valorado por el argumento pasado a la función reject.

Una promesa no puede cambiar de estado entre fulfilled y rejected, por lo que sólo se ejecutará una de las dos funciones.

Si .then() devuelve una promesa, .catch() y .finally() también. Por lo tanto, es totalmente posible encadenar varios .then(), .catch() y .finally().

```javascript
var myPromise = new Promise (( resolve , reject ) => {
  if ( myAsyncFunction ()) //Función asíncrona que devuelve un booleano
    resolve ( "Es un éxito" );
  else {
    reject ( "Ha ocurrido un error" );
  }
});

myPromise . then (( result ) => {
  //Ejecutado si resolve() es llamada en myPromise
  console . log ( "Resultado de myPromise : " + result );
})
.catch (( error ) => {
  //Ejecutado si reject() es llamada en myPromise
  console . log ( "Error de myPromise : " + error );
})
.finally (() => {
  //Ejecutado en todos los casos después del primer then o catch
  console . log ( "Método finally" );
})
.then (() => {
  //Ejecutado después de finally
  console . log ( "Método then" );
});
//Resultado:
//"Resultado de myPromise : Es un éxito"
//"Método finally"
//"Método then"
//o
//"Error de myPromise : Ha ocurrido un error"
//"Método finally"
//"Método then"
```

## Composición de promesas

En algunos casos, será necesario esperar la resolución de un conjunto de promesas para continuar la ejecución del programa. Por ejemplo, si queremos descargar todos los archivos de una carpeta.

### Tratar todas las promesas con .all()

El método .all() espera como parámetro un array de Promise y devolverá una promesa a cambio. Estas promesas se jugarán según su orden en el array en parámetro. El valor devuelto será entonces un array que contiene los resultados de todas las Promises, en el orden de llamada. El método .all() se considerará como fulfilled si todas las promesas del array son fulfilled, e inversamente, como rejected si una sola de las Promise es rejected.

```javascript
function tryGetFile ( fileName ){
  return new Promise ( function ( resolve , reject ) {
    var file = tryReadFile ( fileName ); //Método asíncrono para recuperar el contenido de un archivo
    if ( !! file ){ // if (file === true)
      resolve ( file );
    } else {
      reject ( "Archivo no disponible" );
    }
  });
}

Promise . all ([ tryGetFile ( "File1.txt" ), tryGetFile ( "File2.txt" ), tryGetFile ( "File3.txt" )])
.then (( values ) => console . log ( values ))
.catch (( error ) => console . log ( error ));
//Resultado:
//["Mi archivo 1", "Mi archivo 2", "Mi archivo 3"]
```

### La más rápida gana

El método .race() espera como parámetro un array de Promise y devolverá una promesa a cambio. A diferencia de .all(), .race() sólo devolverá la promesa resuelta más rápidamente.

```javascript
const promise1 = new Promise (( resolve , reject ) => setTimeout ( resolve , 500 , 'Primera' ));³[3]
const promise2 = new Promise (( resolve , reject ) => setTimeout ( resolve , 100 , 'Segunda' ));

Promise . race ([ promise1 , promise2 ])
.then (( result ) => console . log ( result ));
// Las 2 son resueltas, pero promise2 es más rápida
//Resultado:
//Segunda
```

## A recordar

- Una promesa devuelve siempre otra promesa. Por lo tanto, pueden ser encadenadas para definir lógicas de tratamiento en función de los resultados.

- Las promesas también pueden ser combinadas. Para esperar la resolución de un grupo con .all(), o para quedarse con la más rápida con .race().

## Complemento

- **[MDN : Utiliser les Promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises)**