# **integrar PHP en HTML**

<br>

## **_Objetivos:_**

- Conocer el concepto de creación de páginas web dinámicas

---

---

<br>

---

## **Contexto**

---

<br>

Aquí vemos algunos ejemplos de uso de PHP para casos clásicos.

**Nota:** Estos extractos no deben ser comprendidos por el momento.

<br>

---

<br>
<br>

---

## **Lista de animales**

---

<br>

En el ejemplo a continuación, **hemos creado** en `PHP` **un array que contiene una lista de animales.**

**Un bucle permite crear automáticamente todos los elementos de la lista.**

```
Todo el texto ubicado después de la notación // es un comentario (todo lo que está después de "//" es ignorado por el intérprete de PHP).
```

<br>

---

**Ejemplo:**

```php
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php
      $animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Singe'];

      // Aquí, Tenemos una tabla de 6 animales

      echo '<ul>';
      foreach ($animals as $animal) { 
        // Construimos una etiqueta <li> </li> por animal, que contiene su nombre
        echo '<li>'.$animal.'</li>';
      }
      echo '</ul>';
    ?>
  </body>
</html>
```

<br>

---

**Ejemplo: Asi, el `HTML` final será una lista de puntos (no numérica) que contiene todos los animales:**

```html
<html>
    <head>
        <title>PHP Test</title>
    </head>
    <body>
        <ul>
            <li>León</li>
            <li>Gato</li>
            <li>Perro</li>
            <li>Caballo</li>
            <li>Tigre</li>
            <li>Mono</li>
        </ul>
    </body>
</html>
```

<br>

**En el ejemplo de aquí abajo 👇, tenemos una bandeja de entrada de correos electrónicos:**

**el usuario inicia sesión y mostramos sus mensajes no leídos.**

---

```php
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php
      $userName = 'John';
      // Nombre de usuario


      $newMessages = [
        'RDV 12h', 
        'Projet X', 
        'MAJ Document',
      ];
      // La liste de los mensajes no leídos


      echo '<h1>Hello ' . $userName . ' !</h1>';
      // Mostramos "Hello" seguido del nombre de usuario


      echo '<p>Vous avez <strong>' . count($newMessages) . ' nouveaux</strong> messages . </p>';
      // Usamos PHP para contar el numero de mensajes de nuestra lista de mensajes

      
      echo '<ul>';
      foreach($newMessages as $id => $message) {
        echo '<li><a href="/readMessage/' . $id . '">' . $message . '</a></li>';
        // Mostramos una lista de mensajes
      }
      echo '</ul>';
    ?>
  </body>
</html>
```

<br>

---

<br>

**Ejemplo: `html` generado**

```html
<html>
    <head>
        <title>PHP Test</title>
    </head>
    <body>
        <h1>Hello John !</h1>
        <p>Vous avez <strong>3 nouveaux</strong> messages.</p>
        <ul>
            <li><a href="/readMessage/0">RDV 12h</a></li>
            <li><a href="/readMessage/1">Projet X</a></li>
            <li><a href="/readMessage/2">MAJ Document</a></li>
        </ul>
    </body>
</html>
```

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **`PHP` le permite hacer muchas cosas, desde la simple adición de texto (para un nombre de usuario, por ejemplo), hasta la generación de trozos enteros de `HTML` (como las listas).**

<br>

---

---
