# **Etiqueta video**

<br>

## **_Objetivos:_**

- Descubrir y usar la etiqueta `<video>`

---

---

<br>

---

## **Contexto**

---

<br>

Es posible agregar videos a una página HTML.

Para esto, existe una etiqueta dedicada que vamos a descubrir.

<br>

---

---

<br>
<br>

---

## **La etiqueta `<video>`**

---

<br>

Para agregar videos que se puedan reproducir en una página HTML, usaremos la etiqueta `<video>`.

Esta etiqueta puede ser especificada usando el **atributo "controls"**, lo que **mostrará los controles** de video en el reproductor, como reproducción, pausa y volumen.

Es posible declarar el **atributo "autoplay"** en la etiqueta **si deseamos que el video se reproduzca automáticamente al cargar la página.**

**Es una buena práctica siempre dar las dimensiones del video a través del uso de los atributos "width" y "height" en píxeles.**

<br>

---

**EJEMPLO**

```html
<video width="320" height="240" autoplay controls>
  <!-- -->
</video>
```

<br>

---

---

<br>
<br>

---

## **Etiqueta `<source>`**

---

<br>

**Entre** las etiquetas **`<video>`** y **`</video>`**, **es necesario** agregar al menos una etiqueta **`<source>`, acompañada de los atributos src="" y type=""** para especificar la fuente (la ruta al video en la computadora o el servidor) y el tipo, es decir, el formato del video.

<mark>
Al agregar varias etiquetas &lt;source&gt;, se pueden declarar archivos alternativos para mostrar:</mark>

el navegador elegirá el primer formato que reconozca.

No todos los formatos de video son compatibles con todos los navegadores:

**Para verificar** si la fuente es compatible con el navegador objetivo, **CanIUse o MDN son buenas recursos.**

**_Además, los archivos en formato .webm o .mp4 son preferibles._**

```
El texto colocado entre las etiquetas será el mensaje de error que se mostrará si la etiqueta no se puede mostrar en el navegador porque no es compatible.
```

<br>

---

**EJEMPLO**

```html
<video width="320" height="240" autoplay controls>
  <source src="video.mp4" type="video/mp4" />

  <source src="video.ogg" type="video/ogg" />

  <source src="video.webm" type="video/webm" />

  Mensaje a mostrar en caso de no compatibilidad de la etiqueta por el navegador.
</video>
```

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Para agregar videos a una página HTML, es necesario utilizar la etiqueta `<video>` junto con las etiquetas `<source>`, que determinan la ruta y el formato del video.**

<br>

---

---

<br>
<br>

---

### **Complemento**

---

<br>

[Documentación etiqueta video](https://developer.mozilla.org/fr/docs/Web/HTML/Element/video)

<br>

---

---
