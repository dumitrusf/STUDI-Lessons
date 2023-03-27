# **Concepto de objeto en `P.O.O`**

<br>

Para recordar, **un objeto es `una estructura de datos`**, una entidad **que contiene:**

- **propiedades de `tipo valor`**

    - (variables simples definidas sobre valores)
    
    y

    <br>
    
- **propiedades que se llaman `métodos`:**

    - (variables definidas sobre funciones).

---

<br>

**Una propiedad es:**

- **una pareja `"clave/valor"`, es decir:**

    - tiene una `clave`: **(el nombre de la propiedad)**
    
        y
        
    - un `valor`: **(valor o función sobre el que está definida)**

<br>

---

### **Ejemplo: Propiedad**

---

<br>

```js
monObj.nomPropriete = "valeur"

👆 👇

const monObj = {

nomPropriete = "valeur"

}

// En este ejemplo, `nomPropriete` es la clave, la key o propiedad, mientras que `"valeur"` es el valor de la propiedad nomPropriete.

```

---

<br>

**"Las propiedades" definidas sobre un valor "describen" las "características del objeto", mientras que "los métodos son funciones" asociadas al objeto que se pueden llamar "para realizar acciones u operaciones sobre el objeto o para devolver un valor".**

---

<br>

**Si resumimos, tenemos:**

- Las `"propiedades"`:

    - **que definen un valor**

    ---

    <br>

- Los `"métodos"`:

    - que **son** en realidad **funciones que se pueden llamar a través de un objeto.**
    
    - **Son propiedades que** no **están definidas sobre** un simple valor, sino sobre **una función**

---

<br>

```
Además, podemos notar que una propiedad también puede estar definida sobre la referencia de un objeto.
```

<br>

---

**Ejemplo JavaScript: Para entenderlo bien, esto significa que las propiedades nos permiten almacenar otros objetos.**

```js
monObj.nomPropriete = new Object();
```

---

<br>

En este ejemplo 👆 , **creamos un objeto y definimos nuestra propiedad `"nomPropriete"` sobre la referencia de este objeto.**

---

<br>

**Una propiedad puede almacenar:** 

- **un `valor`:**

  - ```js
      const person = {
      
        nombre: "Jon"

      }
    ```

  ---

  <br>

- **una función que se llamaría entonces `"método"`:**

  - ```js
      const person = {     

        saludar: function () {

                 console.log(`Hola :D`)
                 
                 }

      }

  ---

  <br>

  o

  <br>
  
- **un `objeto`:**

  - ```js
      const person = {     

        contacto: {
          email: "dumitrulovelace@gmail.com",
          twitter: "@DSF_Grace_Lovel",
          móvil: "06 59 12 40 04"
        }

      }

<br>

---

<br>

**El principio es muy similar a un objeto del mundo real.**

---

<br>

```
Por ejemplo, un teléfono tiene características comparables a las propiedades definidas sobre un valor (su almacenamiento, su ram, etc.), y mecanismos comparables a los métodos (activación y desactivación del modo avión, etc.).
```

<br>

---

### **Ejemplo de objeto con la representación de un teléfono**

---

<br>

**Aquí hay un ejemplo de código donde creamos un objeto en el que definimos sus propiedades:**

```js
let telephone = {

  //propiedades definidas sobre un valor primitivo

  marque: "Apple",
  ram: 4,
  stockage: 32,

  //propiedades definidas sobre un método
  // activateModeAvion es una propiedad, y activateModeAvion es un metodo

  activateModeAvion: function() {
    console.log("Modo avión activado");
  },

  desactivateModeAvion: function() {
    console.log("Modo avión desactivado");
  }
}
```

---

<br>

En este ejemplo, **definimos las propiedades de** nuestro `"telephone"` con una sintaxis específica.

**Definimos propiedades sobre valores, y** otras **sobre métodos.**

Como hemos dicho, **también es posible definir propiedades sobre objetos.**

<br>

---

**Por ejemplo, si en este ejemplo, definimos la propiedad `ram` sobre un objeto `Number`:**

```js
let telephone = {

  //propiedades definidas sobre un valor primitivo

  marque: "Apple",
  ram: new Number(4),
  stockage: 32,

  //propiedades definidas sobre un método

  activateModeAvion: function() {
    console.log("Modo avión activado");
  },

  desactivateModeAvion: function() {
    console.log("Modo avión desactivado");
  }
}
```

---

**En muchos casos, tendremos que definir propiedades sobre referencias de objetos.**

<br>

---

## **Tipo, `constructor` e `instancia`**

---

<br>

**Cada `objeto` tiene un `tipo`.**

**Un tipo define la naturaleza de los valores posibles de un dato.**

**El tipo de un objeto define las propiedades de un objeto, su estructura misma.**

**Para crear un objeto de cierto tipo (Number, Array, u otro) necesitamos llamar al constructor de ese tipo.**

**Los objetos construidos se llaman "instancias".**

<br>

---

**Ejemplo JS:**

```js
let numero = new Number(5216);

//Number = tipo

//numero = instancia de Number

//Number() = constructor del tipo Number
```

---

<br>

**En este ejemplo, construimos un objeto de tipo Number.**

<br>

---

<br>

En realidad, **los tipos de objetos están definidos por lo que se llama `Clases`.**

No explicaremos en detalle en este curso lo que son las clases, pero **para simplificar, las clases son como modelos, planes, que contienen todas las instrucciones** (las propiedades de tipo valor, los métodos, el constructor, etc.) **para construir un objeto.**

Por ejemplo, `Number` es una `clase`.

Cuando construimos un objeto de tipo `Number`, `instanciamos` la "clase Number".

Pero dejemos el concepto de clases para más adelante, cuando lo abordaremos con más detalle.

---

---

<br>

<br>

---

## **Propiedades estáticas y propiedades de instancia**

---

<br>

**Podemos clasificar el conjunto de propiedades en dos categorías:**

---

<br>

- **Las propiedades estáticas:**

  - que **son las mismas para todas las instancias de un tipo** como es el tipo de `number`

  ---

  <br>

- **Las propiedades de instancia:**

  - que **están definidas sobre valores específicos para cada instancia** como la variable `nombre`

<br>

---

**Ejemplo JavaScript: Si retomamos nuestro número de tipo Number**

```js
// Creas una nueva instancia del objeto incorporado Number, que se comporta como una clase.
// La variable "numero" es ahora una instancia de Number.
let numero = new Number(5216);

// Accedes a una propiedad estática del objeto Number llamada MAX_VALUE.
// Esta propiedad pertenece al objeto Number en sí, no a ninguna instancia de Number.
console.log(Number.MAX_VALUE) 

// Llamas a un método estático del objeto Number llamado isInteger.
// Este método también pertenece al objeto Number en sí, no a ninguna instancia de Number.
console.log(Number.isInteger(1)) 

// Llamas a un método de instancia llamado valueOf en tu instancia de Number llamada numero.
// Este método pertenece a la instancia numero, no al objeto Number en sí.
console.log(numero.valueOf())
```

---

<br>

- **Propiedad estática:**

  - **se llaman a través de la referencia de la instancia (en este ejemplo variable `nombre`)**

  - **Una propiedad estática es una propiedad que pertenece a la clase en sí, en este caso `.MAX_VALUE` pertenece a la clase `NUMBER` por defecto de JS y no a una instancia de la clase.**

  - **Esto significa que puedes acceder a ella directamente desde la clase, pero no desde una instancia de la clase.**

  - **Por ejemplo, en JavaScript, `Number.MAX_VALUE` es una propiedad estática de la clase `Number`, es decir que esta propiedad y clase ya están creadas por JS.**
  
  - **Puedes acceder a ella como `Number.MAX_VALUE`, pero "no puedes acceder a ella desde una instancia de Number", como `let numero = new Number(5216); numero.MAX_VALUE`.**
  
  - **Las propiedades estáticas son útiles cuando necesitas realizar una operación que está relacionada con la clase, pero no con una instancia específica de la clase.**

  - **Por ejemplo, supongamos que tienes una clase `Matematicas` con una propiedad estática `PI`. Esta propiedad representa el valor de Pi, que es el mismo para todas las instancias de `Matematicas`. No necesitas crear una instancia de `Matematicas` para acceder a `PI`, por lo que `PI` puede ser una propiedad estática.**

  <br>

  ---

    ```javascript
    class Matematicas {
        static PI = 3.141592653589793;
    }

    console.log(Matematicas.PI); // Imprime: 3.141592653589793
    ```

---    

<br>
    
  - **En este ejemplo, `PI` es una propiedad estática de la clase `Matematicas`. Puedes acceder a esta propiedad directamente desde la clase usando `Matematicas.PI`.**

---

<br>

- **Los métodos estáticos:**

  - **se llaman a través del `nombre del tipo de objeto` (en este ejemplo Number).**

  - **Un método estático es un método que pertenece a la clase en sí, no a una instancia de la clase.**

  - **Esto significa que puedes llamar a un método estático sin crear una instancia de la clase. Solo necesitas el nombre de la clase y el nombre del método para llamarlo.**

  - **Por ejemplo, en JavaScript, puedes tener algo como esto:**

  <br>

  ---
  
    ```javascript
    class MiClase {
        static miMetodoEstatico() {
            return '¡Hola, soy un método estático!';
        }
    }

    console.log(MiClase.miMetodoEstatico()); // Imprime: '¡Hola, soy un método estático!'
    ```

---    

<br>    
    
  - **En este ejemplo, `miMetodoEstatico` es un método estático de la clase `MiClase`. Puedes llamar a este método directamente desde la clase usando `MiClase.miMetodoEstatico()`.**

---

<br>

- Y **los métodos de instancia:**

  - **se llaman a través de la referencia de la instancia (en este ejemplo variable `nombre`).**
  
  - **Un método de instancia es un método que pertenece a una instancia de una clase. Para llamar a un método de instancia, primero debes crear una instancia (un objeto) de la clase. Luego puedes llamar al método en esa instancia.**
  
  - **Esto significa que necesitas tener una instancia específica de la clase para poder llamar al método.**

  - **Por ejemplo, en JavaScript, puedes tener algo como esto:**

  <br>

  ---
  
    ```javascript
    class MiClase {
        miMetodoDeInstancia() {
            return '¡Hola, soy un método de instancia!';
        }
    }

    let miObjeto = new MiClase();
    console.log(miObjeto.miMetodoDeInstancia()); // Imprime: '¡Hola, soy un método de instancia!'
    ```

---    

<br>
    
  - **En este ejemplo, `miMetodoDeInstancia` es un método de instancia de la clase `MiClase`. Primero creas una nueva instancia de `MiClase` con `new MiClase()`, y luego puedes llamar al método de instancia en esa nueva instancia con `miObjeto.miMetodoDeInstancia()`.**

---

<br>  

---

<br>  

**Otro ejemplo:**

```js
class Auto {
  // Propiedad estática
  static numeroDeRuedas = 4;

  // Constructor con propiedades de instancia
  constructor(marca, modelo) {
    this.marca = marca; // Propiedad de instancia
    this.modelo = modelo; // Propiedad de instancia
  }
}
```

---

<br>

**Esto ayudara a diferenciar rápidamente entre las propiedades de instancia y las propiedades estáticas.**

<br>

**Ahora, hablemos de los principales objetos nativos en JS**

---

---

<br>

<br>

---

## **Introducción a los `objetos nativos`**

---

<br>

A diferencia de los objetos personalizados, **los objetos nativos son accesibles en cualquier entorno JavaScript, sin necesidad de instalar una librería.**

Es el principio mismo de un objeto nativo, **es nativo al lenguaje, y por lo tanto está incluido en el `"Core JavaScript"`, que es la parte de JS definida por ECMAScript, que contiene todos los elementos nativos de JS.**

---

---