# **Etiqueta `<object>`**

<br>

## **_Objetivos:_**

- Añadir a nuestra pagina un objeto que contiene pdf

---

---

<br>

---

## **Contexto**

---

<br>

Es posible agregar otros tipos de medios para los cuales no existe una etiqueta específica.

Aquí veremos una etiqueta para agregar objetos multimedia a una página web.

Podremos especificar su comportamiento con atributos.

<br>

---

---

<br>
<br>

---

## **La etiqueta `<object>`**

---

<br>

Para agregar objetos, usaremos la etiqueta **`<object>`** complementada **con** sus **atributo**s: **type="application/pdf"** para declarar que queremos **importa**r un archivo de tipo **,** y **data="Mi_archivo.pdf" que indica la ruta al recurso objetivo.**

<br>

---

**EJEMPLO**

```html
<object
  type="application/pdf"
  data="Mon_fichier.pdf"
  width="400"
  height="350"
></object>
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

Es posible usar esta etiqueta para agregar otros medios, como audio o video, pero para estos medios específicos es mejor usar las etiquetas dedicadas que vimos anteriormente.

**Cuidado, esta etiqueta es inestable y tiene errores: de hecho, muchas propiedades no son compatibles con HTML 5.**

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Es posible agregar objetos como archivos PDF a través de la etiqueta `<object>`, y para ello se deben usar los atributos correctos: data="" para declarar los datos a incluir y type="application/pdf" que indica que se trata de un archivo PDF.**

<br>

---

---
