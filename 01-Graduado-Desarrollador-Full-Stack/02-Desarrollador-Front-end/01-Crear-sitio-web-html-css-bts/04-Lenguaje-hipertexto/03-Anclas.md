# **Las anclas**

<br>

## **_Objetivos:_**

- Saber usar enlaces internos a la pagina en la que nos encontramos

---

---

<br>

---

## **Contexto**

---

<br>

Las anclas son enlaces que apuntan a elementos internos de la página.

Se utilizan en particular para navegar rápidamente de una sección de la página a otra.

<br>

---

---

<br>
<br>

---

## **Referenciar un elemento interno a la pagina id=#**

---

<br>

Es posible hacer referencia a un elemento situado en la página: para ello, utilizamos los enlaces internos, también llamados anclas.

Un enlace interno es un enlace, por lo que debemos usar la etiqueta `<a>`.

Este debe direccionar a un elemento de la página que tenga un identificador, es decir, un atributo id="", y utilizar un signo de numeral (#) para hacer referencia a este identificador: href="#identificador-de-mi-elemento".

En cuanto al estilo, estos enlaces se presentan de la misma manera que los enlaces externos: en azul y subrayados, con un cambio de cursor al pasar el mouse sobre ellos.

<br>

---

**EJEMPLO: Ir a la pagina de 02-Enlaces-hypertexto**

<br>

Vamos a añadir un ancla.

Para ello, primero debemos añadir un identificador (atributo id="") a la primera etiqueta `<br>` que esta en la pagina "02-Enlaces-hypertexto.md".

Una vez dentro de 02-Enlaces-hypertexto.md ponemos en el primer `<br>`, el atributo siguiente: id="Enlaces-hypertexto":

`<br id="Enlaces-hypertexto">`


Ahora vayamos a crear el enlace que nos redireccione a esa pagina:

1. primero, creamos el ancla enlace `<a>Ir a la pagina interna de 02-Enlaces-hypertexto</a>`

2. segundo, le añadimos el atributo (href="")

3. tercero, le indicamos el camino relativo a redireccionar, en este caso es una pagina que se encuentra en la misma carpeta que esta pagina que estas leyendo, con lo cual en el camino relativo indicamos que nos salimos de la carpeta que nos contiene con punto punto barra (../), después le indicamos la carpeta que nos contiene que es 04-Lenguaje-hipertexto, y después seguimos con el archivo que contiene esa secciones a la que queremos llegar, 02-Enlaces-hypertexto.md, y ahora si le indicamos el `<br>` que contiene nuestro ID # con lo cual quedaría asi!:

```html
<a href="../04-Lenguaje-hipertexto/02-Enlaces-hypertexto.md/#Enlaces-hypertexto">Ir a la pagina interna de 02-Enlaces-hypertexto</a>
```

[Ir a la pagina interna de 02-Enlaces-hypertexto](./02-Enlaces-hypertexto.md/#Enlaces-hypertexto)

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Una ancla es un enlace que redirige al usuario a un elemento de la página. Apunta al identificador de un elemento y no a una URL.**

<br>

---

---
