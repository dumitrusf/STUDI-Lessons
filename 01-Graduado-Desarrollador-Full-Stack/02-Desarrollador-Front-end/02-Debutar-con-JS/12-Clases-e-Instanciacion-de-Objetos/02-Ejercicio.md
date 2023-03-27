# **Ejercicio para el tema: Definir e Instanciar clases**

<br>

---

## **Question-1**

---

<br>

Créez une classe Personne avec les propriétés d’instance nom, prenom et age, afin que l’instanciation fonctionne:

<br>

---

**Código:**

```js
//définition de la classe
const personne1 = new Personne("Peter", "Parker", 20);
console.log(personne1);
```

---

---

<br>

---

## **Question-2**

---

<br>

Créez une classe Voiture avec les propriétés marque, modele et année et la propriété statique roues = 4, afin que l’instanciation fonctionne.

<br>

---

**Código:**

```js
//définition de la classe
const voiture1 = new Voiture("Renault", "Clio", 2020);
console.log(voiture1.marque + " à " + Voiture.roues + " roues");
```

---

---

<br>

---

## **Question-3**

---

<br>

Créez une classe Rectangle avec les propriétés longueur et largeur afin que l’instanciation fonctionne.

<br>

---

**Código:**

```js
//définition de la classe
const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.largeur);
```

---

---

<br>

---

## **Question-4**

---

<br>

Créez un objet de type Telephone ayant pour marque « Apple », pour modele « Iphone 11 », et pour ram 4.

<br>

---

**Código:**

```js
class Telephone {
  constructor(marque, modele, ram) {
    this.marque = marque;
    this.modele = modele;
    this.ram = ram;
  }
}
const t1 = //instance
  console.log(t1.ram);
```

---

---

<br>

---

## **Question-5**

---

<br>

Corrigez l’erreur.

<br>

---

**Código:**

```js
class Car {
  constructor(marque) {
    this.marque = marque;
  }
}
const car = Car("Ford");
console.log(car.marque);
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

Crea una clase Persona con las propiedades de instancia nombre, apellido y edad, para que la instanciación funcione.

<br>

---

**Código:**

```js
//definición de la clase

const persona1 = new Persona("Peter", "Parker", 20);
console.log(persona1);
```

<br>

---

**Resultado-1**

```js
class Persona {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

const persona1 = new Persona("Peter", "Parker", 20);
console.log(persona1);
```

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

Crea una clase Coche con las propiedades marca, modelo y año y la propiedad estática ruedas = 4, para que la instanciación funcione.

<br>

---

**Código:**

```js
//definición de la clase

const coche1 = new Coche("Renault", "Clio", 2020);
console.log(coche1.marca + " tiene " + Coche.ruedas + " ruedas");
```

<br>

---

**Resultado-2**

```js
Class Auto{

static RUEDAS = 4;

  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

}

const coche1 = new Coche("Renault", "Clio", 2020);
console.log(coche1.marca + " tiene " + Coche.ruedas + " ruedas");
```

<br>

---

---

<br>

---

## **Pregunta 3**

---

<br>

Crea una clase Rectángulo con las propiedades longitud y ancho para que la instanciación funcione.

<br>

---

**Código:**

```js
//definición de la clase

const rectangulo1 = new Rectangulo(10, 5);
console.log(rectangulo1.ancho);
```

<br>

---

**Resultado-3**

```js

Class Rectangulo {

  constructor() {
    this.longitud = longitud;
    this.ancho = ancho;
  }

}

const rectangulo1 = new Rectangulo(10, 5);
console.log(rectangulo1.ancho);
```

---

---

<br>

---

## **Pregunta 4**

---

<br>

Crea un objeto de tipo Telefono que tenga como marca « Apple », como modelo « Iphone 11 », y como ram 4.

<br>

---

**Código:**

```js
class Telefono {
  constructor(marca, modelo, ram) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
  }
}

const t1 = //instancia
  console.log(t1.ram);
```

<br>

---

**Resultado-4**

```js
class Telefono {
  constructor(marca, modelo, ram) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
  }
}

// Crea un objeto de tipo Telefono que tenga como marca « Apple », como modelo « Iphone 11 », y como ram 4.

const t1 = new telefono("Apple", "Iphone11", 4)

  console.log(t1.ram);
```

---

---

<br>

---

## **Pregunta 5**

---

<br>

Corrige el error.

<br>

---

**Código:**

```js
class Coche {
  constructor(marca) {
    this.marca = marca;
  }
}

const coche = Coche("Ford");
console.log(coche.marca);
```

<br>

---

**Resultado-5**

```js
class Coche {
  constructor(marca) {
    this.marca = marca;
  }
}

const coche = new Coche("Ford");
console.log(coche.marca);
```

---

---
