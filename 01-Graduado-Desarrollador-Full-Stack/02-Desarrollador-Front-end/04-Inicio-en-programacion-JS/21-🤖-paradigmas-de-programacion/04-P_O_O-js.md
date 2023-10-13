# La Programación Orientada a Objetos

## Objetivos

- Descubrir el principio de la Programación Orientada a Objetos
- Diferenciar la POO de la programación imperativa

## Contexto

Con la programación imperativa, las funciones son el único medio de estructurar el código. Con la complejidad de las aplicaciones, hubo que encontrar una nueva forma de arquitecturar el código para centralizar los datos y las acciones a realizar. Así nació la Programación Orientada a Objetos.

## La Programación Orientada a Objetos

La Programación Orientada a Objetos es un paradigma que permite dividir el código en diferentes entidades. Cada entidad va a representar un elemento concreto, que nuestra aplicación va a manipular. Estas entidades se llaman objetos y su estructura se define en clases.

### Ejemplo: Gestion de usuarios

Tomemos un ejemplo concreto para ilustrar la POO. En los sitios actuales, es común que un usuario pueda registrarse y autenticarse. Al registrarse, va a proporcionar su e-mail, su nombre de usuario y su contraseña, y las dos últimas informaciones se reutilizarán en el momento de la conexión.

En programación imperativa, el nombre de usuario, el e-mail y la contraseña se almacenarían en tres variables diferentes. También se declararían dos funciones: una función de registro que toma como parámetros un login, una contraseña y un e-mail, y una función de autenticación que toma como parámetros un login y una contraseña.

```javascript
// Función de registro
function subscribe ( email , username , password ) {
  // ... Inserción de las informaciones en la base de datos
  console . log ( 'Usuario ' + username + ' registrado !' );
}

// Función de autenticación
function login ( username , password ) {
  // ... Verificación de las informaciones en la base de datos
  console . log ( 'Hola ' + username + ' !' );
}

// Declaramos los valores a utilizar
let username = 'John' ;
let email = 'mail@john.com' ;
let password = 'p455w0rd' ;

// Llamamos a las funciones dándoles los valores
subscribe ( email , username , password );
login ( username , password );
```

En POO, vamos a crear una clase User que contendrá todos los datos relacionados con un usuario y todas las acciones a realizar con estos datos. Así, el nombre de usuario, el e-mail, la contraseña y las dos funciones estarán reunidas en la misma entidad, y las funciones solo tendrán que servirse de los datos de los que disponen. Luego usaremos esta clase para crear un objeto que simbolice un usuario en particular.

```javascript
// Definimos una clase User que permite decir de qué vamos a necesitar para gestionar los usuarios
class User {
  // Definimos aquí los datos que necesitamos para nuestros usuarios
  constructor ( email , username , password ) {
    // Un usuario tiene un e-mail, un nombre y una contraseña.
    this . email = email ;
    this . username = username ;
    this . password = password ;
  }

  // Una vez definidos los datos, vamos a crear las funciones que actúan sobre estos datos
  // Función de registro. Notamos que no toma parámetros de entrada, sino que usa los datos de la clase (aquí, "this.username")
  subscribe () {
    // ... Inserción de las informaciones en la base de datos
    console . log ( 'Usuario ' + this . username + ' registrado !' );
  }

  // Función de autenticación
  login () {
    // ... Verificación de las informaciones en la base de datos
    console . log ( 'Hola ' + this . username + ' !' );
  }
}

// Creamos nuestro objeto a partir de la clase User. Para ello, le damos los valores :
let john = new User ( 'mail@john.com' , 'John' , 'p455w0rd' );

// Llamamos a las funciones. Estas funciones usan los valores del objeto "john". Aquí, "john" contiene todos los datos y todas las funciones que permiten gestionar un usuario.
john . subscribe ();
john . login ();
```

La Programación Orientada a Objetos permite modelar nuestras aplicaciones a partir de elementos de la vida real: usuarios, productos, coches, etc. Con este paradigma, no manipulamos funciones, sino entidades dotadas de datos y acciones que interactúan con estos datos. Es otra forma de abordar y estructurar el código.

## A recordar

- La Programación Orientada a Objetos permite definir clases que definen la estructura de los elementos a manipular en la aplicación. Cada elemento está compuesto de datos y de operaciones a realizar sobre estos datos.
- Una vez creada la clase, es posible crear objetos a partir de la clase para poder dar valores a los datos y efectuar las operaciones.

## Complemento

- **[Programación Orientada a Objetos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos)**

- **[Las clases en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)**