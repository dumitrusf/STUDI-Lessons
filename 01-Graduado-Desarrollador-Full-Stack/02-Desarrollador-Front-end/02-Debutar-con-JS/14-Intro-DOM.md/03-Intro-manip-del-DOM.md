# **Introducción a la manipulación del `DOM`**

<br>
<br>

---

## **Manipulación del `DOM`**

---

<br>

El objeto document del DOM está hecho para ser "manipulado".

Esto significa que es posible modificar sus diferentes componentes mediante JavaScript.

---

<br>

**Podríamos definir las grandes categorías del DOM de esta manera:**

- **El `DOM methods` permite**

    - **manipular el `DOM tree`**

    ---

    <br>

- **El `DOM events` permite**

    - **crear interacciones con el cliente** en la página

- **El `DOM forms` permite**

    - **preparar pasar datos al lado del servidor**

---

<br>

**`DOM` contiene métodos y propiedades que** son propios de los objetos, métodos que **permiten interactuar con el árbol desplegado (o abierto).**

Se dice que **estos métodos y propiedades** son Nativos porque ya habitan en el objeto, ya están escritos en el objeto, forman parte de él y **están a disposición del programador para ser utilizados.**

**Son como herramientas.**

<br>

---

**Por ejemplo, es posible utilizar este método:**

-  `document.getElementById( )`

---

<br>

Este método 👆 **ya existe en el objeto `DOM` y puede ser invocado por el programador en su código en JavaScript.**

Y como su nombre lo indica, **permite apuntar a un elemento preciso del documento apuntando a su identificador** (único en el documento).

**Esto es lo que veremos en el capítulo `"manipular el DOM"`.**

<br>

---

<br>

Se designa por el término DOM methods (en español "métodos DOM") a las funciones dentro del Objeto Documento que permiten a los desarrolladores interactuar con el DOM y manipularlo.

Los métodos DOM pueden tener diferentes funciones como acceder a cada elemento del documento, acceder a atributos, a nodos de texto, modificar el contenido del documento, los atributos, el estilo, etc.

En resumen, los métodos son una forma de modificar el documento de arriba abajo.

<br>

---

#### **Ejemplo: Algunos ejemplos de DOM methods**

---

<br>

- **`document.createElement( )` :**

    - permite crear un elemento `HTML` en el documento.

    ---

    <br>

- **`element.setAttribute(name, value)` :** permite dar un atributo a un elemento ya creado.

<br>

---

### **Recordatorio**

---

<br>

**La `P.O.O`, o "Programación Orientada a Objetos", es un paradigma de programación que permite modelar entidades bajo forma de objetos que tienen propiedades y métodos.**

---

<br>

**Se basa en conceptos clave como:** 

- **la `encapsulación`**

- **la `abstracción`**

  y

- **la `herencia`**

---

<br>

**La `P.O.O` permite:**

- estructurar

    y
    
- organizar

---

<br>

**eficazmente el código, ofreciendo una mejor `mantenibilidad` y una mayor `flexibilidad`**

---

---

<br>

<br>

---

## **Comprender el `DOM` y la importancia del `DOM Inspector` para los desarrolladores `Front-end`**

---

<br>

---

### **Los eventos**

---

<br>

**El `DOM`,** como objeto, **tiene** en el centro de su programación **una serie de métodos** (funciones dentro de un objeto) **y propiedades** (valores variables o constantes), **que actúan como herramientas que se pueden utilizar para:**

- **modificar**

- **eliminar**

    o
    
- **añadir elementos (elements)**

<br>

**que componen la página web.**

---

<br>

**Uno de los "ASPECTOS PRINCIPALES" del desarrollo `Front-end` es:**

- **crear interacciones entre:**

    - **las acciones del usuario** que navega por la página

        y
    
    - **el servidor de la empresa** o del propietario del sitio

    <br>
    
**privilegiando la optimización del rendimiento y de la experiencia de usuario.**

---

<br>

Es gracias al DOM y a las numerosas mejoras que aporta éste que las aplicaciones web y la web en general han explotado desde los años 2000.

---

<br>

**Del lado del cliente, las condiciones de la visita se han mejorado mucho, la visita es:**

- **más fácil**

- **más optimizada**

  y

- **más agradable**

<br>

**La web se ha desarrollado mucho gracias a su potencial de atracción y su potencial comercial.**

<br>

---

<br>

Esta programación alrededor de la página web consistirá más a menudo en designar ciertos elementos de la página y apuntarlos para manipularlos.

Concretamente, el programador asociará a elementos de nuestro documento, eventos precisos (events), ya sea un cambio estético o una recogida de datos, y permitirá así a los usuarios interactuar ellos mismos con los diferentes elementos del sitio.

---

---

<br>

<br>

---

### **El `DOM` inspector**

---

<br>

**El `DOM Inspector`** es una herramienta de desarrollo web que **permite** a los desarrolladores **visualizar y modificar el DOM de una página web.**

**Gracias al `DOM Inspector`:** 

- los desarrolladores pueden inspeccionar

- navegar y modificar la estructura de la página web en tiempo real

<br>

**lo que es especialmente útil cuando se enfrentan a un problema de diseño o de interactividad**

---

<br>

**por ejemplo:**

- **Los desarrolladores pueden modificar los estilos CSS en directo para visualizar los efectos inmediatos sobre la página,** lo que facilita mucho su trabajo.

- **El `DOM` Inspector también es útil para identificar los elementos específicos de una página web, como:**

    - los formularios
    
      o
    
    - las tablas

      y
      
    - para comprender la jerarquía de los elementos en la página

    <br>

**También permite comprender cómo interactúan los diferentes elementos entre sí (con los DOM events).**

---

<br>

En resumen, el **DOM Inspector es** una herramienta **esencial para** los desarrolladores front-end que les permite **inspeccionar y modificar el código:** 

- HTML

- CSS

  y
  
- JavaScript

<br>

**de una página web en tiempo real para:**

- detectar y solucionar problemas de diseño e interactividad

  y
  
- para entender mejor la estructura y el funcionamiento de una página web.

---

---

<br>

<br>

---

## **El `DOM` Forms**

---

<br>

**El interés de una página web dinámica es**, por supuesto, **mostrar información**, pero también **recoger información y** poder **comunicar datos de un cliente a un servidor.**

**Cada vez más datos se transmiten a través de los navegadores:**

- **de forma activa:**

  - el usuario **proporciona** sus **datos directamente**

  <br>

  o

  <br>
  
- **pasiva (o transparente):**

  - **proporciona mediante cookies**

<br>

---

<br>

- **El desarrollador tendrá que implementar métodos para recopilar datos sobre los visitantes.**

- **Una de las mejores formas de obtener los datos de un visitante de forma consentida es la creación de un formulario.**

---

<br>

**En el DOM, hablamos de `DOM` Forms.**

**Este permitirá,** al igual que para el resto del sitio, **crear formularios dinámicos.**

<br>

---

**Permite:**

- añadir

  o
  
- eliminar elementos de formulario

- modificar los atributos de los elementos existentes

  y
  
- añadir eventos para responder a las interacciones del usuario.

<br>

---

<br>

A nivel legal, la ley exige que el visitante de un sitio sea advertido e informado del tipo de información que pueda ser recopilada de forma invisible y que el propietario del sitio podrá utilizar.

Por eso, en cada sitio, una ventana pide al usuario que acepte o no las cookies utilizadas por el sitio.

<br>

---

### **El servidor**

---

<br>

Un servidor es una unidad física de almacenamiento, como un gran disco duro, que permite almacenar millones de datos y acceder a ellos de forma segura.

Es con el servidor con el que el sitio debe establecer un vínculo cuando un usuario rellena un formulario en una página web.

---

---

<br>

<br>

---

### **Funcionamiento del `DOM` Forms**

---

<br>

**Muchos sitios ofrecen a sus usuarios rellenar un formulario.**

Así, **una categoría** de los métodos contenidos **en el `DOM` está adaptada a la gestión de formularios** (el `dom forms`).

**Cuando se introducen datos en un formulario, se envían al servidor.**

**El servidor los clasifica y los almacena en el lugar correspondiente.**

Sin embargo, **si una línea introducida en ese formulario se hace pasar por una instrucción al servidor, puede tener consecuencias nefastas (hablamos de la inyección).**

<br>

---

<br>

**El `DOM forms` está equipado con métodos que:**

- **desde la entrada de los datos en el lado del** cliente (en el **navegador**), **el `DOM FORMS` filtra:**

  - el `contenido`
    
  - el `tipo de dato`
  
  - su `formato`
  
    y
    
  - su `sintaxis`

  <br>

**El campo a rellenar también estará "delimitado" por un código que filtra la información introducida por el cliente.**

**Estos filtros se llaman "EXPRESIONES REGULARES" `(Regular Expressions o RegEx en inglés)` y están contenidos en el `DOM` (por ejemplo, su contraseña debe contener al menos 2 dígitos y 1 carácter especial), pero también pueden ser métodos propios de la categoría formulario `DOM forms`**

<br>

---

<br>

Hay que tener en cuenta que **para poder comunicar datos con un servidor desde una aplicación web, el `JAVASCRIPT NO ES EL LENGUAJE ADECUADO` y `se preferirá el PHP`.**  

El **JavaScript sólo tendrá el objetivo de hacer el formulario dinámico** para los usuarios.

---

---