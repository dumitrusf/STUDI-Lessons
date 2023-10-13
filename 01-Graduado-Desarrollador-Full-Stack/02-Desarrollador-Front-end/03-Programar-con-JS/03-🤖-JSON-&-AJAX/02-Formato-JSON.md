# El formato JSON y AJAX

## El formato JSON

JSON significa JavaScript Object Notation.

Es un formato de texto plano para almacenar y transportar datos ligeros entre ordenadores.

Es un lenguaje independiente, porque deriva de la sintaxis del JavaScript object notation.

El código para leer y generar JSON existe en muchos lenguajes de programación.

### Ejemplo

Una cadena (string) JSON:

```json
{"name" :"Charles", "age":30, "car":null}
```

Es un ejemplo de un objeto con 3 propiedades:

- name
- age
- car

Cada propiedad tiene su valor. Si analizamos (parse) la cadena JSON con un programa JavaScript, podemos acceder a los datos como un objeto:

```javascript
let jsonString = '{"name":"John", "age":30}' ;
let obj = JSON . parse ( jsonString );
let personName = obj . name ;
let personAge = obj . age ;
console . log ( personName );
console . log ( personAge );
```

### ¿Por qué usar JSON?

El formato JSON es sintácticamente similar al código de creación de objetos JavaScript.

Por esta razón, un programa JavaScript puede convertir fácilmente los datos JSON en objetos JavaScript.

Como el formato es solo texto plano, los datos JSON pueden enviarse fácilmente entre ordenadores y usarse por cualquier lenguaje.

JavaScript tiene una función integrada para convertir las cadenas JSON en objetos JavaScript, la función JSON.parse().

JavaScript también tiene una función para convertir un objeto en cadena JSON, la función JSON.stringify().

### Almacenar datos

Al almacenar datos, los datos deben estar en un cierto formato, y, sea cual sea el lugar donde elijas almacenarlos, el texto es siempre uno de los formatos legales. JSON hace posible almacenar objetos JavaScript como texto.

### Atención

Puntos importantes a recordar:

- Podemos recibir texto puro desde un servidor y usarlo como un objeto JavaScript, enviar un objeto JavaScript a un servidor en formato texto puro y trabajar con datos como objetos JavaScript, sin análisis ni traducciones complejas.

- La sintaxis JSON es un subconjunto de la sintaxis JavaScript.

## La sintaxis JSON

Aquí están las 4 reglas de la sintaxis:

- Los datos están en pares nombre/valor.
- Los datos están separados por comas.
- Las llaves contienen objetos.
- Los corchetes contienen arreglos.

Una pareja nombre/valor consiste en un nombre de campo (entre comillas dobles), seguido de dos puntos, seguido de un valor.

El formato JSON es casi idéntico a los objetos JavaScript.

Las claves deben ser cadenas, escritas con comillas:

Una cadena en formato JSON:

```json
{ "name" : "Charles" }
```

Un objeto en lenguaje JavaScript:

```javascript
{ name : "Charles" }
```

El tipo de archivo para los archivos JSON es ".json".

## Los valores JSON

En JSON, los valores deben ser uno de los siguientes tipos de datos:

- Una cadena (string)
- Un número (number)
- Un objeto (object)
- Un arreglo (array)
- Un booleano (boolean - true/false)
- Null

En JavaScript, los valores pueden ser todos los valores anteriores, más cualquier otra expresión JavaScript válida, incluyendo una función (function), una fecha (date) y undefined.

## JSON vs XML

JSON y XML pueden usarse para recibir datos de un servidor web. Los dos presentan especificidades no despreciables para redactar y transportar los datos de la forma más clara posible.

### Ejemplo

Los ejemplos JSON y XML siguientes definen ambos un objeto "employees", con un arreglo de 3 empleados.

Objeto con arreglo en formato JSON:

```json
{ "employees" :[
  { "firstName" : "Charles" , "lastName" : "Dupont" },
  { "firstName" : "Marie" , "lastName" : "Leclerc" },
  { "firstName" : "Pierre" , "lastName" : "Lefranc" }
 ]}
```

Objeto en formato XML:

```xml
<employees>
  <employee>
    <firstName>Charles</firstName><lastName>Dupont</lastName>
  </employee>
  <employee>
    <firstName>Marie</firstName><lastName>Leclerc</lastName>
  </employee>
  <employee>
    <firstName>Pierre</firstName><lastName>Lefranc</lastName>
  </employee>
</employees>
```

Estos dos ejemplos ponen de relieve que el JSON es como el XML porque:

- Son "autodescriptivos".
- Son jerárquicos (valores dentro de valores).
- Pueden ser analizados y usados por muchos lenguajes de programación.
- Pueden también ser recuperados con un XMLHttpRequest.

También, estos 2 ejemplos demuestran que el JSON es diferente del XML porque:

- JSON no usa etiqueta de fin.
- Es más corto, más rápido de leer y escribir, y puede usar arreglos.
- Sobre todo, la mayor diferencia es que XML debe ser analizado (parse) con un analizador (parser) XML. JSON puede ser analizado por una función JavaScript estándar.

### Atención: Puntos importantes a recordar

- XML es más difícil de analizar que un JSON.
- JSON es analizado en un objeto JavaScript listo para usar.

## Los tipos de datos JSON

Las cadenas (strings) en JSON deben escribirse con comillas dobles. Los números (numbers) en JSON deben ser un entero (integer) o una coma flotante (floating point). Los valores en JSON pueden ser objetos (objects), arreglos (arrays), booleanos (boolean) true/false, o pueden ser null.

number JSON : {"age":30}

object JSON : { "employees":{"name":"Charles", "age":30, "city":"Paris"} }

array JSON : { "employees":["Charles", "Marie", "Pierre"] }

boolean : {"rain":true}

null JSON : {"middlename":null}

### Atención

Excepciones:

- Los objetos date no están autorizados en JSON. Si necesitas incluir una fecha, escríbela como una cadena. Puedes convertirla de nuevo en objeto date más tarde.
- También, debes evitar usar las funciones en JSON, las funciones perderán su alcance y tendrás que usar eval() para convertirlas de nuevo en funciones.

## Servidor JSON

Puedes hacer una petición JSON al servidor usando una petición Ajax. Mientras la respuesta del servidor esté escrita en formato JSON, puedes analizar la cadena en un objeto JavaScript. Hay que usar XMLHttpRequest para obtener datos del servidor:

```html
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>

<script>
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
}
xmlhttp.open("GET", "file.json");
xmlhttp.send();
</script>

</body>
</html>
```

Cuando usamos JSON.parse() en JSON derivado de un arreglo, el método devolverá un arreglo JavaScript en lugar de un objeto JavaScript.

```html
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>

<script>
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myArr = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = JSON.stringify(myArr, null, 2);
}
xmlhttp.open("GET", "car.json", true);
xmlhttp.send();
</script>
</body>
</html>
```

---
---