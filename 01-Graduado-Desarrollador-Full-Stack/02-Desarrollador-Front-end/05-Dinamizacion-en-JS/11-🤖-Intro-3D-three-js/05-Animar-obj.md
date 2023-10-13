# Animar objetos

## Objetivos

- Comprender el concepto de render loop
- Animar un objeto 3D

## Contexto

Renderizar una imagen simple está bien, pero animar en tiempo real los diferentes objetos 3D presentes en la escena es aún mejor. En esta parte, veremos cómo realizar animaciones simples, como cambiar la posición de un objeto y cómo hacerlo girar sobre sí mismo.

## La render loop

Para que los objetos estén animados, no bastará con generar una sola imagen, como hasta ahora, sino una sucesión de imágenes. De hecho, un vídeo no es más que un conjunto de imágenes mostradas muy rápidamente (llamadas frames), lo que tiene el efecto de dar la ilusión de movimiento. Para crear una animación, habrá que renderizar la escena en un bucle. Sin embargo, un simple bucle no es suficiente: también hay que asegurarse de que cada imagen se renderice a un intervalo constante, si no las animaciones no serán fluidas.

## Método

Para crear una render loop, hay que usar una función recursiva, es decir, una función que se llamará a sí misma. Los navegadores disponen de forma nativa de herramientas para gestionar las render loop, y una de ellas es la función requestAnimationFrame. Esta función toma como parámetro una función a llamar en cada frame de nuestra animación: es ella la que va a mover los objetos, luego hacer el renderizado de la escena antes de esperar el siguiente frame (llamando a requestAnimationFrame). Para mover un objeto, hay que cambiar ligeramente la propiedad deseada (position, rotation...) en cada vuelta del bucle.

```javascript
const animate = function () {
  // Modificación de los atributos de los objetos (position, rotation...)
  // ...
  // Renderizado del frame
  renderer.render(scene, camera);
  // Espera del siguiente frame. La función animate será llamada por la función requestAnimationFrame
  requestAnimationFrame(animate);
  // Se espera el siguiente frame
};
// Se llama una primera vez a la función para entrar en el bucle
animate();
```

Atención: Los métodos de rotación toman como parámetros radianes. Para convertir grados en radianes, hay que realizar el siguiente cálculo: grados * Math.PI / 180.

## Ejemplo

Aquí está el código que permite crear una escena a pantalla completa con un cono que vuela por el aire girando:

```html
<!DOCTYPE html>
<html>
<head>
<style>
body { margin: 0; }
canvas { display: block; }
</style>
</head>
<body>
<script type="module">
import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';

// Creación de la escena, de la cámara y del renderer
let scene = new THREE.Scene();⁷[7]
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);⁸[8]
camera.position.z = 4;
let renderer = new THREE.WebGLRenderer();⁹[9]
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creación del cono
let coneGeometry = new THREE.ConeGeometry(1, 2, 16);[^10^][10]
let coneMaterial = new THREE.MeshStandardMaterial({color: 0xFFFF00});¹¹[11]
let cone = new THREE.Mesh(coneGeometry, coneMaterial);[^10^][10]¹²[12]
scene.add(cone);

// Luz
let light = new THREE.PointLight(0xFFFFFF, 1, 50);
light.position.set(0, 0, 3);
scene.add(light);

// Color del fondo de la escena
renderer.setClearColor(0xFFFFFF);

const animate = function () {
  // Desplazamiento del cubo sobre el eje y
  cone.position.y += 0.01;
  // Rotación del cubo sobre el eje y
  cone.rotation.y += 0.01;
  // Renderizado del frame
  renderer.render(scene, camera);⁵[5]
  // Espera del siguiente frame
  requestAnimationFrame(animate);
};
// Se llama una primera vez a la función para entrar en el bucle
animate();
</script>
</body>
</html>
```

## Animar los objetos

Las propiedades position y rotation de los Mesh permiten mover un objeto sobre un eje de la escena. Sin embargo, el objeto Mesh también tiene métodos que permiten realizar movimientos basados en los ejes locales del objeto, que dependen de la rotación de este último. Para desplazar un Mesh sobre un eje local, se puede usar los métodos translateX, translateY y translateZ, que toman como parámetro la distancia a recorrer. También es posible mover el objeto sobre un eje personalizado gracias al método translateOnAxis, que toma como parámetros un objeto Vector3, con propiedades x, y y z que indican el eje a seguir, y una distancia. Para hacer girar un objeto sobre un eje local, se puede usar rotateX, rotateY o rotateZ, que toman como parámetro el ángulo de rotación deseado, en radianes. rotateOnAxis también permite hacer girar el objeto según cualquier eje.

### Ejemplo

Esta función permite hacer volar el cono del ejemplo anterior mientras lo hace girar sobre sí mismo. Como el objeto no tiene una rotación de base, la animación es equivalente a la anterior.

```javascript
const animate = function () {
  // Desplazamiento y rotación del cubo sobre el eje y
  cone.translateY(0.01);
  cone.rotateY(0.01);
  // Renderizado del frame
  renderer.render(scene, camera);
  // Espera del siguiente frame
  requestAnimationFrame(animate);
};
```

Sin embargo, al añadir cone.rotation.x = 90 * Math.PI / 180; al momento de inicializar el objeto, para que esté girado hacia la cámara, las dos animaciones serán diferentes: el primer ejemplo sigue haciendo subir el objeto (eje Y de la escena), mientras que el segundo hace avanzar el cubo hacia la cámara (eje Y del objeto, después de la rotación).

## Eliminar objetos de la escena

Ahora que nuestros objetos pueden moverse, es posible que algunos salgan del marco y ya no sean visibles. Sin embargo, aunque estén fuera de campo, estos objetos siguen utilizando recursos. Por lo tanto, es preferible eliminarlos usando el método remove del objeto Scene. La lista de objetos de la escena es accesible desde la propiedad children.

## Ejemplo

Cuando el cono está por encima de un cierto límite, se elimina:

```javascript
const animate = function () {
  // Si el cono está en la escena...
  if (scene.children.includes(cone)) {
    // Desplazamiento y rotación del cubo sobre el eje y
    cone.translateY(0.01);
    cone.rotateY(0.01);
    if (cone.position.y > 3) {
      scene.remove(cone); // Se elimina el cono
    }
  }
  // Renderizado del frame
  renderer.render(scene, camera);
  // Espera del siguiente frame
  requestAnimationFrame(animate);
};
```

## Atención

Es más eficiente cambiar la posición de un objeto que eliminarlo y luego recrearlo. Si un objeto se utiliza varias veces, es mejor moverlo fuera del campo hasta que se vuelva a utilizar.

## A recordar

- Una animación está compuesta por varios frames, es decir, imágenes mostradas sucesivamente, lo suficientemente rápido como para dar una impresión de movimiento.
- Cada frame se genera en una render loop, es decir, un bucle que se encarga de mover los objetos y calcular la siguiente imagen.
- Para manipular objetos 3D, el objeto Mesh dispone de numerosos métodos, como translateX o rotateX.
- Para eliminar un objeto de la escena, hay que usar el método remove.

## Complemento

- **[El objeto Object3D, padre de los Mesh](https://threejs.org/docs/#api/en/core/Object3D)**