# **Objets y otras estructuras complejas**

<br>

## **_Objetivo_**

- **Comprender la relación entre diccionarios y registros**

- **Descubrir el concepto de objetos en programación**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

El concepto de registros, bien práctico por cierto, no está implementado en todos los lenguajes, porque existen otras estructuras complejas muy similares que pueden satisfacer necesidades similares.

<br>

---

### **Relación entre diccionarios y registros**

---

<br>

Un diccionario es un tipo complejo similar a los registros.

También se les llama diccionarios.

<br>

---

<br>

En un diccionario, se asocia una clave (cadena de caracteres o número) a un valor.

Por lo tanto, **un diccionario es una colección de claves asociadas a un valor.**

<br>

---

<br>

**La diferencia entre registro y diccionario radica en:**

- **la distinción entre:**

    - el nombre del componente
    
      y
        
    - la clave.

<br>

---

<br>

**En un registro:**

- se accede a un valor mediante el nombre del componente.

    y

**En un diccionario:**

- se accede a través de una clave.

<br>

---

<br>

Desde un punto de vista teórico, hay una diferencia entre registro y diccionario, pero esta a menudo se pierde durante la implementación en diferentes lenguajes de programación.

<br>

---

---

<br>

<br>

---

## **Registros y diccionarios en JavaScript**

---

<br>

En JavaScript, el tipo **"object"** se utiliza para simular **registros**, mientras que el tipo **"Map"** se utiliza **para los diccionarios**.

Aunque ambas entidades parecen similares, el método de acceso y creación es bastante diferente.

---

<br>

**Ejemplo JavaScript:**

```js
// Registro utilizando el tipo "object"
const usuarioRegistro = {
  nombre: 'Jean',
  apellido: 'Dupont'
}
// Acceso a los componentes con la sintaxis var.nombre
console.log(usuarioRegistro.apellido)
// Diccionario utilizando el tipo "Map"
const usuarioDiccionario = new Map([
  ['nombre', 'Jean'],
  ['apellido', 'Dupont']
])
// Acceso a los valores con la sintaxis var.get(clave)
console.log(usuarioDiccionario.get('apellido'))

```

<br>

---

---

<br>

<br>

---

## **Diccionarios en Python**

---

<br>

**En Python:**

- **no hay una implementación nativa similar a un `registro`**

- **solo es posible crear diccionarios utilizando el tipo "dict".**

---

<br>

**sintaxis Tipo `dict` es similar a la declaración de un registro en JavaScript:**

```python
usuarioDiccionario = {  # Tipo "dict"
  "nombre": "Jean",
  "apellido": "Dupont"
}
print(usuarioDiccionario["apellido"])
```

<br>

---

### **Consejo: ¿Cuándo usar uno u otro?**

---

<br>

**Las fronteras entre los dos conceptos son borrosas.**

**Su uso depende en gran medida de la semántica. Aquí tienes una regla general para elegir:**

- **Se prefieren los registros para representar la estructura, es decir, los elementos, de un concepto:**

    - un automóvil
    
    - una persona
    
    - un libro...

---

<br>    

- **Se prefieren los diccionarios para almacenar pares independientes entre sí:**

- asociar un día con una temperatura

- un estudiante con su promedio...

- No se involucra ninguna noción de esqueleto o estructura global.

<br>

---

---

<br>

<br>

---

## **Concepto de Registro**

---

<br>

El gran límite de los registros es la dinámica de sus componentes.

En efecto, cuando se tienen dos registros que describen automóviles, no es posible fijar componentes obligatorios.

Con este tipo de variables, es posible tener problemas, como en el siguiente ejemplo.

Hay dos registros de automóviles, pero será muy difícil usarlos juntos, ya que, por un lado, no tienen los mismos componentes.

Por otro lado, uno de los componentes tiene un nombre ligeramente diferente entre los dos registros.

<br>

---

**Ejemplo JavaScript:**

```js
const autoA = {
  marca: 'Renault',
  año: 1998
}
const autoB = {
  marca: 'Peugeot',
  color: 'Azul',
  añoFabricación: 2005
}

```

<br>

---

### **Los Objetos**

---

<br>

Para evitar este problema, se utilizan objetos, cuyos atributos (equivalentes a los componentes) se fijan de antemano.

Por lo tanto, es necesario especificar la estructura de los objetos primero, y luego se pueden crear varias variables de este tipo que tengan exactamente los mismos atributos.

Crear un tipo de objeto que será utilizado por varias variables permite estandarizar los atributos/componentes y sus nombres.

<br>

---

**Ejemplo JavaScript:**

```js
class Coche {  // Llamamos a este tipo una "clase"
  constructor () {
    this.marca = '' // Valor predeterminado
    this.color = ''
    this.año = 0
  }
}
const autoA = new Coche() // Creamos un nuevo objeto de la clase Coche
autoA.marca = 'Renault'
autoA.color = 'Rojo'
autoA.año = 1998
const autoB = new Coche()
autoB.marca = 'Peugeot'
autoB.color = 'Azul'
autoB.año = 2005

```

<br>

---

<br>

Esta vez, los nombres de las variables que componen los objetos están fijados de antemano por la clase, y todos los objetos "Coche" se pueden usar de la misma manera, sin riesgo.

<br>

---

### **Atención!:**

---

<br>

**Un registro como un objeto son lo mismo en JavaScript:**

- una colección de propiedades. La diferencia radica en cómo se utilizan y en la semántica que se les da. Un registro se utiliza para almacenar datos en pares clave-valor, mientras que un objeto puede tener propiedades y métodos y se utiliza para modelar entidades más complejas.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Algunos lenguajes, como Python, no tienen una implementación de registros y solo usan diccionarios, que son un tipo estructurado muy similar.**

- **Para tener variables cuyos componentes estén estandarizados, es interesante utilizar objetos.**

<br>

---

---