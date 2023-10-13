# JavaScript en un archivo dedicado

## Objetivos

- Aprender a escribir código JavaScript en un archivo JavaScript.
- Incluir su archivo JavaScript en un archivo HTML¹[1].

## Situación

Para ejecutar JavaScript en un archivo HTML, deberá escribir el código en un archivo aparte que incluirá luego en su archivo HTML. Esto le permitirá reutilizar este código en todas las páginas donde lo necesite, pero también organizar su código separando las diferentes partes de su sitio web (HTML/CSS/JavaScript)²[2].

## Método

Para ello, vamos a crear dos archivos en la raíz de una misma carpeta:

- El archivo HTML: `index.html`,
- El archivo JavaScript: `main.js`.

Luego, vamos a incluir el archivo `main.js` en nuestro archivo HTML gracias al atributo `src` de la etiqueta `<script>`³[3]. Es en el atributo `src` donde vamos a indicar la ruta hacia nuestro archivo JavaScript.

## Ejemplo

En nuestro archivo `index.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Test Javascript</title>
</head>
<body>
  <script src="main.js"></script>
</body>
</html>
```

En nuestro archivo `main.js`

```javascript
alert('Hello world')
```

Solo queda abrir el archivo HTML con su navegador web Firefox o Chrome para mostrar el mensaje de alerta.

## Sintaxis

### A recordar

- El atributo `src` de la etiqueta `<script>` le permite indicar la ruta hacia su archivo JavaScript.

```html
<script src="main.js"></script>
```

- Escriba su código JavaScript en archivos aparte para poder reutilizarlo y para separar las diferentes partes de su sitio web (HTML/CSS/JavaScript)⁴[4].

# JavaScript en su navegador web Firefox o Chrome

## Objetivo

- Aprender a escribir código JavaScript en un navegador web.

## Situación

Ya sea que quiera probar código JavaScript en una página web o depurarlo, tendrá que usar las herramientas de los navegadores para ello. De hecho, los navegadores web modernos (Firefox, Chrome) ofrecen herramientas que permiten inspeccionar, depurar una página y probar JavaScript⁵[5].

## Método

Estas herramientas son accesibles haciendo clic derecho sobre la página web y luego "Examinar" o "Inspeccionar", o también mediante la tecla "F12" de su teclado.

## Ejemplo

Luego, en la pestaña "Consola", escriba:

```javascript
alert('Hello world')
```

Y valide con la tecla "Entrada" para mostrar el mensaje de alerta.

### A recordar

- Acceda a las herramientas de los navegadores haciendo clic derecho sobre la página web, luego "Examinar" o "Inspeccionar", o también mediante la tecla "F12", y luego escriba su JavaScript en la pestaña "Consola".
- Es posible escribir código en varias líneas pulsando "Shift" + "Entrada" para pasar a la línea⁶[6]. También puede declarar variables. Escribir el nombre de la variable en la consola permite ver su valor⁷[7].
- Se recomienda encarecidamente aprender a usar y dominar estas herramientas, que serán indispensables en su día a día como desarrollador JavaScript.