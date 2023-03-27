# Objetos en TypeScript
En TypeScript, los objetos son estructuras de datos complejas que contienen propiedades y métodos. Las propiedades son variables que almacenan datos, mientras que los métodos son funciones que realizan acciones sobre estos datos.

## Declaración de objeto en TypeScript
En TypeScript, se puede declarar un objeto utilizando una notación literal de objeto. Esto implica enumerar las propiedades y sus valores entre llaves, como en el siguiente ejemplo:

```javascript
// Declaración de un objeto
let persona = {
  nombre: "John",
  edad: 30,
  saludo: function() {
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
  }
};
// Uso del objeto
persona.saludo(); // Salida: Hola, mi nombre es John y tengo 30 años.
```

### Ejemplo de Uso
En este ejemplo, hemos creado un objeto `persona` que contiene tres propiedades: `nombre`, `edad` y `saludo`. La propiedad `saludo` es un método que muestra un mensaje de saludo utilizando los valores de las propiedades `nombre` y `edad`.

## Definición de la estructura de un objeto usando una interfaz
En TypeScript, las interfaces se utilizan para definir la estructura de un objeto y los tipos de sus propiedades. Esto permite asegurar que los objetos que creamos o manipulamos tengan las propiedades requeridas, con los tipos adecuados.

### Uso de una interfaz para la estructura de un objeto
Podemos definir la estructura del objeto utilizando una interfaz. Para usar una interfaz con el fin de definir la estructura de un objeto, debemos crear una interfaz que describa las propiedades del objeto y sus tipos.

```javascript
// Declaración de una interfaz
interface Persona {
  nombre: string;
  edad: number;
  saludo: () => void;
}
```

### Declarar un objeto conforme a la interfaz
Podemos usar esta interfaz para definir un objeto `persona` que corresponda a la estructura de `Persona`. Podemos hacerlo declarando una variable `persona` de tipo `Persona` e inicializando sus propiedades con valores de tipo `string` y `number`, respectivamente, y definiendo el método `saludo` con una función anónima que usa `console.log` para mostrar un mensaje de saludo.

```javascript
// Declaración de un objeto con la interfaz Persona
let persona: Persona = {
  nombre: "John",
  edad: 30,
  saludo: function() {
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
  }
};
```

### Uso de un método de un objeto
Ahora, si queremos llamar al método `saludo` del objeto `persona`, podemos simplemente utilizar la notación "`.`" (punto) para acceder al método.

```javascript
// Uso del método
persona.saludo(); // Salida: Hola, mi nombre es John y tengo 30 años.
```

### Conclusión y garantía de tipado
Cuando llamamos a este método, veremos el mensaje de saludo en la consola, que dice "Hola, mi nombre es John y tengo 30 años". En este ejemplo, hemos declarado una interfaz `Persona` que describe la estructura del objeto. Luego, hemos creado un objeto `persona` utilizando esta interfaz.

Al usar una interfaz para describir los tipos de parámetros de funciones o métodos, podemos asegurarnos de que los parámetros pasados tienen las propiedades requeridas, con los tipos adecuados.

## Creación de objetos a partir de una clase
En TypeScript, las clases se utilizan para crear objetos que comparten una estructura y comportamientos comunes. Para crear un objeto a partir de una clase, debemos instanciarla utilizando la palabra clave `new`.

### Definición de la clase Persona
```typescript
class Persona {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  decirHola() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
```

### Explicación del ejemplo
En este ejemplo, hemos creado una clase `Persona` que contiene dos propiedades (`nombre` y `edad`). La clase también tiene un constructor que toma dos parámetros (`nombre` y `edad`), e inicializa las propiedades de la clase con estos valores. Además, la clase tiene un método `decirHola()` que muestra un mensaje de saludo usando las propiedades `nombre` y `edad`.

## Ejemplo de Instanciación de una Clase
Para crear un objeto a partir de esta clase, debemos instanciar la clase utilizando la palabra clave `new`. Aquí tienes un ejemplo:

```typescript
let persona = new Persona("John", 30);
persona.decirHola(); // Salida: Hola, mi nombre es John y tengo 30 años.
```

### Descripción del Ejemplo
En este ejemplo, hemos creado un objeto `persona` a partir de la clase `Persona` utilizando la palabra clave `new`. Hemos pasado los valores "John" y 30 al constructor de la clase para inicializar las propiedades del objeto. Luego, hemos llamado al método `decirHola()` del objeto para mostrar un mensaje de saludo utilizando las propiedades del objeto.

## Objetos Anidados en TypeScript
En TypeScript, es posible definir objetos anidados, es decir, objetos que tienen propiedades que son ellas mismas objetos. A continuación se muestra un ejemplo para ilustrar esto.

### Definición de la Interfaz `Address`
```typescript
interface Direccion {
  calle: string;
  ciudad: string;
  codigoPostal: string;
}
```

### Utilizando la Interfaz `Address` en otra Interfaz
Podemos luego utilizar esta interfaz como tipo de propiedad para una interfaz `Persona` que define las propiedades de una persona, incluyendo una propiedad `direccion` que es un objeto de tipo `Direccion`.

```typescript
interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}
```

### Creación de un Objeto con Propiedades Anidadas
Podemos entonces crear un objeto `persona` que corresponda a esta estructura especificando las propiedades `nombre`, `edad` y `direccion`, como sigue:

```typescript
// Declaración de un objeto anidado
let persona: Persona = {
  nombre: "John",
  edad: 30,
  direccion: {
    calle: "123 Avenida Principal",
    ciudad: "CualquierCiudad",
    codigoPostal: "12345"
  }};
```

### Accediendo a las Propiedades del Objeto Anidado
Podemos acceder a las propiedades del objeto `persona` utilizando la notación "`.`" (punto), como en el siguiente ejemplo:

```typescript
// Utilización del objeto anidado
console.log(persona.nombre); // Salida: John
console.log(persona.direccion.ciudad); // Salida: CualquierCiudad
```

### Resumen del Ejemplo
En este ejemplo, hemos añadido una propiedad `direccion` al objeto `persona`. La propiedad `direccion` contiene otro objeto con propiedades de tipo `Direccion`. Podemos acceder a las propiedades del objeto anidado utilizando un punto.

Por ejemplo, `persona.direccion.ciudad` accede a la propiedad `ciudad` del objeto `direccion`, que a su vez es una propiedad del objeto `persona`.