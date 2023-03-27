# **La implementación CSS**

<br>

## **_Objetivos:_**

- Conocer el uso de las clases

- Conocer el uso de los ID (#)

- Conocer el funcionamiento y heredado

- Saber como funciona el mecanismo de cascada y especificidad

- Averiguar recursos e información

---

---

<br>
<br>

---

## **Conocer el uso de las clases**

---

<br>

Hemos aplicado estilos CSS a elementos HTML, utilizando sus nombres de etiquetas.

Todos los elementos afectados por un estilo CSS están implicados.

Las clases funcionan de la misma manera, puedes asignar a cada elemento HTML una o varias clases de las cuales puedes elegir un nombre a tu gusto.

La ventaja de las clases es que puedes apuntar a cualquier elemento HTML que tenga la clase como atributo.

En los siguientes ejemplos, se utiliza el método de estilo interno para simplificar la comprensión.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html>
  <head>
    <style>
      .mi-clase {
        color: red;
      }
    </style>
  </head>

  <body>
    <h1 class="mi-clase">Un titulo h1 en rojo</h1>

    <p class="mi-clase">Un párrafo en rojo</p>

    <span class="mi-clase">Un span en rojo</span>

    <p>Un texto en negro ya que este no esta siendo afectado por la clase</p>
  </body>
</html>
```

<br>

En este otro ejemplo, la declaración de la clase está vinculada al elemento HTML li.

Solo el elemento li se verá afectado por esta clase.

Tomemos como ejemplo una lista que presenta diferentes medios de transporte.

Los medios de transporte contaminantes se muestran en rojo, mientras que los medios de transporte ecológicos se destacan en negrita y en verde.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html>
  <head>
    <style>
      li {
        color: red;
      }

      li.ecológico {
        font-weight: bold;

        color: green;
      }
    </style>
  </head>

  <body>
    <ul>
      <li class="ecológico">Coche eléctrico</li>

      <li>Barco</li>

      <li class="ecológico">Bicicleta</li>

      <li class="ecológico">Patinete</li>

      <li>Moto</li>
    </ul>
  </body>
</html>
```

<br>

---

---

<br>
<br>

---

### **Observación**

---

<br>

**Cuando se usan varias clases en un elemento HTML,** _todas las reglas de estilo de esas clases se aplican al mismo tiempo._

Sin embargo, si hay reglas de estilo idénticas, la clase declarada más tarde tiene prioridad, ya que "anula" la regla de estilo definida antes.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html>
  <head>
    <style>
      .clase-1 {
        color: red;

        font-weight: bold;
      }

      .clase-2 {
        color: blue;
      }
    </style>
  </head>

  <body>
    <p class="clase-1 clase-2">
      Este párrafo esta en color azul y esta escrito en negrita
    </p>

    <p class="clase-2 clase-1">
      A pesar de la inversión de las clases 1 y 2, este párrafo tiene el mismo
      estilo.
    </p>

    <!-- Tiene el mismo estilo por que css es: estilos en cascada, a los dos párrafos les hemos aplicado dos clases en un mismo elemento, y lo único diferente que tienen es el font-weight: bold; y la propiedad color se repite en ambas clases, por lo tanto la clase n2 es la ultima en la cascada, por lo tanto los párrafos serán de color azul, da igual que cambiemos de orden las clases de orden en el html se aplicara mediante cascada de css   -->
  </body>
</html>
```

<br>

---

---

<br>
<br>

---

## **Sintaxis de la escritura**

---

<br>

Al escribir reglas CSS, es importante respetar ciertas convenciones.

La sintaxis de escritura de las clases debe realizarse con caracteres alfanuméricos únicamente.

**Específicamente, solo se permiten letras (a-z, A-Z), números (0-9), guiones (-) y guiones bajos (\_).**

Por lo tanto, es crucial respetar estas reglas de sintaxis para que la clase pueda ser interpretada correctamente por el lenguaje CSS.

De hecho, el uso de caracteres no permitidos puede provocar errores de sintaxis o de compilación que impedirán que la clase funcione correctamente.

Además, se recomienda evitar nombres de clases genéricos como "div" o "container", ya que pueden provocar conflictos con otras clases o elementos HTML. También se desaconseja empezar el nombre de una clase con un número, ya que algunos navegadores pueden interpretarlo como un error de sintaxis.

<br>

---

**EJEMPLO**

```
Buena sintaxis de escritura de una clase CSS: .mi-Clase.
```

<br>

---

---

<br>
<br>

---

### **Atención!**

---

<br>

Las clases son consideradas "case-sensitive" (sensibles a mayúsculas y minúsculas), lo que significa que si usa una clase llamada "miClase" en la hoja de estilo y en la página HTML la escribe como "miclase", esta última no será reconocida.

De hecho, el navegador considera que "miClasse" y "miclase" son dos nombres de clase diferentes.

<br>

---

---

<br>
<br>

---

### **Observación-2**

---

<br>

Cuando las reglas de estilo son idénticas en varios elementos HTML que utilizan la misma clase, se pueden factorizar las reglas CSS separando los selectores por comas.

<br>

---

**EJEMPLO**

```css
li.alerte,
span.alerte {
  color: red;
}
```

<br>

---

---

<br>
<br>

---

## **La utilización de los ID's**

---

<br>

Cuando se trabaja con elementos HTML en CSS, es posible asignarles un identificador o ID, además o en lugar de las clases.

Los IDs funcionan de manera similar a las clases en el sentido de que se les pueden aplicar estilos.

Sin embargo, existen algunas diferencias importantes entre ambos.

La primera diferencia es que cada elemento HTML solo puede tener un ID y este ID debe ser único en una página HTML.

Mientras que varios elementos HTML pueden compartir una misma clase.

La segunda diferencia importante entre los IDs y las clases es que las reglas CSS que utilizan un ID tienen prioridad sobre las reglas que utilizan una clase.

Esto significa que si un mismo elemento HTML tiene tanto un ID como una clase, los estilos aplicados al ID tendrán prioridad sobre los estilos aplicados a la clase.

En general, los IDs se utilizan para dirigirse a elementos HTML específicos en los que se desea realizar acciones particulares, a menudo con JavaScript.

Para crear un ID, se utiliza el símbolo de almohadilla (#) seguido del nombre del ID.

<br>

---

**Ejemplo**

```html
<!DOCTYPE html>

<html>
  <head>
    <style>
      #mi-id {
        /*Variar fuentes declaradas como valor de la propiedad font-family.

        Si Calibri no esta en la memoria del sistema operativo, la fuente

        Arial sera utilizada, sinon sans-sérif, y asi con la siguiente.

        */

        font-family: Calibri, Arial, sans-sérif;

        color: tomato;
      }
    </style>
  </head>

  <body>
    <p id="mi-id">El estilo se aplica a este párrafo...</p>

    <p>... pero no se aplica a este otro.</p>
  </body>
</html>
```

<br>

Los ID tienen prioridad sobre las clases.

Por lo tanto, cuando se utilizan los atributos ID y clase en el mismo elemento HTML, es el ID el que aplica su estilo con prioridad, independientemente del orden en que se declaren los atributos.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html>
  <head>
    <style>
      #mi-id {
        color: red;
      }

      .mi-clase {
        color: blue;
      }
    </style>
  </head>

  <body>
    <!-- Aunque haya estilo en cascada y clase esta ultimo, nuestra lógica nos diría que es clase quien establece el estilo, pero tenemos también unas reglas descritas en las que mencionan que los IDs son ne un nivel mayor a las clases y estos prevalecen antes que una clase -->

    <p id="mi-id" class="mi-clase">
      El ID es prioritario, este párrafo es de color rojo
    </p>
  </body>
</html>
```

<br>

---

### **Atención**

---

<br>

El ID es sensible a mayúsculas y minúsculas, al igual que las clases.

La sintaxis de escritura de un ID es la misma que la de las clases.

<br>

---

**EJEMPLO**

A continuación, el archivo style.css separado del archivo HTML:

```
Bonne syntaxe d'écriture d'un ID : #mon-ID
```

<br>

---

---

<br>
<br>

---

## **Funcionamiento de heredado**

---

<br>

Los estilos funcionan por herencia, lo que significa que las reglas de estilo se combinan y se transmiten de padres a hijos.

Este concepto es importante antes de pasar a la creación de un sitio web.

<br>

---

---

<br>
<br>

---

## **Mecanismo de cascada y especificidad**

---

<br>

Los estilos en línea, también conocidos como "inline", afectan a un solo elemento y se definen directamente en un elemento HTML mediante el atributo "style". Aquí hay un ejemplo con la etiqueta `<p>`, que crea un párrafo de texto con el atributo "style" que contiene la declaración de color.

"ver video doriandesings numero 15, o ver en studi video"

<br>

---

---

<br>
<br>

---

## **Mecanismo de Cascada y especificidad**

---

<br>

---

**EJEMPLO**

<br>

```html
<!DOCTYPE html>

<html>
  <head>
    <style>
      /* regla 1 */

      p {
        color: red;
      }

      /* regla 2 */

      p {
        color: blue;
      }
    </style>
  </head>

  <body>
    <p>Texto con regla 1 y 2, el color es azul</p>
  </body>
</html>
```

<br>

Los selectores CSS son instrucciones utilizadas en la hoja de estilos CSS para dirigirse a elementos HTML y aplicarles un estilo.

Cuando varios selectores se aplican a un mismo elemento, CSS se basa en un conjunto de reglas que definen el orden de preferencia de aplicación de las propiedades declaradas en los selectores.

El mecanismo que se llama cascada.

Y en este ejemplo, las reglas 1 y 2 definen el color de los párrafos en rojo y azul respectivamente, pero la regla 2 se define después de la regla 1.

Con lo cual significa que el párrafo tendrá el color azul debido a la cascada (debido a que la regla 2 esta definida después de la 1, osea en cascada es la ultima).

<br>

---

## **Mecanismo de especificidad**

---

<br>

Cuanto más específico sea un selector, mayor será su prioridad.

Por ejemplo, un selector de identificador (#) es más específico que un clase (.), y por lo tanto tendrá una prioridad más alta.

Si dos selectores tienen la misma especificidad, la regla más importante tendrá prioridad.

Las reglas importantes tienen una prioridad más alta que las reglas no importantes.

A continuación se presenta una lista no exhaustiva de los principales selectores en orden de prioridad:

| <span style="color: orange;">Selector</span>             | <span style="color: fuchsia;">Ejemplo</span>                    | <span style="color: springgreen;">Prioridad</span>       |
| -------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| <span style="color: yellow;">Estilo en linea</span>      | <span style="color: pink;"> < p style="... !important"> </span> | <span style="color: lightseagreen;">Prioridad MAXIMA     |
| <span style="color: yellow;">Estilo en linea</span>      | <span style="color: pink;"> < p style="..."> </span>            | <span style="color: lightseagreen;">Prioridad ALTA       |
| <span style="color: yellow;">Selector de ID</span>       | <span style="color: pink;">#id { ... }</span>                   | <span style="color: lightseagreen;">Prioridad MEDIA-ALTA |
| <span style="color: yellow;">Selector de clase</span>    | <span style="color: pink;">.class { ... }</span>                | <span style="color: lightseagreen;">Prioridad MEDIA      |
| <span style="color: yellow;">Selector de elemento</span> | <span style="color: pink;">p.class { ... }</span>               | <span style="color: lightseagreen;">Prioridad MEDIA-BAJA |
| <span style="color: yellow;">Selector de elemento</span> | <span style="color: pink;">p { ... }</span>                     | <span style="color: lightseagreen;">Prioridad BAJA       |

---

<br>

---

---

<br>
<br>

---

### **Atención!**

---

<br>

Es importante destacar que el uso excesivo de reglas importantes o selectores específicos puede hacer que el código CSS sea difícil de mantener y comprender.

Es mejor usar selectores generales y evitar las reglas importantes tanto como sea posible, excepto en casos en los que sean absolutamente necesarias.

<br>

---

---

<br>
<br>

---

## **Estilos aplicados en función del estado**

---

<br>

Cuando se desean aplicar reglas CSS a elementos HTML en función de su estado, existen varias posibilidades.

Un ejemplo perfecto para ilustrar este método es el de los enlaces, o anclas, representados por la etiqueta `<a>`.

En efecto, un enlace puede tomar varios estados diferentes:

- visited: El estado visited se aplica cuando el enlace ha sido visitado previamente por el usuario

- active: El estado active se activa cuando el usuario está haciendo clic en el enlace

- hover: El estado hover se aplica cuando el cursor del mouse sobrevuela el enlace

- focus: focus se activa cuando el cursor del teclado está posicionado en el enlace generalmente utilizando la tecla "tab".

Utilizando selectores CSS específicos para cada estado del enlace, es posible aplicar estilos diferentes según el contexto.

<br>

---

**EJEMPLO**

```html
<!DOCTYPE html>

<html>
  <head>
    <style>
      a:link {
        color: blue;
      }

      a:visited {
        color: grey;
      }

      a:focus {
        font-size: 15px;

        color: green;
      }

      a:hover {
        color: red;

        text-decoration: none;
      }

      a:active {
        color: black;
      }
    </style>
  </head>

  <body>
    <a href="https://www.pirates-corsaires.com">Enlace hacia un sitio cultural</a>
  </body>
</html>
```

Muchas otras etiquetas HTML están sujetas al uso de estados, aquí hay una lista no exhaustiva: `<button>`, `<input>`, `<label>`, `<div>`, `<span>`, `<ul>`, `<li>`, `<img>`.

Al utilizar selectores CSS adecuados, es posible personalizar la apariencia de estos elementos según su estado, para una experiencia de usuario más agradable e intuitiva.

<br>

---

---

<br>
<br>

---

### **Atención!**

---

<br>

Se puede observar que al hacer clic en el enlace, se aplican tanto el estilo a:focus como el estilo a:active, ya que ambos estados están activos en este tipo de acción.

<br>

---

---

<br>
<br>

---

## **Recurso e Información**

---

<br>

Las CSS son una norma abierta y pública desarrollada por el Consorcio World Wide Web (W3C), que es un grupo formado por representantes de editores de navegadores y algunas otras empresas interesadas en las CSS.

El W3C proporciona información y recursos, incluidas las especificaciones CSS actuales, con tutoriales, herramientas y noticias.

La página de inicio de las CSS del W3C: W3C

Aunque no es el sitio oficial de las CSS, el sitio MDM Web Docs de Mozilla es un excelente complemento a las especificaciones oficiales de las CSS del W3C.

Proporciona información, tutoriales y referencias sobre tecnologías web, incluidas las CSS.

La información está bien presentada, es precisa y confiable, redactada por un equipo de desarrolladores de Mozilla y de la comunidad.

La página de inicio de las CSS de MDN: MDN Web Docs

Algunos otros sitios populares son:

W3Schools: [https://www.w3schools.com/](https://www.w3schools.com/)

CSS-Tricks: [https://css-tricks.com/](https://css-tricks.com/)

CSS Reference: [https://cssreference.io/](https://cssreference.io/https://cssreference.io/)

<br>

---

---

<br>
<br>

---

### **Observación**

---

<br>

Es importante tener en cuenta que no todos los navegadores reaccionan de la misma manera en ciertas funciones CSS, independientemente del sistema operativo.

Por lo tanto, es esencial verificar la compatibilidad de las propiedades, ya sea en MDM Web Docs de Mozilla o en el sitio Can I use dedicado a esta tarea: [https://caniuse.com/](https://caniuse.com/).

Existen muchos sitios que ayudan a la creación de CSS en línea en elementos HTML muy específicos, como la generación de gradientes con unos pocos clics, sombras, diseños de cuadrícula complejos, botones, paletas de colores que combinan perfectamente para crear un sitio profesional.

Otras herramientas permiten realizar tareas mucho más complejas como animaciones, conversiones de dimensiones, previsualizaciones de fuentes, conversiones de SVG a fuentes de iconos, minimizadores de CSS.

Hay una plétora de herramientas en línea que te ayudan a crear tu código personalizado.

<br>

---

---

<br>
<br>

---

## **Esencial**

---

<br>

Este curso de introducción a CSS te ha proporcionado una comprensión sólida de los conceptos básicos del diseño de estilos para vestir un sitio web.

Ahora eres capaz de crear una hoja de estilo utilizando clases e ID, has adquirido buenas nociones de herencia y cascada, y sabes cómo vincular CSS con un documento web para darle estilo y hacerlo más atractivo.

El conocimiento de HTML y CSS son fundamentales en la web para comprender el funcionamiento de muchos lenguajes, como JavaScript para el desarrollo front-end o PHP y un lenguaje de gestión de bases de datos para el desarrollo back-end.

En general, este curso de introducción a CSS ha sentado una base sólida para una primera aproximación al diseño web.

Sin embargo, para comprender bien estos conceptos, es importante practicar tanto como sea posible y pasar al siguiente nivel.

<br>

---

---
