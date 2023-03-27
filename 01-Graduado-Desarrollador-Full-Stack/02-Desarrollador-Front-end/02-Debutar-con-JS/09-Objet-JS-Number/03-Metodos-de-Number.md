# **Métodos de Number**

<br>

Ahora que entendemos un poco mejor el concepto de objeto `Number`, **hablemos de algunos de sus métodos.**

**Podemos distinguir dos tipos de métodos:**

- **Los métodos llamados `"estáticos"`**:

  - es decir, los métodos que **"podemos llamar" directamente "a través de" la palabra "`Number`"**.
  
  y
  
- **los métodos `"no estáticos"`**:

  - accesibles a través de los objetos **creados gracias al `constructor Number`.**
  
  - es decir que **"podemos llamar a través de un objeto", es decir, una instancia de `Number`.**

**Los objetos creados gracias a un constructor se llaman “instancias”.**

---

<br>

**Los métodos estáticos no necesitan una instancia de `Number` para ser llamados.**

**Veamos algunos métodos estáticos.**

---

---

<br>
<br>

---

## **Los métodos `Number.is…()`**

---

<br>

**Echemos un vistazo a 4 métodos estáticos:**


- **`Number.isNaN()`**: **[developer.mozilla.org: Number isNaN()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)**

- **`Number.isFinite()`**: **[developer.mozilla.org: Number/isFinite()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)**

- **`Number.isInteger()`**: **[developer.mozilla.org: Number/isInteger()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)**

- **`Number.isSafeInteger()`**: **[developer.mozilla.org: Number/isSafeInteger()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)**


---

<br>

**Cada uno de estos métodos "devolverá un `booleano`".**

1. El primero **devolverá verdadero**:

    - si la expresión pasada **como argumento `no es un número`.**

    ---

    <br>

2. El segundo **devolverá verdadero**:

    - si el número pasado **como argumento `es finito`.**

    ---
    
    <br>

3. El tercero **devolverá verdadero**:

    - **si el número es un entero.**

    y
  
4. El cuarto **devolverá verdadero**:

    - **si el número es un entero** representable **de manera “segura” con Number.**

<br>

---

**Ejemplo JavaScript: Aquí hay algunos ejemplos de llamadas a estos métodos estáticos**

```js
console.log(Number.isNaN(62378)); //false, por que si es un numero
// Para conseguir un True tendriamos que poner por ejemplo un NaN o otro ejemplo seria, dividir un 0 entre 0 "0/0"

console.log(Number.isNaN(NaN)); // True

console.log(Number.isNaN(0/0)); // True



console.log(Number.isFinite(5817629)); //true por que ese numero no es infinito pero ..

console.log(Number.isFinite(Infinity)); // False si .. "Infinity"




console.log(Number.isInteger(5817629.872)); // false Por que es un float pero si fuera entero seria un True

console.log(Number.isInteger(5817629)); // True 



console.log(Number.isSafeInteger(5817629)); //true

console.log(Number.isSafeInteger(5817629.325532)); // seria falso por que es un decimal, en esta parte la cosa es variada a mucho, mejor verlo en la documentación
```

---

---

<br>

<br>

---

## **El objeto `Number.prototype`**

---

<br>

Ahora hablemos de los métodos accesibles a través de objetos creados **a través del constructor `Number`**, es decir, `instancias de Number`.

Estos métodos **(constructor `number`) no son estáticos.**

**Para entender bien, debemos interesarnos rápidamente en el concepto de prototipo.**

<br>

---

<br>

En JavaScript, **cada objeto tiene una propiedad llamada prototipo.**

Esta propiedad es en realidad un objeto que contiene las propiedades heredadas por cada instancia, por cada objeto de su tipo.

El prototipo es en cierto modo un modelo para las instancias, es decir, los objetos de un tipo.

Por lo tanto, la propiedad `Number.prototype` es un objeto que contiene propiedades, incluidos métodos accesibles a todas las instancias de `Number`, así como a todos los `objetos Number`.

<br>

---

**Ejemplo JavaScript: Es posible mostrar las principales propiedades del objeto `Number.prototype` utilizando el método `Object.getOwnPropertyNames()`**

```js
console.log(Object.getOwnPropertyNames(Number.prototype));
```

---

<br>

Podemos ver que la consola muestra diferentes propiedades (que en este caso son métodos) del objeto `Number.prototype`

Estos métodos son heredados por todas las instancias de `Number`.

---

<br>

**Por lo tanto, podemos acceder a los métodos heredados del prototipo escribiendo:**

- `nombreDelObjeto.nombreDelMétodo()`, JavaScript hace el resto. Veamos algunos ejemplos de métodos.

<br>

---

---

<br>

<br>

---

## **El objeto `Los métodos to…()`**

---

<br>

**Veamos dos ejemplos de métodos:**

- `toExponential()`

- `toString()`

---

<br>

El método `toExponential()` devuelve una cadena que contiene el número almacenado en el objeto `Number` con una notación exponencial **(con una potencia)**.

Podemos pasar como argumento el número de decimales (dígitos después del punto decimal).

Por defecto, si no pasamos ningún argumento, el método considerará el número de decimales necesarios para que el número sea representado.

**Si especificamos un argumento, podemos esperar que el resultado sea un número redondeado.**

<br>

---

**Ejemplo JavaScript:**

```js
const numero = new Number(13578);
console.log(numero.toExponential()); //1.3578e+4
console.log(numero.toExponential(2)); //1.36e+4
```

---

<br>

En la primera llamada al método, no se pasa ningún argumento.

El método utiliza el número de decimales necesarios para representar el número con la notación exponencial `(aquí 4: 3578)`.

En la segunda llamada, pasamos como argumento `2`.

Por lo tanto, el resultado contiene dos decimales: `36`.

Podemos ver que hay un redondeo, por lo que el resultado es menos preciso.

---

<br>

**El método `toString()` permite devolver una cadena de caracteres que contiene el valor del número del `objeto Number`.**

<br>

---

**Ejemplo JavaScript:**

```js
const nombre = new Number(13578);

let nombreChaine = nombre.toString();


console.log(nombreChaine); //13578

console.log(typeof nombreChaine); //string
```

---

<br>

**Podemos ver que el tipo de `nombreChaine` es un `string`, es una cadena de caracteres.**

<br>

---

---

<br>

<br>

---

## **El método `ValueOf`**

---

<br>

En el último ejemplo, **recuperamos el valor del número de un objeto `Number` convirtiéndolo en una cadena de caracteres.**

Pero en **algunos casos, querremos recuperar el valor de nuestro número con el tipo primitivo `Number`, y no en forma de una cadena de caracteres.**

<br>

---

**Ejemplo JavaScript: Si hacemos lo siguiente**

```js
const numero = new Number(13578);
let numeroRecup = numero;
console.log(numeroRecup); //Number 13578
```

---

<br>

Vemos que **`numeroRecup` es una referencia al objeto, y NO AL VALOR DE SU NUMERO.**

**`numeroRecup` es por lo tanto un objeto, y no un valor primitivo de tipo `Number`.**

De hecho, es el método `valueOf()` del prototipo el que nos permitirá recuperar el valor del número, con el tipo primitivo Number.

<br>

---

**Tomemos un ejemplo:**

```js
const numero = new Number(13578);
let numeroRecup = numero.valueOf();

console.log(numeroRecup); //13578
console.log(typeof numeroRecup); //number
```

<br>

Por lo tanto, **con el método `valueOf()`, podemos recuperar el valor primitivo que ha sido envuelto en el `objeto Number`.**

El método `valueOf()` será **ESENCIAL PARA USAR EN LOS CASOS EN QUE QUERAMOS ACCEDER AL NUMERO ALMACENADO EN UN `objeto Number`.**

<br>

---

---