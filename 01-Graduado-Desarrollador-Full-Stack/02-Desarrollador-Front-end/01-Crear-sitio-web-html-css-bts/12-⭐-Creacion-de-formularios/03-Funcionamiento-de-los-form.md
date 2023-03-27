# **Funcionamiento de los formularios**

<br>

## **_Objetivos:_**

- Saber declarar un formulario en HTML con la etiqueta form y sus atributos

---

---

<br>

---

## **Contexto**

---

<br>

Vamos a ver ahora como funcionan los formularios y como integrarlos en una pagina.

<br>

---

---

<br>
<br>

---

## **Formulario (form)**

---

<br>

Para integrar un formulario en una página, es necesario abrir una etiqueta `<form>` y asociar dos atributos que serán necesarios para la implementación de interacciones:

- **method=""**

- **action=""**

<br>

---

---

<br>
<br>

---

## **Method**

---

<br>

El atributo method="" acepta dos posibles propiedades:

- **get (por defecto, si no se especifica, se considerará que su valor es get)**

- **o post.**

Estos son métodos HTTP y su función es dar al formulario indicaciones sobre cómo transmitir los datos.

- **get: los datos se transmitirán en la URL.**
  Las URL tienen un límite de tamaño, por lo que la cantidad de datos enviados está limitada. Las URL se transmiten en claro en el navegador, por lo que los datos enviados son públicos.

- **post: los datos se agregarán al cuerpo del mensaje de la solicitud.**
  Esto permite transmitir datos de manera más segura. Este método debe usarse especialmente si está tratando información sensible.

<br>

---

---

<br>
<br>

---

## **Action**

---

<br>

El atributo action="" determina la dirección del programa encargado de procesar los datos, que se ejecutará en el servidor una vez que se envíe el formulario.

<br>

---

---

<br>
<br>

---

## **Declarar un formulario**

---

<br>

---

**EJEMPLO: Syntaxis**

```html
<form method="verbe HTTP" action="script de proceso">...</form>
```

Este formulario no trae todavía un campo de texto, ya que se trata de un esqueleto.

<br>

---

---

<br>
<br>

---

## **Formulario de contacto**

---

<br>

---

**EJEMPLO: Syntaxis**

Para crear un formulario de contacto:

- **se elige el método post,**
- **luego se informa al servidor que el script de procesamiento del formulario se tratará en un archivo titulado contact.php.**

```html
<form class="form-horizontal" method="post" action="contact.php">...</form>
```

<br>

---

---

<br>
<br>

---

## **A recordar**

---

<br>

- **Para declarar un formulario, utiliza la etiqueta `<form>` y asóciala con dos atributos: method="" y action="".**

- **El atributo method="" contendrá el verbo HTTP que determina la forma en que se enviarán los datos.**

- **El atributo action="" permite indicar la dirección del script encargado de procesar los datos una vez que se envíe el formulario.**

<br>

---

---
