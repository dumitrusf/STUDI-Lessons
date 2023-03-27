# Introducción a los Patrones de Diseño en JavaScript

Un patrón de diseño (design pattern en inglés) es una solución general y reutilizable a un problema de diseño recurrente en el desarrollo de software. Un patrón de diseño describe un enfoque probado para resolver un problema específico de manera efectiva y elegante. No son fragmentos de código específicos que se pueden simplemente copiar y pegar en un proyecto, sino más bien modelos abstractos que describen la estructura y el comportamiento de los elementos de un sistema de software. Ofrecen directrices para resolver problemas comunes de diseño, como la gestión de dependencias, la gestión de excepciones, la creación de objetos y la comunicación entre componentes.

### Reutilización de Código

En primer lugar, los patrones de diseño permiten la reutilización de código. De hecho, representan soluciones probadas a problemas comunes de diseño de software, que los desarrolladores pueden adaptar a sus propias necesidades. De esta manera, evitan reinventar la rueda y crear código redundante, lo cual es una pérdida de tiempo y energía.

### Mantenibilidad del Código

En segundo lugar, los patrones de diseño mejoran la mantenibilidad del código. Al proporcionar una estructura clara y coherente a los proyectos, hacen que el código sea más fácil de entender, modificar y mantener. Esto es particularmente importante cuando varios desarrolladores trabajan en un mismo proyecto, ya que permite a cada uno saber dónde encontrar los elementos necesarios y cómo utilizarlos. Por lo tanto, el uso de patrones de diseño puede ayudar a reducir los errores y los bugs en el código.

### Legibilidad del Código

Finalmente, mejoran la legibilidad del código. Proporcionan nombres claros para los elementos del código, así como estructuras básicas, que hacen que el código sea más fácil de leer y entender. Esto puede ayudar a los desarrolladores a entender rápidamente cómo se utiliza un elemento del código y cómo puede ser modificado para satisfacer sus necesidades. Como resultado, los desarrolladores pueden ahorrar tiempo y energía al evitar tener que descifrar código complejo y difícil de leer.

Por supuesto, aquí tienes la traducción completa al español del texto en francés, en el contexto de programación en IT y en formato Markdown visible:

## Definición y Uso del Singleton

El Singleton es un patrón de diseño que garantiza la creación de una única instancia de una clase en una aplicación. Se utiliza para controlar el acceso a un recurso compartido, como una base de datos o un archivo de configuración. La idea detrás del Singleton es asegurar que solo haya una instancia de una clase, incluso si se instancia varias veces en el código. De hecho, el Singleton almacena la instancia de la clase creada la primera vez y luego la reutiliza para todas las instancias posteriores. De esta manera, evita crear instancias adicionales que podrían llevar a problemas de rendimiento o coherencia de datos.

### Implementación del Singleton

El Singleton se puede implementar de diversas maneras, pero el método más común consiste en usar una propiedad estática privada que almacena la instancia de la clase. La clase en sí tiene un método público estático que permite obtener esta instancia. Si la instancia no existe, se crea y se almacena en la propiedad estática. Un ejemplo común de uso del Singleton es para la gestión de la conexión a una base de datos. De hecho, es importante tener una sola conexión abierta a una base de datos para evitar conflictos de datos y problemas de rendimiento. Al utilizar un Singleton para la gestión de la conexión a la base de datos, los desarrolladores pueden asegurarse de que solo habrá una única conexión abierta a la vez.

### Desventajas del Uso del Singleton

Sin embargo, el uso del Singleton puede tener inconvenientes. De hecho, puede hacer que el código sea más difícil de probar y mantener, ya que la instancia única se comparte entre todos los usuarios de la clase. Además, puede ser difícil extender una clase que utiliza un Singleton, ya que no es posible crear subclases que tengan instancias diferentes de la clase madre.

### Ejemplo de Implementación en JavaScript

```javascript
const Singleton = (() => {
  let instance;

  // Función que crea la instancia única de la clase
  function createInstance() {
    const object = new Object("¡Soy la instancia única!");
    return object;
  }

  // Método público para obtener la instancia única de la clase
  return {
    getInstance : function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
// Uso del método público para obtener la instancia única
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
// Verificación de que ambas instancias son idénticas
console.log(instance1 === instance2); // true
```

En este ejemplo, el Singleton se implementa como una función anónima autoejecutable, que devuelve un objeto con un método público llamado `getInstance`. El método `getInstance` utiliza una variable `instance` para almacenar la instancia única de la clase. Si esta variable es nula, se llama al método `createInstance` para crear una nueva instancia de la clase. El método `createInstance` simplemente crea un objeto con una cadena de caracteres que indica que es la instancia única de la clase. Una vez creada la instancia única, se almacena en la variable `instance` y se devuelve por el método `getInstance`. Finalmente, en el ejemplo, se crean 2 instancias de la clase llamando al método `getInstance` dos veces, y luego se compara entre estas 2 instancias usando el operador `===`. Como era de esperar, la comparación devuelve "true", ya que las 2 instancias son idénticas.

### Encapsulación de la Instancia Única

Esta implementación utiliza una propiedad privada `let instance` que no se puede acceder desde el exterior de la función anónima autoejecutable. De esta manera, la instancia única de la clase está oculta al usuario de la clase, que no puede crear nuevas instancias ni modificar la instancia existente.

# Definición y Uso de la Factory

## ¿Qué es la Factory?
La Factory es un patrón de diseño que permite crear objetos sin especificar su clase exacta. Ofrece una interfaz común para crear diferentes tipos de objetos utilizando un método de fabricación. Este método decide qué clase de objetos crear en función de los parámetros proporcionados. La idea detrás de la Factory es separar la creación de objetos de su uso. En lugar de crear objetos directamente en el código, la Factory proporciona un método para crear objetos a partir de una clase abstracta o de una interfaz común. De esta manera, los desarrolladores pueden crear objetos sin conocer los detalles de su implementación.

### Implementación de la Factory
La Factory se puede implementar de diferentes formas. El método más común consiste en usar una función de fabricación, que tiene en cuenta los parámetros proporcionados para decidir qué clase de objetos crear. Esta función luego devuelve el objeto creado, que puede ser utilizado en el código. Un ejemplo típico de uso de la Factory es para crear objetos que comparten una misma interfaz pero tienen diferentes implementaciones. Por ejemplo, en una aplicación de procesamiento de pagos, la Factory puede usarse para crear diferentes tipos de pagos, como pagos con tarjeta de crédito, pagos mediante transferencia bancaria o pagos con PayPal. Cada tipo de pago puede tener una implementación diferente, pero todos deben compartir una misma interfaz, como el método `processPayment`.

### Ventajas y Desventajas de la Factory
Utilizar una Factory para crear objetos de pago permite a los desarrolladores añadir fácilmente nuevos tipos de pago a la aplicación sin tener que modificar el código existente. También pueden añadir nuevas implementaciones para cada tipo de pago, asegurándose de que todos los objetos de pago creados utilicen la misma interfaz. Sin embargo, el uso de la Factory también puede tener inconvenientes. Puede añadir una complejidad adicional al código, introduciendo una capa de creación de objetos que puede ser difícil de entender. Además, puede hacer que el código sea más difícil de probar y mantener, ya que puede crear dependencias adicionales entre los objetos de la aplicación.

### Ejemplo de Código en JavaScript
```javascript
// Definición de la interfaz común para los objetos de pago
class Payment {
  processPayment() {}
}
// Implementación de la clase de pago con tarjeta de crédito
class CreditCardPayment extends Payment {
  processPayment() {
    console.log("Procesando el pago con tarjeta de crédito...");
  }
}
// Implementación de la clase de pago por transferencia bancaria
class BankTransferPayment extends Payment {
  processPayment() {
    console.log("Procesando el pago por transferencia bancaria...");
  }
}
// Implementación de la Factory para crear los objetos de pago
class PaymentFactory {
  createPayment(paymentType) {
    if (paymentType === "CreditCard") {
      return new CreditCardPayment();
    } else if (paymentType === "BankTransfer") {
      return new BankTransferPayment();
    } else {
      throw new Error("Tipo de pago no válido!");
    }
  }
}
// Uso de la Factory para crear diferentes tipos de pagos
const paymentFactory = new PaymentFactory();
const creditCardPayment = paymentFactory.createPayment("CreditCard");
const bankTransferPayment = paymentFactory.createPayment("BankTransfer");
// Uso de los objetos de pago creados
creditCardPayment.processPayment(); // Procesando el pago con tarjeta de crédito...
bankTransferPayment.processPayment(); // Procesando el pago por transferencia bancaria...
```
En este ejemplo, la Factory está implementada en forma de una clase `PaymentFactory`. Esta clase tiene un método `createPayment`, que toma en cuenta el tipo de pago proporcionado como parámetro para decidir qué clase de objetos de pago crear. En este ejemplo, hay dos tipos de pagos disponibles: "CreditCard" y "BankTransfer".

La Factory luego utiliza una serie de condiciones para decidir qué clase de objetos crear basándose en el tipo de pago proporcionado como parámetro. En este ejemplo, la Factory crea instancias de "CreditCardPayment" o de "BankTransferPayment".

Una vez que los objetos de pago son creados, pueden ser utilizados para procesar los pagos llamando al método `processPayment`. Este método está implementado de forma diferente para cada clase de objetos de pago, pero todas deben cumplir con la interfaz común definida por la clase `Payment`.

Claro, aquí tienes la traducción completa al español en el contexto de programación en IT y en formato Markdown visible:

---

## Definición y Uso del Decorador

El Decorador es un patrón de diseño que permite alterar el comportamiento de un objeto al agregarle nuevas funcionalidades al vuelo, sin tener que modificar su código fuente. También facilita la separación de responsabilidades al añadir funcionalidades a objetos ya existentes sin necesidad de modificar su código. La idea detrás del Decorador es crear una clase que envuelva a otra clase, añadiendo funcionalidades adicionales al objeto original. Esta clase envolvente, llamada "el decorador", implementa la misma interfaz que la clase original, de forma que los objetos de la clase original puedan ser usados con o sin decoradores. El Decorador puede implementarse de diversas maneras. El método más común es crear una clase abstracta o una interfaz común para los objetos de la clase original y los decoradores. Las clases decoradoras deben implementar esta interfaz común y contener una instancia de la clase original. Un uso común del Decorador es para añadir funcionalidades adicionales a objetos gráficos, como bordes, sombras o patrones.

### Ejemplo Inicial

En este ejemplo, la clase original sería la clase base para los objetos gráficos, como los círculos, los cuadrados o los triángulos. Los decoradores podrían entonces añadir funcionalidades adicionales a estos objetos, como un borde rojo o una sombra negra. Utilizando el Decorador para añadir funcionalidades a objetos gráficos, es más fácil crear nuevos objetos con funcionalidades adicionales, sin necesidad de crear nuevas clases de objetos gráficos. Además, los decoradores pueden ser combinados para crear objetos con múltiples funcionalidades.

### Código de Ejemplo en JavaScript

```javascript
// Definición de la clase original para objetos gráficos
class Shape {
  draw() {
    console.log("Soy una forma.");
  }
}
// Definición de la clase decoradora para añadir un borde
class BorderDecorator {
  constructor(shape) {
    this.shape = shape;
  }
  draw() {
    this.shape.draw();
    console.log("Soy un borde rojo.");
  }
}
// Definición de la clase decoradora para añadir una sombra
class ShadowDecorator {
  constructor(shape) {
    this.shape = shape;
  }
  draw() {
    this.shape.draw();
    console.log("Soy una sombra negra.");
  }
}
// Creación de un objeto de la clase original
const shape = new Shape();
// Creación de un objeto de la clase decoradora para añadir un borde
const shapeWithBorder = new BorderDecorator(shape);
// Creación de un objeto de la clase decoradora para añadir una sombra
const shapeWithShadow = new ShadowDecorator(shape);
// Creación de un objeto de la clase decoradora para añadir un borde y una sombra
const shapeWithBorderAndShadow = new ShadowDecorator(new BorderDecorator(shape));
// Uso de los diferentes objetos creados
shape.draw(); // Soy una forma.
shapeWithBorder.draw(); // Soy una forma. Soy un borde rojo.
shapeWithShadow.draw(); // Soy una forma. Soy una sombra negra.
shapeWithBorderAndShadow.draw(); // Soy una forma. Soy un borde rojo. Soy una sombra negra.
```

### Detalles del Ejemplo

En este ejemplo, la clase inicial es la clase `Shape`, que tiene un método `draw` que muestra un mensaje indicando que es una forma. Se crean luego 2 clases decoradoras: `BorderDecorator` y `ShadowDecorator`. Cada una de estas clases toma una instancia de la clase original en su constructor, almacenada en una propiedad `Shape`. Cada clase decoradora también implementa el método `draw`, que llama al método `draw` de la clase original almacenada en la propiedad `Shape`, y luego muestra un mensaje adicional para indicar la funcionalidad añadida. Finalmente, se crean diferentes objetos utilizando combinaciones de la clase original y las clases decoradoras. Cada objeto creado puede ser utilizado para mostrar un mensaje diferente llamando a su método `draw`.

## Definición y Uso de Composite

El Composite es un patrón de diseño que permite tratar colecciones de objetos de manera uniforme, como si se tratase de un solo objeto. También permite simplificar la jerarquía de objetos al crear una estructura de árbol.

### La Idea Detrás de Composite

La idea detrás del Composite es crear una clase común para los objetos simples y los objetos compuestos. Los objetos simples no pueden tener sub-objetos, mientras que los objetos compuestos contienen una colección de objetos simples y/o otros objetos compuestos. Tanto los objetos simples como los compuestos implementan la misma interfaz, de modo que los clientes pueden tratar a los objetos compuestos y simples de la misma manera. El Composite se puede utilizar para manejar estructuras jerárquicas, como árboles o gráficos, simplificando su tratamiento. También se puede utilizar para tratar colecciones de objetos de manera uniforme, sin tener que verificar si cada objeto es simple o compuesto. Un ejemplo común del uso de Composite es para representar documentos. En este ejemplo, un documento puede ser un simple documento de texto, o un documento compuesto de varios sub-documentos, como tablas, imágenes o párrafos. El documento Composite contendrá una colección de sub-documentos, que pueden ser ellos mismos documentos simples o compuestos.

### Ejemplo de Implementación en JavaScript

```js
// Definición de la interfaz común para objetos simples y compuestos
class DocumentComponent {
  constructor(name) {
    this.name = name;
  }
  add(component) {}
  remove(component) {}
  getChild(index) {}
  display() {}
}
// Definición de la clase para objetos simples
class Paragraph extends DocumentComponent {
  display() {
    console.log("Soy un párrafo.");
  }
}
// Definición de la clase para objetos compuestos
class Document extends DocumentComponent {
  constructor(name) {
    super(name);
    this.children = [];
  }
  add(component) {
    this.children.push(component);
  }
  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
  getChild(index) {
    return this.children[index];
  }
  display() {
    console.log(`Soy el documento ${this.name}.`);
    for (const child of this.children) {
      child.display();
    }
  }
}
// Creación de diferentes objetos simples y compuestos
const paragraph1 = new Paragraph("primer párrafo");
const paragraph2 = new Paragraph("segundo párrafo");
const myDocument = new Document("documento principal");
const subDocument = new Document("sub-documento");
// Adición de objetos simples al sub-documento
subDocument.add(paragraph1);
subDocument.add(paragraph2);
// Adición del sub-documento y un párrafo al documento principal
myDocument.add(subDocument);
myDocument.add(new Paragraph("último párrafo"));
// Muestra del documento principal, que muestra todos los objetos agregados a la jerarquía
myDocument.display();
```

En este ejemplo, se define una interfaz común para objetos simples y objetos compuestos, llamada "DocumentComponent". Esta interfaz contiene 4 métodos: `add`, `remove`, `getChild` y `display`. Los objetos simples, como los párrafos, extienden esta interfaz e implementan el método `display`. Los objetos compuestos, como los documentos, también extienden esta interfaz y contienen una colección de objetos simples y/o otros objetos compuestos. La clase Document representa un objeto compuesto, que contiene una colección de objetos simples y/o otros objetos compuestos. Esta clase implementa los métodos `add`, `remove`, `getChild` y `display`. Los métodos `add` y `remove` permiten agregar y eliminar objetos de la colección, mientras que el método `getChild` permite obtener un objeto a partir de su posición en la colección. El método `display` muestra el nombre del documento y luego llama al método `display` de cada objeto en la colección. Luego, se crean diferentes objetos simples y compuestos y se agregan a la jerarquía utilizando los métodos `add` y `remove` de la clase Document. Los objetos luego son mostrados al llamar al método `display` del objeto principal, que muestra todos los objetos agregados a la jerarquía.

## Definición y uso del Adapter (Adaptador)

El Adaptador es un patrón de diseño que permite adaptar una interfaz existente para hacerla compatible con otra interfaz requerida por el cliente. Facilita la comunicación entre objetos que de otra manera no podrían hacerlo debido a incompatibilidades de interfaces. El objetivo del Adaptador es convertir la interfaz de un objeto en otra interfaz, sin modificar el código fuente del objeto. Esto es útil cuando el código fuente del objeto no puede ser modificado, o cuando los clientes requieren una interfaz diferente a la proporcionada por el objeto. Un ejemplo común del uso del Adaptador es para adaptar bibliotecas de terceros. En este caso, el Adaptador puede ser usado para adaptar la interfaz de la biblioteca de terceros a la interfaz requerida por la aplicación. De esta manera, la aplicación puede utilizar la biblioteca de terceros sin tener que modificar su código fuente. Otro ejemplo del uso del Adaptador es para adaptar objetos de un formato de datos a otro. En este caso, el Adaptador puede ser usado para adaptar la interfaz del objeto fuente al formato de datos requerido por el cliente.

---

### Ejemplo

Aquí tienes un ejemplo de implementación del Adaptador en JavaScript:

```javascript
// Interfaz requerida por el cliente
class Target {
  request() {}
}
// Objeto existente con una interfaz incompatible con la requerida por el cliente
class Adaptee {
  specificRequest() {
    return "Requête spécifique de l’Adaptee";
  }
}
// Adaptador que adapta la interfaz del Adaptee a la requerida por el cliente
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }
  request() {
    const specificRequestResult = this.adaptee.specificRequest();
    return `Adapter: (TRANSLATED) ${specificRequestResult}`;
  }
}
// Utilización del cliente con el Adaptador
function clientCode(target) {
  console.log(target.request());
}
// Utilización del Adaptee con una interfaz incompatible con la requerida por el cliente
const adaptee = new Adaptee();
console.log("Adaptee: ", adaptee.specificRequest());
// Utilización del Adaptador para adaptar la interfaz del Adaptee a la requerida por el cliente
const adapter = new Adapter(adaptee);
console.log("Adapter : ", adapter.request());
// Utilización del cliente con el Adaptador
console.log("Client : ");
clientCode(adapter);
```

### Explicación del Ejemplo

En este ejemplo, se define una interfaz `Target` para representar la interfaz requerida por el cliente. El objeto existente `Adaptee` tiene una interfaz incompatible con la requerida por el cliente y, por lo tanto, no puede ser utilizado directamente. Se crea el Adaptador para adaptar la interfaz del `Adaptee` a la requerida por el cliente.

La clase `Adapter` hereda de la clase `Target` y contiene una referencia al objeto `Adaptee`. Implementa el método `request` de la interfaz `Target`, que es llamado por el cliente. Cuando este método es llamado, el Adaptador llama al método `specificRequest` del objeto `Adaptee` y adapta su respuesta para cumplir con la interfaz requerida por el cliente.

Luego, el cliente utiliza el `Adaptee` con su interfaz incompatible para llamar al método `specificRequest`. Este método devuelve un resultado que no puede ser utilizado directamente por el cliente. Luego, se utiliza el Adaptador para adaptar la interfaz del `Adaptee` a la requerida por el cliente. El cliente puede entonces utilizar el Adaptador para llamar al método `request` de la interfaz requerida.

## Patrones de Comportamiento

Los patrones de comportamiento son un conjunto de patrones de diseño que permiten gestionar las interacciones entre los objetos y definir el comportamiento de los objetos en respuesta a diferentes eventos o situaciones. Estos patrones se centran en el comportamiento de los objetos más que en su estructura o su creación. Los patrones de comportamiento se usan para simplificar la gestión de las interacciones entre los objetos y para reducir la complejidad del código. Permiten definir comportamientos reutilizables que pueden aplicarse a diferentes objetos y en diferentes situaciones.

---

### Código de Ejemplo para Strategy y Template

Aquí tienes los códigos para Strategy y Template:

```javascript
// Clase Strategy
class Strategy {
  execute() {
    throw new Error('El método execute() debe ser implementado');
  }
}
// Estrategia Concreta A
class ConcreteStrategyA extends Strategy {
  execute() {
    return 'Resultado de la estrategia A';
  }
}
// Estrategia Concreta B
class ConcreteStrategyB extends Strategy {
  execute() {
    return 'Resultado de la estrategia B';
  }
}
// Contexto
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  executeStrategy() {
    return this.strategy.execute();
  }
}
// Uso de la Estrategia Concreta A
const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy()); // Resultado de la estrategia A
// Cambio a la Estrategia Concreta B
context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy()); // Resultado de la estrategia B
```

---

```javascript
// Clase Abstracta
class AbstractClass {
  templateMethod() {
    this.operation1();
    this.operation2();
    // ...
  }
  operation1() {
    throw new Error('El método operation1() debe ser implementado');
  }
  operation2() {
    throw new Error('El método operation2() debe ser implementado');
  }
}
// Clase Concreta A
class ConcreteClassA extends AbstractClass {
  operation1() {
    console.log('Operación 1 de la clase A');
  }
  operation2() {
    console.log('Operación 2 de la clase A');
  }
}
// Clase Concreta B
```