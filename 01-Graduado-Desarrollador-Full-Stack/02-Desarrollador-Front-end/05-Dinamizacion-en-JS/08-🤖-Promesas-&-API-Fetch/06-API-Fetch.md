# La API Fetch

## Objetivos
- Descubrir las ventajas de la API Fetch
- Saber cómo usar la API Fetch

## Contexto
ES6 trae muchas mejoras importantes a JavaScript, especialmente las promesas. Antes de ES6, las peticiones HTTP se hacían con el objeto XmlHttpRequest, con un precio de una configuración bastante pesada, con mucho código que escribir y una anidación de callbacks, posible fuente de error. La API Fetch es una interfaz JavaScript que nos permitirá aprovechar los avances de las promesas para simplificar nuestras peticiones HTTP.

## Uso de la API Fetch
Crear una petición con la API Fetch es bastante simple y rápido. Basta con usar el método `.fetch()` que espera una URL como parámetro y que devuelve una Promise. Si la petición se ejecuta con éxito, la Promise será fulfilled, sino será rejected. El método `.resolve()` será llamado con la respuesta como parámetro. Por defecto, el verbo HTTP utilizado es GET.

```javascript
fetch('http://mon-serveur/ma-ressource')
  .then((response) => console.log(response));
```

El método `.fetch()` tiene un segundo parámetro opcional que permitirá pasar la configuración a la API. Este segundo parámetro (init) espera un objeto JavaScript con propiedades como el verbo HTTP, los headers, el body de la petición si es necesario, etc.

```javascript
var myInit = {
  method: 'GET',
  headers: {
    "Content-Type": "text/plain;charset=UTF-8",
    "Content-Encoding": "gzip"
  },
  //También se puede usar el objeto Headers
  mode: 'cors', // Permite las peticiones cross-origin - también modo por defecto
  cache: 'default' // controla cómo la petición interactuará con el caché HTTP del navegador
};

fetch('http://mon-serveur/ma-ressource', myInit)
  .then((response) => console.log(response));
```

## Enviar datos con la API Fetch : el método POST
El POST con la API Fetch es muy similar al GET, excepto que la petición tendrá un parámetro adicional body correspondiente a los datos que queremos enviar.

```javascript
const headers = new Headers();
const body = JSON.stringify({
  firstname: 'David',
  lastname: 'Marty',
  position: 'Outside center'
});
//JSON.stringify para convertir en objeto JSON y evitar el riesgo de los caracteres especiales.
const init = {
  method: 'POST',
  headers: headers,
  body: body
};

fetch('http://mon-serveur/players', init)
  .then((response) => console.log(response));
```

El body de un POST con la API Fetch también puede ser un objeto FormData.

```javascript
const headers = new Headers();
const body = new FormData();
/*[...] Añadir valores al FormData [...]*/
const init = {
  method: 'POST',
  headers: headers,
  body: body
};

fetch('http://mon-serveur/players', init)
  .then((response) => console.log(response));
```

## API Fetch y JSON
La API Fetch permite realizar una petición asíncrona a una recurso proporcionado por un servidor, y obtener un objeto JavaScript a partir de los resultados obtenidos durante la llamada. Esto significa que esta API ofrece un método similar a JSON.parse(), nativamente presente en JavaScript, con la diferencia de que los datos obtenidos vía Fetch serán leídos y transformados en un tipo JavaScript, de manera asíncrona.

Para obtener un tipo JavaScript válido tras una llamada vía la API Fetch, hay que usar la función `.json()`. Esta devuelve una promesa que contiene el tipo JavaScript correspondiente a la representación estructurada de los resultados en JSON.

### Ejemplo

```javascript
fetch("https://www.data.gouv.fr/api/1/activity?page=1&page_size=20")
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => alert("Error : " + error));
```

Cuando este código se ejecuta, se realiza una llamada asíncrona por la API Fetch a la URL « https://www.data.gouv.fr/api/1/activity?page=1&page_size=20 ». Esto se materializa por una promesa que contiene datos en formato JSON. Al resolver esta promesa, la llamada a response.json() va a transformar de manera asíncrona los resultados en un objeto JavaScript a través de una nueva promesa, cuya resolución permite mostrar el objeto final en la consola del navegador.

## Atención
Existen diferentes formalismos de datos, aunque JSON es el formato más popular en la Web. Por lo tanto, es imprescindible asegurarse del formato obtenido al recuperar los datos. Así, para asegurarse del buen uso de la función `.json()`, es necesario que el recurso contactado esté en el formato correcto.

Es frecuente que los servicios disponibles en la Web ofrezcan diferentes formalismos de datos definibles durante la llamada. En algunos casos, esto se materializa por la adición del parámetro format=json o del header de petición Accept. Para saber cómo especificar un formato, es necesario consultar la documentación del servicio objetivo antes de empezar los desarrollos.

## A recordar
- La API Fetch permite configurar y enviar peticiones HTTP mucho más fácilmente que el antiguo objeto XmlHttpRequest.
- La API Fetch se basa en el potente mecanismo de las Promises para facilitar el tratamiento.
- La API Fetch expone una función `.json()` que permite obtener de manera asíncrona un tipo JavaScript correspondiente a los datos JSON devueltos por el recurso contactado. Para usar esta funcionalidad, es necesario asegurarse previamente de que el recurso objetivo proporciona datos en formato JSON, consultando su documentación.