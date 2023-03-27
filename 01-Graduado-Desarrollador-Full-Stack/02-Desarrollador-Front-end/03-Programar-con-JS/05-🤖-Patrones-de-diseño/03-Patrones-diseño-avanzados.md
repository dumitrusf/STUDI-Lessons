# Patrones de diseño avanzados en JavaScript

## MVC

El MVC (Modelo-Vista-Controlador) es un patrón de diseño que permite separar la lógica de presentación, la lógica de negocio y la lógica de manejo de entradas de usuario de una aplicación. Facilita el diseño y mantenimiento de aplicaciones dividiendo el código en 3 partes distintas: el Modelo, la Vista y el Controlador.

### Modelo

El Modelo representa la lógica de negocio de la aplicación y los datos asociados. Contiene las reglas de validación y las operaciones que permiten manipular los datos. El Modelo puede ser utilizado para comunicar con la base de datos o para llevar a cabo operaciones de cálculo.

### Vista

La Vista representa la parte de la interfaz de usuario que permite visualizar los datos. Es responsable de la presentación de los datos al cliente. La Vista es pasiva y no contiene ninguna lógica de negocio.

### Controlador

El Controlador representa la parte de la aplicación que maneja las entradas de usuario y coordina la interacción entre la Vista y el Modelo. Es responsable de enviar los datos del Modelo a la Vista y de recibir las entradas de usuario para procesarlas.

### Mantenimiento y Colaboración

El uso del MVC facilita el mantenimiento de la aplicación al separar las diferentes partes del código. Esto también facilita la colaboración entre los diferentes miembros del equipo de desarrollo, ya que cada parte del código puede ser modificada sin afectar a las otras partes. Cuando el usuario interactúa con la aplicación, el Controlador se encarga de recibir y procesar las entradas de usuario. Obtiene los datos del Modelo y los envía a la Vista para mostrarlos. Cuando el usuario modifica los datos, el Controlador recoge estas modificaciones y las envía al Modelo para actualizarlos.

### Aplicación en Desarrollo Web

El MVC es ampliamente utilizado en el desarrollo web, donde a menudo se asocia con frameworks como Angular, React o Vue.js. Estos frameworks ofrecen herramientas para simplificar la implementación del MVC y para automatizar algunas tareas, como la actualización de la Vista en respuesta a las modificaciones del Modelo.

### Ejemplo: Implementación en JavaScript

**Aquí tienes un ejemplo de implementación del MVC en JavaScript:**

```javascript
// Modelo
class Model {
  constructor() {
    this.data = [];
  }
  addData(item) {
    this.data.push(item);
  }
  getData() {
    return this.data;
  }
}
// Vista
class View {
  constructor() {}
  render(data) {
    console.log(`Datos actuales: ${JSON.stringify(data)}`);
  }
}
// Controlador
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  addData(item) {
    this.model.addData(item);
    this.view.render(this.model.getData());
  }
}
// Uso del MVC
const model = new Model();
const view = new View();
const controller = new Controller(model, view);
// Añadiendo datos
controller.addData("Dato 1");
controller.addData("Dato 2");
```

### Descripción del Ejemplo
En este ejemplo, el Modelo está representado por la clase `Model`, que contiene una propiedad `data` para almacenar los datos y 2 métodos: `addData` para añadir datos y `getData` para recuperar los datos.

La Vista está representada por la clase `View`, que contiene un método `render` para mostrar los datos al usuario.

El Controlador está representado por la clase `Controller`, que contiene una referencia al Modelo y a la Vista. También contiene un método `addData` para añadir datos al Modelo y actualizar la Vista con los nuevos datos.

Finalmente, el MVC se utiliza creando una instancia del Modelo, de la Vista y del Controlador, y usando el Controlador para añadir datos al Modelo.

Cuando `addData` se llama en el Controlador, añade los datos al Modelo llamando `addData` en el Modelo. Luego, llama a `render` en la Vista pasando los datos actualizados del Modelo. La Vista muestra entonces los datos al usuario.

## Introducción al Patrón de Comando

El patrón de diseño Command es un patrón comportamental que permite separar la lógica de invocación de un comando de la lógica de su implementación. Encapsula una petición como un objeto, lo cual permite parametrizar métodos con diferentes peticiones, encapsular peticiones en objetos para tratarlas a distancia y permitir la cancelación de operaciones. El patrón Command consta de cuatro elementos principales: el comando en sí, el objeto receptor, el invocador y el cliente. El comando es el objeto que contiene la petición a ejecutar y los parámetros necesarios para ejecutarla. El objeto receptor es el objeto que contiene la lógica empresarial que será ejecutada por el comando. El invocador es el objeto que invoca el comando para ejecutar la petición. El cliente es el objeto que crea el comando y especifica el objeto receptor y el método a invocar.

### Beneficios del Patrón de Comando
La utilización del patrón Command permite reducir el acoplamiento entre los objetos, facilitar la gestión de operaciones, proveer funcionalidades de cancelación y recuperación, y ofrecer una base para operaciones transaccionales.

### Ejemplo de Implementación en JavaScript

```javascript
// Receptor
class Receiver {
  constructor() {}
  action() {
    console.log("Acción realizada.");
  }
}
// Comando
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    console.log("Comando ejecutado.");
    this.receiver.action();
  }
  undo() {
    console.log("Comando anulado.");
  }
}
// Invocador
class Invoker {
  constructor() {
    this.commands = [];
  }
  setCommand(command) {
    this.commands.push(command);
  }
  executeCommands() {
    this.commands.forEach((command) => {
      command.execute();
    });
  }
  undoCommands() {
    this.commands.reverse().forEach((command) => {
      command.undo();
    });
  }
}
// Utilización de Command
const receiver = new Receiver();
const command1 = new Command(receiver);
const command2 = new Command(receiver);
const invoker = new Invoker();
// Configuración de comandos para el invocador
invoker.setCommand(command1);
invoker.setCommand(command2);
// Ejecución de comandos
invoker.executeCommands();
// Anulación de comandos
invoker.undoCommands();
```

### Descripción de las Clases en el Ejemplo

La clase `Receiver` representa el objeto que ejecuta el comando. Contiene un método `action` que simplemente muestra "Acción realizada".

La clase `Command` encapsula un comando a ejecutar. Toma una referencia al `Receiver` en su constructor y contiene 2 métodos: `execute`, que invoca el método `action` del `Receiver`, y `undo`, que se llama para anular el comando.

La clase `Invoker` contiene una lista de comandos (`this.commands`) y 2 métodos: `setCommand` para añadir comandos a la lista y `executeCommands` para ejecutar todos los comandos de la lista. También contiene un método `undoCommands` para anular todos los comandos en orden inverso.

En resumen, se crean 3 objetos: un objeto `receiver` de la clase `Receiver` para representar el objeto que ejecuta el comando, y 2 objetos `command1` y `command2` de la clase `Command` para encapsular los comandos a ejecutar.

Después, se crea un objeto `invoker` de la clase `Invoker` para invocar los comandos. Los 2 comandos se añaden al invocador utilizando el método `setCommand`, luego todos los comandos se ejecutan utilizando el método `executeCommands`.

Finalmente, todos los comandos se anulan en orden inverso utilizando el método `undoCommands`.

##  Patrón Iterator

El patrón de diseño Iterator es un patrón comportamental que proporciona una forma de recorrer una colección de objetos sin exponer la estructura interna de la colección. Define una interfaz para acceder a los elementos de una colección de manera secuencial, sin conocer la estructura interna de la colección. El patrón Iterator se compone de dos elementos principales: el agregado y el iterador. El agregado es el objeto que contiene los elementos a recorrer, y el iterador es el objeto que permite recorrer los elementos del agregado. El iterador contiene métodos para acceder al siguiente elemento y para verificar si quedan elementos por recorrer.

### Beneficios del Patrón Iterator

El uso del patrón Iterator permite simplificar la lógica de recorrido de colecciones y proporcionar una interfaz uniforme para recorrer diferentes tipos de colecciones.

### Ejemplo de Implementación en JavaScript

```javascript
// Clase PersonCollection (Agregado)
class PersonCollection {
  constructor() {
    this.persons = [];
  }
  addPerson(person) {
    this.persons.push(person);
  }
  getIterator() {
    return new PersonIterator(this.persons);
  }
}
// Clase PersonIterator (Iterador)
class PersonIterator {
  constructor(persons) {
    this.index = 0;
    this.persons = persons;
  }
  hasNext() {
    return this.index < this.persons.length;
  }
  next() {
    const person = this.persons[this.index];
    this.index++;
    return person;
  }
}
// Clase Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// Uso del Patrón Iterator
const personCollection = new PersonCollection();
personCollection.addPerson(new Person("Alice", 25));
personCollection.addPerson(new Person("Bob", 30));
personCollection.addPerson(new Person("Charlie", 35));
const iterator = personCollection.getIterator();
while (iterator.hasNext()) {
  const person = iterator.next();
  console.log(person.name + ", " + person.age + " años");
}
```

### Descripción de las Clases en el Ejemplo

La clase `PersonCollection` (Agregado) es el objeto que contiene los elementos a recorrer. En este ejemplo, vamos a utilizar una clase `PersonCollection` para representar el agregado. Esta clase debe tener un método `getIterator` que retorne un objeto iterador de tipo `PersonIterator`.

La clase `PersonIterator` (Iterador) es el objeto que permite recorrer los elementos del agregado. En este ejemplo, utilizamos una clase `PersonIterator` para representar el iterador. Esta clase debe tener una referencia a la colección `PersonCollection`, así como un método `hasNext` para verificar si quedan elementos por recorrer, y un método `next` para acceder al siguiente elemento de la colección.

Finalmente, creamos una instancia de `PersonCollection`, añadimos 3 objetos `Person` a la colección y obtenemos un iterador para recorrer la colección. Luego, usamos un bucle `while` para recorrer la colección y mostrar el nombre y la edad de cada persona.

## Patrón Memento

El patrón de diseño Memento es un patrón comportamental que permite capturar y restaurar el estado interno de un objeto sin violar la encapsulación. El Memento es un objeto que guarda el estado del objeto original en un momento dado, y el Caretaker es el objeto que maneja el almacenamiento y la restauración del estado desde el Memento. La definición del Memento implica la creación de un objeto que guarda el estado interno de otro objeto. Este objeto solo debe ser accesible por el objeto en sí (por lo que no se debe violar la encapsulación). El Memento debe proveer un método para recuperar el estado anterior del objeto. El Caretaker es el objeto que maneja la preservación y la restauración del estado del objeto desde el Memento. Guarda los Mementos en una pila y provee métodos para guardar el estado actual del objeto, para restaurar el estado del objeto desde un Memento previamente guardado, y para deshacer las guardas anteriores.

### Ejemplo de Implementación en JavaScript

```javascript
// Clase Memento
class Memento {
  constructor(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}
// Clase Caretaker
class Caretaker {
  constructor(originator) {
    this.originator = originator;
    this.mementos = [];
  }
  save() {
    const state = this.originator.getState();
    const memento = new Memento(state);
    this.mementos.push(memento);
  }
  undo() {
    const memento = this.mementos.pop();
    this.originator.setState(memento.getState());
  }
}
// Clase Originator
class Originator {
  constructor(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}
// Uso del Patrón Memento
const originator = new Originator("estado inicial");
const caretaker = new Caretaker(originator);
console.log(originator.getState());  // muestra "estado inicial"
caretaker.save();
originator.setState("estado modificado");
caretaker.save();
console.log(originator.getState());  // muestra "estado modificado"
caretaker.undo();
console.log(originator.getState());  // muestra "estado modificado"
```

### Descripción de las Clases en el Ejemplo

El objeto `Memento` es el objeto que guarda el estado interno del objeto original en un momento dado. En este ejemplo, usamos una clase `Memento` para representar el objeto Memento. Esta clase debe tener un método `getState` para devolver el estado del objeto, y un método `setState` para restaurar el estado del objeto.

El objeto `Caretaker` es el objeto que maneja la preservación y la restauración del estado desde el `Memento`. En este ejemplo, usamos una clase `Caretaker` para representar el objeto Caretaker. Esta clase debe tener una referencia al objeto original cuyo estado queremos guardar, así como una pila de Mementos para guardar los estados anteriores del objeto.

Luego, podemos crear una instancia del objeto original y una instancia del objeto `Caretaker`. Podemos cambiar el estado del objeto original y guardar el estado actual llamando al método `save` del objeto `Caretaker`. También podemos deshacer cambios anteriores llamando al método `undo` del objeto `Caretaker`.

Finalmente, creamos una instancia del objeto original (`Originator`) con un estado inicial, y una instancia del objeto `Caretaker` con una referencia al objeto original. Luego, modificamos el estado del objeto original, guardamos el estado actual llamando al método `save` del objeto `Caretaker`, y mostramos el estado actual del objeto original.

## Observable en RxJS

RxJS es una librería JavaScript que implementa el patrón de diseño Observable. Observable es un patrón de diseño que permite gestionar eventos asíncronos utilizando un enfoque de programación reactiva.

### Funcionamiento de un Observable

El objeto Observable emite valores asíncronos en el tiempo y permite que los observadores se suscriban a estos valores. Cuando el Observable emite un valor, todos los observadores suscritos reciben dicho valor.

### Herramientas y métodos en RxJS

La librería RxJS ofrece una implementación completa del patrón de diseño Observable, con numerosos métodos para crear, combinar y manipular Observables.

### Ejemplo de Código: Creando un Observable

Aquí tienes un ejemplo de cómo usar RxJS para crear un Observable que emite números aleatorios cada segundo:

```JS
  const { Observable } = rxjs;
  const observable = new Observable((observer) => {
    const intervalId = setInterval(() => {
      const random = Math.random();
      observer.next(random);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  observable.subscribe((value) => {
    console.log(value);
  });
```

### Detalles del Código de Ejemplo

En este ejemplo, creamos un Observable que emite números aleatorios cada segundo. Utilizamos el método `Observable` de RxJS para crear el Observable, y pasamos una función que define la lógica del Observable. En dicha función, usamos el método `setInterval` para emitir números aleatorios cada segundo, y el método `observer.next` para emitir cada número aleatorio a todos los observadores suscritos.

### Gestión de Recursos y Suscripción

También usamos el valor devuelto por la función para liberar recursos cuando el Observable se termina, llamando al método `clearInterval` para detener la emisión de números aleatorios. Luego, usamos el método `subscribe` del Observable para suscribirnos al Observable y recibir los valores emitidos. Pasamos una función que define lo que se debe hacer con cada valor emitido. En este ejemplo, simplemente mostramos cada valor en la consola.

## Cómo Instalar y Utilizar RxJS

Este segmento te enseña cómo instalar y utilizar la biblioteca RxJS en tus proyectos.

### Código de Ejemplo: Observable Básico

```js
import { Observable } from 'rxjs';
const observable = new Observable((observer) => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});
observable.subscribe((value) => console.log(value));
```

Este fragmento de código muestra un ejemplo básico de cómo crear un Observable en RxJS. Se emiten dos valores ("Hello" y "World") y luego se completa el Observable.

### Código de Ejemplo: Observable con Operadores
```js
import { Observable, interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
// Crea un Observable que emite números enteros en intervalos regulares
const source = interval(1000);
// Aplica los operadores map, filter y take al Observable
const transformed = source.pipe(
  map((value) => value * 2),
  filter((value) => value % 3 === 0),
  take(5)
);
// Muestra los valores emitidos por el Observable transformado
transformed.subscribe((value) => console.log(value));
```
Este segundo fragmento de código detalla cómo crear un Observable que emite números en intervalos regulares. Además, muestra cómo aplicar operadores al Observable para transformar los datos emitidos.

## Qué es BehaviorSubject en RxJS

Un BehaviorSubject es un tipo especial de Observable que viene con la biblioteca RxJS. Es especialmente útil cuando necesitamos compartir un valor que puede cambiar con el tiempo entre múltiples observadores.

### Características Principales de BehaviorSubject

Un BehaviorSubject tiene dos características principales:

1. Almacena la última valor emitido para sus observadores y lo transmite inmediatamente a cualquier nuevo observador que se suscriba.
2. Permite actualizar este valor y emitirlo a todos los observadores activos.

Estas características hacen que el BehaviorSubject sea particularmente útil para escenarios en los que se necesita compartir un valor que puede cambiar con el tiempo, como un estado compartido entre varios componentes en una aplicación.

### Ejemplo de Código: Uso de BehaviorSubject

```js
import { BehaviorSubject } from 'rxjs';
// Crea un BehaviorSubject con un valor inicial
const subject = new BehaviorSubject('Hello');
// Los observadores pueden suscribirse al BehaviorSubject
const observer1 = {
  next: value => console.log('Observer 1:', value),
};
const observer2 = {
  next: value => console.log('Observer 2:', value),
};
// Cuando un observador se suscribe, recibe inmediatamente la última valor emitido
subject.subscribe(observer1); // Muestra "Observer 1: Hello"
// El valor del BehaviorSubject se puede actualizar
subject.next('World');
// Los observadores activos reciben el nuevo valor
// Muestra "Observer 1: World"
// Los nuevos observadores también reciben la última valor emitido cuando se suscriben
subject.subscribe(observer2); // Muestra "Observer 2: World"
```

### Detalles del Ejemplo de BehaviorSubject

En este ejemplo, creamos un BehaviorSubject con un valor inicial de 'Hello'. Cuando el primer observador se suscribe, recibe inmediatamente este valor inicial. Luego, actualizamos el valor del BehaviorSubject a 'World', y el primer observador recibe este nuevo valor. Cuando el segundo observador se suscribe, también recibe el último valor emitido, que es 'World'.

## Función `from` en RxJS

La función `from` es un operador de creación en RxJS que permite convertir varios tipos de datos en un Observable. Esta función puede aceptar diferentes tipos de datos como argumentos, incluyendo arreglos, cadenas de caracteres, promesas, objetos iterables (como Sets o Maps), y objetos similares a Observables. Cuando `from` recibe uno de estos tipos de datos, crea un Observable que emite los elementos de la colección uno por uno.

### Detalles y Uso de la Función `from`

```js
import { from } from 'rxjs';
// Crea un arreglo
const items = [1, 2, 3, 4, 5];
// Crea un Observable a partir del arreglo
const observable = from(items);
// Un observador que muestra los valores emitidos
const observer = {
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('Terminado'),
};
// Se suscribe al Observable y muestra los valores emitidos
observable.subscribe(observer);
// Muestra:
// 1
// 2
// 3
// 4
// 5
// Terminado
```

### Explicación del Código de Ejemplo
En este ejemplo, se crea un Observable utilizando la función `from` de RxJS a partir de un arreglo con elementos del 1 al 5. Un observador se suscribe al Observable y muestra cada valor emitido en la consola. Una vez que se han emitido todos los valores, el observador muestra el mensaje "Terminado".



