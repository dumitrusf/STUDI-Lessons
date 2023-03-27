# **Principales objetos nativos en JS**

<br>
<br>

---

## **Principales objetos nativos en JS**

---

<br>

---

### **El objeto `Object`**

---

<br>

**`Object` es el objeto base de todo objeto en JavaScript.**

**Cualquier objeto creado, ya sea nativo o definido** por un desarrollador, **heredará** directamente o indirectamente **las propiedades básicas del tipo Object.**

**Para construir un objeto de `tipo Object`, podemos llamar simplemente a su constructor.**

---

---

<br>

<br>

---

### **Construir un `Object`**

---

<br>

**Aquí hay un ejemplo de llamada al constructor Object.**

<br>

---

**Recordemos usar la palabra clave `new` para crear una `instancia de Object`:**

```js
let monObjet = new Object();
```

---

<br>

**También es posible crear un objeto sin llamar directamente al constructor `Object()`:**

```js
let monObjet = { /*definición de las propiedades*/ };
```

---

<br>

En este caso 👆 , usamos la `"sintaxis literal para inicializar los objetos"`, **y el constructor `Object()` se llama implícitamente.**

Veamos ahora algunos métodos de la clase Object, en un ejemplo de código:

---

<br>

---

#### **Ejemplo: Algunos métodos de Object**

---

<br>

```js
//Creamos un objeto envolviendo el valor "undefined"

let monObjet = new Object();


//Creamos 2 propiedades en nuestro objeto
monObjet = {
  nom: "mon objet",
  caracteristiques: "aucune"
};

//Algunos métodos estáticos


//devuelve las claves de las propiedades definidas
console.log(Object.keys(monObjet)); 


//devuelve los valores de las propiedades definidas
console.log(Object.values(monObjet));


//devuelve los pares clave/valor de las propiedades definidas
console.log(Object.entries(monObjet));


//Algunos métodos de instancia


//devuelve el valor primitivo del objeto, es decir, el propio objeto
console.log(monObjet.valueOf()); 


//devuelve una cadena que representa el objeto
console.log(monObjet.toString());


//devuelve un booleano si el objeto tiene la propiedad pasada como argumento. No tiene en cuenta las propiedades heredadas "por defecto" del prototipo Object.prototype
console.log(monObjet.hasOwnProperty("nom")); 
```

---

<br>

Podemos observar que **todos los métodos predefinidos de instancia se heredan del objeto `Object.prototype`**

Es **este objeto `Object.prototype`** el que **contiene** inicialmente todos **los métodos** de los **que heredarán cada instancia de Object, como:**

- `toString()`

- `valueOf()`

- `etc.`

---

<br>

Como **`Object` es EL OBJETO BASE en JS,** todos **los demás tipos de objetos** (Number, Array, etc.) **heredarán** las **`propiedades` y `métodos de Object`.**

Por lo tanto, **podremos usar estos métodos con las instancias de los otros tipos de objetos.**

---

<br>

Cuando hablamos de `"herencia"`, simplemente **significa que un objeto recibirá propiedades de otro objeto.**

En este caso, **todos los objetos JS recibirán** (es decir, heredarán) **las propiedades de Object.**

---

---

<br>

<br>

---

### **El objeto Boolean**

---

<br>

El tipo `Boolean` **permite envolver un booleano en un objeto.**

Se trata de un tipo "wrapper", es decir, que permite envolver un valor primitivo en un objeto, para usarlo como un objeto.

---

---

<br>

<br>

---

### **Construir un Boolean**

---

<br>

**Para crear una instancia de Boolean, podemos llamar a su constructor.**

```js
let monObjet = new Boolean(true);
```

<br>

---

#### **Ejemplo: Algunos métodos de Boolean**

---

<br>

- **Cada instancia** (copia del boolean) **de Boolean hereda los métodos del objeto `Boolean.prototype`**

- **Los métodos del objeto `Boolean.prototype` se heredan del objeto `Object.prototype`**

---

<br>

Por lo tanto, **podemos llamarlos a través de instancias de `Boolean`**

**Pero también podemos llamar a los métodos estáticos de Object pasando como argumento instancias de Boolean, como podríamos haber hecho para el objeto `Number`**

<br>

Explicaremos más adelante en un vídeo el concepto de prototipo, no se preocupe.

<br>

---

**Ejemplo: código**

```js
// Creamos un Boolean envolviendo el valor "true"
let monObjet = new Boolean(true);


// Algunos métodos de instancia heredados de Boolean.prototype[^1^][1]

// devuelve el valor envuelto
console.log(monObjet.valueOf());

// devuelve una cadena que contiene el valor envuelto
console.log(monObjet.toString()); 





// Algunos métodos estáticos de Object :

// Estos métodos devuelven un array vacío porque no hemos definido ninguna propiedad

// devuelve las claves de las propiedades definidas
console.log(Object.keys(monObjet));


// devuelve los valores de las propiedades definidas
console.log(Object.values(monObjet));

// devuelve los pares clave/valor de las propiedades definidas
console.log(Object.entries(monObjet));  
```

---

---

<br>

<br>

---

### **El objeto Number**

---

<br>

Ya conocemos bien este objeto.

`Number` es un **subtipo de Object que permite almacenar un valor primitivo `Number` en un objeto**, envolviéndolo (es un tipo "wrapper").

**Permite manipular números pasando por un `objeto`.**

**`Number` contiene propiedades estáticas y de instancia** muy útiles **para manipular los números.**

---

---

<br>

<br>

---

### **Construir un `Number`**

---

<br>

**Para construir un Number, podemos llamar a su constructor.**

```js
let monObjet = new Number(12467);
```

---

<br>

**Veamos algunos métodos específicos del objeto Number: 👇**

<br>

---

#### **Ejemplo: Algunos métodos de `Number`**

---

<br>

```js
//Creamos un Number envolviendo el valor "12467"

let monObjet = new Number(12467.28);




//Algunos métodos estáticos

//devuelve un booleano que indica si el número es un entero
console.log(Number.isInteger(16)); 



//devuelve un booleano que indica si el número es un entero representable de forma segura con Number
console.log(Number.isSafeInteger(121152172716642751675821627)); 



//convierte una cadena en un número de coma flotante
console.log(Number.parseFloat("16278.12")); 



//Un método de instancia

//devuelve una cadena que contiene el valor del número redondeado con un número de decimales pasado como argumento
console.log(monObjet.toFixed(1)); 
```

**Los métodos de instancia se heredan del objeto `Number.prototype` por todas las instancias de Number.**

<br>

---

<br>

**Por supuesto, podemos usar los métodos heredados de Object como `valueOf()` o `toString()` con un `objeto Number`:**

```js
let monObjet = new Number(12467.28);


//devuelve el valor primitivo almacenado en el objeto
console.log(monObjet.valueOf());
// devuelve 12467.28

//devuelve una cadena que contiene el valor primitivo almacenado en el objeto
console.log(monObjet.toString()); 
```

---

---

<br>

<br>

---

### **El objeto `String`**

---

<br>

En JavaScript, el objeto nativo **`String` se utiliza para representar y manipular `cadenas de caracteres`**

Permite envolver un valor primitivo de tipo String.

Hay que ver las cadenas de caracteres como conjuntos de símbolos ordenados.

**Cada letra corresponde al valor de una propiedad del objeto.**

---

---

<br>

<br>

---

### **Construir un objeto `String`**

---

<br>

**Para crear un objeto `String`, podemos llamar a su constructor, pasando como argumento la cadena envuelta:**

```js
let monObjet = new String("cadena de caracteres");
```

---

<br>

Podemos observar que **si llamamos al método `Object.values(monObjet)`, se devuelve un `array` que contiene cada carácter de nuestra cadena.**

**Si llamamos a Object.keys(monObjet), es un array que contiene la clave de cada propiedad, siendo cada propiedad un índice `(0, 1, 2, etc.)`**

```js
let monObjet = new String("cadena de caracteres");


// un `array` que contiene la clave (en este caso el indice) de cada propiedad, siendo cada propiedad un índice `(0, 1, 2, etc.)

console.log(Object.keys(monObjet));

// [
//     '0',  '1',  '2',  '3',  '4',
//     '5',  '6',  '7',  '8',  '9',
//     '10', '11', '12', '13', '14',
//     '15', '16', '17', '18', '19'
//   ]



// devuelve un `array` que contiene cada carácter de nuestra cadena.
console.log(Object.values(monObjet));

// [
//     'c', 'a', 'd', 'e', 'n',
//     'a', ' ', 'd', 'e', ' ',
//     'c', 'a', 'r', 'a', 'c',
//     't', 'e', 'r', 'e', 's'
//   ]
```

---

<br>

Se entiende bien en este sentido que **una cadena de caracteres es un conjunto de caracteres ordenados, que constituyen cada uno una propiedad.**

**Cada instancia de String hereda los métodos del objeto `String.prototype`**

<br>

---

#### **Ejemplo: Algunos métodos del objeto String**

---

<br>

```js
monObjet = new String("cadena de caracteres");

//Un ejemplo de método estático


//devuelve una cadena compuesta por los caracteres uni-code pasados como argumentos, en este ejemplo: "CHAINE"
console.log(String.fromCharCode(67, 72, 65, 73, 78, 69));

//Algunos métodos de instancia

console.log(monObjet.charAt(4)); //devuelve el carácter de la cadena almacenada que tiene el índice pasado como argumento
console.log(monObjet.slice(7, 9)); //devuelve una sub-cadena de la cadena original, usando el índice de inicio y fin especificados
```

---

---

<br>

<br>

---

### **El objeto `Array`**

---

<br>

En JavaScript, el objeto `Array` **permite almacenar y manipular colecciones de elementos, que pueden ser de cualquier tipo, incluyendo:**

- cadenas de caracteres

- números

- objetos

  e
  
- incluso otros arrays.

---

<br>

**Para crear un `objeto Array`, podemos llamar a su constructor ( `new Object()` ) o usar la sintaxis literal de array ( `{}` ).**

---

---

<br>

<br>

---

### **Crear un `Array`**

---

<br>

```js
//llamada al constructor
let monObjet = new Array();


//uso de la sintaxis de array
let monObjet2 = [];
```

---

<br>

El `objeto Array` **contiene métodos estáticos y de instancia específicos que ya conocemos.**

**Los métodos de instancia se heredan del objeto `Array.prototype`**

<br>

---

#### **Ejemplo: Algunos métodos de Array**

---

<br>

```js
//llamada al constructor creando un array con dos elementos
let monObjet = new Array(1, 2);



//Un método estático

//devuelve un array a partir de un objeto iterable o una cadena de caracteres
console.log(Array.from("test"));


//Algunos métodos de instancia


//añade uno (o varios) elemento(s) al final del array
console.log(monObjet.push(3)); 

//elimina el último elemento del array
console.log(monObjet.pop());

//añade uno (o varios) elemento(s) al principio del array
console.log(monObjet.unshift(0));

console.log(monObjet);
```

---

---

<br>

<br>

---

### **El objeto `Date`**

---

<br>

El objeto nativo `Date` en JavaScript **se utiliza para trabajar con fechas y horas.**

**Permite crear** instancias de fecha, **manipular** fechas, **mostrarlas y convertirlas en diferentes formatos `.date`**

---

---

<br>

<br>

---

### **Construir un objeto `Date`**

---

<br>

**Para construir un `objeto Date`, necesitamos llamar a su constructor.**

<br>

---

**Si no pasamos ningún argumento, el objeto `Date` almacenará la fecha actual, de lo contrario, almacenará la fecha dada en el argumento:**

```js
//fecha actual
let monObjet = new Date();


//fecha especificada
let date = new Date('2000-12-18T03:24:00'); 
```

---

<br>

Por supuesto, `el objeto Date` **tiene propiedades estáticas y de instancia específicas,** pero no las abordaremos en este curso, se introducirán a su debido tiempo.

Sin embargo, dado que `Date` también **es un objeto**, cada instancia de **`Date` hereda los métodos de instancia del objeto Date.prototype.**

A su vez, `Date.prototype` **hereda los métodos del objeto Object.prototype.**

**Por lo tanto, podemos utilizar los `métodos valueOf()` o `toString()`, por ejemplo, que sin embargo tienen un comportamiento más específico.**

<br>

---

#### **Ejemplo: Llamada a métodos heredados de `Object.prototype`**

---

<br>

```js
monObjet = new Date('2000-12-18T03:24:00');

console.log(monObjet.valueOf());
// El número que nos dará en la consola es este "977106240000" representa esos milisegundos. Si lo divides por 1000 (para obtener segundos), luego por 60 (para obtener minutos), luego por 60 nuevamente (para obtener horas), luego por 24 (para obtener días), y finalmente por 365.25 (para tener en cuenta los años bisiestos y obtener años), obtendrás aproximadamente 31, que es el número de años desde 1970 hasta finales del año 2000. Esto confirma que el valor es correcto.




console.log(monObjet.toString());
// Mon Dec 18 2000 03:24:00 GMT+0100 (hora estándar de Europa central)
```

---

<br>

**Puedes probar este código para ver el comportamiento más específico de los métodos heredados.**

**Profundizaremos en el objeto `Date`, sus propiedades y métodos en un curso dedicado.**

---

---

<br>

<br>

---

### **El objeto `Math`**

---

<br>

El objeto `Math` proporciona métodos para realizar operaciones matemáticas.

Es un objeto nativo de JavaScript.

A diferencia de todos los objetos de los que hemos hablado, el objeto `Math` es un objeto estático, por lo que no puede ser instanciado.

Sin embargo, podemos llamar a sus métodos estáticos para realizar cálculos matemáticos.

<br>

---

#### **Ejemplo: Llamada a métodos del objeto `Math`**

---

<br>

**Aquí tienes algunos ejemplos de métodos del objeto `Math`**

```js
//devuelve la raíz cuadrada del número.
console.log(Math.sqrt(9))

//devuelve un número aleatorio entre 0 y 1
console.log(Math.random())

//devuelve el número máximo en un conjunto de números
console.log(Math.max(1, 12, 13, 52))

//devuelve el número mínimo en un conjunto de números
console.log(Math.min(1, 12, 13, 52))

//devuelve el número redondeado al entero más cercano
console.log(Math.round(26178.516))
```

---

---

<br>

<br>

---

## **Configuración de propiedades personalizadas**

---

<br>

**[Configuración de propiedades personalizadas](https://ressources.studi.fr/contenus/opale/255e250abc0f2f34846ce28be219244b744173a1/co/definition-propriet-personnali.html)**

---

---