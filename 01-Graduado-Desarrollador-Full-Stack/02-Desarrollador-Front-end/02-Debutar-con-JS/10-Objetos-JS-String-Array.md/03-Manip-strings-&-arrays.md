# **Manipulación de cadenas `(strings)` y arreglos `(arrays)`**

<br>

**En esta segunda parte, se pondrá especial énfasis en la manipulación de objetos `string` y `array`.**

Para ello, **nos centraremos en la asociación de:**

- variables

- propiedades

    y

- métodos

<br>

**para realizar ciertas acciones con nuestros datos.**

---

<br>

Por lo tanto, **es necesario saber más sobre las propiedades y métodos de estos dos tipos de datos.**

<br>

---

<br>

Los objetos `string` se utilizan para "representar y manipular" `cadenas de caracteres`, que son útiles para almacenar datos en forma de texto.

**Varias operaciones comunes están disponibles para manipular cadenas de caracteres, como:** 

- **verificar la longitud con:**

    - `.length`

    ---

    <br>

- **concatenar con los operadores:**

    - `+`

        y
    
    - `+=`

    ---

    <br>

- **buscar sub-cadenas con los métodos:** 

    - `includes()`

        o

    - `indexOf()`

    ---

    <br>

    Y

- **extraer sub-cadenas con el método:**

    - `substring()`

<br>

---

<br>

**Examinaremos 2 métodos:**

- **el método `slice()`:**

    - para extraer una sección de un arreglo y devolver un nuevo arreglo con los elementos seleccionados

    y

- **el método `split()`:**

    - para dividir una cadena en un arreglo de sub-cadenas

<br>

---

## **Extracción de una sub-cadena de una cadena y división de una cadena en sub-cadenas**

---

<br>

```js
// Se crea una nueva cadena de texto y se asigna a la variable "historique":
let historique = new String("(réf : 775533) commandé le 25/03/2020 10 sacs riz");



// Se utiliza el método "slice" para extraer una sección de la cadena "historique" desde el índice 7 hasta el índice 13 (sin incluir)
// y se muestra en una ventana de alerta
alert(historique.slice(7, 13));

// Se utiliza el método "split" para dividir la cadena "historique" en un arreglo de subcadenas utilizando un separador vacío
// Esto significa que cada carácter de la cadena original se convierte en un elemento del arreglo resultante
// El arreglo resultante se muestra en la consola
console.log(historique.split(""));
```

---

<br>

1. **Almacenamos una cadena:**

    - **en un `objeto string`.**

    ---

    <br>

2. Luego, **hacemos una alerta con el `método slice(7, 13)`** de nuestro **`objeto historique`** como argumento.

    ---

    <br>
    
3. Se nos **devuelve una sub-cadena extraída** entre los índices 7 (incluido) y 13 (no incluido), es decir, `775533`, gracias a `slice`.

4. En cuanto al método `split("")`, solo con las comillas simples, **dividirá nuestra cadena de caracteres en sub-cadenas y las colocará en una matriz de 49 caracteres.**

5. Considera el carácter pasado como carácter separador.

---

<br>

**EN CONSOLA sustituimos `alert`, por `console.log`, para ver el resultado que seria este:**

```swift
775533
[
  '(', 'r', 'é', 'f', ' ', ':', ' ', '7',
  '7', '5', '5', '3', '3', ')', ' ', 'c',
  'o', 'm', 'm', 'a', 'n', 'd', 'é', ' ',
  'l', 'e', ' ', '2', '5', '/', '0', '3',
  '/', '2', '0', '2', '0', ' ', '1', '0',
  ' ', 's', 'a', 'c', 's', ' ', 'r', 'i',
  'z'
]
```

<br>

---

### **`charAt()` e `indexof()` : Otras pruebas de manipulación del objeto `string`**

---

<br>

**Vamos a practicar la concatenación y manipulación de un `string` con métodos comunes como:** 

- `charAt()`

    e 

- `indexof()`

<br>

---

**Ejemplo:**

```javascript
let concat = 'Hello ' + ' World !';

console.log(concat);
```

---

<br>

**otro ejemplo demás:**

```js
let nom = "Paul";

let age = 44;

console.log('Je m\’appelle ' + nom + ', et j\’ai ' + age + ' ans.');
```

---

<br>

**En estos 2 ejemplos, hemos utilizado el operador `"+"` para concatenar nuestras cadenas de caracteres.**

---

<br>

Ahora **usemos el método `charAt()`** para entender cómo funciona.

<br>

---

### **El método `charAt()`**

---

<br>

**El método `charAt()` permite devolver el carácter de una cadena para el índice pasado como argumento.**

<br>

---

**Ejemplo:**

```javascript
// Creamos una nueva cadena de texto utilizando el constructor String
let chaine = new String('Comment ça fonctionne ?');

// Definimos el índice del carácter que queremos obtener
let index = 4;

// Utilizamos el método `charAt()` para obtener el carácter en el índice especificado

// y lo mostramos en la consola junto con un mensaje descriptivo
console.log(`Le caractère à l’index ${index} est ${chaine.charAt(index)}`);
// El resultado de este console.log será: "Le caractère à l’index 4 est m"

// que significa el carácter tiene de indice 4 es "e" (por que es la 5ta letra de la palabra comment) 
```

---

<br>

**Hicimos un `console.log` y usamos entre `backticks ``` `` ```, una cadena de caracteres (````Le caractère à l’index ${index} est ${chaine.charAt(index)}````) y la interpolación (`````${index}`````) para insertar las variables.**

**Escribimos el símbolo del dólar con llaves, `${}` dentro de las cuales colocamos nuestras expresiones.**

---

<br>

1. **La primera vez:**

    - **SIMPLEMENTE INTERPOLAMOS LA VARIABLE index `(${index} = a tomar el valor de let index = 4;)`.**

    ---

    <br>

2. **Pero, la segunda vez**

    - **INTERPOLAMOS EL VALOR RETORNO del método `charAt()` del `objeto chaine` (`... est ${chaine.charAt}`);`)**
    
        y
        
    - **luego pasamos la variable `index` como argumento (`... est ${chaine.charAt(index)}`);`)**

---

<br>

**Al final, se nos devuelve la frase:**

- el carácter en el índice 4 es e.

---

<br>

**La manipulación ha sido exitosa.**

<br>

---

### **El método `indexOf()`**

---

<br>

**Hablemos ahora del método `indexOf()`.**

```js
// Declaramos una variable llamada 'cadena1' y le asignamos un valor de tipo string
let cadena1 = 'Le renard brun et rapide saute par-dessus le chien endormi.';

// Declaramos una variable llamada 'cadena2' y le asignamos un valor de tipo string
let cadena2 = 'chien';


// Declaramos una variable llamada 'cadena3' y le asignamos el valor que devuelve el método 'indexOf' de la variable 'cadena1'

// El método 'indexOf' busca la primera aparición del valor especificado en la variable cadena 2 (en este caso, el valor de la variable 'cadena2' es chien) en la cadena de texto y devuelve su posición
let cadena3 = cadena1.indexOf(cadena2);
// Imprimimos en consola una plantilla de cadena que incluye el valor de las variables 'cadena2' y 'cadena3'
console.log(`el índice de ${cadena2} desde el principio es ${cadena3}`);
```

---

<br>

**`indexOf()` nos ayuda a encontrar la posición de una sub-cadena en una cadena de caracteres.**

**EN ESTE EJEMPLO, "NO CREAMOS un `objeto string`", sino que JavaScript creará un `objeto string` temporal al llamar al método `indexOf()`**

<br>

---

<br>

**Nuestra primera `variable cadena1` contiene una cadena de caracteres entre comillas.**

**La segunda `variable cadena2` almacena otra cadena que contiene "chien".**

```
¿Cuál es el índice de la palabra chien en la primera variable?
```

**Creamos una tercera `variable cadena3` y la definimos en el valor de retorno de `cadena1.indexOf(cadena2)`.**

**Para terminar con un `console.log`, entre paréntesis pusimos los backticks (``` `` ```) del texto con la interpolación de `cadena2` y luego otra interpolación con `cadena3`.**

---

<br>

**Esto es lo que dio:**

- el índice del 'chien' desde el principio es `45`.

---

<br>

El método **`indexOf()` permite conocer el `índice` de una sub-cadena** "en una cadena de caracteres".

---

---

<br>

<br>

---

## **Manipulación de un array mediante sus propiedades y métodos**

---

<br>

Para **conocer el número de elementos de un array**, al igual que con una cadena de caracteres, **utilizamos la propiedad `.length`**

**Esta propiedad es de tipo entero y nos indica el número de elementos presentes en un array.**

<br>

---

<br>

**Los desarrolladores a menudo recurren a los `bucles` para recorrer los elementos de un array.**

Por ejemplo, **el `bucle for` es muy común.**

- Así, **si la propiedad `.length` nos ayuda a determinar el tamaño de un array.**

- **El `bucle for`** es una herramienta más práctica **para recuperar la lista de todos los elementos del array.**

---

<br>

---

### **La propiedad `.length` se utiliza en el `bucle for`**

---

<br>

```js
 let numero = ['uno', 'dos', 'tres', 'cuatro', 'quince'];
 for (let elemento of numero) {
   console.log(elemento);
}
```

**Utilizamos la palabra clave `" of "` "para recorrer cada valor del array"**

---

---

<br>

<br>

---

## **Agregar y eliminar un elemento con los métodos `push()` y `pop()`**

---

<br>

**Para agregar o eliminar un elemento, podemos usar:**

- `push()`: **para agrega**

    y
    
- `pop()`: **para eliminar**

---

<br>

---

**Ejemplo JavaScript: Para hacerlo, vamos a crear un `array` y aplicarle estos dos métodos.**

```js
// Declaramos un array llamado 'miArray' con cinco elementos
let miArray = ['París', 'Marsella', 'Lyon', 'Burdeos', 'Toulouse'];

// Utilizamos el método 'push' para agregar los elementos 'Lille' y 'Estrasburgo' al final del array
miArray.push('Lille', 'Estrasburgo');

// Utilizamos el método 'pop' para eliminar el último elemento del array
miArray.pop();

// Imprimimos el array en la consola para verificar los cambios
console.log(miArray);
```

---

<br>

**Podemos ver que `push()` permite agregar elementos mientras que `pop()` elimina el último elemento.**

---

---

<br>

<br>

---

## **Usar los métodos `shift()` y `unshift()`**

---

<br>

```js
// Declaramos un array llamado 'numeros' con cuatro elementos
let numeros = [1, 2, 3, 4];

// Utilizamos el método 'shift' para eliminar el primer elemento del array
numeros.shift();

// Mostramos una alerta con los elementos del array después de eliminar el primer elemento
alert(numeros); //2,3,4

// Utilizamos el método 'unshift' para agregar el elemento '0' al principio del array
numeros.unshift(0);

// Mostramos una alerta con los elementos del array después de agregar el elemento '0' al principio
alert(numeros);//0,2,3,4
```

---

<br>

**El principio es bastante simple:**

- `unshift()`:

    - **permite agregar un elemento al principio del array**

    ---

    <br>

- `shift()`:

    - **elimina el primer elemento del array**

---

---

<br>

<br>

---

## **Otras manipulaciones posibles con los métodos `split()`, `length`, `toString()`**

---

<br>

**Hay muchas otras formas de manipular arrays en `JS`**

<br>

---

**Aquí hay algunas:**

```js
// Crea una cadena de caracteres que contiene los nombres de las ciudades separados por comas
let misDatos = 'París, Londres, Berlín, Roma, Madrid';


// Usa el método split() para transformar la cadena en un array basándose en el separador (coma seguida de un espacio)
let miArray = misDatos.split(', ');


// Muestra la longitud del array (número de elementos)
console.log(miArray.length);


// Muestra la cadena de caracteres inicial (misDatos)
console.log(misDatos);


// Muestra el array creado a partir de la cadena de caracteres (miArray)
console.log(miArray);


// Muestra el primer elemento del array (índice 0)
console.log(miArray[0]);


// Muestra el último elemento del array (índice igual a la longitud del array menos 1)
console.log(miArray[miArray.length - 1]);


// Usa el método join() para fusionar los elementos del array en una nueva cadena de caracteres (miNuevaCadena)
let miNuevaCadena = miArray.join(', ');


console.log(miNuevaCadena);
// Crea un array que contiene los nombres de los jugadores
let nombresDeJugadores = ["Neymar", "Kylian", "Cristiano", "Lionel"];
// Usa el método toString() para convertir el array de nombres de jugadores en una cadena de caracteres
console.log(nombresDeJugadores.toString());

```

---

---

<br>

<br>

---

## **Complemento: Tabla multidimensional**

---

<br>

**Una tabla multidimensional** es una tabla que, como su nombre indica, **tiene varias dimensiones,** por ejemplo, **el eje de las columnas y el eje de las filas.**

<br>

---

**Creamos una tabla multidimensional.**

```js
let coches = [["Peugeot", "208"], ["Renault", "Clio"]];
console.log(coches[1][0]); //"Renault"

// Aquí el primer indice entre corchetes el [1], indica la fila osea que contiene Renault clio
// y el segundo indice entre corchetes [0] indica que elemento de ese array o de esa fila = que es "Renault" 
// y los elementos entre comillas indican columnas
```

---

<br>

En este ejemplo, **creamos una tabla de 2 dimensiones ( `[ [] [] ]` ).**

**Los corchetes anidados representan filas.**

**En este ejemplo tenemos dos filas y dos columnas.**

**Buscamos acceder al índice 1 de nuestra tabla, que corresponde a `[“Renault”, “Clio”]`.**

**Luego buscamos recuperar el índice `0` de `[“Renault”, “Clio”]`, que es el valor `"Renault"`.**

---

---