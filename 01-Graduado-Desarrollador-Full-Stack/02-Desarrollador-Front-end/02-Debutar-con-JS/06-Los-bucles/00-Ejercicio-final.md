# **Ejercicio Final por completar tema: Bucles**

<br>

**Description en francés:**

Vous cherchez à réaliser un script permettant de dresser la liste de tous les multiples d’une liste de nombre. Vous avez un script de départ :

<br>

---

```js
const lista = [24, 67, 18];

let resultado = "";

//código

console.log(resultado);
```

---

<br>

---

**Un système de boucles vous permettra d’afficher dans la console tous les multiples de chaque nombre dans la liste list. Par exemple, dans le cas présent, la console affichera :**

```js
Multiples de 24 : 1, 2, 3, 4, 6, 8, 12, 24, 

 

Multiples de 67 : 1, 67, 

 

Multiples de 18 : 1, 2, 3, 6, 9, 18,
```

---

---

<br>

---

## **Question-1**

---

<br>

Écrire un script qui remplit ce rôle.

Vous serez amenés à imbriquer une boucle dans une boucle.

Même si le plus conventionnel serait d’utiliser 2 boucles for, <u>utiliser ici une boucle for et une boucle while.</u>

---

---

<br>

---

## **Question-2**

---

<br>

Réaliser le même système en remplaçant la boucle while imbriquée par une boucle for.

---

---

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

<br>

Buscas crear un script que genere una lista de todos los múltiplos de una lista de números.

Tienes un script inicial:

<br>

```js
const lista = [24, 67, 18];

let resultado = "";

// código

console.log(resultado);
```

---

<br>

---

**Un sistema de bucles te permitirá mostrar en la consola todos los múltiplos de cada número en la lista. Por ejemplo, en este caso, la consola mostrará:**

```js
Múltiplos de 24: 1, 2, 3, 4, 6, 8, 12, 24,

Múltiplos de 67: 1, 67,

Múltiplos de 18: 1, 2, 3, 6, 9, 18,
```

---
---

<br>

---

## **Pregunta-1**

---

<br>

Escribe un script que cumpla con esta función.

Deberás anidar un bucle dentro de otro bucle.

Aunque lo más convencional sería utilizar 2 bucles "for", aquí utiliza un bucle "for" y un bucle "while".

<br>

---

**Resultado-1**

```js
const lista = [24, 67, 18];
/*declaramos una lista que contiene de 3 numeros
de los cuales desde esos 3 numeros, tenemos 
que sacar sus multiplos menores al numero en si mismo*/

let resultado = "";
/*Resultado lo usaremos para asignarle otra variable 
o el mismo resultado, concatenado de un espacio*/


/*Bien, Ahora nos pide usar for y while y empezar ha hacer el bucle*/

for (let numero of lista){
/*decimos que con la variable numero 
extraiga o navegue en el array lista*/

  resultado += "Multiples de " + numero + " : "
  /*a resultado le asignamos operador de combinado de asignación
  para que en cada iteración no se sobrescriba*/
  
  let contador = 1
  /*también definimos un contador, para que la
  iteración vaya desde el 1 (o la multiplicación)
  hasta el numero en si por el que queramos obtener los multiplos*/

  while (contador <= numero){
    /*Decimos que mientras el contador (osea el 1 que va a ir 
      hasta el numero en si de la lista), se cumple pues que el contador se incremente
      con el contador ++*/

    if (numero % contador == 0) {
      /*Ahora decimos que si esta condición se cumple,
      pues que el resultado se le asigne el numero contador mas un espacio*/

      resultado += contador + ", "
      /*si la condición del if, (de que el numero es perfectamente 
        divisible por su iteración/vuelta o contador(ya sabéis que 
          va del 1 hasta el numero en si de la lista)), se confirma pues 
          solo esos numeros que dan 0 de resto, se van a concatenar y asignar a la
          variable de resultado, solo con esas iteraciones que den 0 como resto*/
    }

    /*si el contador es menor o igual a los numeros de la lista
    pues este se incrementara en uno en cada iteración,
    */
    contador ++
  }

  resultado += "\n \n"
  
}

console.log(resultado);



/*en consola:
Múltiplos de 24: 1, 2, 3, 4, 6, 8, 12, 24,

Múltiplos de 67: 1, 67,

Múltiplos de 18: 1, 2, 3, 6, 9, 18,
*/
```

En este ejemplo, se utiliza un bucle "for/of" para recorrer los números del arreglo, y se anida un bucle "while" para probar cada entero menor o igual al número de referencia y verificar si es un múltiplo o no.

El contador tomará en cada iteración del bucle "while" el valor de un número que será probado para verificar si es un múltiplo o no.

---
---

<br>

---

## **Pregunta-2**

---

<br>

Realiza el mismo sistema reemplazando el bucle "while" anidado por un bucle "for".

<br>

---

**Resultado-2**

```js
/* Buscas crear un script que genere una lista de todos los múltiplos de una lista de números.

Tienes un script inicial: */

/* Escribe un script que cumpla con esta función.

Deberás anidar un bucle dentro de otro bucle.

Aunque lo más convencional sería utilizar 2 bucles "for",
aquí utiliza un bucle "for" y un bucle "while". */

const lista = [24, 67, 18];
/*declaramos una lista que contiene de 3 numeros
de los cuales desde esos 3 numeros, tenemos 
que sacar sus multiplos menores al numero en si mismo*/

let resultado = "";
/*Resultado lo usaremos para asignarle otra variable 
o el mismo resultado, concatenado de un espacio*/


/*Bien, Ahora nos pide usar for y while y empezar ha hacer el bucle*/

for (let numero of lista){
/*decimos que con la variable numero 
extraiga o navegue en el array lista*/

  resultado += "Multiplos de " + numero + " : "
  /*a resultado le asignamos operador combinado de asignación
  para que en cada iteración no se sobrescriba*/
  
  for(let contador = 1; contador <= numero; contador++) {
    /*en el siguiente bucle for, y no mas el while,
    tiene su inicialización, su condición, y su actualización,
    mencionando que el contador para obtener los multiplos 
    de esos numeros sea del 1 hasta el numero en si mismo de la lista,
    en la condición que contador sea siempre menor o igual al 
    numero en la lista y  que este se incremente si todo eso se confirma en TRUE*/

    if(numero % contador == 0) {
      /*Luego si todo eso se confirma en TRUE, cosa que si lo es
      damos una condición con if, diciendo que si el numero de 
      la lista es divisible en perfecto con el contador 
      (osea que de de resto 0 (gracias al operador de modulo)), pues
      que se muestre en consola */


      resultado += contador + ", ";
      /*si la condición del if, (de que el numero es perfectamente 
        divisible por su iteración/vuelta o contador(ya sabéis que 
          va del 1 hasta el numero en si de la lista)), se confirma pues 
          solo esos numeros que dan 0 de resto, se van a concatenar y asignar a la
          variable de resultado, solo con esas iteraciones que den 0 como resto*/

    }
  }


resultado += "\n \n"
/*Esto es un  👆   salto de linea en consola*/
  
}

console.log(resultado);



/*en consola:
Múltiplos de 24: 1, 2, 3, 4, 6, 8, 12, 24,

Múltiplos de 67: 1, 67,

Múltiplos de 18: 1, 2, 3, 6, 9, 18,
*/
```

---
---