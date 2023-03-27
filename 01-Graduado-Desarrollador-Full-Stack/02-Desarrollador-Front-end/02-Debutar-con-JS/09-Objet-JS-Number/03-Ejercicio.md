# **Ejercicio para el tema: Métodos de Number Number**

<br>

---

## **Question-1**

---

<br>

Créer une fonction permettant de savoir si un objet Number est un entier, et afficher sa valeur de retour dans la console avec l’objet nombre passé comme argument. La valeur de retour de la fonction sera un booléen.

<br>

---

**Código:**

```js
const nombre = new Number(1678);
//code
```

---

---

<br>

---

## **Question-2**

---

<br>

Créer une fonction permettant de retourner un nombre avec écriture exponentielle (avec 4 chiffres décimaux max).

Afficher sa valeur de retour en passant nombre en argument.

<br>

---

**Código:**

```js
const nombre = new Number(3167830918);
//code
```

---

---

<br>

---

## **Question-3**

---

<br>

Nous voulons afficher dans la console le nombre de caractères (chiffres) d’un nombre.

Pour cela, nous voulons convertir sa valeur en chaîne de caractères pour afficher la propriété length qui correspond au nombre de caractères d’une chaîne.

Corriger le code pour qu’il fonctionne :

<br>

---

**Código:**

```js
const nombre = new Number(3167830918);
console.log(Number.toString(nombre).length)
```

---

---

<br>

---

## **Question-4**

---

<br>

Nous voulons afficher dans la console un booléen indiquant si nombre contient un nombre fini (avec un nombre fini de chiffres).

Ce code renvoie false alors que le nombre stocké par l’objet nombre est fini.

Corriger le code pour qu’il fonctionne :

<br>

---

**Código:**

```js
const nombre = new Number(8909.61892);
console.log(Number.isFinite(nombre));
```

---

---

<br>

---

## **Question-5**

---

<br>

Créer une fonction permettant de déterminer si un nombre est un multiple de 10 ou non.

Cette fonction permettra de passer un nombre en paramètre qui sera un objet Number.

La valeur de retour sera un booléen.

Une fois la fonction définie, l’appeler en passant nombreTest en argument.

<br>

---

**Código:**

```js
const nombreTest = new Number(15267);
//définition de la fonction
console.log(/*valeur de retour de la fonction*/);
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

Crear una función que nos permita saber si un objeto Number es un entero, y mostrar su valor de retorno en la consola con el objeto Number pasado como argumento.

El valor de retorno de la función será booleano.

<br>

---

**Código:**

```js
const nombre = new Number(1678);
//code
```

<br>

---

**Resultado-1**

```js
const nombre = new Number(1678);
function entier (nb) {
  return Number.isInteger(nb.valueOf());
}

// Si el numero fuera decimal 12.029 ejemplo, este nos devolveria false, por que no es entero

// En cambio si es entero y da true.

// Por otro lado, con valueOf(), sabremos el tipo y veremos el tipo

console.log(entier(nombre));
```

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

Crear una función que permita devolver un número con escritura exponencial (con 4 decimales como máximo).

Mostrar su valor de retorno pasando nombre como argumento.

<br>

---

**Código:**

```js
const nombre = new Number(3167830918);
//code
```

<br>

---

**Resultado-2**

```js
const nombre = new Number(3167830918);
function exp(nb) {
  return nb.toExponential(4);
}
console.log(exp(nombre));

// mostrara: 3.1678e+9
```

<br>

---

---

<br>

---

## **Pregunta 3**

---

<br>

Queremos mostrar en la consola el número de caracteres (dígitos) de un número.

Para ello, queremos convertir su valor en una cadena de caracteres para mostrar la propiedad length que corresponde al número de caracteres de una cadena1.

Corregir el código para que funcione:

<br>

---

**Código:**

```js
const nombre = new Number(3167830918);
console.log(Number.toString(nombre).length)
```

<br>

---

**Resultado-3**

```js
const nombre = new Number(3167830918);
console.log(nombre.toString().length)

// mostrara 10:

// En el primer ejemplo, el método `toString()` se llama incorrectamente en el objeto `Number` en lugar del objeto `nombre`. Esto produce un error porque el método `toString()` no es un método estático de la clase `Number`, sino un método de instancia que solo se puede llamar en objetos `Number`. Mientras que en el segundo ejemplo, el método `toString()` se llama correctamente en el objeto `nombre`, lo que permite obtener la representación de cadena del número y luego calcular su longitud.
```

---

---

<br>

---

## **Pregunta 4**

---

<br>

Queremos mostrar en la consola un valor booleano que indique si el número contiene un número finito (con un número finito de dígitos).

Este código devuelve false aunque el número almacenado por el objeto número es finito.

Corregir el código para que funcione:

<br>

---

**Código:**

```js
const nombre = new Number(8909.61892);
console.log(Number.isFinite(nombre));
```

<br>

---

**Resultado-4**

```js
const nombre = new Number(8909.61892);
console.log(Number.isFinite(nombre.valueOf()));

// Debemos usar el método valueOf() para recuperar el valor del número almacenado, en lugar del objeto Number directamente.

// en el primero nos da false por que con Number.isFinite(nombre), preguntamos por el objeto y los objetos no podemos saber su limite con lo cual es false no es finito.. puede que sea o no, entonces con valueOf obtenemos el valor almacenado number del objeto number 
```

---

---

<br>

---

## **Pregunta 5**

---

<br>

Crear una función que permita determinar si un número es múltiplo de 10 o no.

Esta función permitirá pasar un número como parámetro que será un objeto Number.

El valor de retorno será un booleano.

Una vez definida la función, llamarla pasando nombreTest como argumento.

<br>

---

**Código:**

```js
const nombreTest = new Number(15267);
//définition de la fonction
console.log(/*valeur de retour de la fonction*/);
```

<br>

---

**Resultado-5**

```js
const nombreTest = new Number(15267);

function isMultipleDix(nb) {
  return (nb.valueOf() % 10 == 0);
}

console.log(isMultipleDix(nombreTest));
```

---

<br>

Este código define una función llamada isMultipleDix que toma un objeto Number como parámetro y devuelve un valor booleano que indica si el número es múltiplo de 10 o no. La función utiliza el método valueOf() para obtener el valor del número almacenado en el objeto Number y luego utiliza el operador de módulo (%) para calcular el resto de la división del número por 10. Si el resto es igual a 0, entonces el número es múltiplo de 10 y la función devuelve true. De lo contrario, devuelve false.

Después de definir la función, se crea un objeto Number llamado nombreTest con un valor de 15267. Luego, se llama a la función isMultipleDix pasando nombreTest como argumento y se registra el resultado en la consola. En este caso, el resultado sería false, ya que 15267 no es múltiplo de 10.

---

<br>

Igualmente, usamos el método `valueOf()` para recuperar el valor del número almacenado por el objeto `Number` pasado como argumento.

<br>

---

---