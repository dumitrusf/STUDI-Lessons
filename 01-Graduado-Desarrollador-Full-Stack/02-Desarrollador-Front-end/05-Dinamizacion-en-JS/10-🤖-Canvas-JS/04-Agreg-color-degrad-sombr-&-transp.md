# Añadir colores, gradientes, sombras y transparencias

## Objetivo

- Añadir elementos de estilo a los lienzos

## Contexto

En este capítulo, vamos a aplicar estilos a nuestras formas: colores, gradientes, transparencias y sombras.

## Los colores

Existen dos métodos para asignar colores: `fillStyle` que se utilizará para el relleno de forma, y `strokeStyle` para la coloración de los trazos. Estos dos métodos aceptan varias nomenclaturas:

```javascript
ctx.fillStyle = 'red';
ctx.fillStyle = '#FF0000';
ctx.fillStyle = 'rgb(255,0,0)';
ctx.fillStyle = 'rgba(255, 0, 0, 1)';
```

Para aplicar un color a un trazo o una forma, hay que declarar el color antes de la forma.

## Ejemplo: Un cuadrado rojo

```javascript
const canvas = document.getElementById('myFirstCanvas');
let ctx;
if (canvas) {
  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 130, 130);
}
```

## Aplicar transparencia

La transparencia es un valor comprendido entre 0 y 1. Cuanto más nos acercamos a 1, más opaco es el resultado. Podemos asignar transparencia a un elemento de dos formas:

- `fillStyle` y `strokeStyle` aceptan la nomenclatura rgba CSS que permite poner el valor de la transparencia en el último elemento de la función. Por ejemplo: `ctx.strokeStyle = 'rgba(255, 0, 0, 1 )';`.
- `globalAlpha` aplica la transparencia especificada a todas las formas futuras. Toma como valor el de la transparencia.

## Ejemplo: Un cuadrado transparente dentro de un cuadrado rojo

```javascript
const canvas = document.getElementById('myFirstCanvas');
let ctx;
if (canvas.getContext) {
  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 130, 130);
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.5;
  ctx.fillRect(60, 60, 30, 30);
}
```

![cuadrado rojo](./04-Agreg-color-degrad-sombr-&-transp/img/carre-color.png)

## Los gradientes:

### Hay dos tipos de gradientes: lineales y radiales.

- Lineal: `createLinearGradient(x1, y1, x2, y2)` con x1, y1 el punto de partida y x2, y2 el punto de llegada
- Radial: `createRadialGradient(x1, y1, r1, x2, y2, r2)` x, y y r representan dos círculos que tienen como centro x, y y de radio r

Podemos asignar colores a los gradientes mediante el método `addColorStop(position, color)`. El parámetro position es un valor comprendido entre 0 y 1 e indica en qué momento el gradiente va a evolucionar.

### Ejemplo: Un cuadrado rojo degradado

```javascript
const canvas = document.getElementById('myFirstCanvas');
let ctx;
if (canvas.getContext) {
  ctx = canvas.getContext('2d');
  const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, 'red');
  lingrad.addColorStop(1, 'white');
  ctx.fillStyle = lingrad;
  ctx.fillRect(10, 10, 130, 130);
}
```

![cuadrado rojo](./04-Agreg-color-degrad-sombr-&-transp/img/degrade.png)

## Las sombras

Las sombras tienen 4 propiedades:

- `shadowOffsetX`: indica la distancia horizontal sobre la que la sombra debe extenderse a partir del objeto.
- `shadowOffsetY`: indica la distancia vertical sobre la que la sombra debe extenderse a partir del objeto.
- `shadowBlur`: tamaño del desenfoque.
- `shadowColor`: color de la sombra.

Aparte de `shadowColor`, cuyo valor por defecto es negro transparente, las demás propiedades tienen todas 0 como valor por defecto.

### Ejemplo: Un texto con un efecto de sombra

```javascript
const canvas = document.getElementById('myFirstCanvas');
let ctx;
if (canvas.getContext) {
  ctx = canvas.getContext('2d');
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 1;
  ctx.shadowColor = 'black';
  ctx.font = '30px Arial';
  ctx.fillText('Hello world', 30, 30);
}
```

![cuadrado rojo](./04-Agreg-color-degrad-sombr-&-transp/img/shadow.png)

## A recordar

- Hemos visto en este capítulo que es bastante simple asignar estilo a nuestras formas. Solo estamos limitados por nuestra imaginación.

- Este curso es una introducción al lienzo, te proporciona las bases. La documentación del lienzo es bastante importante y encontrarás complementos para realizar proyectos más complejos.