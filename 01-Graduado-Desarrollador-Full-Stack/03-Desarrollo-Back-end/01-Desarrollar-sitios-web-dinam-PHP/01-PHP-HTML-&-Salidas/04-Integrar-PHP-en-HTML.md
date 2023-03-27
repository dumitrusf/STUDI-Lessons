# **integrar PHP en HTML**

<br>

## **_Objetivos:_**

- Aprender a integrar `PHP` en `HTML`

---

---

<br>

---

## **Contexto**

---

<br>

El interés de **`PHP`** radica en que **permite modificar dinámicamente el contenido de una página `HTML`**.

**Es posible integrar `PHP` directamente en una estructura `HTML` y utilizarlo para generar fragmentos de la página `HTML`**.

<br>

---

<br>
<br>

---

## **Para integrar `PHP` en `HTML`, hace falta:**

---

<br>

- **Crear un archivo `PHP` .**

- **Agregar normalmente las partes estáticas en `HTML`, por ejemplo:**

  - **los elementos `html`, `head` y `body`.**

    <br>

- **Para cada sección dinámica, agregar el código `PHP` entre una etiqueta de apertura `" <?php "` y `una etiqueta de cierre " ?> "`.**

<br>

---

### **Integración de un fragmento `PHP` en `HTML`**

---

<br>

**En el ejemplo de aquí abajo, la etiqueta `<h1>` y su contenido son creadas dinámicamente.**

<br>

---

**Ejemplo: Archivo PHP**

```php
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php
        echo '<h1>Hello World !</h1>';
    ?>
  </body>
</html>
```

<br>

---

**Ejemplo: Código `HTML` generado**

```html
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <h1>Hello World !</h1>
  </body>
</html>
```

<br>

---

<br>

---

### **Alternancia de `PHP` y `HTML`**

---

<br>

**Ejemplo: Archivo `PHP`**

```php
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php
        echo '<h1>Hello World !</h1>';
    ?>

    <p>
        Ici un texte qui nest pas généré en PHP.
    </p>

    <?php
        echo '<p>Un nouveau texte généré en PHP</p>';
    ?>
  </body>
</html>
```

<br>

---

<br>

**Ejemplo: Código `html` generado**

```html
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <h1>Hello World !</h1>
    <p>Ici un texte qui n'est pas généré en PHP.</p>
    <p>Un nouveau texte généré en PHP</p>
  </body>
</html>
```

---

<br>

**"Cada vez que hemos necesitado escribir PHP nuevamente, hemos vuelto a poner las etiquetas de apertura y cierre."**

<br>

---

---

<br>
<br>

---

### **Atención: Archivo PHP conteniendo HTML**

---

<br>

**"La etiqueta de cierre es obligatoria, de lo contrario, todo lo que sigue después de la etiqueta de apertura se considerará como código PHP."**

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Para integrar `PHP` en `HTML`, es necesario crear un archivo `PHP`, incorporar el código `HTML` junto con el código `PHP` rodeado por las etiquetas de apertura y cierre.**

<br>

---

---