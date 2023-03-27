# **Operadores aritméticos y de asignación**

<br>

---

## **Introducción**

---

<br>

Nos enfocaremos en ejemplos numéricos y luego veremos qué operadores pueden ser útiles cuando manipulamos cadenas de texto.

<br>

---

---

<br>
<br>

---

## **Operadores aritméticos**

---

<br>

Los operadores aritméticos nos permitirán realizar operaciones matemáticas simples.

Utilizaremos el comando `console.log` para mostrar en la consola los resultados de las operaciones matemáticas realizadas.

<br>

**👇 Aquí tienes algunos ejemplos:**

<br>

---

### **El operador << + >>**

---

<br>

El operador "+" permite simplemente sumar valores.

---

**Por ejemplo: 2 valores**

```js
let a = 2;

let b = 567.42;

console.log(a + b);
```

<br>

**[Enlace 1 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-1-DumitruSF1)**

<br>

En este caso `console.log(a + b)` mostrara en la consola: 569,42

---

---

<br>

<br>

---

### **El operador << - >>**

---

<br>

El operador "-", conocido como <i>`<operador de resta>`</i> permite simplemente restar valor a otro valor.

---

**Por ejemplo:**

```js
let a = 567.42;

console.log(a - 25);
```

<br>

**[Enlace 2 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-2-DumitruSF1)**

<br>

En este caso `console.log(a - 25)` mostrara en la consola: 542,42

---

---

<br>

<br>

---

### **El operador << * >>**

---

<br>

El operador "*", conocido como <i>`<operador de multiplicación>`</i> permite obtener el producto de 1 valor multiplicado por otro.

---

**Por ejemplo:**

```js
let a = 2 * 4.5;

console.log(a);
```

<br>

**[Enlace 3 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-3-DumitruSF1)**

<br>

En este caso `console.log(a)` mostrara en la consola: 9

---

---

<br>

<br>

---

### **El operador << / >>**

---

<br>

El operador "/", conocido como <i>`<operador de division>`</i> permite dividir un valor por otro.

---

**Por ejemplo:**

```js
console.log(58 / 2);
```

<br>

**[Enlace 4 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-4-DumitruSF1)**

<br>

En este caso `console.log(58/2)` mostrara en la consola: 29

---

---

<br>

<br>

---

### **El operador << % >>**

---

<br>

El operador "%", conocido como <i>`<operador de modulo>`</i> permite obtener el resto de una división euclidiana:

---

**Por ejemplo:**

```js
let a = 90;

let b = 11;

console.log(a % b);
```

<br>

**[Enlace 5 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-5-DumitruSF1)**

<br>

En este caso, console.log(a % b) mostrará en la consola: 2

Para comprenderlo mejor, si realizamos una división euclidiana con 90 como dividendo y 11 como divisor, obtenemos:

(dividendo) 👉 90 / (divisor) 👉 11 = (cociente) 👉 8 y (resto) 👉 2

![recordando cual es el dividendo divisor y demás](./02-Operadores-arit-%26-afectacion/img/dividendo-y-demas.png)

Por lo tanto, tenemos un cociente igual a 8 y un resto igual a 2

---

---

<br>

<br>

---

### **El operador << ** >>**

---

<br>

El operador "**", conocido como <i>`<operador de potencia>`</i> permite elevar un número a una potencia.

Por ejemplo, si queremos obtener la representación decimal de 184, haremos:

---

**Por ejemplo:**

```js
console.log(18 ** 4);
```

👆 esto de arriba

👇 seria esto:

18<sup>4</sup>

<br>

**[Enlace 6 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-6-DumitruSF1)**

<br>

---

**En este caso:**

console.log(18 ** 4) mostrará en la consola: 104.976

👆 Esto es

👇 esto

18^4 = 18 x 18 x 18 x 18 = 104.976

---

---

<br>

<br>

---

### **El operador << ++ >>**

---

<br>

El operador "++", conocido como <i>`<operador de incremento>`</i>, permite agregar el número entero 1 a un valor (se dice que incrementa una variable).

---

**Por ejemplo:**

```js
let a = 2;

a++;

console.log(a);
```

<br>

**[Enlace 7 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-7-DumitruSF1)**

<br>

---

En este caso, console.log(a) mostrará en la consola: 3

<br>

---

**De hecho, la incrementación de "a" es equivalente a escribir:**

👇

<br>

---

```js
a = a + 1;
```

---

---

<br>

<br>

---

### **El operador << -- >>**

---

<br>

El operador "--", por otro lado, se llama <i>`<operador de decremento>`</i>.

Funciona de la misma manera que el operador de incremento, pero en cambio resta 1 a un valor:

---

**Por ejemplo:**

```js
let a = 3;

a--;

console.log(a);
```

<br>

**[Enlace 8 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-8-DumitruSF1)**

<br>

---

En este caso, console.log(a) mostrará en la consola: 2

<br>

---

---

<br>
<br>

---

## **Los operadores de asignación**

---

<br>

Ahora que hemos hablado de varios operadores aritméticos en JavaScript, **hablemos sobre los operadores de asignación.**

Estos operadores permiten asignar un valor a una variable o a otro elemento.

<br>

**👇 Aquí tienes algunos ejemplos:**

<br>

---

### **El operador << = >>**

---

<br>

El operador "=", conocido como <i>`<operador de asignación simple>`</i>.

Se utiliza para establecer el valor de una variable.

---

**Un ejemplo sencillo:**

```js
let a = 2;

console.log(a);
```

<br>

**[Enlace 9 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-9-DumitruSF1)**

<br>

Aquí, asignamos el número entero 2 a la variable a utilizando el operador de asignación "=".

Por lo tanto, la línea console.log(a) mostrará en la consola: 2.

---

---

<br>

---

### **El operador << += >>**

---

<br>

El operador "+=", conocido como <i>`<operador de asignación con adición>`<i>. 

Permite asignar a una variable su propio valor más el valor de una segunda variable.

Sirve para concatenar, asignar y sumar.

**Tenemos que saber, que:**

<br>

- `Para asignar:` se usa **El operador de asignación** `=` 

<br>

- `Para sumar:` se usa **El operador de adición** `+`

👆

**Uno asigna y el otro solo suma**

<br>

pero con el de *"Asignación después de adición"*, `la variable se quedara guardada como si le hubiéramos asignado con el operador de asignación`  👉  **=**.

el valor se quedara guardado si hacemos un console.log

<br>

---

para asignar una nueva variable simplemente le asignamos una nueva con **=**
---

**EJEMPLO:**

```js
let a = 2;

a += 8;

console.log(a); /* Igual 10


Para asignar otra vez el 2 haríamos: */

let a = 2

// O esto:

let a -= 8;
```

---


<br>

**[Enlace 10 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-10-DumitruSF1)**

<br>

Aquí, console.log(a) muestra 10 en la consola.

<br>

---

**Es como si hubiéramos hecho:**

```js
a = a + 8;
```

---

---

<br>

---

### **El operador << -= >>**

---

<br>

El operador "-=", conocido como <i>`<operador de asignación con sustracción>`</i>. 

El operador de asignación después de la resta "-=" funciona de la misma manera, pero devuelve la diferencia entre el primer número y el segundo.

---

**EJEMPLO:**

```js
let a = 18;

a -= 4;

console.log(a);
```

---


<br>

**[Enlace 11 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-11-DumitruSF1)**

<br>

Aquí, "a" será igual a sí mismo menos 4, es decir, 18 - 4, lo cual es igual a 14.

<br>

---

**Es como si hubiéramos hecho:**

```js
a = a - 4;
```

---

---

<br>

---

### **Los operadores  « *= »**

---

<br>

El operador "*=", conocido como <i>`<operador de asignación con multiplicación>`<i>. 

El operador de asignación con multiplicación "*=" funciona de la misma manera, pero multiplica el valor del primer número por el asignado.

---

**EJEMPLO:**

```js
let a = 7;

a *= 4;

console.log(a);
```

---

<br>

Aquí, "a" será igual a sí mismo 7, es decir, 7 x 4, lo cual es igual a 28.

<br>

---

**Es como si hubiéramos hecho:**

```js
a = a * 4;
```

---

---

<br>

---

### **El operador « /= »**

---

<br>

El operador "/=", conocido como <i>`<operador de asignación con división>`<i>. 

El operador de asignación con división "/=" funciona de la misma manera, pero divide el valor del primer número por el asignado.

---

**EJEMPLO:**

```js
let a = 8;

a *= 2;

console.log(a);
```

---

<br>

Aquí, "a" será igual a sí mismo 8, es decir, 8 / 2, lo cual es igual a 4.

<br>

---

**Es como si hubiéramos hecho:**

```js
a = a / 2;
```

---

<br>

Los otros operadores de asignación se enumeran en la dirección: **[developer.mozilla.org](developer.mozilla.org)**

**Se entiende que los operadores nos permiten modificar los valores de los números. Pero también nos permiten modificar otros tipos de datos, como las cadenas de caracteres.**

---

---

<br>
<br>

---

## **Operadores a usar para la cadena de caracteres**

---

<br>

Las cadenas de caracteres permiten representar textos.

Como su nombre lo indica, son conjuntos de caracteres que se ensamblan uno tras otro.

Dos operadores serán muy útiles para modificar cadenas de caracteres: el operador de concatenación y el operador de asignación después de la concatenación.

<br>

**👇 Aquí tienes algunos ejemplos:**

<br>

---

### **El operador de concatenación << + >>**

---

<br>

El símbolo "+" no se utiliza únicamente para sumar números.

Puede funcionar tanto como operador de adición (para números) como operador de concatenación (para cadenas de caracteres).

La concatenación es la acción de unir varias cadenas de caracteres en una sola.

---

**Veamos un ejemplo simple:**

```js
let nom = "Parker";

let prenom = "Peter";

let nomComplet = prenom + " " + nom;

console.log(nomComplet);
```

---

<br>

**[Enlace 12 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-12-DumitruSF1)**

<br>

Aquí hemos concatenado 3 cadenas de caracteres en la variable nomComplet:

- La cadena "Peter" contenida en la variable prenom

- La cadena " " (que contiene un espacio) 

    y 
    
- finalmente la cadena "Parker" contenida en la variable nom.

<br>

**Por lo tanto, la variable nomComplet contiene la cadena "Peter Parker".**

---

---

<br>

<br>

---

### **El operador de concatenación << += >>**

---

<br>

El símbolo "+=" también se puede utilizar para concatenar cadenas.

Cuando se utiliza con cadenas, no actúa como un operador de asignación después de la adición, sino que se puede llamar <i>`operador de asignación después de la concatenación`<i>.

---

**Tomemos un ejemplo muy simple:**

```js
let nom = "Peter";

nom += " Parker"; // Hay un espacio en blanco, el operador de asignación += no ánade como las comillas un espacio si no que lo añadimos nosotros.
       👆
        

console.log(nom);
```

---

<br>

**[Enlace 13 Operadores](https://replit.com/@javascript-studi/Les-operateurs-Code-13-DumitruSF1)**

<br>

La cadena de caracteres que se coloca después del operador se agrega al final de la cadena.

Por lo tanto, la variable "nom" contendrá la cadena "Peter Parker".

Ahora conoces varios operadores aritméticos y de asignación.

---

---

<br>

<br>
