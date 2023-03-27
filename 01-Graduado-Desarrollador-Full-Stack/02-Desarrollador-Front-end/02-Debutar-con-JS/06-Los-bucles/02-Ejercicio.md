# **Ejercicio para el tema: Bucle `for`**

<br>

---

## **Question-1**

---

<br>

Insérer la bonne condition pour que la chaîne de caractères nombres contienne les nombres entiers de 120 (inclus) à 130 (inclus).

<br>

---

**Código:**

```js
let nombres = "";

nb = 120;

for (/*condition*/) {

  nombres += nb + " ";

  nb ++;

}

console.log (nombres);
```

---

---

<br>

---

## **Question-2**

---

<br>

Écrire une boucle pour que la variable totale contienne l’addition de tous les prix présents dans le tableau prix :

<br>

---

**Código:**

```js
let total = 0;

let prix = [27, 36, 89, 18, 25];

//boucle

console.log (total);
```

---

---

<br>

---

## **Question-3**

---

<br>

Écrire une boucle permettant de stocker dans une chaîne de caractères (multiples) tous les 20 premiers multiples de la variable nombre.

Dans la chaîne, ils seront séparés par un espace.

<br>

---

**Código:**

```js
let nombre = 8;

let multiples = "";

//boucle

console.log (multiples);
```

---

---

<br>

---

## **Question-4**

---

<br>

Écrire une boucle permettant de dire pour chaque item du tableau marque si la marque est valide. Les marques acceptées sont : « Apple », « HP », « Dell » et « Microsoft ». Si la marque est valide, la console devra afficher « La marque est valide », sinon « La marque n’est pas valide ».

<br>

---

**Código:**

```js
let marques = ["Apple", "Acer", "HP", "Packard-Bell"];

//boucle
```

---

---

<br>

---

## **Question-5**

---

<br>

Dans ce script, on crée un objet ordinateur. Sans aller dans les détails, on comprend juste que cet ordinateur va avoir deux propriétés : ram et stockage. Écrire une boucle qui permet d’afficher dans la console pour chaque propriété, le nom de la propriété et sa valeur. Par exemple : "ram = 256".

<br>

---

**Código:**

```js
let ordinateur = new Object();

ordinateur.ram = 256;

ordinateur.stockage = 512;

//boucle
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

Inserta la condición adecuada para que la cadena de caracteres "numeros" contenga los números enteros del 120 (inclusive) al 130 (inclusive).

<br>

---

**Código:**

```js
let numeros = "";

nb = 120;

for (/*condición*/) {

  numeros += nb + " ";

  nb ++;

}

console.log (numeros);
```

<br>

---

**Resultado-1**

```js
let numeros = "";
/* Declaramos una variable como espacio*/

nb = 120;
/* declaramos con que numero iniciar la cuenta*/

for (let i = 0; i <= 10; i ++ ) {
  /*La cantidad del bucle for se ejecutara
  siempre y cuando el paréntesis de control sea cierto,
  definiendo que si queremos llegar con la variable 120 a 130,
  pues este bucle se iterara 10 veces, hasta 130*/

  numeros += nb + " ";
  /*para mostrar en consola la iteración, declaramos que
  la variable "numeros (que tenia declarado un espacio 
  en su memoria ahora valga = nb (osea 120 + espacio)"*/

  nb ++;
  /*nb (osea 120), se va aumentando hasta 130, por que aumentara en 1 a cada iteración!*/

}

console.log (numeros);
/*mostrara del 120 al 130 y entre cada numero un espacio*/
```

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

Escribe un bucle para que la variable "total" contenga la suma de todos los precios presentes en el array "precio":

<br>

---

**Código:**

```js
let total = 0;

let precio = [27, 36, 89, 18, 25];

//bucle

console.log (total);
```

<br>

---

**Resultado-2**

```js
let total = 0;
/*Declaramos una variable que vale 0*/

let precio = [27, 36, 89, 18, 25];
/*Declaramos un array con valores de tipo number dentro*/

for (let i of precio) {
/*En el paréntesis de control indicamos que para
cada valor del array precio nos navegue sus valores*/

let total += i
/*Declaramos que total, que antes valía 0
ahora valga y se le asigne este nuevo valor,
el operador es capaz de sumar y no de concatenar por que 
los valores son de tipo number, y en
el console.log Daria esto:
$ node test.js
195 */

/*Si fueran de string, pues los concatenaría como si fueran 
palabras y el 0 de la primera vez declarado se uniría el primero
si fuera asi: let precio = ["27", "36", "89", "18", "25"];
en el console log Daria esto: 
$ node test.js
02736891825*/



}


//bucle

console.log (total);
```

<br>

---

---

<br>

---

## **Pregunta 3**

---

<br>

Escribe un bucle que permita almacenar en una cadena de caracteres llamada "multiplos" los primeros 20 múltiplos de la variable "numero".

En la cadena, estarán separados por un espacio.

<br>

---

**Código:**

```js
let numero = 8;

let multiples = "";

//bucle

console.log (multiples);
```

<br>

---

**Resultado-3**

```js
/*Escribe un bucle que permita almacenar en una cadena de caracteres llamada "multiplos" los primeros 20 múltiplos de la variable "numero".

En la cadena, estarán separados por un espacio.*/

let numero = 8;
/*Declaramos el 8 ya que queremos los 20 
primero multiplos de la variable numero*/

let multiplos = "";
/*la variable multiplos para tener un espacio 
entre estos cuando sean mostrados*/

for (let i = 1; i <= 20; i ++) {
  /* Declaramos del 1 al 20 por que queremos
tener los 20 primeros, asi que la iteración,
sera del 1 al 20*/

multiplos += (numero * i) + " ";
/*Cuidado!, aqui :

si ponemos esto:

multiplos = (numero * i) + " ";

ya que en cada iteración, esta asignación sobrescribe el
 valor anterior de "multiplos", por lo que al final del bucle, 
 solo se almacenará el último múltiplo calculado. Por lo tanto,
 que es 160.
 por lo tanto

multiplos += (numero * i) + " ";

En este ejemplo, el operador de combinación de asignación "+="
 acumula los resultados de la multiplicación en cada iteración del bucle.
 El operador "+=" realiza una concatenación de cadenas, por lo 
 que en cada iteración, el resultado de la multiplicación "(numero * i)" se
 concatena con el valor anterior de "multiplos" y un espacio en blanco.
 Esto permite que los múltiplos se acumulen en la variable "multiplos" en 
 lugar de sobrescribirse en cada iteración.*/

}

console.log (multiplos);
```

---

---

<br>

---

## **Pregunta 4**

---

<br>

Escribe un bucle que verifique para cada elemento del array "marcas" si la marca es válida.

Las marcas aceptadas son: "Apple", "HP", "Dell" y "Microsoft".

Si la marca es válida, la consola deberá mostrar "La marca es válida", de lo contrario, mostrará "La marca no es válida".

<br>

---

**Código:**

```js
/* Escribe un bucle que verifique para cada elemento del array "marcas" si la marca es válida.

Las marcas aceptadas son: "Apple", "HP", "Dell" y "Microsoft".

Si la marca es válida, la consola deberá mostrar "La marca es válida", de lo contrario, mostrará "La marca no es válida". */

let marcas = ["Apple", "Acer", "HP", "Packard-Bell"];
/*Declaramos la lista/array con las marcas!*/

for (let marca of marcas) {
  /*Se nos pide escribir un bucle y lo creamos,
  se nos pide que verifiquemos si una marca 
  del array marcas, se encuentra en esta lista,
  y si se encuentra sera valido*/
  
  if(marca == "Apple" || marca == "Acer" || marca == "HP" || marca == "Packard-Bell"){
    /* Con lo cual decimos, que si:
    una marca de las que están en ese array, se encuentra 
    en alguna de estas opciones del if, que se valida la marca*/
    
    console.log("La marca " + marca + " es valida");
  }else{
    /*de lo contrario que diga que la marca no es valida*/
    console.log("La marca no es valida");
  }
}
```

---

---

<br>

---

## **Pregunta 5**

---

<br>

En este script, se crea un objeto "ordenador" (computadora).

**Sin entrar en detalles, solo se entiende que esta computadora tendrá dos propiedades:**

"ram" y "almacenamiento".

Escribe un bucle que muestre en la consola, para cada propiedad, el nombre de la propiedad y su valor.

Por ejemplo: "ram = 256".

<br>

---

**Código:**

```js
let ordenador = new Object();
/*Declaramos un objeto vació en el que no conocemos las propiedades*/

/*Vaya!, de repente nuestro jefe nos da los valores!,
al usar el nombre del objeto seguido de punto y nombre 
a darle a su debido valor, este se añade dinámicamente al
objeto ordenador, hasta aquí bien.*/
ordenador.ram = 256;

ordenador.stockage = 512;

/*Solo se nos pide que mostremos en consola el objeto, pero con el bucle for*/

for (let i in ordenador) {
  /*Declaramos con i que navegamos en el objeto ordenador
  todas las propiedades, y lo hacemos con el operador "in"
  ya que of seria mas para arrays o cadenas de textos*/
  
  console.log(i + " = " + ordenador[i])
  /*Finalmente le decimos que nos muestre en consola,
  las propiedades del objeto ordenador igual a su valor,
  para obtener el valor ya que estamos en un objeto
  decimos que nos muestre el valor del objeto ordenador
  con los corchetes ordenador[i], en vez de la propiedad*/
}
```

<br>

---

**Resultado-5**

```js

```

---

---