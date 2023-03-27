# **Ejercicio para el tema: Descubrir Objetos JS Number**

<br>

---

## **Question-1**

---

<br>

Créer un objet Number dont la valeur est de 1256753 :

<br>

---

**Código:**

```js
//code
console.log(nombre);
```

---

---

<br>

---

## **Question-2**

---

<br>

Créer une fonction permettant de renvoyer le produit de deux objets Number.

<br>

---

**Código:**

```js
const a = new Number(10);
const b = new Number(12);
//function
console.log(/*appel*/) ;
```

---

---

<br>

---

## **Question-3**

---

<br>

Afficher dans la console la valeur maximale représentable via un objet Number.

<br>

---

**Código:**

```js
console.log(/*code*/) ;
```

---

---

<br>

---

## **Question-4**

---

<br>

Afficher dans la console la valeur minimale représentable via un objet Number.

<br>

---

**Código:**

```js
console.log(/*code*/) ;
```

---

---

<br>

---

## **Question-5**

---

<br>

Créer un objet Number à partir de la chaîne de caractères nombre.

L’objet Number sera stocké via la variable nb.

<br>

---

**Código:**

```js
const nombre = "5675";
const nb = /*code*/
console.log(nb);
```

---

---

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

<br>

**Descripción en español:**

---

<br>---

## **Pregunta 1**

---

<br>

Crea un objeto Number en el que el valor es de 1256753:

<br>

---

**Código:**

```js
//code
console.log(nombre);
```

<br>

---

**Resultado-1**

```js
const nombre = new Number(1256753)
// Una constante que contiene un objeto Numero que es el 1256753

console.log(nombre);
```

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

Crear una función para devolver el producto de dos objetos Number.

<br>

---

**Código:**

```js
const a = new Number(10);
const b = new Number(12);
//function
console.log(/*appel*/) ;
```

<br>

---

**Resultado-2**

```js
const nb = new Number(10);
const nb2 = new Number(12);
// Los objetos number 👆


function mul(a, b) {
  return a * b;
}
// Creamos 👆 una función para que devuelva el producto de dos numeros 


console.log(mul(nb, nb2));
// Mostramos 👆 en consola el producto devuelto por dos objetos number usando la función que creamos mas arriba

```

<br>

---

---

<br>

---

## **Pregunta 3**

---

<br>

Muestra en la consola el valor máximo representable via un objet Number.

<br>

---

**Código:**

```js
console.log(/*code*/) ;
```

<br>

---

**Resultado-3**

```js
console.log(Number.MAX_VALUE);

// Salida esperada: 1.7976931348623157e+308
```

---

---

<br>

---

## **Pregunta 4**

---

<br>

Muestra en la consola el valor mínimo representable via un objet Number.

<br>

---

**Código:**

```js
console.log(/*code*/) ;
```

<br>

---

**Resultado-4**

```js
console.log(Number.MIN_VALUE);

// Salida esperada: 5e-324
```

---

---

<br>

---

## **Pregunta 5**

---

<br>

Crear un objeto Number a partir de la cadena de caracteres nombre.

El objeto Number sera almacenado mediante la variable nb.

<br>

---

**Código:**

```js
const nombre = "5675";
const nb = /*code*/
console.log(nb);
```

<br>

---

**Resultado-5**

```js
const nombre = "5675";
const nb = new Number(nombre);
// Con new Number, la cadena de caracteres nombre se vuelve Un numero, indicando en la función Number() y dentro de los paréntesis indicando la constante nombre que contiene una cadena de caracteres que son numeros

console.log(nb);
```

---

---