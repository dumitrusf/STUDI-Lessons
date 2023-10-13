# El alcance de las variables

## Objetivo

Comprender el alcance de las variables en una función

## El alcance de las variables en una función JavaScript

Podemos definir variables en los bloques de instrucciones de nuestras funciones JavaScript. Estas no estarán disponibles fuera de la función, lo que permite evitar los conflictos (por ejemplo, si hay variables con el mismo nombre en el código que llama a la función o en otras funciones)¹[1].

### Ejemplo

```javascript
function hello ( userName ) {
  let helloMessage = 'Bonjour ' + userName + ' !'
  console . log ( helloMessage )
}

// Muestra en la consola : Bonjour John !
hello ( 'John' )

// Muestra en la consola : ReferenceError: helloMessage is not defined
console . log ( helloMessage )
```

```javascript
function hello ( userName ) {
  let helloMessage = 'Bonjour ' + userName + ' !'
  console . log ( helloMessage )
}

let helloMessage = 'Hello world !'

// Muestra en la consola : Bonjour John !
hello ( 'John' )

// Muestra en la consola : Hello world !
console . log ( helloMessage )
```

## Diferencias var / let /const

### La instrucción Let:

Su principal característica es su portada: está limitada a la del bloque actual. Para recordar, un bloque en Javascript es lo que encontramos entre llaves: una comparación en if, un bucle while, etc.

```javascript
function test (){
  if ( 1 === 1 ){
    let maVar = true ;
    console . log ( maVar ); // Devuelve true
  }
  console . log ( maVar ); // Devuelve un error, let no existe fuera del bloque "if"
}
```

### La instrucción var:

Es la más antigua, existe desde JavaScript 1.0. La instrucción var permite declarar una variable cuya portada es la función que la contiene, o el contexto global si la variable se declara fuera de cualquier función.

### Ejemplo

```javascript
function showNumber () {
  let n = 5
  var x = 10
  if ( true ) {
    let n = 7
    var x = 12
  }
  // Muestra en la consola : 5
  console . log ( n )
  // Muestra en la consola : 12
  console . log ( x )
}

showNumber ()
```

## A recordar

- El alcance de las variables definidas en una función se detiene en la función.
- var : portada de la función o contexto global.
- let : portada del bloque actual.

## Buena práctica

>Vas a seguir encontrando variables var en algunos proyectos, en general esta presencia se debe a la antigüedad del código producido. Hoy en día las buenas prácticas tienden hacia un uso formal de let y const.

## Complemento

- **[var](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var)**

- **[let](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let)**