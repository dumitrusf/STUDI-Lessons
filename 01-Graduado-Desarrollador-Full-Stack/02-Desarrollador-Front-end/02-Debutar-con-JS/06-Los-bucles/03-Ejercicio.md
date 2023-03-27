# **Ejercicio para el tema: Bucle `while`**

<br>

---

## **Question-1**

---

<br>

Écrire la bonne condition pour que le while affiche les multiples de nombre inférieur à 200.

<br>

---

**Código:**

```js
let nombre = 28;

let compteur = 1;

while (/*condition*/) {

  console.log(nombre * compteur);

  compteur ++;

}
```

---

---

<br>

---

## **Question-2**

---

<br>

Transformer la boucle suivante pour qu’une itération soit opérée avant que le programme contrôle la condition.

<br>

---

**Código:**

```js
let prix = 100;

let tabPrix = [];

while (prix > 100 && prix <= 110) {

  tabPrix.push(prix);

  prix ++;

}

console.log(tabPrix[2]);
```

---

---

<br>

---

## **Question-3**

---

<br>

Insérer le bon mot clé pour que, quand le prix est égal à 108, la boucle s’arrête.

<br>

---

**Código:**

```js
let prix = 101;

let tabPrix = [];

while (prix > 100 && prix <= 110) {

  tabPrix.push(prix);

  if (prix == 108) {

    /*mot cle*/;

  }

  prix ++;

}

console.log(tabPrix[8]);
```

---

---

<br>

---

## **Question-4**

---

<br>

Insérer une instruction pour que la boucle ne soit pas infinie. L’objectif du script est d’afficher les nombres entiers de 0 (inclus) à 19 (inclus).

<br>

---

**Código:**

```js
let compteur = 0;

let nombres = "";

while (compteur < 20) {

  nombres += compteur + " ";

  /*code*/;

}

console.log (nombres);
```

---

---

<br>

---

## **Question-5**

---

<br>

Écrire une boucle while permettant de dire pour tous les nombres entiers inférieurs à nombre (en démarrant à 1) si ce sont des multiples ou non de 2. Pour chaque nombre, la console devra afficher « multiple de 2 » si c’est un multiple de 2 et « pas un multiple de 2 » si ce n’est pas le cas.

<br>

---

**Código:**

```js
let nombre = 15;

//code
```

---

---

<br>

⭐⭐⭐⭐⭐⭐⭐⭐

<br>

**Descripción en español:**

---

<br>

---

## **Pregunta-1**

---

<br>

Escribe la condición correcta para que el bucle while muestre los múltiplos del numero 28 `nombre` menores a/o hasta 200.

<br>

---

**Código:**

```js
let nombre = 28;

let contador = 1;

while (/*condición*/) {

  console.log(nombre * contador);

  contador ++;

}
```

<br>

---

**Resultado-1:**

```js
/*Para mostrar los multiplos de 28 hasta 
un numero ínfero o anterior a 200*/

/* declaramos el numero que queremos ver como rol para 
los multiplos
👇 */

let numero = 28;


/* Declaramos los diferentes numeros enteros
a multiplicar por nuestro rol con un 
👇 contador que vaya del 1 hasta ... el resultado que sea */

let contador = 1;


/* en while para cumplir con nuestro cometido
tenemos que decir que es lo que queremos

quiero que while me muestre los multiplos de 28 
 hasta un valor inferior a 200
 */


    //2. el ultimo múltiplo inferior a 200

    //1. 👇 28 x 1..hasta que nos topemos con 

while (numero * contador < 200) {


  /* declaramos que en la consola queremos ver
  el resultado del 28 x el numero entero en su 
  iteración hasta ese valor inferior a 200 */s

  
  console.log(numero * contador);
  
  /*ahora para que el contador funcione
  debemos de declarar que el contador en cada ciclo se
  adicione en uno, ya que si lo hacemos antes de la consola,
  contador valdrá "2", desde antes de enseñarnos nada en la 
  consola, y empezara con 56 en vez de 28*/

  
  contador ++
  
  /* podemos ponerlo antes de console.log
   pero la variable "contador tendría que
   ser (let contador = 0)" */

}
```

---

---

<br>

---

## **Pregunta-2**

---

<br>

Transforma el siguiente bucle para que se realice una iteración antes de que el programa verifique la condición.

<br>

---

**Código:**

```js
let Precio = 100;

let tabPrecio = [];

while (Precio > 100 && Precio <= 110) {

  tabPrecio.push(Precio);

  Precio ++;

}

console.log(tabPrecio[2]);
```

<br>

---

**Resultado-2:**

```js
/* Transforma el siguiente bucle para que se 
realice una iteración antes de que el
programa verifique la condición. */

/* Lo que vamos a realizar como una primera
iteración es lanzar de primera
la variable precio al array*/

let Precio = 100;
/* Declarando una variable como siempre
 */


let tabPrecio = [];
/* declarado igualmente un array */

do {
  /* con la estructura de control del
   do-while garantizamos que sus instrucciones 
   interiores se ejecuten almenos una vez*/

  tabPrecio.push(Precio);
  /* declaramos en el Do, que la variable 
  precio (que es 100) se añada al array */



  
  /* la variable que valía 100 ya se añadió al array,
  pero para que esto no sea un bucle infinito,
  mostrando infinitamente 100,
  le decimos que se adicione en uno*/
  Precio ++;

  /* La variable Precio (que es de 100 ahora vale 101!) */
  

} while (Precio > 100 && Precio <= 110);

/* Ahora en la estructura de control while
en el paréntesis de control se cumple la condición
ya que nuestra variable ahora vale 101 y 
se incrementara a cada iteración,
por que 101 es mayor a 100 y!, 101 es menor o igual a 110*/

console.log(tabPrecio[2]);
/*entonces en el console.log pedimos que 
muestre en consola el valor del array numero 2 empezando a contar desde 0!
en este caso nos aparecerá 102! */

/*si al console.log le mostráramos console.log(tabPrecio);,
este nos mostraría en consola el array con los valores!*/
```

---

---

<br>

<br>

---

## **Pregunta-3**

---

<br>

Inserta la palabra clave correcta para que el bucle se detenga cuando el precio sea igual a 108.

<br>

---

**Código:**

```js
let prix = 101;

let tabPrix = [];

while (prix > 100 && prix <= 110) {

  tabPrix.push(prix);

  if (prix == 108) {

    /*mot cle*/;

  }

  prix ++;

}

console.log(tabPrix[8]);
```

<br>

---

**Resultado-3:**

```js
let precio = 101;
// variable declarada

let tabPrecio = [];
// Array declarado

while (precio > 100 && precio <= 110) {
  /* Mientras precio (101 sea mayor que 100
    y!, 101 sea menor o igual a 110),
    con lo cual esta condición es TRUE*/

  tabPrecio.push(precio);
  /* Mientras la condición se cumpla, 
  al array de tabPrecio se le añadirá
  la variable precio*/

  if (precio == 108) {
    /* En el bloque if
    señalamos que,
    al momento de que la variable sea igualita al numero de 108 */

    break;
    /* El break parara y se saldrá de esta iteración 
    cuando la variable alcance el numero 108*/

  } /* el bucle if solo hara lo indicado,
  ahora pasaremos a la siguiente linea que es el de incremento */

  precio ++;
  /* en este incremento
  se indicara que la variable precio se adicionara en uno,
  siempre y cuando se cumpla la condición de while,
  con lo cual se incrementara hasta 110,
  este nunca llegara a alcanzar 110 por causa del break */

}

console.log(tabPrecio[8]);
/* finalmente mostraremos en consola undefined ya que,
en orden numérico el 8 seria el numero 109, del array
empezando y no olvidemos a contar desde el 0,
si pusiéramos 7 seria el 108*/
```

---

---

<br>

<br>

---

## **Pregunta-4**

---

<br>

Inserta una instrucción para que el bucle no sea infinito. El objetivo del script es mostrar los números enteros del 0 (inclusive) al 19 (inclusive).

<br>

---

**Código:**

```js
let contador = 0;

let numeros = "";

while (contador < 20) {

  numeros += contador + " ";

  /*código*/;

}

console.log (numeros);
```

<br>

---

**Resultado-4:**

```js
/*Inserta una instrucción para que el bucle no sea infinito.
El objetivo del script es mostrar los números enteros del 0 (inclusive) al 19 (inclusive).*/

let contador = 0;
/* Declaramos una variable como suele ser */

let numeros = "";
/* declaramos una variable de tipo cadena,
pero vacía */

while (contador < 20) {
/* mientras contador (osea 0),
sea menor a 20, las instrucciones en el cuero del bucle
se cumplirán, como la incrementación del contador en 1 demás */


  numeros += contador + " ";
  /* a numeros se le adicionaremos y asignaremos
  la variable contador (cero) +  un espacio*
  osea que ahora numeros valdrá el numero que 
  sera incrementado del 0 hasta 20 mas un espacio a su derecha */


  contador ++;
  /* le damos a 0, que se incremente en 1 en 
  cada iteración, cada que se cumpla la condición */

}

console.log (numeros);
/* aquí nos mostraran numeros del 1 al 19, con espacio entre ellos*/
```

---

---

<br>

<br>

---

## **Pregunta-5**

---

<br>

Escribe un bucle while que indique si todos los números enteros menores a `nombre` (osea menores a 15) (comenzando desde 1) son múltiplos de 2 o no.

Para cada número, la consola deberá mostrar "múltiplo de 2" si es un múltiplo de 2, y si no lo es deberá mostrar "no es múltiplo de 2"

<br>

---

**Código:**

```js
let nombre = 15;

//code
```

<br>

---

**Resultado-5**

```js
 let numero = 15;
 /*declaramos una variable que sera un numero limite
 osea que tendremos que comenzar desde 1 hasta 15*/

let contador = 1;
 /* declaramos una variable que sirva como contador 
 partiendo desde 1*/
 
 while (contador <= numero) {
  /* mientras contador sea menor a 15 o igual,
  osea que contador vale desde un principio 1,
  hasta que sea igual a 15,
  entonces para que no sea un bucle infinito con 1,
  en el bucle while le tendremos que dar un incremento de control*/
  
 
   if (contador % 2 == 0) {
    /* en cada iteración del bucle
    se verificara si cada numero entero del 1 al 15
    es divisible múltiplo de 2, realizando
    una division en la que si el resto da 0,
    significara que sera múltiplo y  el que no 
    pues no lo es */
     console.log(contador + " múltiplo de 2");
 
   }
 
   else {
 
     console.log (contador + " no es un múltiplo de 2");
 
   }
 
   contador ++;
   /* este contador se incrementara hasta el 15 */
 
 }
```

---

---