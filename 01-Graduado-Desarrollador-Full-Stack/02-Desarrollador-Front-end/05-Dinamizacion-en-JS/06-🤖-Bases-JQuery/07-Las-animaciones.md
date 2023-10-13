# Las animaciones

## Objetivo

- Animar el contenido de una página web

## Contexto

Por definición, una interacción provoca un efecto de cambio. Hasta ahora, hemos manipulado elementos fijos, pero jQuery también permite provocar efectos de movimiento con las animaciones.

## Animaciones nativas

Algunas animaciones están predefinidas por jQuery. Se pueden usar aplicando a un elemento el método correspondiente a la animación deseada. Entre las más conocidas, tenemos:

- **`hide()`**: oculta un elemento reduciendo su tamaño y su opacidad

- **`show()`**: muestra un elemento aumentando su tamaño y su opacidad

- **`fadeIn()`**: muestra un elemento aumentando su opacidad

- **`fadeOut()`**: oculta un elemento reduciendo su opacidad

Estos métodos pueden tomar como parámetro una duración en milisegundos. Se trata de la duración de la animación: `$('element').hide(2000)`. También existen duraciones predefinidas: `fast = 200ms`, `normal = 400ms` y `slow = 600ms`. Se usará entonces la sintaxis `$('element').hide('slow')`.

## Nota

>Se puede aplicar un retraso antes de una animación gracias al método **delay**, que toma como parámetro una duración en milisegundos: `$('element').delay(2000).show('fast')`.

### Ejemplo

```html
<div id="content" style="width: 200px; height: 200px; background-color: aqua;"></div>
```

```javascript
$(document).ready(() => {
  $('#content').hide(2000).delay(1000).show(2000);
});
```

## Animaciones personalizadas

El método **`animate()`** permite crear sus propias animaciones jugando con las propiedades CSS del elemento. Puede tomar hasta cuatro parámetros:

- **`properties`**: un objeto que contiene las propiedades CSS y sus valores (obligatorio)
- **`duration`**: una duración (opcional, 400 ms por defecto)
- **`easing`**: el estilo de animación (opcional: swing o linear)
- **`complete`**: una función a ejecutar al final de la animación (opcional)

**Ejemplo**

```javascript
$(document).ready(() => {
  $('#content')
    .animate({ width: '500px' }, 2000)
    .delay(1000)
    .animate({ height: '500px' }, 2000);
});
```

En este caso, hemos podido descomponer la modificación de ancho y alto en dos animaciones.

## Complemento

El método animate también se puede escribir: `$('element').animate({css}, {options})`. Primero, las propiedades CSS y sus valores, luego un objeto de opciones generales, que incluyen entre otras la duración y el estilo de animación.

## Atención

En cuanto al rendimiento, un abuso de uso del método animate podría provocar ralentizaciones significativas. Se debe preferir para pequeñas animaciones. Una alternativa puede ser la librería **Velocity.js**, más optimizada para las animaciones pesadas.

## A retener

Existen dos sintaxis para llamar a animate():

- `$('element').animate({css}, duration, easing, complete)`
- `$('element').animate({css}, {options})`

La primera es más común y bastará en la mayoría de los casos. La segunda permite personalizar aún más las animaciones para necesidades específicas.

## Complemento

- **[animate()](https://api.jquery.com/animate/)**

- **[velocity.js](http://velocityjs.org/)**
