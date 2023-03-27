# **Ejercicio para el tema: `Get`ters & `Set`ters  de `Date`**

<br>

---

## **Question-1**

---

<br>

Utiliser les getters pour afficher l’heure dans la console avec le format : « hh heures et mm minutes » (par exemple « 10 heures et 30 minutes »).

<br>

---

**Código:**

```js
const date = new Date (2023, 2, 1, 10, 30, 12);
let heure = //code
console.log(heure);
```

---

---

<br>

---

## **Question-2**

---

<br>

Modifier le jour de notre objet date en le définissant sur 28 (sans modifier la première ligne).

<br>

---

**Código:**

```js
const date = new Date (2023, 4, 1);
//code
console.log(date.toLocaleDateString());
```

---

---

<br>

---

## **Question-3**

---

<br>

Nous cherchons à réaliser dans la classe Evenement une méthode qui affiche une chaîne contenant le jour du mois et le mois suivi du nom de l’évènement (par exemple : « 20/10 : rdv médical »). Cette méthode s’appellera getResume(). Définir cette méthode en utilisant des getters de Date.

<br>

---

**Código:**

```js
class Evenement {
  constructor(date, evenement) {
    this.date = date;
    this.evenement = evenement;
  }
  getResume() {
    //code
  }
}
const dt = new Date(2023, 10, 20);
const event = new Evenement(dt, "rdv medical");
event.getResume(); //appel de la méthode
```

---

---

<br>

---

## **Question-4**

---

<br>

Modifier l’année de la date en utilisant le setter approprié. La définir sur 2024.

<br>

---

**Código:**

```js
const date = new Date (2023, 10, 2);
//code
console.log(date.toLocaleDateString());
```

---

---

<br>

---

## **Question-5**

---

<br>

Nous utilisons une date définie sur le fuseau horaire UTC+4 (nous pouvons voir dans la chaîne ISO un + 04:00 qui définit le fuseau horaire). Le nombre d’heures est de 10. Afficher dans la console le nombre d’heures au même moment dans les pays où le fuseau universel (UTC) est la norme.

<br>

---

**Código:**

```js
const date = new Date ("2023-12-01T14:30:00+04:00");
//code
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

Usa los getters para mostrar la hora en la consola con el formato: "hh horas y mm minutos" (por ejemplo, "10 horas y 30 minutos").

<br>

---

**Código:**

```js
const date = new Date (2023, 2, 1, 10, 30, 12);

let hora = //código

console.log(hora);
```

<br>

---

**Resultado-1**

```js
// Salida esperada: "10 horas y 30 minutos"

const date = new Date (2023, 2, 1, 10, 30, 12);

let hora = `${date.getHours()} horas y ${date.getMinutes()} minutos`;

console.log(hora);
```

<br>

---

---

<br>

---

## **Pregunta 2**

---

<br>

Modifica el día de nuestro objeto date definiéndolo en 28 (sin modificar la primera línea).

<br>

---

**Código:**

```js
const date = new Date (2023, 4, 1);

//código

console.log(date.toLocaleDateString());
```

<br>

---

**Resultado-2**

```js
// Salida esperada: "28/05/2023"

const date = new Date (2023, 4, 1);

date.setDate(28);

console.log(date.toLocaleDateString());
```

<br>

---

---

<br>

---

## **Pregunta 3**

---

<br>

Buscamos realizar en la clase Evento un método que muestre una cadena que contenga el día del mes y el mes seguido del nombre del evento (por ejemplo: "20/10: cita médica").

Este método se llamará getResumen().

Define este método usando los getters de Date.

<br>

---

**Código:**

```javascript
class Evento {


  constructor(fecha, evento) {
    this.fecha = fecha;
    this.evento = evento;
  }


  getResumen() {

    //código

  }

}


const dt = new Date(2023, 10, 20);


const event = new Evento(dt, "cita médica");


event.getResumen(); //llamada al método
```

<br>

---

**Resultado-3**

```js
// Salida esperada: "20/10: cita médica"

class Evento {


  constructor(fecha, evento) {
    this.fecha = fecha;
    this.evento = evento;
  }


  getResumen() {
    console.log(this.fecha.getDate() + "/" + this.fecha.getMonth() + " : " + this.evento)
  }


}



const dt = new Date(2023, 10, 20);


const event = new Evento(dt, "cita médica");


event.getResumen(); //llamada al método
```

---

---

<br>

---

## **Pregunta 4**

---

<br>

Modifica el año de la fecha usando el setter apropiado.

Defínelo en 2024.

<br>

---

**Código:**

```javascript
const date = new Date (2023, 10, 2);


//código


console.log(date.toLocaleDateString());
```

<br>

---

**Resultado-4**

```js
// Salida esperada: "02/11/2024"

const date = new Date (2023, 10, 2);

date.setFullYear(2024);

console.log(date.toLocaleDateString());
```

---

---

<br>

---

## **Pregunta 5**

---

<br>

Usamos una fecha definida en la zona horaria UTC+4 (podemos ver en la cadena ISO un +04:00 que define la zona horaria).

El número de horas es de 10.

Muestra en la consola el número de horas en el mismo momento en los países donde la zona universal (UTC) es la norma.

<br>

---

**Código:**

```javascript
const date = new Date ("2023-12-01T14:30:00+04:00");

//código
```

<br>

---

**Resultado-5**

```js
// Salida esperada: "10"

const date = new Date ("2023-12-01T14:30:00+04:00");

console.log(date.getUTCHours());
```

---

<br>

Podemos ver que la consola muestra 10.

Por lo tanto, cuando en un país con zona horaria UTC+4 un reloj muestra las 14 horas, entonces la hora universal (UTC) muestra las 10 horas.

---

---
