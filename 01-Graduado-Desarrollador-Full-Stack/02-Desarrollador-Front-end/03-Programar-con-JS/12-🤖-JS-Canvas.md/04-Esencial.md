# Esencial: CANVAS, Aspectos Esenciales del Uso de Canvas en Programación
En el contexto de nuestro curso, hemos explorado el uso de Canvas, un elemento HTML que nos permite crear gráficos, imágenes y animaciones utilizando JavaScript. Canvas ofrece una gran flexibilidad y nos permite manipular el contenido y el comportamiento del lienzo a través de diversas técnicas y métodos de JavaScript.

## Obtención del Contexto de Renderizado
Uno de los primeros pasos para trabajar con Canvas es obtener el contexto de renderizado del mismo utilizando el método `getContext()`. Este método se utiliza para especificar si queremos trabajar en 2D con el contexto "2d" o en 3D con el contexto "webgl". Una vez que hemos obtenido el contexto de renderizado, podemos empezar a dibujar en el lienzo.

## Métodos para Dibujar Formas Básicas
Por ejemplo, podemos usar el método `fillRect(x, y, ancho, alto)` para dibujar un rectángulo relleno en el lienzo, especificando las coordenadas x y y de la esquina superior izquierda del rectángulo, así como su ancho y alto. Otra técnica útil es `strokeRect(x, y, ancho, alto)`, que sólo dibuja el contorno de un rectángulo sin rellenarlo. Para borrar una sección específica del lienzo, podemos emplear el método `clearRect(x, y, ancho, alto)`.

## Otras Posibilidades con Canvas
Usando estos métodos, podemos crear formas simples en el lienzo. Sin embargo, Canvas ofrece muchas más posibilidades, como el dibujo de curvas, líneas, textos, imágenes e incluso animaciones. Al combinar diferentes métodos de dibujo y manipular las propiedades del lienzo, podemos crear experiencias interactivas y visualmente atractivas.