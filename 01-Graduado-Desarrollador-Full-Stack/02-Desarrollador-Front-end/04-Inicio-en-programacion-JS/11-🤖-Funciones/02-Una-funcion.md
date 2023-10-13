# Una función en JavaScript

## Objetivos

- Aprender qué es una función JavaScript
- Saber utilizar el retorno de una función ( return )

## Mise en situation

Vamos a ver cómo se declara una función JavaScript y qué es posible realizar, con algunos ejemplos simples.

## Declarar una función JavaScript simple

En JavaScript, una función se declara utilizando la palabra function seguida de un espacio, luego del nombre de la función (ej: myFunctionName ) al que se le añaden paréntesis seguidos de llaves {}. Las acciones que hará la función se anotan entre estas llaves.

### Ejemplo

```javascript
// Declarar la función
function myFunctionName () {
  // Aquí el código de mi función
}
```

## Llamar y ejecutar una función JavaScript simple

Para ejecutar una función, basta con llamarla por su nombre.

```javascript
// Declarar la función
function decirHola () {
  console . log ( "¡Hola!" )
}

// Llamada de la función
decirHola ()
```

## Retorno de una función con return

Una función puede ejecutar un bloque de instrucciones (como en el ejemplo anterior), al que es posible hacer devolver un valor gracias a la instrucción return . Esto permite, por ejemplo, recuperar un valor calculado (número, texto, lista de valores, booleano true/false, etc.) para seguir utilizándolo en el resto de nuestro código. Una función se detiene inmediatamente en el momento en que la instrucción return es procesada. El valor devuelto puede ser tratado directamente o almacenado en una variable.

### Ejemplo

```javascript
// Cuadrado de un número
function cuadradoNumero () {
  return 10
}

let numero = cuadradoNumero ()

// Mostrar en la consola : 10
console . log ( cuadradoNumero ())
console . log ( numero );
```

## A recordar

- Para declarar una función, se utiliza la palabra function seguida de un espacio, luego del nombre de la función al que se le añaden paréntesis, y se escribe el código entre llaves.
- Una función puede devolver un valor gracias a la instrucción return.
- Para llamar a la función, se va a utilizar simplemente su nombre seguido de paréntesis ().

## Complemento

[Fonctions (MDN Web docs)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions).