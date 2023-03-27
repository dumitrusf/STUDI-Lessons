# **Ejercicio FINAL de: Objetos JS Number**

<br>

Vous êtes gérant d’un magasin d’informatique et vous missionnez des employés de générer des étiquettes de prix pour plusieurs produits. Vous souhaitez créer un programme permettant aux employés de savoir si un prix est valide ou non.

Vos articles doivent avoir un prix entier, et être compris entre 500 (inclus) et 1 500 € (inclus).

<br>

---

## **Question-1**

---

<br>

Réaliser un code avec une fonction permettant d’indiquer si un prix stocké dans un objet Number est valide.

---

<br>

---

## **Question-2**

---

<br>

Insérer dans la condition un critère vérifiant que l’argument passé est bien un objet et non un type primitif.

---
---

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

<br>

**Descripción en español:**

---

<br>

Eres gerente de una tienda de informática y encargas a los empleados generar etiquetas de precios para varios productos.

Deseas crear un programa que permita a los empleados saber si un precio es válido o no.

Tus artículos deben tener un precio entero y estar comprendidos entre 500 (incluido) y 1.500 € (incluido).

<br>

---

## **Pregunta 1**

---

<br>

Llevar a cabo un código con una función que permita indicar si un precio almacenado en un objeto Number es válido.

<br>

---

**Resultado-1**

```js
const prix = new Number(500);
function verifPrice(pr) {
  if(Number.isInteger(pr.valueOf()) && pr.valueOf() >= 500 && pr.valueOf() <= 2000) {
    console.log("Le prix est valide");
  }
  else {
    console.log("Le prix n'est pas valide");
  }
}
verifPrice(prix);
```

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

Insertar en la condición un criterio que verifique que el argumento pasado es realmente un objeto y no un tipo primitivo.

<br>

---

**Resultado-2**

```js
const prix = new Number(678);
function verifPrice(pr) {
  if(typeof pr == "object" && Number.isInteger(pr.valueOf()) && pr.valueOf() >= 500 && pr.valueOf() <= 2000) {
    console.log("Le prix est valide");
  }
  else {
    console.log("Le prix n'est pas valide");
  }
}
verifPrice(prix);
```

<br>

---

---