# **Ejercicio Final por completar tema: Estructuras de control en JS**

<br>

**Description en francés:**

Vous cherchez à réaliser un programme permettant à un réparateur d’ordinateurs de savoir si un modèle spécifique est pris en charge par ses équipes.

Chaque ordinateur à plusieurs caractéristiques.

<br>

---

**Voici votre script de base :**

---

```js
const marque;

const processeur;

const ram;

const stockage;

//conditions
```

---

<br>

Le réparateur ne prend en charge que les ordinateurs de marque Apple, HP et Microsoft.

La ram doit aussi être supérieure ou égale à 4 GO pour que l’ordinateur soit pris en charge.

Les ordinateurs de moins de 256 GO de stockage ne sont pas pris en charge.

---

---

<br>

---

## **Question-1**

---

<br>

Construire un système permettant d’indiquer dans la console si l’ordinateur est pris en charge ou non, en fonction de ces critères.

Tester le script en définissant les variables sur des valeurs spécifiques.

---

---

<br>

---

## **Question-2**

---

<br>

Si la marque est Apple, le réparateur demande que pour plusieurs processeur, l’utilisateur soit informé du temps de réparation maximum :

Intel core I7 : "Le temps de réparation est de 25 jours max"

M1 : "Le temps de réparation est de 10 jours max"

M2 : "Le temps de réparation est de 20 jours max"

Autre processeur : "Le temps re réparation est de 35 jours max"

Pour les ordinateurs des autres marques, le temps de réparation sera le même : 20 jours max. L’utilisateur devra aussi en être informé.

Modifier le script pour que ces changements soient pris en compte.

---

---

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

<br>

**Descripción en español:**

Estás buscando crear un programa que permita a un reparador de computadoras saber si un modelo específico es compatible con su equipo.

Cada computadora tiene varias características.

---

**Aquí está tu script base:**

---

```js
const marca; /*El reparador solo admite de la marca Apple, HP y Microsoft*/

const procesador;

const ram; /*La RAM tiene que ser igual o superior a 4Gb para que la computadora sea compatible (o el programa nos de True)*/

const almacenamiento; /* Computadoras de menos de 256Gb no son compatibles (o vamos que no las admite el crack del reparador)*/

//condiciones

```

---

<br>

El reparador solo admite computadoras de las marcas Apple, HP y Microsoft.

La RAM debe ser igual o superior a 4 GB para que la computadora sea compatible.

Las computadoras con menos de 256 GB de almacenamiento no son compatibles.

---

---

<br>

---

## **Pregunta 1**

---

<br>

Construye un sistema que indique en la consola si la computadora es compatible o no, en función de estos criterios (Los de ele ejemplo del código).

Prueba el script definiendo las variables con valores específicos.

<br>

---

**Resultado-1:**

---

```js
const marca =
  "Microsoft"; /*El reparador solo admite de la marca Apple, HP y Microsoft*/

const procesador = "i5-12600K";

const ram = 32; /*La RAM tiene que ser igual o superior a 4Gb para que la computadora sea compatible (o el programa nos de True)*/

const almacenamiento = 1000; /* Computadoras de menos de 256Gb no son compatibles (o vamos que no las admite el crack del reparador)*/

//condiciones

if (
  (marca == "Apple" || marca == "HP" || marca == "Microsoft") &&
  ram >= 4 &&
  almacenamiento >= 256
) {
  console.log(
    "Tu " +
      marca +
      " " +
      procesador +
      " de 1Tb" +
      " de " +
      ram +
      "Gb de RAM es compatible"
  );
} else {
  console.log("Tu marca no es compatible");
}
```

---

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

Si la marca es Apple, el reparador solicita que, para varios procesadores, se informe al usuario sobre el tiempo máximo de reparación:

Intel core I7: "El tiempo de reparación es de 25 días como máximo"

M1: "El tiempo de reparación es de 10 días como máximo"

M2: "El tiempo de reparación es de 20 días como máximo"

Otros procesadores: "El tiempo de reparación es de 35 días como máximo"

Para las computadoras de otras marcas, el tiempo de reparación será el mismo: 20 días como máximo. El usuario también debe ser informado al respecto.

Modifica el script para que estos cambios se tengan en cuenta.

<br>

---

**Resultado-2:**

---

```js
if ((marca == "Apple"|| marca == "HP" || marca == "Microsoft") && (ram >= 4) && almacenamiento >= 256){
    console.log("Tu " + marca + " " + procesador + " de 1Tb" + " de " + ram + "Gb de RAM es compatible");
    if (marca == "Apple") {
      switch (procesador) {
        case "Intel core I7":
          console.log("El tiempo de reparación es de 25 dias max");
          break;

        case "M1":
          console.log("El tiempo de reparación es de 10 dias max");
          break;

        case "M2":
          console.log("El tiempo de reparación es de 20 dias max");
          break;

        default:
          console.log("El tiempo de reparación es de 35 dias max");
          break;  
      }
    }else{
      console.log("El tiempo de reparación es de 20 dias max");
    }
}else{
    console.log("Tu marca no es compatible")
};
```

---

<br>

---

---
