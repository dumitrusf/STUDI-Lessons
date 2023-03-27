# **Etiqueta `<audio>`**

<br>

## **_Objetivos:_**

- Descubrir la etiqueta audio y su funcionamiento

---

---

<br>

---

## **Contexto**

---

<br>

Es posible agregar audio en una página HTML gracias a la etiqueta dedicada.

Será posible configurar su uso con atributos.

<br>

---

---

<br>
<br>

---

## **La etiqueta `<audio>`**

---

<br>

La etiqueta **`<audio>`** permite agregar sonidos a una página HTML en forma de reproductor de audio.

Esta etiqueta puede tomar el atributo de **"controls" para mostrar los controles en el reproductor de audio.**

Es necesario agregar al menos una etiqueta `<source>` **entre** las etiquetas **<audio> y </audio>, para definir la fuente y el tipo de medio de audio a importar.**

```
El texto ubicado entre las etiquetas al mismo nivel que las fuentes será el mensaje de error que se mostrará si la etiqueta no se puede mostrar en el navegador.
```

<b style="color: yellow;">
No todos los formatos de audio son compatibles con todos los navegadores: para verificar si la etiqueta es compatible con el navegador objetivo, es necesario verificar en el sitio CanIUse.
</b>

<br>

---

**EJEMPLO**

```html
<audio controls>
  <source src="music.ogg" type="audio/ogg" />

  <source src="music.wav" type="audio/wav" />

  <source src="music.mp3" type="audio/mpeg" />

  Mensaje a mostrar en caso de incompatibilidad de la etiqueta con el navegador.
</audio>
```

[Visualizado de audio en navegador](./04-Etiqueta-audio/img/soundbar.PNG)




<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Para agregar audio a una página web, utilizamos la etiqueta <audio> acompañada de al menos una etiqueta <source>, que determina la ruta y el tipo de archivo de sonido a reproducir.**

<br>

---

---