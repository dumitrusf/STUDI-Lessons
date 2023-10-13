# Los selectores

## Objetivos

- Seleccionar un elemento
- Seleccionar elementos en profundidad
- Seleccionar el elemento actual

## Situación

Antes de cualquier interacción con el DOM, hay que ser capaz de seleccionar cualquier elemento, dondequiera que se encuentre en una página web. Vamos a entrar en el detalle de los diferentes principios de selección.

## Sintaxis básica

Con jQuery, la selección de elementos se hace de la misma forma que con los selectores CSS. Para recordar, la sintaxis es la siguiente:

```javascript
$('selector')
```

`$` siendo el alias de `jQuery()`. Un método se aplica luego al elemento seleccionado:

```javascript
$('selector').metodo()
```

## Los selectores

Un selector por identificador empieza por `#` y un selector por clase empieza por `.`, seguido del nombre del selector. Es posible seleccionar un elemento por:

- su etiqueta: `$('div')`
- su identificador: `$('#bases')`
- su clase: `$('.bases')`

### Ejemplo

```html
<div id="bases">Bases de jQuery</div>
```

```javascript
$('#bases') // Selecciona <div id="bases">
```

### Complemento: La selección avanzada

Para ir más lejos, es posible seleccionar en profundidad en el DOM, gracias a la noción de padre, hermano e hijo. Para ello, se podrá aplicar dos técnicas:

- El encadenamiento de los selectores
- Las pseudo-clases CSS

Para recordar, una pseudo-clase es una palabra clave añadida a continuación de un selector. Permite incluir el estado de un elemento en la selección y facilita ciertas escrituras.

## Ejemplo: Encadenamiento de los selectores

```html
<div id="content" class="content-div">
  <p>Presentación de jQuery</p>
</div>
```

```javascript
// Selección del párrafo contenido en el div.
$('div p') // Selección de la etiqueta div y luego de la etiqueta p.
$('#content p') // Selección del elemento que tiene el id #content y luego de la etiqueta p.
```

# Ejemplo: Con las pseudo-clases

```html
<div id="content" class="content-div">
  <p>Bases de jQuery</p>
</div>
```

```javascript
$('#content:first-child') // Seleccionará también el párrafo, primer hijo del div #content.
```

## Complemento

Aquí están algunas de las pseudo-clases CSS más famosas:

- **`:first-child`:** el primer hijo

- **`:last-child`:** el último hijo

- **`:last-of-type`:** el último elemento de un tipo

- **`:hover`:** al pasar por encima del elemento

- **`:before`:** antes del elemento

- **`:after`:** después del elemento

- **`nth-child(x)`:** hijo n° x

Hay muchas otras, todas indicadas en la documentación oficial de jQuery.

## Selección múltiple

A veces, los métodos tendrán que ser aplicados a elementos diferentes, con identificadores y clases diversos. En vez de reescribir el código para cada elemento, es posible listar los selectores separándolos por una coma.

### Ejemplo

```javascript
$('h1, h2, h3, .titulo') // Seleccionará las etiquetas h1, h2 y h3 así como los elementos que tienen la clase .titulo
```

## El selector this

Este selector permite actuar sobre el objeto actual. Sea el código siguiente:

```javascript
$('#content p').text('¡Hola a todos!')
```

Aquí, escribimos "¡Hola a todos!" en el párrafo de nuestro div. Podríamos haber escrito el equivalente:

```javascript
$('#content p').html(function () {
  $(this).text('¡Hola a todos!')
})
```

![helloworld](./02-Los-selectores/img/helloworld.jpg)

El uso de this solo es posible a partir de una función anónima, que pasamos como parámetro del método utilizado. this se pasa como objeto a jQuery y no como una cadena de caracteres: `$(this)` y no `$('this')`.

## Atención

En cuanto al rendimiento, preferiremos los selectores por identificador, porque este siendo único, será más fácilmente localizado en el DOM.

```javascript
$('#content')
```

Evitemos, por ejemplo, las búsquedas demasiado generales sobre las clases:

```javascript
$('.content')
```

Utilicemos más bien la noción padre/hijo para apuntar mejor a los elementos:

```javascript
$('div .content')
```

## Para recordar

- Un selector se escribe con el alias `$` seguido del nombre del selector entre paréntesis: `$('#mi-selector')` o `$('etiqueta .mi-selector')`.
- Una selección puede ser múltiple: `$('selector1, selector2, selector3')`.
- this permite apuntar al elemento actual: `$(this)`.

## Complemento

- [Documentación de jQuery](https://api.jquery.com/)

- [Pseudo-clases](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes)