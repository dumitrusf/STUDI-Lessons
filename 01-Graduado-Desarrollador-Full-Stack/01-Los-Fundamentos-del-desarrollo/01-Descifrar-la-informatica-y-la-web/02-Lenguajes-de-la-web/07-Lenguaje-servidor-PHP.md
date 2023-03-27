# **Lenguaje servidor PHP**

<br>

## **_Objetivos:_**

- Saber generar una pagina HTML dinámicamente gracias a PHP.

---

---

<br>

---

## **Contexto**

---

<br>

Entre los lenguajes web de lado servidor, PHP ha sido y sigue siendo, muy usado.

Es un lenguaje imperativo bastante simple a entender desde un comienzo, un poco menos exigente que Java por ejemplo.

La syntaxis de PHP se acerca bastante a lenguajes como C o JavaScript.

Una de sus ventajas es que es bastante fácil integrar directamente código HTML en un script PHP, esto reduce la programación en partes estáticas de la página que nos es devuelta.

Es un lenguaje libre cuyo ecosistema está muy desarrollado en el campo de las aplicaciones web (gmail... pirlo.tv ...etc.)

---

---

<br>
<br>

---

## **PHP: El lenguaje servidor de referencia**

---

<br>

```

<< PHP: Hypertext Preprocessor, más conocido como PHP (Siglas autoreferenciales), es un lenguaje de programación libre, principalmente usado para producir páginas web dinámicas via un servidor HTTP, pero también puede funcionar como cualquier otro lenguaje en modo local.

PHP es un lenguaje que es imponente (fuerte) y ordenado orientado a objetos.

PHP a permitido crear un gran numero de sitios web populares, como facebook y wikipedia. >>

Articulo Wikipédia PHP : https://fr.wikipedia.org/wiki/PHP.

```

<br>

---

---

<br>
<br>

---

## **Escritura PHP**

---

<br>
Los archivos PHP llevan la extensión .php y pueden combinar el código HTML y el código PHP literalmente.

El código PHP se escribe entre etiquetas:

```php

  <?php

    /*

      Este es un comentario.

      todo lo que este escrito entre estos dos signos

      no esta cogido en cuenta y esta destinado

      a los desarrolladores.

    */

  ?>

```

Este código se puede insertar sea donde sea en el código HTML.

La instrucción ECHO inserta el resultado del comando PHP en el lugar de la etiqueta.

El archivo final es interpretado como HTML.

Los archivos PHP son reutilizables y se pueden insertar en otro archivo PHP, mediante la siguiente directiva:

```php

include("source.php")

```

Una variable es un espacio de almacenamiento cuyo contenido puede cambiar con el tiempo.

Las variables se utilizan para almacenar números, palabras, listas, etc.

Las variables PHP están precedidas por un símbolo $.

```php

/* La variable n es una cadena de caracteres valida "PHP" */

$n = "PHP"

/* La variable n es ahora un numero que vale 1312 */

$n = 1312

/* La variable n vale ahora 1313 */

$n = $n + 1


```

---

<br>

### **_Ejemplo de SCRIPT en HTML_**

```php

<!DOCTYPE html>

<html>

<head>

  <meta charset="utf-8" />

  <title>PHP</title>

</head>

<body>

 <div>

  <?php

    $langage = "PHP";

    $version = 7.4;

    echo "<h1>Apprendre le " . $langage . " version " . $version . "</h1>"; 

  ?>

 </div>

 <div>

  <?php

    echo "Liste en PHP";

    echo "<ul>";

    echo "<li>0</li>";

    echo "<li>1</li>";

    echo "<li>2</li>";

    echo "<li>3</li>";

    echo "<li>4</li>";

    echo "</ul>";

  ?>

 </div>

</body>

</html>

```

El archivo obtenido después de la interpretación del código PHP es puro código HTML:

- Las directivas ECHO producen código HTML.

- Los símbolos $langage et $version an sido reemplazados por su valor respectivo guardado en el espacio indicado (el de la variable).

```html
<html>
  <head>
    <meta charset="utf-8" />

    <title>PHP</title>
  </head>

  <body>
    <div>
      <h1>Apprendre le PHP version 7.4</h1>
    </div>

    <div>
      Liste en PHP

      <ul>
        <li>0</li>

        <li>1</li>

        <li>2</li>

        <li>3</li>

        <li>4</li>
      </ul>
    </div>
  </body>
</html>
```

Lo que da el resultado siguiente:

<img src="07-Lenguaje-servidor-PHP/img/php_example.png">

<br>

---

---

<br>
<br>

---

## **_*Estructuras*_**

---

<br>

Las estructuras de control de PHP se parecen a la mayoría de los idiomas:

- La estructura de condición usa **if** (condición) {...}.

- Los bucles se escriben en la forma **while**(condición) {...} o **for** para (inicialización; condición; incrementación) {...}.

Del mismo modo, declaramos una función con la palabra **function**.

<br>

---

---

<br>
<br>

---

## **GET & POST**

---

La consulta de una página web se realiza **gracias a un tipo de solicitud y parámetros**.

PHP puede leer estos parámetros.

En el caso de una consulta GET, los parámetros se almacenan en una **tabla** llamada $\_GET, y para una solicitud de publicación en una tabla llamada $\_POST.

El acceso a un parámetro GET es con la sintaxis **$\_GET ["nombre_parámetro"]**, similar para las solicitudes de $\_POST.
<br>

---

---

<br>
<br>

---

## **QUE TIPO DE SOLICITUD ESCOGER?**

---

OLas solicitudes GET usan la URL de la página para pasar los parámetros mientras que las solicitudes POST usan el cuerpo de la solicitud.

La diferencia esencial radica en el hecho de que una URL se puede compartir (GET) mientras que el cuerpo de una solicitud (POST) no lo es.

Además, los parámetros GET tienen un tamaño limitado y solo pueden contener caracteres ASCII.

Las solicitudes GET, son por ejemplo utilizadas para la investigación, consulta con un perfil de usuario, etc.

Se suelen usar para enviar la información visible a traves de la URL

Las solicitudes de POST a menudo se usan para enviar datos de un formulario, descargar una imagen, etc.

Una buena regla informal es considerar el acceso a un recurso que se pueda realizar mediante una solicitud GET mientras que el envió de datos se puede realizar a través de una solicitud post.

---

## **IMPORTANTE**

**GET:** Usarlo para OBTENER datos del servidor, como al usar un campo de búsqueda. No usarlo para modificar la base de datos o contraseñas.

**POST:** Usarlo para PUBLICAR datos en el servidor, como al crear un nuevo usuario o comentario a tu web que se grabará en una base de datos. Inicios de sesión.

**"¿No sería mejor usar siempre POST?"**

No, porque GET es más eficiente ya que los navegadores lo guardan en caché el resultado de GET, de forma que si se vuelve a realizar las misma solicitud GET, se ejecutará más rápido. Contrario al POST, que siempre obtendrá respuesta del servidor aunque no haya sido modificado.

"Yo veo que todos mis colegas usan siempre POST ¿Alguna empresa importante usa GET?"

Sí, google, YouTube y Facebook, por ejemplo. En sus campos de búsqueda, hacen GET. Inténtalo tu mismo en una búsqueda y verás que la URL contiene la palabra clave que usaste. Tus colegas no son buenos programando eficientemente.

---

<br>

---

---

<br>
<br>

---

## **ESENCIAL**

---

<br>
Una aplicación web se basa sobre la base cliente o parte front-end, cuyos idiomas principales son: HTML, CSS y JavaScript.

También se basa en una parte del servidor o back-end.

Hoy hay muchos idiomas para implementar las partes de back-end de las aplicaciones web.

Uno de los idiomas más extendidos es PHP.

**Por lo tanto, llevar a cabo una aplicación web implica:**

- Crear paginas web estáticas, estas no cambian nunca;

- Crear hojas de estilo CSS que definen el sitio en si (su estilo).

- Crear programas lado cliente en JavaScript que permitan la interacción directa con el usuario.

- Crear programas en lado servidor, como PHP, Para crear paginas dinámicas en función del usuario.

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **PHP es un lenguaje muy usado para generar paginas web dinámicas.**

- **HTML y PHP pueden estar en el mismo archivo: el código, HTML forma el esqueleto y el código PHP proporciona el contenido**

- **Los parámetros de las solicitudes HTTP son accesibles desde PHP.**

<br>

---

---
