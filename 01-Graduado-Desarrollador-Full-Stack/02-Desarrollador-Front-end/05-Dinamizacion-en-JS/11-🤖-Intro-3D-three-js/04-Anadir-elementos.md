# Introducción a la 3D en JavaScript: three.js

## Objetivos

- Crear objetos 3D
- Añadir elementos a la escena
- Iluminar la escena

## Situación

Por el momento, la cámara no tiene nada que filmar, ya que la escena está vacía. En esta parte, veremos cómo crear objetos 3D y añadirlos a la escena, así como la gestión de la iluminación.

## Definición: Geometry

La librería three.js dispone de numerosas formas tridimensionales básicas: cubos (`BoxGeometry`), cilindros (`CylinderGeometry`), esferas (`SphereGeometry`), conos (`ConeGeometry`)... Todos estos elementos son objetos de tipo `Geometry`, que representan un conjunto de puntos en el espacio. Estos puntos serán luego conectados entre ellos para crear las caras del objeto final.

### Ejemplo

Para crear un objeto en forma de caja, hay que instanciar una `BoxGeometry`. Por defecto, la forma es un cubo de tamaño 1, pero el constructor permite definir su anchura, altura y profundidad:

```javascript
// Un rectángulo de 1x2x1
let geometry = new THREE.BoxGeometry(1, 2, 1);
```

Para crear una esfera, hay que instanciar una `SphereGeometry`, que toma un mínimo de tres parámetros: el radio de la esfera y el número de segmentos horizontales y verticales. Cuanto mayor sea el número de segmentos, más triángulos compondrán la esfera, lo que tendrá como efecto darle una forma más redondeada. Sin embargo, hay que tener cuidado, ya que un número demasiado alto de triángulos puede afectar al rendimiento de la escena.

```javascript
// Una esfera de un radio de 2, compuesta de 16 segmentos horizontales y verticales
let geometry = new THREE.SphereGeometry(2, 16, 16);
```

## Consejo

La parte "Geometry" de la documentación, en el menú de la izquierda, recoge todas las geometrías utilizables. La página de cada geometría permite encontrar los parámetros de su constructor y también dispone de una demostración interactiva que permite modificar en directo cada parámetro para visualizar su resultado.

## Definición: Material

Un conjunto de puntos no es suficiente para crear un objeto 3D. De hecho, un renderer necesita saber cómo deben verse las caras del objeto: su color, pero también su textura, la reacción que tienen cuando la luz las golpea (reflexión y refracción), etc. Todas estas informaciones están contenidas en un objeto de tipo `Material`, que hay que aplicar al objeto. Three.js posee varios `Material` básicos, como el `MeshBasicMaterial`, que no está afectado por la luz; el `MeshStandardMaterial`, que permite crear objetos más realistas y afectados por la luz; o el `MeshToonMaterial`, que permite dar un efecto "cartoon", con sombras con un número limitado de graduaciones.

Para crear un `Material`, basta con instanciar la clase correspondiente. El constructor de cada `Material` puede recibir un objeto que permite configurarlo. Las propiedades dependen del tipo de `Material` creado.

### Ejemplo

Para crear un `MeshStandardMaterial`, hay que usar el siguiente código:

```javascript
let material = new THREE.MeshStandardMaterial();
```

Es posible indicar algunos parámetros, como la rugosidad, que permite tener objetos más o menos reflectantes:

```javascript
let material = new THREE.MeshStandardMaterial({
    roughness: 0.3,
});
```

## Consejo

Como para las `Geometry`, la parte `Material` presenta todos los materiales posibles, con una demostración interactiva que permite entender mejor el efecto de los diferentes parámetros:

## Método: Mesh

Un conjunto de `Geometry` y `Material` se llama `Mesh`. Así, para aplicar un material a un conjunto de puntos, habrá que crear un objeto `Mesh` cuyo constructor tomará estos dos elementos como parámetros. El `Mesh` es el elemento que se añadirá a la escena al final, gracias al método `add` del objeto `Scene`. Los objetos deben ser añadidos a la escena antes del renderizado de la imagen final, si no, no aparecerán en ella. Por defecto, el `Mesh` se añade a la posición (0, 0, 0), pero es posible modificar su ubicación gracias a su propiedad `position`. El método `set` permite definir nuevas coordenadas, pero también se puede modificar independientemente las propiedades `x`, `y` y `z`.

### Ejemplo

El siguiente código permite crear una caja de 1x2x1, aplicarle un material básico que no está afectado por la luz, crear un `Mesh` en la posición (-2, 0, -3) y añadirlo a la escena:

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<canvas width="200" height="200" id="canvas"></canvas>
<script type="module">
import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';

// Creación de la escena, de la cámara y del renderer
let canvasElement = document.getElementById('canvas');
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(70, canvasElement.width / canvasElement.height, 0.1, 1000);²³[23]
camera.position.z = 3;
let renderer = new THREE.WebGLRenderer(
    {
        canvas: canvasElement
    }
);

// Creación del objeto
let geometry = new THREE.BoxGeometry(1, 2, 1);
let material = new THREE.MeshBasicMaterial({color: 0xFF00FF});¹⁷[17]¹⁶[16]
let box = new THREE.Mesh(geometry, material);
box.position.set(-2, 0, -3);
// Añadido del objeto a la escena
scene.add(box);

// Renderizado de la escena
renderer.render(scene, camera);
</script>
</body>
</html>
```

## Método

También es posible añadir un `Mesh` dentro de otro usando el método `add`. En este caso, solo el elemento padre deberá ser añadido a la escena y todos los subobjetos se moverán al mismo tiempo que el objeto padre. Esto permite crear estructuras complejas, compuestas de varias formas, y poder manipularlas fácilmente. Hay que tener en cuenta que, en todos los casos, la posición de un objeto depende de su padre: la posición de los objetos añadidos a la escena se hace con respecto al origen de la escena, mientras que los subobjetos se colocan con respecto a su objeto padre.

### Ejemplo

Añadamos un cono encima de la caja:

```javascript
// Creación de la caja
let boxGeometry = new THREE.BoxGeometry(1, 2, 1);
let material = new THREE.MeshBasicMaterial({color: 0xFF00FF});
let box = new THREE.Mesh(boxGeometry, material);
// Añadido de la caja a la escena
scene.add(box);
// Se coloca la caja en las coordenadas (-2, 0, -3) de la escena
box.position.set(-2, 0, -3);

// Creación del cono
let coneGeometry = new THREE.ConeGeometry(1, 2);
let cone = new THREE.Mesh(coneGeometry, material);
// Se añade el cono a la caja
box.add(cone);
// Se coloca el cono en las coordenadas (0, 2, 0) de la caja.
// Hay que tener en cuenta que aquí se coloca el cono con respecto a la caja y no a la escena.
cone.position.set(0, 2, 0);
```

## Método: Luces

Hasta ahora, solo se ha utilizado el `MeshBasicMaterial` en los ejemplos: los otros mostrarán una pantalla negra. Esto se explica por el hecho de que no hay ninguna fuente de luz en la escena: está sumergida en la oscuridad y el uso de un material que reacciona a la luz haría desaparecer el objeto 3D.

Three.js posee varios tipos de luces que se pueden añadir a la escena, como `AmbientLight`, que ilumina todos los objetos de la escena de manera igual; `SpotLight`, que simula un proyector; o `PointLight`, que difunde luz en todas las direcciones desde un punto, como un sol o una bombilla. Cada luz debe ser añadida a la escena con `add`. También es posible definir el color del fondo (por defecto, negro) gracias al método `setClearColor` del renderer.

## Ejemplo
Retomemos el siguiente ejemplo usando el MeshStandardMaterial, para obtener un resultado más realista. Para ello, también hay que añadir una fuente de luz, como una PointLight: su constructor toma como parámetro un color (aquí, blanco), una intensidad y una distancia límite de efecto. Por cuestión de visibilidad, el color también se cambia por un gris claro:

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<canvas width="200" height="200" id="canvas"></canvas>
<script type="module">
    import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';
    // Creación de la escena, la cámara y el renderer
    let canvasElement = document.getElementById('canvas');
    let scene = new THREE.Scene();²[2]
    let camera = new THREE.PerspectiveCamera(70, canvasElement.width / canvasElement.height, 0.1, 1000);³[3]⁴[4]
    camera.position.z = 3;
    let renderer = new THREE.WebGLRenderer(⁵[5]
        {
            canvas: canvasElement
        }
    );
    // Creación del objeto
    let geometry = new THREE.BoxGeometry(1, 2, 1);⁶[6]⁷[7]
    let material = new THREE.MeshStandardMaterial({color: 0xFF00FF});⁸[8]⁹[9]
    let box = new THREE.Mesh(geometry, material);⁷[7]
    box.position.set(-2, 0, -3);
    // Añadir el objeto a la escena
    scene.add(box);
	
    // Añadir la luz blanca
	  let light = new THREE.PointLight( 0xFFFFFF, 1, 50 );
	  light.position.set(0, 0, 0);
	  scene.add(light);
    // Rendu de la escena
	  renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
</script>
</body>
</html>
```

## A recordar
Para crear un objeto 3D, hay que definir primero su Geometry, luego su Material, para crear un Mesh que se pueda añadir a la escena con el método add.

Para iluminar la escena, también hay que añadir uno o varios objetos Light. También es posible definir el color de fondo con el método setClearColor del renderer.

## Complemento

- **[Un ejemplo de una página de geometría sobre documentación: la esfera](https://threejs.org/docs/#api/en/geometries/SphereGeometry)**

- **[Un ejemplo de un material sobre documentación: el MeshStandardMaterial](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)**
