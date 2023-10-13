// Declaramos la constante 'apiKey' que almacena la clave API única proporcionada por OpenWeatherMap.
// Esta clave se utiliza para autenticarnos ante el servicio API y realizar peticiones para obtener datos meteorológicos.
const apiKey = "d408b2585e4efe44f7725a1691a98ff2";

// Definimos una función asíncrona llamada 'recupDonees'.
// El objetivo de esta función es recuperar datos meteorológicos para una ciudad específica.
// La función toma dos argumentos:
//   1) 'city': el nombre de la ciudad para la que queremos obtener información meteorológica.
//   2) 'callback': una función de devolución de llamada (callback) que se invocará una vez que se obtengan los datos.
async function recupDonees(city, callback) {

  // Utilizamos un bloque try/catch para envolver el código que podría lanzar errores.
  // Esto es crucial cuando estamos realizando operaciones que no controlamos completamente, como es el caso de las peticiones a una API externa.
  try {

    // Utilizamos 'await' con el método 'fetch' para hacer una petición HTTP asíncrona.
    // 'fetch' devuelve una Promesa, pero al estar dentro de una función asíncrona, podemos usar 'await' para esperar a que la Promesa se resuelva.
    // La Promesa se resolverá con un objeto 'response', que contiene información sobre la respuesta del servidor.
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    // Utilizamos 'await' para esperar que el método 'json()' convierta la respuesta en un objeto JSON.
    // El método 'json()' también devuelve una Promesa, que de nuevo manejamos con 'await'.
    const data = await response.json();

    // Una vez resuelta la Promesa y con nuestros datos en formato JSON, invocamos la función callback que se pasó como argumento.
    // Pasamos los datos recuperados como argumento a esta función callback.
    return callback(data);

  } catch {

    // Si ocurre algún error en el bloque 'try', se ejecutará el bloque 'catch'.
    // Aquí, simplemente estamos registrando "error" en la consola.
    // En una aplicación real, podríamos necesitar manejar estos errores de forma más sofisticada.
    console.log("error");
  }
}




// Definimos una función llamada 'affTemp'.
// Esta función tiene el propósito de recibir un objeto de datos meteorológicos ('dt') y mostrar la temperatura en la consola.
// La función se diseñó para ser usada como un callback en la función 'recupDonees', que se encargará de recuperar los datos meteorológicos.
function affTemp(dt) {



    // Aquí, accedemos a la propiedad 'main.temp' del objeto 'dt'.
    // La estructura del objeto 'dt' es determinada por la API de OpenWeatherMap.
    // En este caso, la propiedad 'main' es un objeto que, a su vez, contiene otra propiedad llamada 'temp'.
    // Esta última almacena la temperatura actual de la ciudad en grados Celsius, ya que especificamos 'units=metric' en la petición de la API.
    // Sumamos " °C" para añadir las unidades al valor numérico y ofrecer un resultado más claro.
    console.log(dt.main.temp + " °C");
  }
  
  
  
  // Llamamos a la función 'recupDonees', que se definió en el bloque de código anterior.
  // Le pasamos dos argumentos:
  //   1) "Paris": es el nombre de la ciudad para la cual queremos recuperar información meteorológica.
  //   2) 'affTemp': es la función de devolución de llamada (callback) que se invocará una vez que los datos se hayan recuperado con éxito.
  // En este caso, 'affTemp' se encargará de mostrar la temperatura en la consola.
  recupDonees("Paris", affTemp);
  recupDonees("Annonay", affTemp);
  recupDonees("Oslo", affTemp);
  recupDonees("helsinki", affTemp);
  recupDonees("estocolmo", affTemp);
  recupDonees("Berlin", affTemp);
  recupDonees("varsovia", affTemp);
  recupDonees("kiev", affTemp);
  
  // Es importante tener en cuenta que 'recupDonees' es una función asíncrona.
  // Esto significa que la petición a la API y la posterior invocación del callback 'affTemp' no bloquearán el resto del código.
  // Se ejecutarán en el fondo mientras el resto del programa continúa funcionando.
  
  
  
  // si queremos que aparezca el nombre de la ciudad en consola tambien pues asi:
  // ... (el resto del código se mantiene igual hasta la definición de recupDonees)
  
  // Modificamos la función 'affTemp' para recibir un segundo argumento 'cityName'.
  // Este argumento se utilizará para imprimir el nombre de la ciudad junto a la temperatura.
  function affTemp(dt, cityName) {
    console.log(`${dt.main.temp} °C ${cityName}`);
  }
  
  // Modificamos las llamadas a 'recupDonees' para utilizar funciones anónimas o "arrow functions" como callbacks.
  // De esta manera, podemos pasar tanto los datos como el nombre de la ciudad a 'affTemp'.
  recupDonees("Annonay", (data) => affTemp(data, "Annonay"));
  recupDonees("Oslo", (data) => affTemp(data, "Oslo"));
  recupDonees("Helsinki", (data) => affTemp(data, "Helsinki"));
  recupDonees("Estocolmo", (data) => affTemp(data, "Estocolmo"));
  recupDonees("Berlin", (data) => affTemp(data, "Berlin"));
  recupDonees("Varsovia", (data) => affTemp(data, "Varsovia"));
  recupDonees("Kiev", (data) => affTemp(data, "Kiev"));
  recupDonees("Roa", (data) => affTemp(data, "Roa"));
  
  // Ahora, cuando ejecutes este código, deberías ver la temperatura junto al nombre de la ciudad en la consola.