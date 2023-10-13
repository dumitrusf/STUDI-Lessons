# Los eventos personalizados

## Objetivo

- Aprender a crear eventos personalizados.

## Contexto

Puede que, en desarrollos futuros, los eventos nativos de JavaScript no puedan satisfacer nuestras necesidades. Afortunadamente, el lenguaje nos permite crear nuestros propios eventos.

## Método

Dos nuevos pasos se añaden a la creación de un evento personalizado: la creación del evento en sí mismo, y el disparo del mismo cuando nos parezca oportuno. Esto podría ser al cargar la página, o por qué no al emitir otro evento.

Creación con el constructor Event:

```javascript
const myEvent = new Event('personnalEvent');
```

Disparo programático del evento:

```javascript
element.dispatchEvent(myEvent);
```

### Ejemplo

También podemos añadir datos personalizados con el parámetro detail del constructor CustomEvent():

```javascript
const event = new CustomEvent('personnalEvent', {
  detail: {
    myData: 'mi evento personal',
  },
});
const element = document.getElementById('navbar');
element.addEventListener('personnalEvent', displayMe);
element.dispatchEvent(event);
function displayMe(e) {
  console.log(e.detail.myData);
}
```

Si quieres probar este código, es importante que recuerdes crear el html que va con el script.

## Recordatorio

De la misma manera que para los eventos nativos, es una buena práctica eliminar nuestros eventos personalizados cuando ya no los necesitemos.

## A recordar

Podemos crear eventos personalizados de dos maneras diferentes:

### Con el constructor Event:

```javascript
new Event('monEvenement');
```

Con el constructor CustomEvent:

```javascript
new CustomEvent('monEvenementCustom', {
  detail: {
    tag: 'evento personalizado',
  },
});
```