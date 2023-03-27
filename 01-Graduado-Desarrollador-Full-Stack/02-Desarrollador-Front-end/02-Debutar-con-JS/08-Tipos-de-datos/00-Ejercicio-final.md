# **Ejercicio Final por completar tema: Los tipos de datos**

<br>

**Description en francés:**

Vous cherchez à réaliser un script permettant, à l’aide d’un switch, de vérifier le type d’une valeur (pour toutes les valeurs primitives abordées dans ce cours). la console affichera :

- Si le type est String, "C’est une chaîne de caractères"

- si c’est un Number, "C’est un nombre"

- si c’est un Bigint, "C’est un grand entier"

- etc.

---

<br>

Les types à référencer sont :

- number

- bigint

- boolean

- string

- symbol

- undefined

- null

**He aquí el código base :**

<br>

---

```js
let variable;
//code;
```

---

---

<br>

---

## **Question-1**

---

<br>

Réaliser le script en question, sans référencer le type null.

---

---

<br>

---

## **Question-2**

---

<br>

Nous n’avons pas référencé le cas où variable serait définie sur null car, un bug en JavaScript fait que l’expression typeof null renvoie object et non null. Trouver une combine pour que dans le cas ou variable est null, la console affiche "C’est une valeur nulle".

---

---

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

<br>

Estás buscando hacer un script que permita, con la ayuda de un switch, verificar el tipo de un valor (Para todos los valores primitivos abordados en este curso).

La consola se mostrará :

- Si le type est String, "C’est une chaîne de caractères"

- si c’est un Number, "C’est un nombre"

- si c’est un Bigint, "C’est un grand entier"

- etc.

---

<br>

Los tipos a referenciar son :

- number

- bigint

- boolean

- string

- symbol

- undefined

- null

**He aquí el código base :**

<br>

```js
let variable;
//code;
```

<br>

---
---

<br>
<br>

---

## **Pregunta-1**

---

<br>

Realice el script en cuestión, sin referencia al tipo nulo.

<br>

---

**Resultado-1**

```js
let variable;
switch (typeof variable) {

  case "number":
    console.log("C'est un nombre");
    break;

  case "bigint":
    console.log("C'est un grand entier");
    break;

  case "boolean":
    console.log("C'est un booléen");
    break;

  case "string":
    console.log("C'est une chaîne de caractères");
    break;

  case "symbol":
    console.log("C'est un symbole");
    break;

  case "undefined":
    console.log("C'est une valeur non définie");
    break;

  default:
    console.log("Ce type n'est pas référencé");
    break;
}
```

---
---

<br>

---

## **Pregunta-2**

---

<br>

No hemos hecho referencia al caso en el que la variable se definiría en NULL porque, Un bug en JavaScript significa que la expresión null de typeof haga referencia a objeto y no a null.

Trouver une combine pour que dans le cas ou variable est null, la console affiche "C’est une valeur nulle".

<br>

---

**Resultado-2**

```js
let variable;
switch (typeof variable) {
  case "number":
    console.log("C'est un nombre");
    break;

  case "bigint":
    console.log("C'est un grand entier");
    break;

  case "NaN":
    console.log("Ce n'est pas un nombre");
    break;

  case "boolean":
    console.log("C'est un booléen");
    break;

  case "string":
    console.log("C'est une chaîne de caractères");
    break;

  case "symbol":
    console.log("C'est un symbole");
    break;

  case "undefined":
    console.log("C'est une valeur non définie");
    break;

  default:
    if(variable == null) {
      console.log("La valeur est nulle");
    } else {
      console.log("Ce type n'est pas référencé");
    }
    break;
}
```

---
---