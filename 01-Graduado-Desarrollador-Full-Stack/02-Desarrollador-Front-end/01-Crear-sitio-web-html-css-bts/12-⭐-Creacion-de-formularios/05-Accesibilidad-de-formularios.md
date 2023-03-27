# **Accesibilidad de formularios**

<br>

## **_Objetivos:_**

- Hacer los formularios más accesibles.

---

---

<br>

---

## **Contexto**

---

<br>

Es importante ayudar al usuario a comprender la información que esperamos de él.

Para ello, veremos cómo mejorar la accesibilidad de nuestros formularios.

<br>

---

---

<br>

<br>

---

## **Accesibilidad**

---

<br>

---

La etiqueta `<label>` se utiliza para indicar una etiqueta para un campo dado.

Para vincular una etiqueta con un campo, utilizaremos el atributo for = "". Su valor debe ser el mismo que el valor contenido en el atributo id = "" del campo al que está vinculado.

Esta etiqueta es importante para la accesibilidad, especialmente para los lectores de pantalla utilizados por personas con discapacidad visual.

También permitirá que, cuando el usuario haga clic en la etiqueta `<label>`, se coloque automáticamente el enfoque en el campo al que está vinculada.

El atributo placeholder permite agregar un valor de ejemplo que aparecerá en gris en el campo y desaparecerá cuando se haga foco en él.

**EJEMPLO: Syntaxis**

```html
<label for="monNom">Nom</label>

<input type="text" id="monNom" placeholder="texte d'aide" name="nom" />
```

<br>

![Etiqueta de indicación de campo](./05-Accesibilidad-de-formularios/img/label_placeholder.PNG)

```
Nos indica el nombre del campo y hace referencia a como hay que rellenar el campo y de que tipo es
```

<br>

---

---

<br>
<br>

---

### **Atención**

---

<br>

Por razones de accesibilidad, el atributo placeholder no debe reemplazar la etiqueta label: estos elementos se complementan.

<br>

---

---

<br>
<br>

---

### **EJEMPLO: Formulario de contacto**

---

<br>

---

**EJEMPLO**

```html
<label for="name">Nom</label>

<input type="text" id="name" placeholder="nom" name="name" />

<label for="email">E-mail</label>

<input type="email" id="email" placeholder="email@mail.com" name="email" />

<label for="phone">Téléphone</label>

<input type="tel" id="phone" placeholder="0600000000" name="phone" />

/.../

<label for="message">Message</label>

<textarea rows="10" id="message" name="message"></textarea>
```

![Formulario](./05-Accesibilidad-de-formularios/img/form_label.PNG)

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **La etiqueta `<label>` permite etiquetar un campo, lo que es especialmente útil para los lectores de pantalla.**

- **El atributo placeholder="" permite agregar textos de ayuda.** 

<br>

---

---
