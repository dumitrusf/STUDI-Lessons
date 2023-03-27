# **Ejercicio Final por completar tema: Los operadores**

<br>

**Description en francés:**

Vous cherchez à réaliser un système vérifiant qu’un ordinateur répond à différents critères.

<br>

---

**Cet ordinateur a plusieurs caractéristiques, voici le script de base :**

---

```js
let marque = "HP";

let modele = "Pavillon";

let stockage = 512;

let ram = 16;

let processeur = "intel core i7";

console.log(/*code Question 1*/);

/*code Question 2*/
```

---

<br>

La console doit afficher true si et seulement si l’ordinateur est de marque « HP » ou « Acer », qu’il a un stockage supérieur ou égal à 256 GO et une ram supérieure ou égale à 8 GO.

---

---

<br>

---

## **Question-1**

---

<br>

Dans le `console.log` _(à l’emplacement /*code Question 1*/)_ écrivez le code permettant de réaliser ce test.

---

---

<br>

---

## **Question-2**

---

<br>

Dans la suite du code _(à l’emplacement /*code Question 2*/)_, écrivez des instructions permettant d’assembler dans une chaîne la marque, le nom du modèle, la ram et le processeur de l’ordinateur.

**La chaîne pourra ressembler à « HP Pavillon, 512 GO de stockage, 16 GO de ram, processeur intel core i7 ».**

Bien évidemment, les données ne seront pas les mêmes quand vous changerez la valeur des variables.

<br>


---
Ensuite, définissez une variable prix.

Celle-ci contiendra le prix de l’ordinateur qui sera calculé en additionnant le stockage, et la ram multipliée par 20.

**Enfin, rajouter le prix dans la chaîne concaténée** `pour que la chaîne ressemble à : « HP Pavillon, 512 GO de stockage, 16 GO de ram, processeur intel core i7, prix : {prix} euros ».` 

Afficher la chaîne dans la console.

---

---


<br>


⭐⭐⭐⭐⭐⭐⭐⭐

<br>

**Descripción en español:**

Estás buscando desarrollar un sistema que verifique si una computadora cumple con diferentes criterios.

<br>

---

**Esta computadora tiene varias características, aquí está el script básico:**

---

```js
let marca = "HP";

let modelo = "Pavillon";

let almacenamiento = 512;

let ram = 16;

let procesador = "intel core i7";

console.log(/*Código Pregunta 1*/);

/*Código Pregunta 2*/
```

---

<br>

La consola debe mostrar "true" solo si la computadora es de marca "HP" o "Acer", tiene un almacenamiento igual o superior a 256 GB y una memoria RAM igual o superior a 8 GB.

---

---

<br>

---

## **Pregunta-1**

---

<br>

En el `console.log` _(en donde pone: /*código Pregunta 1*/)_, escribe el código para realizar esta prueba.

<br>

---

**Resultado-1:**

---

```js
let marca = "HP";

let modelo = "Pavillon";

let almacenamiento = 512;

let ram = 16;

let procesador = "intel core i7";

console.log((marca == "HP" || marca == "Acer") && (almacenamiento >= 256) && (ram >= 8));

/*Código Pregunta 2*/
```

---

<br>

---

---

<br>

---

## **Pregunta-2**

---

<br>

En la siguiente parte del código _(en el lugar /*código Pregunta 2*/)_, escribe instrucciones para concatenar la marca, el nombre del modelo, la RAM y el procesador de la computadora en una cadena.

**La cadena podría tener el siguiente formato: "HP Pavillon, 512 GB de almacenamiento, 16 GB de RAM, procesador Intel Core i7".**

Por supuesto, los datos serán diferentes cuando cambies los valores de las variables.

<br>


---
Luego, define una variable "precio".

Esta variable contendrá el precio de la computadora, que se calculará sumando el almacenamiento y la RAM multiplicada por 20.

**Finalmente, agrega el precio a la cadena concatenada** para que la cadena tenga el siguiente formato: `"HP Pavillon, 512 GB de almacenamiento, 16 GB de RAM, procesador Intel Core i7, precio: {precio} euros"`.

Muestra la cadena en la consola."

<br>

---

**Resultado-2:**

---

```js
let marca = "HP";

let modelo = "Pavillon";

let almacenamiento = 512;

let ram = 16;

let procesador = "intel core i7";

let precio = 512 + 16 * 20

console.log((marca == "HP" || marca == "Acer") && (almacenamiento >= 256) && (ram >= 8));

let selectedPC = marca + " " + modelo + ", de " + almacenamiento + " Gb de almacenamiento, " + ram + " Gb de RAM" + " procesador " + procesador + ", precio: " + precio + "€"

console.log(selectedPC);
```

---

<br>

---

---