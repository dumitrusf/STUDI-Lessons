# Añadir texto e imágenes

## Objetivos

- Añadir texto
- Añadir imágenes

## ContextoSituación

La etiqueta canvas también permite mostrar texto e imágenes. Un ejemplo muy concreto de esta aplicación es el logo de perfil en un círculo. Cuando estamos conectados en un sitio, si tenemos una foto de perfil, el círculo muestra la foto; si no, el círculo muestra nuestras iniciales.

## Añadir texto

En el capítulo anterior, ya hemos integrado un texto para ilustrar las sombras. Aquí, vamos a ver más en profundidad las diferentes propiedades y cómo aplicarlas. El texto de un canvas tiene 4 propiedades:

- font: define el tamaño y el estilo del texto.
- textAlign: define la alineación horizontal del texto con respecto a las coordenadas del mismo. Acepta 5 valores: start, end, left, right, center.
- textBaseline: define la alineación de base del texto. Acepta top, middle, alphabetic, ideographic, bottom.
- direction: dirección del texto. Tiene dos valores posibles: ltr (de izquierda a derecha) o rtl (de derecha a izquierda).

## Centrar un texto

Para centrar el texto, sea cual sea el tamaño del canvas, hay que recuperar los valores de los atributos width y height. La posición x del texto será width / 2 y la posición y será height / 2. Para ello disponemos del método getAttribute(), que devuelve el valor de un atributo dado del elemento especificado. Si el atributo no existe, el valor devuelto será null o "" (una cadena vacía). Habrá que asignar center a la propiedad textAlign, y middle a la propiedad textBaseline.

### Ejemplo

Un texto centrado

```javascript
const canvas = document.getElementById('myFirstCanvas');
let ctx;
if (canvas.getContext) {
  // Ajuste del tamaño del canvas. Hay que poder centrar el texto sea cual sea el tamaño del canvas
  // Aquí el canvas será siempre un cuadrado, el tamaño de la altura será siempre igual al de la anchura.
  // Recuperamos el valor del atributo width
  let sizeCanvas = canvas.getAttribute('width');
  // Si el atributo no existe entonces el valor por defecto será 150
  sizeCanvas = sizeCanvas === '0' || sizeCanvas === null ? 150 : sizeCanvas;
  // Asignamos estos valores a los atributos del elemento HTML
  canvas.setAttribute('height', sizeCanvas);
  canvas.setAttribute('width', sizeCanvas);
  // Tamaño del texto en función del tamaño del canvas
  const sizeText = sizeCanvas / 3;
  ctx = canvas.getContext('2d');
  // Configuración del texto
  ctx.fillStyle = 'red';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `${sizeText}px Arial`;
  // Ajustamos la posición del texto en función del tamaño del canvas
  ctx.fillText('JD', sizeCanvas / 2, sizeCanvas / 2);
}
```

## Insertar imágenes

Ahora vamos a ver cómo gestionar las imágenes con los canvas. Para insertar una imagen en un canvas, hay que conseguir una referencia a esa imagen. Generalmente, usaremos el constructor new Image() para crear un nuevo objeto HTMLImageElement y luego la propiedad src para indicar la ruta de la imagen que queremos insertar. Es funcionalmente equivalente a document.createElement('img'). Las imágenes pueden tardar un tiempo en cargarse, por eso la adición de imágenes dentro de un canvas requiere una función de evento, load(). La integración de la imagen se hace mediante el método drawImage(img, x, y width, height) y el canvas debe ser inicializado en el callback del método load(). De hecho, si el canvas se carga antes que la imagen, no podrá mostrarla.

### Ejemplo

Dos métodos de integración de imagen

Carga de una función vía el evento onload en el HTML:

```html
<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Titulo de la página</title>
    <link rel="stylesheet" href="style.css">
</head>
<body onload="drawCanvas()">
    <canvas id="myFirstCanvas"></canvas>
</body>
<script>
    function drawCanvas() {
        const img = new Image();
        let sizeCanvas = canvas.getAttribute('width');
        sizeCanvas = sizeCanvas === '0' || sizeCanvas === null ? 150 : sizeCanvas;
        canvas.setAttribute('height', sizeCanvas);
        canvas.setAttribute('width', sizeCanvas);
        img.onload = () => {
            const newWidth = img.width * sizeCanvas / img.height; // mantiene las proporciones de la imagen.
            ctx.drawImage(img, 0, 0, newWidth, sizeCanvas);
            ctx.fillRect(0, 0, sizeCanvas, sizeCanvas);
        };
        img.src = 'myImage';
    }
</script>
</html>
```

Vía el método addEventListener():

```html
<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Titulo de la página</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <canvas id="myFirstCanvas"></canvas>
</body>
<script>
    const img = new Image();
    let sizeCanvas = canvas.getAttribute('width');
    sizeCanvas = sizeCanvas === '0' || sizeCanvas === null ? 150 : sizeCanvas;
    canvas.setAttribute('height', sizeCanvas);
    canvas.setAttribute('width', sizeCanvas);
    img.addEventListener('load', () => {
        const newWidth = img.width * sizeCanvas / img.height;
        ctx.drawImage(img, 0, 0, newWidth, sizeCanvas);
        ctx.rectfill(0, 0, sizeCanvas, sizeCanvas);
    });
    img.src = 'myImage';
</script>
</html>
```

## Nota: Contener una imagen en un canvas

Para crear un distintivo que contenga una imagen, hay que limitar la imagen al marco de nuestro canvas. Para ello, existe el método globalCompositeOperation() que se llama antes y después de crear el círculo. Este método puede tomar diferentes valores. Cuatro se aplican con respecto al contenido que vamos a crear (fuente):

- source-over (coloca la fuente encima).
- source-in (sólo se muestra la fuente que se superpone a lo que ya está dibujado).
- source-out (sólo se muestra la fuente que no se superpone a lo que ya está dibujado).
- source-atop (se muestra la parte de la fuente que se superpone a lo que ya está dibujado).

Otros cuatro se aplican con respecto a los dibujos que ya se han hecho (destino):

- destination-over (el destino está encima del nuevo objeto).
- destination-in (el destino se muestra debajo del nuevo objeto).
- destination-out (sólo se muestra el destino que no está superpuesto por el nuevo objeto).
- destination-atop (se muestra la parte del destino que se superpone al nuevo objeto).

```html
<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Titulo de la página</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <canvas id="myFirstCanvas"></canvas>
</body>
<script>
    const canvas = document.getElementById('myFirstCanvas');
    let sizeCanvas = canvas.getAttribute('width');
    sizeCanvas === '0' || sizeCanvas === null ? sizeCanvas = 150 : sizeCanvas;
    canvas.setAttribute('height', sizeCanvas);
    canvas.setAttribute('width', sizeCanvas);
    let ctx;
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        const img = new Image();
        img.addEventListener('load', () => {
            const newWidth = img.width * sizeCanvas / img.height;
            ctx.drawImage(img, 0, 0, newWidth, sizeCanvas);
            ctx.globalCompositeOperation = 'destination-in';
            ctx.beginPath();
            ctx.arc(sizeCanvas / 2, sizeCanvas / 2, sizeCanvas / 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
        });
        img.src = "myImage";
    }
</script>
</html>
```

## A recordar

- La adición de texto e imágenes es relativamente simple, pero requerirá a menudo algoritmos de cálculo para definir las posiciones de los elementos, sea cual sea el tamaño del canvas.