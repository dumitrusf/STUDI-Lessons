# **Lenguaje servidor**

<br>

## **_Objetivos:_**

- Entender la diferencia entre sitio estático y sitio dinámico;

- Descubre métodos para generar páginas web de forma dinámica.

---

---

<br>

---

## **Contexto**

---

<br>

Algunas páginas web evolucionan con mucha regularidad: sitios de noticias, cuentas bancarias, resultados de búsqueda, catálogo de productos, etc.

La información que presentan depende de datos que son modificados por otros usuarios en tiempo real. Se dice que estas páginas HTML son dinámicas. De hecho, no existen como un archivo HTML en un servidor web, se construyen con cada solicitud de un usuario en el servidor.

La construcción de estas páginas la realiza un programa que se ejecuta en el servidor.

Hoy en día existen varios lenguajes para hacer esto, como PHP, Java o Python, e incluso JavaScript (puede usarse tanto del lado del cliente como del lado del servidor).

Por ejemplo: cuando solicitas una página con información sobre el estado de tu cuenta bancaria, en realidad estás dando la orden de ejecutar un programa en el servidor.

Este programa consultará la base de datos que contiene su información bancaria y producirá una página HTML que se devolverá a su navegador.

---

---

<br>
<br>

---

## **Sitios web Dinámicos**

---

<br>

```

Un sitio web dinámico es un sitio cuyas páginas varían según el tiempo y el contexto, sin modificación de los archivos de código.

Las páginas de un sitio dinámico se generan "sobre la marcha" en el servidor en el momento en que un cliente solicita verlas.

```

---

<br>

### **_Motor de Búsqueda_ EJEMPLO**

<br>

Sí no existieran las páginas dinámicas, un motor de búsqueda tendría que crear un archivo HTML para todas las búsquedas posibles de google y actualizar regularmente el contenido de estas páginas.

Es obvio que esto es imposible.

La solución encontrada es mantener el mismo esqueleto (una página de resultados de búsqueda con php por ejemplo), pero recuperar dinámicamente el contenido de una base de datos.

Así, se utiliza un solo archivo y la gestión es mucho más sencilla.

<br>

---

<br>

### **_Página de inicio de un blog_ EJEMPLO**

<br>

Un blog es bastante repetitivo: es una serie de artículos.

Un sitio estático requeriría copiar manualmente todos los bloques HTML para mostrar un resumen del artículo tantas veces como artículos haya.

Un sitio dinámico conoce el esqueleto de un resumen e inyecta el resumen de artículos tantas veces como artículos haya de forma automatizada, en el momento de la generación.

<br>

---

---

<br>
<br>

---

## **Lenguajes de programación del lado del servidor**

---

<br>
HTML es un lenguaje descriptivo: te permite estructurar un documento pero no permite la ejecución de instrucciones.

Para dar dinamismo a una página, es necesario ejecutar instrucciones (recuperación de datos, envío de correo, solicitudes a otras aplicaciones, etc.).

Los lenguajes de programación del lado del servidor abordan este problema: construyen la página solicitada, que el servidor web devolverá al cliente.

<br>

**_Cuidado Código escondido_**

El código utilizado para generar las páginas dinámicas no es accesible para el cliente, él solo ve el resultado final.

<br>

---

---

<br>

---

## **_Un ecosistema proporcionado_**

---

<br>

Cada lenguaje de programación del lado del servidor tiene sus especificidades y se elegirá de acuerdo con las necesidades del sitio web.

Cada lenguaje está asociado a un gran número de librerías de software, que gestionan funcionalidades comunes.

Algunos de los lenguajes del lado del servidor más populares son:

- Python

- PHP

- JAVA

<br>

---

**PHP _Ejemplo_**

PHP tiene la particularidad de poder integrarse directamente en el código HTML, que puede interpretarse como el esqueleto de la página.

El siguiente código muestra un número aleatorio cada vez que se carga la página.

<br>

```html

  <html>

  <head>

    <title>Génération d'un nombre aléatoire entre 1 et 10</title>

  </head>

  <body>

    <?php echo '<p>' . rand(1, 10) . '</p>'; ?>

  </body>

  </html>

```

El código HTML recibido por el cliente durante una carga podría ser, por ejemplo:

```html
<html>
  <head>
    <title>Génération d'un nombre aléatoire</title>
  </head>

  <body>
    <p>5</p>
  </body>
</html>
```

Vemos que es código HTML simple, sin referencia a PHP.

<br>

---

---

<br>
<br>

---

## **La punta del iceberg**

---

La generación de páginas dinámicas es solo un aspecto de la programación del lado del servidor.

Permiten realizar los procesos necesarios para el funcionamiento de muchos sitios:

- Verificación de la información de inicio de sesión (usuario, contraseña),

- Procesamiento de una orden de compra,

- Registro de preferencias,

- etc.

<br>

---

---

<br>

<br>

---

## **A Recordar**

---

<br>

- **Los sitios dinámicos son sitios cuyas páginas cambian con frecuencia.**

- **Los lenguajes de programación del lado del servidor se utilizan para generar páginas web. (como PHP).**

- **El cliente recibe solo páginas web clásicas y no tiene acceso al código de generación.**

<br>

---

---
