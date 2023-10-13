# JavaScript en un archivo HTML (inline)

## Objetivo

Aprender a escribir código JavaScript en un archivo HTML

## Contexto

Existen diferentes formas de escribir código JavaScript: directamente en un archivo HTML o en un archivo JavaScript dedicado. Puede ocurrir que necesites codificar directamente JavaScript en un archivo HTML, y eso es lo que vas a aprender en este curso, pero debes saber que es preferible externalizar el código JavaScript en archivos aparte para tener una estructura clara y poder encontrarlo más fácilmente, porque más adelante tendrás un volumen de código cada vez más importante.

## Método

Para poder codificar JavaScript en HTML, hay que incluirlo entre las etiquetas `<script>` y `</script>`.

### Ejemplo

En nuestro archivo `index.html`:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Test Javascript</title>
</head>
<body>
  <script>
    alert('Hello world')
  </script>
</body>
</html>
```

Solo hay que abrir el archivo HTML con tu navegador web Firefox o Chrome para mostrar el mensaje de alerta.

## La etiqueta `<noscript>`

En casos muy raros, puede que el usuario haya desactivado JavaScript (política de seguridad de la empresa, activación manual caso por caso gracias a una extensión de navegador, etc.), la etiqueta `<noscript>` permite mostrar información que solo será visible si JavaScript está desactivado.

### Ejemplo

En nuestro archivo `index.html`:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
</head>
<body>
  <script>
    alert('Hello world')
  </script>
  <noscript>
    <p>Merci d'activer JavaScript afin de pouvoir bénéficier de toutes les fonctionnalités de notre site.</p>
  </noscript>
</body>
</html>
```

## A recordar

Escribe tu JavaScript entre las etiquetas `<script>` y `</script>`.

```html
<script>
  alert('Hello world')
</script>
```

No olvides que es preferible externalizar el código JavaScript en archivos aparte.

La etiqueta `<noscript>` permite mostrar información que solo será visible si JavaScript está desactivado.