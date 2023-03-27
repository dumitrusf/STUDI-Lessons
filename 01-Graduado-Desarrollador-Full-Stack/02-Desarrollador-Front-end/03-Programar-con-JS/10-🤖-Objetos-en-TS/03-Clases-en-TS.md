# Clases en TypeScript
Las clases en TypeScript son una forma de crear objetos complejos utilizando la sintaxis de clases familiar de la Programación Orientada a Objetos (POO). Las clases se utilizan a menudo para crear objetos que tienen propiedades y métodos, lo que las hace muy útiles para modelar entidades del mundo real en el código.

## Implementación de Clases en TypeScript
En TypeScript, las clases se pueden implementar de la misma manera que en otros lenguajes de programación orientados a objetos, como Java o C#. Las clases se definen utilizando la palabra clave `class`, seguida del nombre de la clase y la llave que abre para definir el cuerpo de la clase. A continuación se muestra un ejemplo simple de una clase en TypeScript:

```typescript
class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make; // Notar la corrección de "Make" a "make"
    this.model = model; // Notar la corrección de "Model" a "model"
    this.year = year; // Notar la corrección de "Year" a "year"
  }
  drive(): void {
    console.log(`Driving a ${this.make} ${this.model} from ${this.year}`);
  }
}
```

### Ejemplo de una Clase Car
En este ejemplo, tenemos una clase `Car` que tiene tres propiedades: `make`, `model` y `year`. La clase también tiene un constructor que toma estas tres propiedades como parámetros y las asigna a las propiedades correspondientes del objeto. Finalmente, la clase tiene un método `drive` que muestra un mensaje describiendo el coche en acción.

## Instanciación de Clases (Creación de Objetos)
La instanciación de clases implica crear una nueva instancia u objeto a partir de la clase. La clase actúa como un modelo o plan para el objeto, y la instanciación crea una copia de ese modelo con sus propias propiedades y métodos. En TypeScript, la instanciación se realiza utilizando la palabra clave `new`, seguida del nombre de la clase y sus parámetros del constructor si es necesario.

```typescript
const myCar = new Car('Tesla', 'Model S', 2022);
```

### Uso de Métodos y Propiedades en una Instancia de Clase
Ahora tenemos una instancia de la clase `Car` que tiene las propiedades `make`, `model` y `year` definidas con los valores pasados al constructor.

Podemos entonces llamar a los métodos de la clase y acceder a las propiedades del coche:

```typescript
myCar.drive(); // muestra "Driving a Tesla Model S from 2022"
```

### Ejemplo de Instanciación y Uso de Método
En este ejemplo, creamos una instancia de la clase `Car` pasando "Tesla", "Model S" y "2022" al constructor. Luego, llamamos al método `drive` del objeto para mostrar un mensaje.

## Constructores en TypeScript
En TypeScript, un constructor es un método especial dentro de una clase que se invoca cuando se crea una nueva instancia de esa clase. La función del constructor es inicializar las propiedades del nuevo objeto y establecer su estado inicial.

### Ejemplo de Uso de Constructor
El constructor se define en la clase usando la palabra clave `constructor`. Puede aceptar parámetros que se utilizan para asignar valores iniciales a las propiedades del objeto. Por ejemplo:

```typescript
class Person {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
```

En este ejemplo, la clase `Person` tiene un constructor que toma dos parámetros, `nombre` y `edad`, que se utilizan para inicializar las propiedades `nombre` y `edad` del objeto recién creado.

### Inicialización Automática de Propiedades
Cuando se crea una instancia de una clase, el constructor se llama automáticamente para inicializar las propiedades del objeto. Por ejemplo:

```typescript
let persona = new Person("Jordan", 30);
```

En este ejemplo, se crea una nueva instancia de la clase `Person` con los valores `nombre` y `edad` establecidos en "Jordan" y 30, respectivamente. El constructor se invoca automáticamente para inicializar las propiedades del objeto.

### Herencia de Constructores
Los constructores también pueden ser heredados por subclases utilizando la palabra clave `super`. Esto permite a las subclases invocar el constructor de la clase padre para inicializar las propiedades heredadas además de sus propias propiedades. Por ejemplo:

```typescript
class Empleado extends Person {
  salario: number;
  constructor(nombre: string, edad: number, salario: number) {
    super(nombre, edad);
    this.salario = salario;
  }
}
```

En este ejemplo, la clase `Empleado` hereda de la clase `Person` y también tiene una propiedad `salario`. El constructor de `Empleado` toma los mismos parámetros que el de `Person`, pero también usa `super(nombre, edad)` para llamar al constructor de `Person` e inicializar las propiedades heredadas.

## Métodos Estáticos en una Clase
Las clases en TypeScript también pueden tener métodos estáticos. Estos son métodos que pertenecen a la clase en sí y no a una instancia específica de la clase. A continuación se muestra un ejemplo:

```typescript
class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }
}
const suma = MathUtils.add(2, 3);
console.log(suma); // 5
```

En este ejemplo, tenemos una clase `MathUtils` que tiene un método estático `add`. Este método toma dos parámetros numéricos y devuelve su suma. Luego llamamos al método estático directamente en la clase misma, en lugar de en una instancia de la clase.

## Herencia en TypeScript
La herencia es un concepto clave de la programación orientada a objetos que permite crear una nueva clase a partir de una existente. En TypeScript, se puede utilizar la palabra clave `extends` para definir una clase que hereda de otra. Cabe recordar que el operador `extends` permite crear clases hijas que heredan las propiedades y métodos de la clase padre, con el objetivo de evitar la duplicación de código (código repetitivo).

### Aquí hay un ejemplo de una clase padre `Animal` con una propiedad `name` y un método `makeSound()`:

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log("El animal hace un sonido");
  }
}
```

## Clase Hija que Extiende de la Clase Padre
A continuación, podemos crear una clase hija `Dog` que extiende la clase padre `Animal` y añade un método `bark`:

```typescript
class Dog extends Animal {
  bark() {
    console.log("El perro ladra");
  }
}
```

## Instanciación de la Clase Hija y Uso de Métodos
Ahora, podemos crear una instancia de `Dog` y acceder a sus propiedades y métodos. En este ejemplo, la clase `Dog` hereda la propiedad `name` y el método `makeSound()` de la clase `Animal`. La clase `Dog` luego añade su propio método `bark()` para representar una funcionalidad específica de un perro.

```typescript
// Crea una instancia de la clase Dog
const myDog = new Dog("Flipper");
console.log(myDog.name);  // Salida: Flipper
myDog.makeSound();  // Salida: El animal hace un sonido
myDog.bark();  // Salida: El perro ladra
```

### Recapitulación de la Herencia
Al crear una instancia de la clase `Dog` con `new Dog('Flipper')`, la propiedad `name` se inicializa con el valor "Flipper" gracias al constructor de la clase `Animal`. Luego podemos llamar al método `bark()` de `Dog` y al método `makeSound()` heredado de `Animal`.

En este ejemplo, la clase `Dog` hereda de la clase `Animal`, lo que significa que `Dog` tiene acceso a las propiedades y métodos definidos en `Animal`, como la propiedad `name` y el método `makeSound()`. La clase `Dog` también define su propio método `bark()`, que no está presente en `Animal`.

## Implementación de Interfaces en TypeScript
La implementación de interfaces en TypeScript es una forma de definir un contrato entre una clase y una interfaz, con el objetivo de garantizar que la clase implemente todas las propiedades y métodos requeridos por la interfaz.

Aquí tienes un ejemplo:

```typescript
interface Animal {
  name: string;
  numberOfLegs: number;
  makeSound: () => void;
}
class Cat implements Animal {
  name: string;
  numberOfLegs: number;
  constructor(name: string) {
    this.name = name;
    this.numberOfLegs = 4;
  }
  makeSound() {
    console.log("Maullido");
  }
}
```

### Detalles de la Implementación
En este ejemplo, tenemos una interfaz `Animal` que define las propiedades y métodos que toda clase `Animal` debe implementar. Luego, tenemos una clase `Cat` que implementa la interfaz `Animal`. Por lo tanto, la clase `Cat` debe tener una propiedad `name` de tipo `string`, una propiedad `numberOfLegs` de tipo `number`, y un método `makeSound` que no toma argumentos y no devuelve nada.

### Beneficios de Usar Interfaces
Al utilizar una interfaz para definir el contrato entre la clase y la interfaz, podemos garantizar que la clase implementa todas las propiedades y métodos requeridos por la interfaz. Esto hace que el código sea más seguro y más fácil de mantener.

## Atención: Implementación de Múltiples Interfaces en TypeScript
En TypeScript, es posible definir una clase que implementa múltiples interfaces. Esto permite establecer las propiedades y métodos de la clase utilizando los contratos definidos por las interfaces, lo que ofrece una gran flexibilidad y facilita la reutilización del código.

### Ventajas de Implementar Interfaces en Clases
La ventaja de la implementación de clases con interfaces es que ofrece una gran flexibilidad y facilita la reutilización del código. Si otras clases también necesitan implementar las mismas interfaces, pueden hacerlo simplemente y utilizar las mismas propiedades y métodos definidos en las interfaces, sin tener que reescribir el código.

---

## Atención: Implementación de Interfaz vs Herencia en TypeScript
La herencia permite que una clase hija tome las propiedades y métodos de una clase padre, mientras que la implementación de una interfaz en una clase significa que la clase implementa todas las propiedades y métodos definidos en la interfaz.

### Relaciones en Herencia e Implementación de Interfaz
La herencia es una relación "es un" (por ejemplo, un gato es un animal), mientras que la implementación de interfaz es una relación "puede hacer" (por ejemplo, una clase "robot" puede implementar la interfaz "mover").

### Sintaxis en Herencia e Implementación de Interfaz
En términos de sintaxis, la herencia utiliza la palabra clave `extends` para definir la relación padre-hijo, mientras que la implementación de interfaz utiliza la palabra clave `implements` para indicar que la clase implementa una interfaz determinada.

### Cuándo Usar Herencia o Implementación de Interfaz
Si queremos crear una nueva clase basada en una clase existente, la herencia probablemente sea la mejor opción. Esto nos permite reutilizar el código existente y modificarlo para satisfacer nuestras necesidades específicas. Si simplemente queremos describir la forma de un objeto sin preocuparnos por su implementación, una interfaz es probablemente la mejor elección. Esto nos permite especificar las propiedades y métodos que esperamos de un objeto sin tener que preocuparnos por cómo está implementado ese objeto.

### Posibilidad de Implementar Múltiples Interfaces
También es importante destacar que es posible heredar solo de una clase, pero podemos implementar múltiples interfaces, lo que hace que el código sea más reutilizable y más fácil de mantener.