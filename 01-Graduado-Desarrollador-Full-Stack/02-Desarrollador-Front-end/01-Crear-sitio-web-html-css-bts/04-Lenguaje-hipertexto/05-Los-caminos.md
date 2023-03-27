# ****

<br>

## **_Objetivos:_**

- Entender el concepto de camino absoluto y camino relativo

- Organizar el sitio en varias paginas con la ayuda de los enlaces

---

---

<br>

---

## **Contexto**

---

<br>

Los enlaces permiten navegar entre diferentes sitios o dentro del mismo sitio.

Ahora nos enfocaremos en la organización de la navegación en varias páginas dentro de un mismo sitio.

<br>

---

---

<br>
<br>

---

## **Camino absoluto**

---

<br>

La ruta absoluta es la ruta completa que lleva a un recurso desde la raíz del directorio.

Aquí hay un ejemplo de ruta absoluta en Microsoft Windows:

```
C:\Users\Dumit\Documents\Projets\mi_archivo.txt
```

Aquí, "C:" es la raíz del sistema de archivos de Windows, y después de eso, especificamos cada nivel de la estructura de árbol, separando cada nivel con una barra diagonal invertida.

Por lo tanto, para acceder al archivo "mi_archivo.txt", necesitaríamos seguir la ruta completa desde la raíz hasta la ubicación del archivo.


**Es importante tener en cuenta que el camino absoluto es una forma precisa de especificar la ubicación de un archivo o carpeta, pero puede ser un poco tedioso de escribir y puede cambiar si la estructura de árbol del sistema de archivos se modifica. Por esta razón, los programadores a menudo utilizan rutas relativas para especificar la ubicación de archivos y carpetas dentro de un proyecto o sitio web.**

<br>

---

---

<br>
<br>

---

## **Camino relativo**

---

<br>

Existe otro tipo de ruta, llamada relativa, porque es relativa al directorio actual.

Para navegar entre carpetas y elegir el recurso deseado, es necesario utilizar el punto "." y el doble punto "..".

El punto "." indica la carpeta actual y el doble punto ".." indica la carpeta anterior. Es posible retroceder varias veces concatenando los dobles puntos: "../../..".

En este caso, retrocedemos tres carpetas en comparación con la carpeta en la que nos encontrábamos.

<br>

La ruta relativa, también conocida como ruta relativa al directorio, es una forma de especificar la ubicación de un archivo o directorio en relación con el directorio actual o el archivo que se está utilizando como referencia.

A diferencia de la ruta absoluta, no comienza desde la raíz del sistema de archivos, sino que se basa en la ubicación actual del archivo o directorio.

Por ejemplo, supongamos que estamos trabajando en un proyecto web que tiene la siguiente estructura de archivos:

```
/proyecto_web
    /css
        style.css
    /img
        logo.png
    /js
        main.js
    index.html
```

Si estamos trabajando en el archivo `index.html`, que se encuentra en la carpeta principal del proyecto, y queremos vincular el archivo `style.css` que se encuentra en la carpeta `css`, podemos usar la siguiente ruta relativa:

```
./css/style.css
```

El `./` indica que la ruta comienza desde la carpeta actual (en este caso, la carpeta principal del proyecto), y luego especificamos la ubicación del archivo `style.css` a partir de ahí. Si estuviéramos trabajando en un archivo en una carpeta diferente, la ruta relativa se ajustaría en consecuencia.

En resumen, la ruta relativa es una forma de especificar la ubicación de un archivo o directorio en relación con la ubicación actual del archivo o directorio.


<br>

---

---

<br>
<br>

---

## **Ruta absoluta vs Relativa**

---

<br>

**Para los enlaces internos de un sitio web, es preferible usar rutas relativas.**

De hecho, si elegimos usar una ruta absoluta y el sitio web debe cambiar de dominio, entonces deberemos cambiar manualmente todos los enlaces en el código.

En cambio, al utilizar rutas relativas, no habrá necesidad de hacer ninguna modificación.


<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Para navegar entre carpetas y acceder a recursos, es posible utilizar enlaces absolutos desde la raíz del servidor, así como enlaces relativos desde el directorio actual.**

<br>

---

---
