# **Presentación de JavaScript**

<br>

---

## **Introducción**

---

<br>

Comencemos presentando el lenguaje de programación JavaScript.

Aquí tienes un ejemplo de un script de JavaScript para que puedas ver rápidamente cómo puede lucir su sintaxis:

<br>

---

**EJEMPLO:**

```js
// Fonction pour calculer le périmètre d’un rectangle 

function perimetreR (a, b) {

    return 2 * a + 2 * b;

}

// Fonction pour calculer l’aire d’un rectangle 

function aireR (a, b) {

    return a * b

}

// Fonction pour comparer avec un if l’aire de 2 rectangles

function compareAire(rectangleOne, rectangleTwo) {

    if (aireR(rectangle1[0], rectangle1[1]) < aireR(rectangle2[0], rectangle2[1])) {

        alert("Le rectangle 1 est plus petit que le rectangle 2")

    }

    else if ((aireR(rectangle1[0], rectangle1[1]) > aireR(rectangle2[0], rectangle2[1]))) {

        alert("Le rectangle 1 est plus grand que le rectangle 2")

    }

    else {

        alert("Les rectangles ont la même aire")

    }

}

var rectangle1 = [10, 4]

var rectangle2 = [8, 5]

//Appel de la fonction compareAire en passant en paramètre les 2 tableaux contenant les valeurs des côtés des rectangles 

compareAire(rectangle1, rectangle2);
```

<br>

Es un ejemplo muy simple de un script(a ponerlo en [repl.it](https://repl.it)), en el que nos da una idea de cómo puede lucir un script de JavaScript.

Ahora, veamos algunas características específicas de JavaScript.


👇
---

---

<br>
<br>

---

## **Lenguaje lado cliente**

---

<br>

```
JavaScript, al igual que HTML y CSS, es un lenguaje de lado del cliente.

A diferencia de estos últimos, que se utilizan para gestionar la apariencia visual de una página web, JavaScript es un verdadero lenguaje de programación.

¿Qué significa exactamente la expresión "lado del cliente"?
```

<br>

---

### **Del lado del Cliente o del lado Servidor**

---

<br>

Estos **dos términos** definen, como hemos mencionado, **el "lado (lugar)"** donde se ejecutan las instrucciones de código.

- **Lado del servidor:** 

  el navegador web se comunica con **servidores remotos (computadoras que almacenan datos)** a través de un protocolo que probablemente conozcas: el protocolo HTTP. 
  
  En realidad, cuando visitas un sitio web desarrollado con un lenguaje del lado del servidor, el navegador envía solicitudes a los servidores remotos a través de este protocolo.
  
  De esta manera, por ejemplo, puede acceder a bases de datos remotas que no se encuentran en tu computadora.
  
  El navegador no accede directamente a las bases de datos, sino a través del servidor remoto.
  
  Los scripts se ejecutan en el servidor remoto.

<br>

<br>

- **Lado del cliente:**

  un lenguaje del lado del cliente **se ejecuta en la máquina** del cliente, a **través del navegador.**
  
  el navegador se comunica con un servidor remoto para recibir la información necesaria.
  
  pero las instrucciones se ejecutan en la máquina del usuario y no en el servidor.
  
  Este es el caso de JavaScript.  


---

<br>

**_JavaScript es un lenguaje del lado del cliente, pero lo mismo ocurre con HTML. ¿Cuál será la relación entre estos dos lenguajes?_**

Para entenderlo, necesitaremos investigar el concepto de Modelo de Objetos del Documento (DOM).

👇

<br>

---

### **Document Object Model HTML**

---

<br>

Como quizás hayas notado, mencionamos que JavaScript es un lenguaje que permite abordar la programación orientada a objetos. Pero, ¿qué es eso?

<br>

**La programación orientada a objetos es:**

- una forma específica de abordar la programación.

- todos los datos se representan a través de entidades llamadas "objetos".

- Los objetos se asemejan a conceptos de la realidad.

- Los objetos se definen por sus atributos (valores que los definen) y métodos (acciones que pueden realizar).

<br>

---

**EJEMPLO**

Tomemos un ejemplo simple de la vida del dia a dia para poder representar mejor este concepto.

Un ordenador es un objeto.

Y tiene unos atributos, por ejemplo:

```js

marque= "Apple"

ram = 8

stockage = 512

```

Pero también tiene funciones.

Por ejemplo, puede encenderse, apagarse, encender ciertos píxeles, etc.

Estas funciones se pueden comparar con los métodos del objeto computadora.


```

JavaScript es un lenguaje que permite la programación orientada a objetos.

Pero, ¿cuál es la relación con HTML?:

La relación es que los lenguajes JavaScript y HTML pueden interactuar gracias a esta lógica.



El Modelo de Objetos del Documento (DOM) es una convención que permite crear representaciones en forma de objetos, especialmente en documentos HTML.

Se puede ver el DOM como un árbol de objetos que representa todos los elementos de un documento HTML, estructurado según su jerarquía.



A través del DOM HTML, JavaScript puede acceder a los diferentes objetos del documento HTML e interactuar con ellos.

JavaScript está estrechamente relacionado con HTML.

De hecho, su integración es posible directamente en documentos HTML.

```

---

---

<br>

<br>

---

## **Lenguaje interpretado vs lenguaje compilado**

---

<br>

**En programación, los lenguajes se distingue entre lenguajes interpretados (como JS, Python, PHP, Ruby ... ) y lenguajes compilados (como C++, Java, Rust, Go ...  ).**

_En realidad, estos dos términos están relacionados con la forma en que se traduce un código a lenguaje de máquina (binario) para que pueda ser ejecutado:_

<br>

- **Un lenguaje interpretado** es aquel en el que el código fuente (el código escrito en ese lenguaje) **se lee y se ejecuta** en el orden de las líneas del script.

  Un intérprete lee cada instrucción del código fuente y la ejecuta.

<br>  

- **Un lenguaje compilado** no se procesa de la misma manera, **requiere un compilador.**

  Un compilador lee todas las instrucciones de un código fuente **para crear a partir de ellas un código objeto**, es decir, un archivo **legible por la máquina.**
  
  Este archivo, independiente del código fuente, se puede almacenar en un archivo ejecutable por la máquina.

<br>  

Por lo tanto, se entiende que el procesamiento de un código fuente no es la misma para un lenguaje interpretado y un lenguaje compilado.

**JavaScript se clasifica como un lenguaje interpretado.**

De hecho, cuando se ejecuta un script de JavaScript, el código se ejecuta de arriba abajo, cada instrucción se traduce una por una a lenguaje de máquina y se ejecuta.

<br>

---

---

**ATENCIÓN**

Inicialmente, los motores de JavaScript (programas que permiten ejecutar JavaScript) eran intérpretes.

Hoy en día, muchos navegadores web utilizan motores de JavaScript que utilizan el principio de "compilación en tiempo de ejecución" para reducir la pérdida de rendimiento.

El principio de compilación en tiempo de ejecución consiste en compilar las instrucciones en el momento de la ejecución, lo que ahorra tiempo cuando, por ejemplo, se llama al mismo código varias veces (ya que ya ha sido compilado)..

---

---

<br>

---

---

<br>
<br>

---

### **Diferencia entre interpretación y compilación**

---

**Sin profundizar demasiado en este concepto, veamos la diferencia de comportamiento entre la interpretación y la compilación de un script.**

<br>

---

**EJEMPLO: Un script muy simple**

```js
console.log(1);

console.log(2);

consolelog(3);

console.log(4);

console.log(5);
```

👆 En este script, cuyo objetivo es mostrar en la consola los números 1 2 3 4 5, podemos ver un error en la línea Consolelog (3).

De hecho, falta un punto.

Entonces, si incorporamos este script en un código HTML, la consola mostrará:

<br>

```java

1

2

ReferenceError: Can't find variable: consolelog

```

El motor de JavaScript vincula cada instrucción y la ejecuta cada vez hasta que encuentra un error.

La consola muestra los primeros 2 valores y la ejecución se detiene tan pronto como se encuentra el error.

Se puede ver que el comportamiento habría sido diferente si JavaScript hubiera sido compilado.

De hecho, en este último caso, el compilador habría analizado el programa en su totalidad.

Dado que encuentra un error, ni siquiera habría compilado el script y no habría habido ninguna ejecución.

---

---

<br>

<br>

---

### **Como se ejecuta Javascript?**

---

<br>

**Con toda esta información que tenemos ahora, entendemos que JavaScript se está ejecutando de la siguiente manera:**

- El navegador recupera y carga los códigos de una página web (HTML/CSS/JS).

- El navegador transforma toda la página en nuestro famoso documento de modelo de objetos, en el que crea una representación de cada elemento HTML.

- El motor de JavaScript del navegador convierte el código JS en un código intermedio entre el código fuente y la máquina de ejecución, llamado bytecode.

- Los eventos, como los clics del mouse, que están enlazados a bloques de código en JS desencadenan en su ejecución.

  El motor de JavaScript procede a la interpretación del bytecode generado por los bloques de código llamados y realiza las modificaciones deseadas en el Document Object Model.

- Le nouveau Document Object Model est alors affiché.


Podemos ver que, de acuerdo con este sistema, los navegadores web pueden usar scripts JavaScript para modificar el DOM de una página web y, por lo tanto, actualizar su pantalla.


---
---
---

al haber visto esto... significa que yo al pulsar F12 y al abrir la herramienta para los desarrolladores, y al cambiar en el html algún texto eso significa cambiar el dom?:

---

Sí, al utilizar la herramienta para desarrolladores del navegador y realizar cambios en el HTML, estás modificando el DOM (Documento de Objeto Modelo). El DOM es una representación estructurada de los elementos HTML de una página web, y al realizar cambios en el HTML a través de la herramienta para desarrolladores, estás alterando directamente el DOM.

Por ejemplo, si modificas un texto dentro del HTML usando la herramienta para desarrolladores, estarás cambiando el contenido de un elemento en el DOM. Estos cambios se reflejarán en tiempo real en la página web, ya que el navegador actualizará el DOM y mostrará los cambios realizados.

La herramienta para desarrolladores te permite visualizar y editar el DOM de manera interactiva, lo que facilita el desarrollo y la depuración de aplicaciones web. Es una forma muy útil de experimentar con cambios en el contenido y la estructura de una página sin tener que modificar directamente los archivos fuente.

---
---
---

<br>

<br>

---

#### **Observación: Modulos**

---

<br>

Es importante saber que JavaScript es un lenguaje modular/Flexible.

Hay muchas bibliotecas que se pueden usar fácilmente y que permiten mejorar y optimizar el uso de JavaScript.

<br>

---

---

<br>

<br>

---

### **Biblioteca**

---

<br>

En programación, una biblioteca (o librería) es un conjunto de funciones que se pueden importar.

Estas funciones son, en última instancia, conjuntos de código ya escritos que se pueden llamar y utilizar sin tener que escribirlos nosotros mismos.

Aquí tienes algunos ejemplos de bibliotecas que se pueden utilizar con JavaScript:

- Añadido de funciones que permiten la manipulación del DOM (Document Object Model):

  - [JQuery](https://jquery.com/)
  - [Umbrella JS](https://umbrellajs.com/)

<br>  

- Añadido de funciones de visualización de datos:

  - [Chart.js](https://jquery.com/)
  - [Algolia places](https://www.algolia.com/blog/product/introducing-algolia-places/)

<br>  

- Añadido de funciones para los formularios

  - [wForms](https://code.google.com/archive/p/wforms/)
  - [Validanguage](https://github.com/gcao/validanguage)

<br>

---

---

<br>

<br>

---

### **Frameworks**

---

<br>

Otro punto importante a tener en cuenta son los frameworks.

Un framework es como una extensa biblioteca, pero que proporciona un espacio de trabajo para proyectos de código.

El framework desempeña un papel crucial en la organización del proyecto y tiene un impacto significativo en su diseño y estructura.

<br>

**Existen varios frameworks JavaScript:**

- **React Native:** para el desarrollo de aplicaciones JS para Android y IOS

- **Angular JS:** para las aplicaciones web mas completas

- **Bootstrap:** para la creación de diseños en responsivo

- **Node.js:** para crear aplicaciones de lado servidor

Aquí, ahora sabes mucho más sobre JavaScript y sus especificidades.

<br>

---

---

<br>

<br>

---

## **Propiedad Transform**

---

<br>

---

**EJEMPLO**

La propiedad transform aplica una transformación 2D o 3D a un elemento.

Esta propiedad permite rotar, mover, escalar y aplicar transformaciones a los elementos.

```css
/* Asi 👇 individualmente */
transform: rotate(20deg);
transform: translate(20px, 10px);
transform: scale(1, 2);
transform: skew(45deg, 62deg);

/* O asi 👇 en union*/
transform: translate(100px) rotate(20deg) skew(45deg, 62deg) scale(1, 2);
```

<br>

---

<br>

**La propiedad de transformación puede tomar para transformaciones 2D o 3D los siguientes valores:**

- **none**: ninguna transformación, valor por defecto.

- **matrix()**: permite aplicar una matriz de transformación a un elemento.

- **translate()**: mover un elemento horizontal y verticalmente.

- **translateX()**: mover un elemento horizontalmente.

- **translateY()**: mover un elemento verticalmente.

- **translateZ()**: mover un elemento en profundidad.

- **translate3D()**: mover en los tres ejes de perspectiva un elemento.

- **scale()**: redimensionar horizontal y verticalmente un elemento.

- **scaleX()**: redimensionar horizontalmente un elemento.

- **scaleY()**: redimensionar verticalmente un elemento.

- **scaleZ()**: redimensionar un elemento en su profundidad.

- **scale3D()**: redimensionar un elemento en los tres ejes de perspectiva.

- **rotate()**: permite rotar un elemento.

- **rotateX()**: rotar un elemento sobre el eje de perspectiva X.

- **rotateY()**: rotar un elemento sobre el eje de perspectiva Y.

- **rotate3D()**: rotar un elemento sobre los tres ejes de perspectiva.

- **skew()**: inclinar horizontal y verticalmente un elemento.

- **skewX()**: inclinar horizontalmente un elemento.

- **skewY()**: inclinar verticalmente un elemento.

- **perspective()**: define una perspectiva de vista para un elemento transformado en 
3D.
- **inherit**: hereda la propiedad de su elemento padre.

- **initial**: restablece la propiedad a su valor predeterminado.

<br>

---

---

<br>

<br>

---

### **Atención!**

---

<br>

Solo algunos elementos pueden ser convertidos.

No es posible convertir elementos cuya disposición está gestionada por una zona en línea, una columna de tabla o un grupo de columnas de tabla no reemplazado

<br>

---

---

<br>

<br>

---

## **En resumen**

---

<br>

Las transiciones y animaciones CSS son similares en muchos aspectos, pero difieren en la complejidad de las transiciones, la forma en que el código CSS interactúa con JavaScript, el funcionamiento de los bucles y el método para desencadenar la reproducción de la animación.

Las transiciones CSS son generalmente las mejores para movimientos simples de uno en uno, mientras que las animaciones CSS son adecuadas para series de movimientos más complejos.

<br>

---

---
