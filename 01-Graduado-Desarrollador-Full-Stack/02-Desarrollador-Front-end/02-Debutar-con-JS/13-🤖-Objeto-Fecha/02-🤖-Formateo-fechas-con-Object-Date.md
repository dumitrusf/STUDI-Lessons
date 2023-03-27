Hoy te voy a ayudar a traducir la página en la que te encuentras del francés al español, y la transformaré en el formato markdown para que puedas distinguir los títulos y demás. Así es como quedaría la página traducida:

# El objeto Date

⭐ ## Introducción

Antes de abordar los puntos fundamentales de este curso, hagamos un repaso de una noción importante.

**Atención!: Diferencia entre tiempo local y tiempo universal**

En este curso, verás varias veces los conceptos de tiempo local y tiempo universal. El tiempo local se basa en la hora local del sistema operativo del usuario, que puede variar según su ubicación geográfica y los parámetros de zona horaria de su sistema. Si estás en Francia y tu ordenador está configurado en la zona horaria francesa, entonces, el tiempo local corresponderá a la zona horaria francesa. El tiempo universal, también llamado Tiempo Universal Coordinado (UTC), es una norma de tiempo de referencia utilizada para coordinar las actividades en todo el mundo. Es independiente de cualquier ubicación geográfica y no cambia con las zonas horarias.

⭐⭐ ## Constructeur Date


## Crear una fecha

Para crear una fecha, vamos a instanciar `Date`, y por lo tanto llamar a su constructor. Si no pasamos ningún argumento al llamar al constructor, la fecha se definirá por defecto con la fecha y la hora actuales. En cambio, podemos pasar como argumentos información que determine una fecha precisa. Podemos notar que el constructor de `Date` define las fechas en el huso horario local¹[1].

### Llamar al constructor sin pasar parámetros

Para empezar, instanciemos `Date` sin pasar parámetros. Podemos ver que el método `toString()` va a devolver una cadena que contiene la fecha y la hora local en un formato específico:

```js
const date = new Date();

console.log(date.toString()); //fecha y hora actual en una cadena
```

Podemos constatar que la fecha y la hora corresponden bien a la fecha y la hora actual con el huso horario local.

### Llamar al constructor definiendo una fecha precisa

Instanciemos `Date` pasando como argumentos ordenados números que corresponden al año, al mes, al día, a la hora y al minuto.

```js
const date = new Date(2023, 11, 1, 10, 14);

console.log(date.toString()); //Fri Dec 01 2023 10:14:00 GMT+0100 (hora estándar de Europa central)
```

Un punto importante, indicamos 11 como mes, y la fecha creada es en diciembre. Es normal, el parámetro `monthIndex` empieza en 0 para enero y va hasta 11 para diciembre²[2]. También podemos pasar un número mayor que 11, en ese caso, el número de meses adicionales se añade a la representación de la fecha.

También podríamos haber indicado los segundos, y luego los milisegundos:

```js
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

console.log(date.toString()); //Fri Dec 01 2023 10:14:10 GMT+0100 (hora estándar de Europa central)
```

Pero también podríamos no haber indicado la hora, en ese caso, se habría definido una hora por defecto (00:00:00):

```js
const date = new Date(2023, 11, 1);

console.log(date.toString()); //Fri Dec 01 2023 00:00:00 GMT+0100 (hora estándar de Europa central)
```

Pasamos entonces tantos argumentos como queramos, lo importante es que los pasemos en el orden siguiente: año, mes, día, horas, minutos, segundos, milisegundos.

### Llamar al constructor definiendo una fecha en una cadena

También es posible definir una fecha precisa pasando como argumento del constructor una cadena de caracteres que contenga una fecha por ejemplo con el formato ISO 8601 (una norma internacional para la representación de fechas y horas), o con una representación textual válida (como las que devuelve el método de instancia `toString()` de `Date`)³[3].

```js
const date = new Date("2023-01-17T12:30:00+02:00");

console.log(date.toString()); //Tue Jan 17 2023 11:30:00 GMT+0100 (hora estándar de Europa central)

const date2 = new Date("Tue Jan 17 2023 11:30:00 GMT+0100");

console.log(date2.toString()); //Tue Jan 17 2023 11:30:00 GMT+0100 (hora estándar de Europa central)
```

⭐⭐ ## Méthodes et formatage de dates

Ahora que sabemos cómo crear una fecha gracias al constructor de Date, veamos algunos métodos interesantes de Date y nos interesemos por el formateo de fechas.

Hay que saber que, para generar una fecha y una hora, JavaScript se sirve de una fecha de referencia correspondiente al 1 de enero de 1970 a las 00:00:00 UTC¹[1]. Para obtener la fecha y la hora actuales, JavaScript recupera el número de milisegundos transcurridos desde esa fecha hasta ahora. Vamos a poder comprobarlo llamando a algunas métodos.

### Métodos estáticos de Date

Existen varios métodos estáticos de Date.

- El método `Date.now()` devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC²[2].
- El método `Date.parse()` devuelve, a su vez, el número de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC hasta la fecha pasada como argumento bajo la forma de una representación textual válida³[3].
- El método `Date.UTC()` devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC, pero permite pasar como argumentos los mismos argumentos que el constructor `Date()`⁴[4].

Ejemplo:

```javascript
console.log(Date.now()); //número de milisegundos transcurridos desde la fecha de referencia

console.log(Date.parse("2023-01-17T12:30:00+02:00")); //1673951400000

console.log(Date.UTC(2023, 11, 1, 10, 14, 10, 58)); //1701425650058
```

### Métodos de instancia de conversión

Cada instancia de Date hereda los métodos del objeto `Date.prototype`. Entre estos métodos, hay métodos que permiten convertir las fechas en un formato específico. Entre estos métodos se encuentran:

- `toDateString()` que devuelve en una cadena la parte "fecha" de la fecha (es decir, sin la hora)
- `toTimeString()` que devuelve en una cadena la parte "hora" de la fecha (es decir, sin la fecha)
- `toISOString()` que devuelve una fecha en el formato ISO 8601
- `toUTCString()` que devuelve una cadena que contiene la fecha según la zona horaria UTC

Ejemplo:

Aquí hay un ejemplo para cada uno de estos métodos:

```javascript
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

console.log(date.toDateString()); //Tue Jan 17 2023

console.log(date.toTimeString()); //11:30:00 GMT+0100 (hora estándar de Europa central)

console.log(date.toISOString()); //2023-12-01T09:14:10.058Z

console.log(date.toUTCString()); //Fri, 01 Dec 2023 09:14:10 GMT
```

### Método valueOf()

El método `valueOf()` permite devolver el valor primitivo envuelto por el objeto Date. El valor primitivo envuelto por una instancia de Date corresponde al número de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC, que permite representar la fecha.

Ejemplo:

Tomemos un ejemplo:

```javascript
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

console.log(date.valueOf()); //1701422050058
```

### Formatear una fecha

Veamos ahora cómo formatear una fecha en una cadena de caracteres. Vamos a definir el formato de visualización de nuestra fecha y de nuestra hora.

Para formatear nuestra fecha, vamos a utilizar tres métodos, eligiendo el que sea más apropiado según lo que se desea:

- `toLocaleDateString()`: si nos interesa solo la parte "fecha".
- `toLocaleTimeString()`: si nos interesa solo la parte "hora".
- `toLocaleString()`: si nos interesa las partes "fecha" y "hora".

Podemos llamar a estos métodos sin pasar parámetros, lo que devolverá una cadena que representa la fecha, la hora o las dos, pero con el formato local (propio de la región local elegida):

```javascript
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

console.log(date.toLocaleDateString()); //01/12/2023

console.log(date.toLocaleTimeString()); //10:14:10

console.log(date.toLocaleString()); //01/12/2023 10:14:10
```

Podemos observar que, con estos métodos, la fecha y la hora se devuelven en un formato francés. En efecto, es la localización "fr-FR" la que se toma en cuenta automáticamente, puesto que se trata del formato local (si su entorno está bien configurado en francés).

Podemos probar formatos propios de otras localidades, por ejemplo para Canadá, que es otro país francófono:

```javascript
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

console.log(date.toLocaleDateString("fr-CA")); //2023-12-01

console.log(date.toLocaleTimeString("fr-CA")); //10:14:10

console.log(date.toLocaleString("fr-CA")); //2023-12-01 10:14:10
```

Podemos observar que el formato de visualización de la hora no es el mismo.

Ahora, veamos cómo formatear una fecha utilizando el método `toLocaleDateString()`. Lo primero que hay que hacer es crear un objeto, que vamos a llamar `options`, que va a contener diferentes propiedades que indican el formato de las diferentes unidades de tiempo.

Podemos definir las siguientes propiedades:

- `weekday`: para definir si el día de la semana debe mostrarse como un texto completo (por ejemplo, "lunes") o abreviado (por ejemplo, "lun").
- `year`: para definir si el año debe mostrarse en formato numérico de 2 o 4 cifras, o en formato completo (por ejemplo, "2023").
- `month`: para definir si el mes debe mostrarse en texto completo (por ejemplo, "marzo") o abreviado (por ejemplo, "mar").
- `day`: para definir si el día debe mostrarse en formato numérico con o sin cero delante (por ejemplo, "01" o "1").
- `hour`: para definir si la hora debe mostrarse con el formato de 12 o 24 horas.
- `minute`: para definir si los minutos deben mostrarse con o sin cero delante (por ejemplo, "08" o "8").
- `second`: para definir si los segundos deben mostrarse con o sin cero delante (por ejemplo, "08" o "8").
- `timeZoneName`: para mostrar el nombre de la zona horaria (por ejemplo, "hora de verano de Europa central").

Estas propiedades pueden definirse con diferentes valores según el tipo de propiedad⁵[5]. Por ejemplo, para la propiedad `weekday`, podemos usar los valores "long" para mostrar el nombre completo del día de la semana, "short" para la abreviatura, o "narrow" para una versión muy corta⁶[6]. El valor "numeric" permitirá para algunas propiedades indicar que buscamos mostrar un número⁷[7].

Definamos pues el objeto `options`:

```javascript
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

let options = { day: 'numeric', weekday: 'short', month: 'long', year: 'numeric' };
```

Ahora podemos llamar al método `toLocaleDateString()` pasando dos argumentos correspondientes a los parámetros: `locales` y `options`. El parámetro `locales` permite especificar la localización, es decir la opción que indica según qué norma de visualización debe presentarse la fecha⁸[8]. De un país a otro, el formato de visualización de las fechas y horas puede ser diferente. Para formatear la fecha usaremos "fr-FR", para que el formateo se haga según la norma francesa. El parámetro `options` permite pasar el objeto que contiene las opciones de formateo⁹[9].

Llamemos pues a nuestro método `toLocaleDateString()` pasando los argumentos:

```javascript
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

let options = { day: 'numeric', weekday: 'short', month: 'long', year: 'numeric' };

console.log(date.toLocaleDateString("fr-FR", options)); //ven. 1 diciembre 2023
```

Podemos constatar que funciona. Tenemos una fecha formateada que toma en cuenta la localización francesa y las opciones especificadas

