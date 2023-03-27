# **Principales funciones de `Sass`**

<br>

---

## **Las variables en `Sass`**

---

<br>

**Las variables de SASS** son una característica clave del pre-procesador que **permite** a los desarrolladores **simplificar** su **código y hacerlo más fácil de actualizar y mantener**.

**Las variables permiten** a los desarrolladores **definir valores una sola vez y luego reutilizarlos en su hoja de estilos.**

<br>

---

**Aquí un ejemplo de CSS _clásico_:**

```css
/* Con puro CSS */

h1 {
  color: #0077cc;

  font-size: 32px;

  line-height: 40px;

  margin-bottom: 24px;
}

h2 {
  color: #0077cc;

  font-size: 24px;

  line-height: 32px;

  margin-bottom: 16px;
}
```

---

En este ejemplo, **hemos definido el color de la marca como `#0077cc`** y lo hemos utilizado **en varios lugares**.

Sin embargo, también **hemos tenido que repetir** otros valores, como el **tamaño de la fuente**, el **grosor de las líneas** **y el margen**, lo cual puede hacer que **nuestro código** sea **menos fácil de mantener.**

---

<br>

<br>

---

**Veamos un ejemplo usando las variables de Sass:**

```scss
/* Con SASS */

$brand-color: #0077cc;

$heading-font-size: 32px;

$heading-line-height: 40px;

$heading-margin-bottom: 24px;

h1 {
  color: $brand-color;

  font-size: $heading-font-size;

  line-height: $heading-line-height;

  margin-bottom: $heading-margin-bottom;
}

h2 {
  color: $brand-color;

  font-size: 24px;

  line-height: 32px;

  margin-bottom: 16px;
}
```

---

<br>

**En este ejemplo**, **hemos definido variables para** todos **nuestros valores repetidos** y luego los hemos utilizado en nuestra hoja de estilos.

**Ahora**, no solo **nuestro código es más fácil de mantener**, sino que **también** es **más fácil de actualizar nuestro diseño en el futuro.**

Cabe destacar que **CSS también permite crear variables para los colores**, **pero** de manera más **limitada y menos compatible con los navegadores**.

<br>

---

---

<br>

En general, **las variables** de **SASS simplifican** en gran medida **el desarrollo de CSS** y **mejorar la mantenibilidad** de nuestro código.

**Al definir valores una sola vez y reutilizarlos** en nuestra hoja de estilos, **podemos ahorrar tiempo y reducir el riesgo de errores**.

<br>

---

---

<br>

**Existen diferentes tipos de variables, como:**

- números

- cadenas de texto

- listas

- diccionarios

- entre otros.

---

<br>

**En este curso, veremos diferentes sintaxis para estos tipos.**

<br>

---

---

<br>

<br>

---

## **Anidación en Sass**

---

<br>

SASS también introduce el concepto de anidamiento, que **permite** a los desarrolladores **agrupar estilos** relacionados **en una estructura jerárquica**.

**Esto puede hacer que el código sea más legible y más fácil de entender, especialmente en hojas de estilo extensas o complejas.**

<br>

---

**Ejemplo: con css**

```Css
/* Con CSS */

nav ul li a {
  color: #333;

  text-decoration: none;
}
```

---

---

**Ejemplo: con sass**

```Scss
/* Con SASS */

nav {
  ul {
    li {
      a {
        color: #333;

        text-decoration: none;
      }
    }
  }
}
```

---

<br>

Al anidar los selectores de esta manera, podemos ver claramente la estructura de nuestro código, y cómo están relacionados los diferentes elementos entre si.

Esto facilita la navegación en nuestro código y realizar modificaciones en elementos específicos.

<br>

---

<br>

El anidamiento también se puede utilizar junto con variables de SASS y otras características para crear un código más eficiente y fácil de mantener.

Por ejemplo, puedes utilizar un bloque anidado para definir un conjunto de estilos para una sección específica de tu sitio web y luego utilizar variables para definir valores específicos para esa sección.

De esta manera, evitarás la duplicación de código y podrás actualizar tu diseño más fácilmente en el futuro.

<br>

---

**Ejemplo:**

```scss
/* Use la anidación y las variables en Sass */

$primary-color: #1e88e5;

header {
  background-color: $primary-color;

  nav {
    ul {
      li {
        a {
          color: $primary-color;
        }
      }
    }
  }
}

section {
  background-color: $primary-color;

  h2 {
    color: white;
  }
}
```

---

<br>

En este ejemplo, utilizamos una variable llamada $primary-color para definir la paleta de colores principal de nuestro sitio web.

Al definir la variable al inicio de nuestra hoja de estilo, podemos cambiar fácilmente el color de todo nuestro sitio web actualizando la variable en un solo lugar.

<br>

---

<br>

Luego, utilizamos el anidamiento de SASS para definir múltiples conjuntos de estilos para las diferentes partes de nuestro sitio web.

En la sección del encabezado, establecemos el color de fondo utilizando nuestro color principal y luego utilizamos el anidamiento para estilizar los enlaces dentro del menú de navegación con el mismo color.

<br>

---

<br>

De manera similar, en el bloque de sección, establecemos el color de fondo utilizando nuestro color principal y aplicamos un estilo de texto blanco al encabezado.

Al utilizar el anidamiento y las variables de esta manera, podemos crear una jerarquía de estilos clara, fácil de leer y mantener.

<br>

---

<br>

En general, el anidamiento es una característica poderosa de SASS que puede mejorar significativamente la legibilidad del código y facilitar el mantenimiento de hojas de estilo extensas o complejas.

<br>

---

<br>

Sin embargo, es importante tener en cuenta que el anidamiento también puede dificultar la lectura del código si se utiliza de manera excesiva o inapropiada.

Como con cualquier técnica de codificación, es importante utilizar el anidamiento de manera prudente y mantener una jerarquía clara de estilos.

<br>

---

---

<br>

<br>

---

## **Los `@mixins`**

---

<br>

**Los mixins** son otra característica poderosa de SASS que **ayuda a ahorrar tiempo y reducir la duplicación de código**.

Un **mixin es un grupo de declaraciones CSS** que se pueden utilizar en tu hoja de estilos.

**Se definen utilizando** la directiva **`@mixin`** y pueden incluir cualquier propiedad CSS válida.

<br>

---

<br>

**Una de las** principales **ventajas de los mixins** es que **permiten encapsular estilos** CSS **complejos en bloques de código reutilizables**.

Por ejemplo, **puedes definir un mixin** para un estilo de botón personalizado **que incluya efectos de hover, gradientes y otras propiedades CSS**.

**Al utilizar este mixin** en toda tu hoja de estilos, **puedes asegurarte de que todos tus botones tengan un estilo coherente**, **sin necesidad de duplicar el mismo código** una y otra vez.

<br>

---

<br>

**Otra ventaja** de utilizar mixins es que pueden hacer tu código más modular y fácil de mantener.

Si necesitas actualizar el estilo de un elemento en particular, **solo tienes que actualizar la definición del mixin en lugar de tener que buscar cada instancia** de ese estilo en toda tu hoja de estilos.

<br>

---

**Ejemplo:**

```Scss
/* Definir un mixin */

@mixin button-style {

  display: inline-block;

  padding: 10px 20px;

  font-size: 16px;

  color: white;

  background-color: #1E88E5;

  border-radius: 5px;

  &:hover {

    background-color: #0D47A1;

  }

}

/* Usar el mixin */

button {

  @include button-style;

}

a.button {

  @include button-style;

  text-decoration: none;

}
```

---

<br>

En este ejemplo, definimos un mixin llamado button-style que contiene un conjunto de propiedades CSS para un elemento de botón. Luego, utilizamos la directiva @include para aplicar ese mixin en dos selectores diferentes: button y a.button. Esto nos permite reutilizar el mismo conjunto de propiedades CSS para los elementos de tipo botón y los elementos de ancla con la clase button.

<br>

---

<br>

Al utilizar mixins de este tipo, podemos escribir un código más conciso y fácil de mantener, reduciendo la repetición en nuestras hojas de estilo.

<br>

---

<br>

Es importante destacar que en este ejemplo también se utiliza el anidamiento con &:hover para aplicar estilos cuando se realiza un hover sobre el elemento.

<br>

---

**Ejemplo:**

```scss
button,
a.button {
  display: inline-block;

  padding: 10px 20px;

  font-size: 16px;

  color: white;

  background-color: #1e88e5;

  border-radius: 5px;
}

button:hover {
  background-color: #0d47a1;
}

a.button:hover {
  background-color: #0d47a1;

  text-decoration: none;
}
```

---

<br>

**En este ejemplo**, hemos definido estilos para los elementos button y a.button, y **hemos duplicado el código del efecto de hover para cada uno de ellos.**

**Si decidimos modificar el estilo de nuestros botones en el futuro, tendremos que actualizar la definición del estilo en varios lugares.**

<br>

---

<br>

Al utilizar mixins en SASS, podemos definir bloques de código CSS reutilizables e incluirlos donde los necesitemos, lo que hace que nuestro código sea más modular y más fácil de mantener a lo largo del tiempo.

<br>

---

<br>

Ahora que hemos cubierto las principales funciones de SASS, veamos más de cerca cómo podemos integrar SASS en nuestro flujo de desarrollo y aprovechar al máximo sus poderosas características.

En la segunda parte, exploraremos algunas herramientas y recursos esenciales para trabajar con SASS, como compiladores, editores de texto y recursos en línea para el aprendizaje y la solución de problemas.

<br>

---

---
