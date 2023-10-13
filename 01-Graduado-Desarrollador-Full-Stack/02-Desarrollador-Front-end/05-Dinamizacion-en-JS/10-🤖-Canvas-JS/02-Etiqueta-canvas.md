# Usar la etiqueta `<canvas>`
## Objetivos
- Implementar una etiqueta HTML `<canvas>`
- Inicializar un canvas con la API Canvas

## Contexto
El elemento `<canvas>` permite dibujar elementos gráficos usando scripts. Este elemento también puede recibir cualquier tipo de medio (svg, imagen, vídeo). Veremos en este curso cómo implementar un canvas y las posibilidades que ofrece este elemento.

## La etiqueta `<canvas>`
La etiqueta canvas es una etiqueta HTML que tiene dos atributos, width y height . Su tamaño se puede modificar mediante CSS, pero la imagen se mostrará según el tamaño de los atributos, y luego se transformará. Este método no es recomendable, porque puede distorsionar la imagen. También hay que tener en cuenta que algunos navegadores antiguos no soportan el elemento canvas (Internet Explorer 9, por ejemplo). En ese caso, se puede implementar un contenido alternativo insertando texto o una imagen entre las etiquetas.

### Ejemplo:

```html
<div>
  <canvas id="myFirstCanvas" width="200" height="200">
    // contenido alternativo
    este texto se muestra para los navegadores que no soportan canvas
  </canvas>
</div>
```

## La API Canvas
Para inicializar un contenido, hay que usar la API Canvas . A través de esta API, podremos inicializar uno o varios contextos de renderizado, que podrán ser en dos o tres dimensiones. El tipo de contexto será el parámetro del método getContext() .

### Ejemplo:

```javascript
// elemento html canvas
const canvas = document.getElementById('myFirstCanvas');
// inicialización del contexto
const ctx = canvas.getContext('2d');
```

## Nota

>En el caso de que el canvas no sea soportado por el navegador, este código JavaScript devolvería un error. Si queremos tener retrocompatibilidad, es mejor usar este código para inicializar el canvas.

```javascript
const canvas = document.getElementById('myFirstCanvas');
let ctx;
if (canvas.getContext) {
  ctx = canvas.getContext('2d');
} else {
  // código para los navegadores antiguos
}
```

## A recordar
- La etiqueta canvas acepta dos atributos, width y height . El tamaño de la imagen se definirá en función del ancho y el alto fijados.
- Para inicializar un canvas, hay que vincular la etiqueta HTML a un script JavaScript.