# Esencial
## Introducción a D3.js

D3.js es una biblioteca JavaScript popular utilizada para la manipulación y visualización de datos en la web. Ofrece numerosas ventajas, incluyendo su flexibilidad y potencia, lo que la hace una herramienta ideal para crear gráficos interactivos y visualizaciones de datos dinámicas.

## Inicialización del Espacio de Dibujo

Para comenzar a trabajar con D3.js, primero debemos inicializar el espacio de dibujo. Esto se puede lograr creando un elemento SVG (Scalable Vector Graphics) en el DOM con el método `select()` para seleccionar el `<body>` y `append()` para agregar el `<svg>`, y especificando su ancho, altura y márgenes con el método `attr()`. El elemento SVG sirve como contenedor para la creación de gráficos y mapas.

## Añadiendo Datos al Gráfico

Una vez que el espacio de dibujo está listo, podemos agregar nuestros datos al gráfico con el método `data()`, lo que tiene el efecto de crear una lista de datos y asignarles elementos vacíos. El método `enter()` es generalmente utilizado para recuperar la lista de elementos vacíos y colocar los elementos con el método `append()`.

## Escalado de Datos

Para mostrar los datos correctamente, necesitamos escalarlos de acuerdo al espacio de dibujo disponible. D3.js proporciona métodos para calcular automáticamente las escalas basadas en los valores de los datos, como los métodos `scaleLinear()` o `scaleBand()` por ejemplo. Una vez que las escalas están definidas, podemos agregar ejes para representar los valores en los ejes X y Y del gráfico. D3.js ofrece 4 métodos para la creación de ejes, y solo varían en la orientación del eje, como `axisBottom()` para un eje dirigido hacia abajo.