# Gestión de respuestas y errores en la API Fetch

## Objetivos

- Procesar una respuesta a una petición HTTP enviada con la API Fetch
- Manejar los errores al usar la API Fetch

## Contexto

Fetch utiliza el poderoso mecanismo de las Promises para facilitar la escritura y el procesamiento de las peticiones HTTP. Vamos a ver aquí cómo usar los retornos de la API Fetch para acceder a la respuesta de una petición o para tratar los errores.

## Procesar las respuestas

El método `.fetch()` devuelve una Promise, así que será con el método `.then()` con el que tendremos que recuperar la respuesta. El objeto respuesta pasado como parámetro contiene varias propiedades y métodos que ayudarán al tratamiento:

- `Response.ok`: propiedad que indica si el estado HTTP es un éxito (entre 200 y 299)
- `Response.json()`: método que lee la respuesta hasta el final y devuelve una Promise que retorna el resultado en formato JSON
- `Response.text()`: método que lee la respuesta hasta el final y devuelve una Promise que retorna el resultado en formato texto (USVString)

Existen otros métodos en función del tipo de la respuesta esperada (`arrayBuffer`, `blob`, `formData`). Todos funcionarán con el mismo principio de una Promise que devuelve el resultado.

```javascript
fetch('http://mon-serveur/players')
  .then((response) => {
    if (response.ok) {
      return response.json(); // devuelve una promise con como parámetro la respuesta en formato json
    } else {
      console.log(response.status);
    }
  })
  .then((data) => {
    console.log(data); // Se muestran los datos de la respuesta en formato JSON
  });
```

## Tratar los errores

El método `.fetch()` devuelve una Promise, así que será con el método `.catch()` con el que tendremos que recuperar los errores. Al hacer una petición con la API Fetch, los errores pueden ocurrir de dos maneras:

- O bien es la llamada la que no ha funcionado (mala configuración, servidor inaccesible) y es con un catch que el error podrá ser recuperado,
- O bien la llamada ha tenido lugar y es a nivel de la respuesta donde hay un error.

```javascript
fetch('http://mon-serveur/players')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      // Tratamiento del error en la respuesta
      console.error('Error respuesta: ' + response.status);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error)); // Tratamiento del error en la llamada
```

## A recordar

La API Fetch se basa en el mecanismo de las Promises: por lo tanto, el tratamiento de las respuestas a las peticiones HTTP y el de los errores se harán con los métodos `.then()` y `.catch()`. Cuidado con una sutileza con los métodos de formateo de la respuesta (`.json()`, `.text()`...) que devolverán una promesa con el resultado como parámetro.