# **Ejercicio Operadores-aritméticos-&-asignación**

<br>

---

## **Question-1**

---

<br>

Insérer le bon opérateur pour obtenir la différence de "a" par "b".

<br>

---

```js
let a = 1376;
let b = 630;
console.log(a /*operateur*/ b)
```

---

sortie attendue: 746

---

---

<br>

---

## **Question-2**

---

<br>

Insérer le bon opérateur pour que la console incrémente de 1 la variable nombre.

<br>

---

```js
let nombre = 3;

nombre/*operateur*/;

console.log(nombre);
```

---

---

<br>

---

## **Question-3**

---

<br>

La console doit afficher « L'ordinateur HP a 16 GO de ram ».

<br>

---

```js
let marque = "HP";

let ram = 16;

console.log(/*code*/marque/*code*/ram/*code*/);
```

---

---

<br>

---

## **Question-4**

---

<br>

Voici un script qui permet d'afficher le produit d'un nombre par 3 et de le stocker dans la même variable.

Insérer le bon opérateur pour qu'il fonctionne.

<br>

---

```js
let nombre = 9;

nombre/*operateur*/3;

console.log(nombre);
```

---

---

<br>

---

## **Question-5**

---

<br>

Voici un script qui permet d'afficher le périmètre d'un rectangle.

Insérer les bons opérateurs pour qu'il soit opérationnel.

<br>

---

```js
let largeur = 9;

let longueur = 10;

let perimetre = 2 /*operateur*/ largeur /*operateur*/ 2 /*operateur*/ longueur;

console.log(perimetre);
```

---

sortie attendue: 38

---

---

<br>

<br>

**Ejercicio en español:**

---

<br>

---

## **Pregunta-1**

---

<br>

Inserta el operador correcto para obtener la diferencia de "a" por menos "b".

<br>

---

```js
let a = 1376;
let b = 630;
console.log(a /*operador*/ b)
```

---

resultado esperado: 746

<br>

---

**Resultado**

```js
let a = 1376;
let b = 630;
console.log(a - b)
```

---

---

<br>

---

## **Pregunta-2**

---

<br>

Inserta el operador correcto para que la consola incremente en 1 la variable "numero".

<br>

---

```js
let numero = 3;

numero/*operador*/;

console.log(numero);
```

---

<br>

---

**Resultado**

```js
let numero = 3;

numero ++;

console.log(numero);
```

---

---

<br>

---

## **Pregunta-3**

---

<br>

La consola debe mostrar "El ordenador HP tiene 16 Gb de ram".

<br>

---

```js
let marca = "HP";

let ram = 16;

console.log(/*código*/marca/*código*/ram/*código*/);
```

---

<br>

---

**Resultado**

```js
let marca = "HP";

let ram = 16;

console.log("El ordenador " + marque + " tiene " + ram + " Gb de ram");
/* con la concatenación 👆 "+"         
tenemos que dar espacios en las palabras entre comillas como mostrado con el dedo emoji*/

/* en cambio con la "," coma pues los espacios se dan automáticamente */






/* pero con esto 👇*/

let marque = "HP";

let ram = 16;

console.log("L'ordinateur", marque, "a", ram, "Go de ram");

/* No haría falta dar espacios mas los espacios que uno da después de poner una coma */




/* con coma, se dan argumentos uno tras otro*/

// con + creamos una frase ...  concatenamos las palabras, como la palabra lo indica.

```

---

---

<br>

---

## **Pregunta-4**

---

<br>

Aquí tienes un script que muestra el producto (el resultado) de un número (como es el 9) por( por 3 veces) 3 y lo almacena en la misma variable.

Inserta el operador correcto para que funcione.

<br>

---

```js
let numero = 9;

numero/*operador*/3;

console.log(numero);
```

---

<br>

---

**Resultado**

```js
let numero = 9;

numero *= 3;

console.log(numero);
```

---

---

<br>

---

## **Pregunta-5**

---

<br>

Aquí tienes un script que muestra el perímetro de un rectángulo.

Inserta los operadores correctos para que sea funcional.

<br>

---

```js
let anchura = 9;

let longitud = 10;

let perímetro = 2 /*operador*/ anchura /*operador*/ 2 /*operador*/ longitud;

console.log(perímetro);
```

---

Resultado esperado: 38

<br>

---

**Resultado**

```js
let anchura = 9;

let longitud = 10;

let perímetro = 2* anchura + 2* longitud;

console.log(perímetro);
```

---

---