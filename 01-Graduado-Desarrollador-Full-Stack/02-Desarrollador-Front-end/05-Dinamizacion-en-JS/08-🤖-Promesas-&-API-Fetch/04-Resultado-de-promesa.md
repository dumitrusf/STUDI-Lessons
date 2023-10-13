# Resultado de una promesa

## Objetivo

- Explotar el resultado de una promesa

## Contexto

Ya sabemos que se instancia una promesa con el objeto Promise y que se gestiona la actualización de su estado con los métodos resolve y reject. Ahora vamos a poder abordar de forma más detallada el uso de este objeto en el código. ¿Cómo activar el tratamiento de la promesa y cómo tratar los retornos de ésta cuando se llama al método resolve o reject?

## Gestionar los callbacks con `.then()`

El objeto Promise es un objeto que representa el éxito o el fracaso de una operación asíncrona. A estos estados, habrá que asociarles comportamientos, callbacks. Esto es posible gracias al método .then() del objeto Promise.

```javascript
const scrutin = new Promise ( function ( resolve , reject ) {
  // Se recupera el % del resultado de la elección para el candidato 1
  var resultat = getResultatDuScrutin ( "Candidat1" );
  if ( resultat > .50 ){
    resolve ( "Candidat 1 es elegido" );
  } else {
    reject ( "Candidat 1 ha perdido" );
  }
} );

scrutin . then ( ( result ) => console . log ( result ),
                ( error ) => console . log ( error ) );
/* Si getResultatDuScrutin("Candidat1") == 0.3
//"Candidat 1 ha perdido"
Si getResultatDuScrutin("Candidat1") == 0.6
//"Candidat 1 es elegido"
*/
```

El método .then() tiene dos parámetros:

- El primero corresponde a la función ejecutada en caso de éxito. Esta función tendrá un parámetro, aquí result, que será valorado por el argumento pasado a la función resolve.
- El segundo corresponde a la función ejecutada en caso de fracaso. Esta función tendrá un parámetro, aquí error, que será valorado por el argumento pasado a la función reject.

Una promesa no puede cambiar de estado entre fulfilled y rejected, por lo que sólo se ejecutará una de las dos funciones.

## Atrapar los errores con .catch()

Es imprescindible indicar qué comportamiento adoptar en caso de error: esto es posible gracias al método .catch(). Este método se activará por el estado rejected de una Promise.

```javascript
var myPromise = new Promise (( resolve , reject ) => {
  /*[...]*/
  reject ( "Ha ocurrido un error" );
};
myPromise . catch (( error ) => console . log ( error ));
//Resultado :
//Ha ocurrido un error
```

## Ejecutar código sistemáticamente con .finally()

Puede que queramos ejecutar código independientemente del resultado de la Promise, es decir, que sea fulfilled o rejected. Para ello, existe el método .finally(). Este método no tendrá ningún parámetro y será imposible saber si la promesa es fulfilled o rejected.

```javascript
var myPromise = new Promise (( resolve , reject ) => {
  if ( /*[...]*/ )
    resolve ( "Es un éxito" );
  else {
    reject ( "Ha ocurrido un error" );
  }
};
myPromise . finally (() => console . log ( "Siempre ejecutada" ));
//Resultado :
//Siempre ejecutada
```

## Encadenar los métodos

El uso de los métodos .then(), .catch() y .finally() no es exclusivo. Estos métodos pueden encadenarse.

```javascript
var myPromise = new Promise (( resolve , reject ) => {
  if ( myAsyncFunction ()) //Función asíncrona que devuelve un booleano
    resolve ( "Es un éxito" );
  else {
    reject ( "Ha ocurrido un error" );
  }
};
myPromise . then (( result ) => console . log ( result ))
          . catch (( error ) => console . log ( error ))
          . finally (() => console . log ( "Siempre ejecutada" ));
//Si myAsyncFunction() === true
//Resultado:
//Es un éxito
//Siempre ejecutada
//Si myAsyncFunction() === false
//Resultado:
//Ha ocurrido un error
//Siempre ejecutada
```

## Complemento

### Funcionar de forma asíncrona

Otra forma de resolver los problemas asíncronos es el uso de las palabras clave async y await. Podremos colocar la palabra clave async delante de una declaración de función (o una expresión de función, o una función flecha) para transformarla en una función asíncrona. Usar la palabra clave async delante de una función hará que la función en cuestión devuelva siempre una promesa. En el caso de que la función devuelva explícitamente un valor que no sea una promesa, entonces ese valor será automáticamente envuelto en una promesa. La palabra clave await sólo es válida dentro de funciones asíncronas definidas con async. Esta palabra clave permite interrumpir la ejecución de una función asíncrona hasta que una promesa sea resuelta o rechazada. La función asíncrona se reanuda luego y devuelve el valor de resolución.

```javascript
async function test (){
  const promise = new Promise (( resolve , reject ) => {
    setTimeout (() => resolve ( '¡Se me espera antes de continuar!' ), 2000 )
  });
  let result = await promise ; //Espera a que la promesa sea resuelta o rechazada
  alert ( result );
}
test ();
```

### Ejemplo

#### Usar el método then()

```javascript
const getResultatDuScrutin2 = async ( candidat ) => {
  // llamada asíncrona (petición al servidor por ejemplo)
}

// La promesa de la función scrutin() es reemplazada por async
const scrutin = async () => {
  // await indica que se esperará el resultado de getResultatDuScrutin2() para devolver el resultado
  return resultat = await getResultatDuScrutin2 ( "Candidat1" );
}

scrutin (). then ( ( resultat => {
  if ( resultat > .50 ){
    console . log ( "Candidat 1 es elegido" );
  } else {
    console . log ( "Candidat 1 ha perdido" );
  }
}) )
```

## A recordar

- El método .then() del objeto Promise permite recuperar el resultado de una promesa, ya sea fulfilled o rejected.
- El método .catch() permitirá tratar los fracasos.
- Por último, el método .finally() permitirá ejecutar código a continuación de una promesa, sin conocer el resultado.