# **Introducción a las etiquetas y los atributos**

<br>

## **_Objetivos:_**

- Entender el concepto de etiqueta

- Descubrir el funcionamiento de atributos y etiquetas

---

---

<br>

---

## **Contexto**

---

<br>

El lenguaje HTML es un lenguaje descriptivo que se estructura mediante etiquetas que permiten organizar las páginas de los sitios web y su contenido.

Vamos a ver juntos cómo se escriben estas etiquetas para poder usarlas a su vez y formar nuestro primer documento HTML.

<br>

---

---

<br>
<br>

---

## **Que es una etiqueta?**

---

<br>

Un documento HTML debe tener una estructura adecuada para ser interpretado por un navegador web. Para ello, utilizamos etiquetas HTML. Estas permiten declarar elementos HTML y agregar contenido textual o multimedia, por ejemplo. Las etiquetas no son visibles propiamente hablando, son interpretadas por el navegador, que sabe cómo mostrar su contenido.

Algunos elementos se utilizan para dar un comportamiento específico, como:

- mostrar texto,

- títulos,

- imágenes,

- videos...

**Es importante usar el elemento correcto en el contexto** adecuado, para respetar la semántica del documento y mejorar la navegación, el posicionamiento en buscadores y la accesibilidad para personas con discapacidades.

<br>

---

---

<br>
<br>

---

### **Observación**

---

<br>

Los elementos HTML pueden verse como muñecas rusas que pueden contener otros elementos que a su vez pueden contener otros elementos. Para construir una página HTML, se anidan bloques de contenido juntos o uno después del otro.

<br>

---

---

<br>
<br>

---

## **Etiquetas HTML**

---

<br>

Una etiqueta indica que un elemento de cierto tipo comienza: el navegador sabe entonces cómo mostrarlo.

Las etiquetas vienen en pares: abrimos una etiqueta, insertamos el contenido y luego cerramos la etiqueta: `<etiqueta>`El contenido`</etiqueta>`

---

**EJEMPLO:**

![Esquema Etiqueta elemento](./02-Etiquetas-%26-atributos/img/balise_structure.jpg)

```
Elemento HTML de tipo párrafo
```

<br>

---

---

<br>
<br>

---

## **Etiqueta auto-cerrante**

---

<br>

Existen un tipo de etiquetas un poco particulares:

las etiquetas auto-cerrantes (o etiquetas vacías).

<br>

Son etiquetas que no requieren una etiqueta de cierre.

No pueden tener sub-elementos.

Hay dos formas posibles de escribir estas etiquetas:

- " />"
  o
- ">"

Al final de la etiqueta, el espacio y la barra diagonal ("/") no son obligatorios.

Sin embargo, en las buenas prácticas se recomienda agregar el espacio y la barra diagonal, ya que esto permite identificar mejor estas etiquetas en el archivo.

---

**EJEMPLO:**

![Etiqueta auto-cerrante](./02-Etiquetas-%26-atributos/img/balises_autofermantes.png)

```
Etiqueta auto-cerrante
```

<br>

---

---

<br>
<br>

---

## **Atributos de etiquetas HTML**

---

<br>

Se pueden agregar atributos a las etiquetas HTML para modificar o especificar su comportamiento.

Para hacerlo, se agrega en la etiqueta de apertura un atributo al que se le puede asignar una o varias propiedades.

---

**EJEMPLO:**

![Etiqueta y atributo](./02-Etiquetas-%26-atributos/img/balise_attribut_1.jpg)

```
Definición de un atributo "style" con una propiedad "background-color: red;" sobre una etiqueta
```

<br>

---

---

<br>
<br>

---

## **Atención: Etiquetas obsoletas**

---

<br>

**Algunos atributos y etiquetas están obsoletos**, lo que significa que teóricamente aún se pueden utilizar (algunos navegadores los entenderán), pero no se recomienda su uso por motivos de compatibilidad (en el futuro, es probable que desaparezcan).

Puede encontrar la lista de etiquetas obsoletas en el sitio web de MDN: **[MDN Obsoletos](https://developer.mozilla.org/fr/docs/Web/HTML/Element#obsolete_and_deprecated_elements)**

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Las etiquetas permiten estructurar el documento HTML y así darle al navegador las instrucciones necesarias para indicarle cómo debe manejar y mostrar el contenido.**

- **Para declarar un elemento HTML, es necesario abrir una etiqueta, insertar el contenido y luego cerrar la etiqueta.**

- **Se pueden agregar atributos a las etiquetas para especificar su comportamiento.**

<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

[Lista de etiquetas](https://developer.mozilla.org/fr/docs/Web/HTML/Element) Atención esta lista contiene etiquetas obsoletas.

[Lista de atributos](https://developer.mozilla.org/fr/docs/Web/HTML/Attributes)

<br>

---

---
