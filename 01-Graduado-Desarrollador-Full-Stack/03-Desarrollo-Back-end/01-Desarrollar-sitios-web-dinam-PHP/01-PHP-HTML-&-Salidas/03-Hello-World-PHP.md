# **Hello World en PHP**

<br>

## **_Objetivos:_**

- Aprender a crear un archivo PHP y hacer mostrar un mensaje

---

---

<br>

---

## **Contexto**

---

<br>

Vamos a ver como crear nuestros archivos y mostrar un mensaje

<br>

---

### **Ejemplo: Affichage d'un message Hello World**

---

<br>

```php
<?php
echo 'Hello World !';
```

<br>

Si ejecutamos el código de arriba 👆, lo único que veremos en nuestro navegador en la página web es el mensaje: --> **¡Hola Mundo!**

<br>

Incluso **al inspeccionar el código fuente** de la página con las herramientas del navegador, **nunca veremos el código PHP** que se ha escrito para obtener este resultado, **solo veremos ¡Hola Mundo!**

El PHP ha sido interpretado en el servidor, que luego envió el resultado (la visualización del mensaje) al cliente (nuestro navegador web).

En el código anterior, mostramos la cadena de caracteres **`'Hello World !'`** usando la función **`"echo"`** y terminamos nuestra línea de código con un punto y coma.

**`Una cadena de caracteres debe ser encerrada entre comillas dobles o comillas simples para que se interprete correctamente`**.

<br>

---

---

<br>
<br>

---

## **Archivo PHP**

---

<br>

- **La extensión utilizada para crear archivos `PHP` es .php (por ejemplo: index.php).**

- **Para escribir código `PHP`, es necesario colocarlo entre una etiqueta de apertura `<?php` y una etiqueta de cierre `?>`.**

    - **Solo el código presente entre estas etiquetas será interpretado.**

    <br>

- **Cada línea de código incluida dentro de `PHP` se finaliza con un punto y coma (`;`).**

<br>

---

---
---

<br>
<br>

---

### **Observación**

---

<br>

Es importante tener en cuenta que, **_en un archivo que contiene exclusivamente código `PHP`_**, se recomienda **no incluir una etiqueta de cierre (?>).**

**Esto evita posibles errores en caso de olvidar una nueva línea o un espacio después de la etiqueta de cierre, lo cual podría causar problemas en el `HTML` generado.**

**Además, cada línea de código debe finalizar con un punto y coma (;).**

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Un archivo `PHP` tiene como extensión "`.php`" .**

- **Comienza con una etiqueta "`<?php`" .**

- **Si contiene únicamente código `PHP`, es preferible no incluir una etiqueta de cierre "`?>`" `para evitar posibles errores`.**

- **Cada línea de código termina con un punto y coma (`;`).**

<br>

---

---

<br>
<br>

---

### **Complemento:**

---

<br>

- **[Etiquetas PHP](https://www.php.net/manual/fr/language.basic-syntax.phptags.php)**

<br>

---

---
