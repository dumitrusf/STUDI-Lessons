# **Bucle `while`**

<br>

---

En general se utiliza el bucle while en situaciones en las que no se conoce de antemano el número de iteraciones que se deben realizar.

Esto significa que antes de comenzar la primera iteración del bucle, no sabemos cuántas veces se repetirá el código dentro del bucle.

Sin embargo, esta no es una regla absoluta y en muchos casos donde se usa un bucle for, también es posible usar un bucle while.

Un ejemplo de uso de un bucle while sería cuando queremos repetir una acción hasta que se cumpla una condición.


<br>

---

**Por ejemplo:**

supongamos que queremos pedirle al usuario que ingrese un número hasta que ingrese un número mayor que 10.

```js
let number = 0;
while (number <= 10) {
    number = prompt("Ingrese un número mayor que 10");
}
```

---

<br>

En este caso, no sabemos cuántas veces se repetirá el código dentro del bucle `while`, ya que depende de cuándo el usuario ingrese un número mayor que 10.

si el usuario pone un 3, saldria ese mensaje, lo mismo con cualquier numero inferior a 10!

---
---

<br>
<br>

---

## **Veamos antes las diferencias entre el bucle `while` y `for`.**

---

<br>

---

El bucle `for` y el bucle `while` son estructuras de control utilizadas en programación para ejecutar un bloque de código repetidamente.

---

<br>

**Aunque tienen funcionalidades similares, hay algunas diferencias clave entre ellos:**

1. `Condición de inicio:`    

    - <mark><b>El bucle for:</b></mark> tiene una <u>condición de inicio</u> que
    
      `se ejecuta antes de la primera iteración del bucle`

    <br>
    <br>

    - <mark><b>El bucle while:</b></mark>no tiene una <u>condición de inicio específica</u>
    y 
    
      `la primera iteración depende de la evaluación de la condición.`

---      

<br>
<br>
<br>

---

2. `Condición de finalización:`

    - <mark><b>El bucle for:</b></mark> <u>la condición de finalización se evalúa al final de cada iteración.</u> 
    
      `Si la condición es falsa, el bucle se detiene.`
    
    <br>
    <br>
    
    - <mark><b>El bucle while:</b></mark> <u>la condición de finalización se evalúa al comienzo de cada iteración</u> y 
    
      `si es falsa, el bucle se detiene.`

---      

<br>
<br>
<br>

---

3. `Control de iteración:`

    - <mark><b>En el bucle for:</b></mark> <u>el control de iteración (i <= 10>) se maneja mediante el contador o variable de control ()</u> 
    
      `que se actualiza automáticamente en cada iteración.`
    
    <br>
    <br>
    
    - <mark><b>En el bucle while:</b></mark> <u>>el control de iteración se maneja dentro del bloque de código</u> y 
    
      `generalmente se actualiza manualmente.`

---      

<br>
<br>
<br>

---

En resumen, el bucle `for` se utiliza cuando se conoce el número exacto de iteraciones, mientras que el bucle `while` se utiliza cuando el número de iteraciones puede variar y se basa en una condición específica.

Ambos bucles tienen su uso y elección adecuada dependiendo de la situación y los requisitos del programa.

---

---

<br>
<br>

---

### **Uso del bucle `while``**

---

<br>

---

**Sintaxis del bucle `while` es:**

```js
while (/*condición*/) {

  //instrucciones;

}
```

---

<br>

**Se indica en los paréntesis de control** de `while` <u>la condición para que ocurra una iteración.</u>

<br>

`el código no se ejecuta hasta que se confirma si la condición es true, o false, si se confirma, **en ese caso, se ejecuta las instrucciones del bucle.**

<br>

Luego, <u>la ejecución de la condición se verifica nuevamente</u> y, si devuelve true, `las instrucciones se ejecutan nuevamente, y así sucesivamente.`

<br>

---

Vemos que el sistema de while es bastante simple a entender.

**Veamos un ejemplo simple:**

```js
let numero = 1; // (1)

while (numero <= 10) { /* (2)
paréntesis de control*/

  console.log ("El numero es: " + numero);

  numero += 2;

  // body (3)

  numero -= 0.5;

}

console.log (numero)
```

---

<br>

**[Enlace 8 bucles](https://replit.com/@javascript-studi/Les-boucles-Code-8-DumitruSF1)**

<br>

---

(1) Aquí, **definimos** una `variable llamada "numero" ` <u>con el valor de 1.</u>

---

(2) **En los paréntesis de control**, pasamos como parámetro la `expresión condicional "numero <= 10".`

  - `Mientras` **"numero"** `sea menor o igual a 10`, <mark>el bucle continuará ejecutándose.</mark>

---

(3) Podemos ver que **en las instrucciones**, comenzamos mostrando el número en una cadena concatenada.

  - luego le sumamos 2 y le restamos 0.5, y después el resultado.

---

(4) **Este conjunto de instrucciones se ejecutará en cada iteración.**

  - `se sumara, restara y después se dará el total, esta es la buena opción!.`
  
    y 
   
  - `no se sumara a la variable, el total y después se resta, NO asi no!`

---

<br>

Sin embargo, ¿en qué sentido podemos decir que el número de iteraciones no está fijo antes de la primera iteración?
---

<br>

**Si nos fijamos en el bucle**, podemos observar, que fuera de las instrucciones `(fuera del cuerpo del bucle)`, el numero de iteraciones <mark>**nos es desconocido**</mark>, o no esta designado.

<br>

<mark>**Si observamos el bucle, podemos ver que, fuera de las instrucciones (es decir, fuera del cuerpo del bucle), el número de iteraciones es desconocido.**</mark>

<br>

**En este ejemplo,** son `las instrucciones del cuerpo del bucle` las que `permiten determinar el número de iteraciones en función de la condición`, (<mark>**ya que modificamos la variable "numero" en las instrucciones del while**</mark>.

En este caso, es apropiado utilizar el bucle while.

En contraste, cuando utilizamos el bucle `for`, el número de iteraciones se establece en los parámetros del paréntesis de control del bucle (a menos que agreguemos instrucciones como `break` o `continue`, que se abordarán más adelante).

<br>

---

**Por lo tanto, en nuestro ejemplo con el while, la consola mostrará:**


```js
    El numero es: 1

    El numero es: 2.5

    El numero es: 4

    El numero es: 5.5

    El numero es: 7

    El numero es: 8.5

    El numero es: 10

    11.5
```

---

<br>

Podemos ver que después de la séptima iteración, el programa verifica el valor de `numero`, que ahora es igual a 11.5.

Dado que el valor de `numero` es mayor que 10, el programa sale del bucle.

<br>

---

---

<br>
<br>

---

### **Uso del bucle `do`/`while`**

---

<br>

Como has podido ver, **cuando se utiliza un bucle** `while`:

  - <mark>**el programa comienza por verificar la condición**</mark> 

    y
    
**Si la expresión condicional devuelve** `true`:

  - <mark>**se inicia la primera iteración del bucle**</mark>

    - `de lo contrario, no se inicia ninguna iteración.`

<br>

---

**Ejemplo:**

```js
let cv = 100;

while (cv > 100 && cv <= 110) {
  /*Este bucle es infinito, si tuviéramos el
  operador OR, ya que actuaria solo
  "cv <= 110", por que la variable cv es menor
   a 110.

   Pero en verdad aquí tenemos el operador AND  "&&"
  entonces tiene que cumplir las dos condiciones para que funcione!
   
   la supuesta variable de control esta en el cuerpo del bucle, al igual que su actualización,
   con lo cual este no tiene una función declarada a entender en los paréntesis*/

  console.log ("La voiture a " + cv + " cv");

  /*
  mostrara y aumentara en un los cv infinitamente mientras se cumpla la condición dada en los paréntesis de control*/

  cv ++

  /*Asi que esto con "OR" iría
  contando infinitamente*/

}
```

---

<br>

**[Enlace 9 bucles](https://replit.com/@javascript-studi/Les-boucles-Code-9-DumitruSF1)**

<br>

**En este script** se puede ver que <u>la condición del bucle</u> `while` es que, los `cv` <mark>**sean estrictamente mayor que 100 y menor o igual que 110**</mark>.

En la práctica, el bucle nunca se ejecutará porque `cv` es igual a 100.

El programa verifica la expresión `cv > 100 && cv <= 110` y, dado que devuelve `false`, no se realiza ninguna iteración del bucle.

Por lo tanto, necesitaríamos un sistema que ejecute la primera iteración del bucle antes de evaluar la expresión condicional.

Esto es posible con el bucle `do/while`.

👇

---
---

<br>
<br>

---

### **Ejemplo: `Do`/`while`**

---

<br>

```js
do {

  //instrucciones; 

} while (/*condición*/);
```

---

<br>

---

**Si modificamos nuestro ejemplo:**

```js
let cv = 100;

do {

  console.log ("El coche tiene " + cv + " cv");

  cv ++;

} while (cv > 100 && cv <= 110);


```

<br>

**[Enlace 10 bucles](https://replit.com/@javascript-studi/Les-boucles-Code-10-DumitruSF1)**

<br>

---

**Esto 👆 funciona y la consola muestra:**

```js
El coche tiene 100 cv

El coche tiene 101 cv

El coche tiene 102 cv

El coche tiene 103 cv

El coche tiene 104 cv

El coche tiene 105 cv

El coche tiene 106 cv

El coche tiene 107 cv

El coche tiene 108 cv

El coche tiene 109 cv

El coche tiene 110 cv
```

<br>

El bucle `do...while` **se ejecutará al menos una vez,** <mark>**incluso si la condición del bucle no se cumple inicialmente.**</mark>

<br>

**En el ejemplo, del bucle `while`:**

es `cv > 100 && cv <= 110`.

<br>

<b><u><i>Aunque</i></u></b> `cv` <b><u><i>se inicializa en 100</i></u></b> y **la condición** `cv > 100` **se evalúa como falsa desde el principio.**

<br>

Debido al bucle `do`, el bloque de código dentro del bucle `do` <mark><b><i>se ejecutará al menos una sola vez!</i></b></mark> `antes de verificar la condición "while".`

<b><u><i>Esto significa que la línea</i></u></b> `console.log("El coche tiene " + cv + " cv");` **se ejecutará una vez** y **mostrará** `"El coche tiene 100 cv"` en la consola.

**Después de ejecutar el bloque de código** `do` **por primera vez,** `cv` <mark><b><i>se incrementará en uno! con</i></b></mark> `cv++`.

<br>

<mark><b><i>Lo que hace que ahora que "cv" tenga el valor de 101.</i></b></mark>

<br>

`
Luego, la condición del bucle "while" se evaluará nuevamente.
`

<br>

**Ahora que,** `cv > 100` **se evalúa como verdad,** y `cv <= 110` **también**.

<br>

<mark><b><i>El bucle se ejecutará nuevamente y mostrará "El coche tiene 101 cv" en la consola.</i></b></mark>

**"Este proceso continuará hasta que"** `cv` **alcance el valor de 111**, <u>**momento en el que la condición**</u> `cv <= 110` _**se evaluará como falsa**_ y el <mark><b><i>bucle</i></b></mark> `while` **se detendrá en 111 y mostrara en consola 110.**

<br>

En resumen, el bucle `do...while` se ejecutará al menos una vez y luego se seguirá ejecutando mientras `cv` sea mayor que 100 y menor o igual a 110.

---

---

<br>

<br>

---

### **Evitar los bucles infinitos**

---

<br>

Ahora abordemos <mark>**un error a evitar**</mark>, los <b><u>`bucles infinitos`.</u></b>

<br>

---

**Un problema que puede ocurrir es el de los bucles infinitos:**

```
bucles que nunca se detienen y hacen que el programa se bloquee.
```

**Un bucle infinito ocurre cuando:** 

  - <u><b>la condición de un bucle `while` sigue devolviendo true constantemente.</b></u>

<br>

---

**1er Ejemplo:**

```js
let cv = 100;

while (cv > 100 || cv <= 110) {

  console.log ("El coche tiene " + cv + " cv");

  cv ++

}
```

---

<br>  
  
  - <u><b>no hay ninguna instrucción que haga que esta condición sea falsa.</b></u>

---

---

<br>

<br>

---

### **Atención!**

---

<br>

Vamos a ver un ejemplo, pero tengamos en cuenta que no se recomienda probar esta manipulación, ya que podría hacer que nuestro navegador se bloquee.

<br>

---

**Ejemplo:**

```js
let a = 120;

while (typeof(a) == "number" && (a >= 100 && a <= 140)) {

  console.log(a);
  /*En este cuerpo de mensaje seria un bucle infinito no hay nada que devuelva false se confirma todo, y no tiene un limite como control de iteración ...*/

  /*si tuviéramos un "a++" este incrementaría 120 hasta 140, en uno*/

  /* pero como no lo tenemos, este repetirá el valor de "a"
infinitamente con el valor de a = que es 120 */

}
```

---

<br>

En este ejemplo, la condición del while especifica que el tipo de la variable "a" debe ser un número y que "a" debe estar comprendida entre 100 (incluido) y 140 (incluido).

<br>

Dado que la variable "a" es igual a 120, esta condición devuelve true.

<br>

Sin embargo, el problema es que no hay ninguna instrucción dentro del while que cambie el valor de "a".

La condición siempre se verificará (siempre devolverá true), y el bucle no se detendrá hasta que se detenga el programa.

<br>

Sin embargo, si se agrega una operación de incremento de la variable "a" dentro del bucle, el bucle ya no será infinito y el código funcionará correctamente.


---

**Veamos un ejemplo:**

```js
let a = 120;

while (typeof(a) == "number" && (a >= 100 && a <= 140)) {

  console.log(a);

  a ++;

}
```

---

<br>

**[Enlace 11 bucles](https://replit.com/@javascript-studi/Les-boucles-Code-11-DumitruSF1)**

---

---

<br>

<br>

---

### **Uso de `break` & `continue`**

---

<br>

En programación, la palabra clave "break" se utiliza para salir de una estructura de bucle, mientras que la palabra clave "continue" se utiliza para saltar a la siguiente iteración del bucle y continuar su ejecución.

<br>

---

<br>

Tomemos el ejemplo en el que se inserta una condición en un bucle while.

**por ejemplo:**

```js
//Leer linea por linea tal cual lo hace el programa
// hacer nosotros lo mismo
//Interpretar linea por linea

let a = 110;

/* La variable `a` tiene por valor desde un principio `110`. */


/* El `while`verifica antes si la condición es TRUE `a >= 100 && a <= 150` que devuelve `true`. */
while (a >= 100 && a <= 150) {

  /* 6. 👆 El control del bucle regresa a la cabeza del bucle, y vuelve a empezar el bucle por que 120 sigue cumpliendo esta condición que esta dentro del paréntesis de control*/

 /* 1. El bucle while comienza con el valor de "a" igual a 110. */ 
  
  
  /* 7. En la segunda iteración del bucle, se ejecuta nuevamente
   la línea console.log(a);, mostrando el valor actual de "a" que ahora recordemos que es de 120
   (120) en la consola. */

  console.log(a);
  /* 2. En la primera iteración del bucle, se ejecuta la línea console.log(a);, mostrando el valor actual de "a" (110) 
  en la consola.*/

  /* 8. Ahora interpretemos la siguiente linea de código:
  a += 10, estamos de acuerdo que ahora a vale 130,
  bien!, pues 120 ya se ha mostrado en la consola! y aun asi ... ver punto numero 9  */

  a += 10;
  /* 3. El valor de "a" se incrementa en 10 y se convierte en 120.
  pero no se muestra en el console.log por el momento ya que se mostró el 110 en esta primera iteración
  tengamos en mente ya que a vale ahora 120!*/ 
  

  /* 11. como hemos vuelto y le sumamos 10 mas ahora, "a" vale 140,
  pues como  vale 140, esta cifra entra en el else if: en el else if, existe BREAK!! con lo cual no ensenara nada mas en la consola por que nos indica que se va a salir del bucle por orden de la condición BREAK!! */
  
  
  /* 4. Se verifica la condición if (a == 130).
  Como "a" no es igual a 130, por que a vale ahora 120, se omite este bloque if y no hace nada.
  Salvo que pasara a la siguiente instrucción que es la de nv */

  if (a == 130) { 

    /* 9. Se verifica la condición if por que aunque no se haya mostrado el valor de a en consola (que ahora es de 130), (a == 130). Ahora "a" es igual a 130, por lo que se ejecuta la instrucción CONTINUE!!. */

    continue;

    /* 10. La instrucción CONTINUE provoca que se salte el resto del código
     dentro del bucle y SE PASE A LA SIGUIENTE ITERACIÓN sin ejecutar la línea console.log("nv"); , esta linea de nv se omite, por causa de continue, y se vuelve al principio del bucle ensenando console.log que ahora vale 130!! */
    

  }else if (a == 140) {

    break;

  }

  /*este no es un bucle solo condición if */


/* 5. Se muestra en la consola la cadena de texto "nv".
Se muestra nv y no otra cosa, por que 120 no cumplía con la condición de if
, asi que el if no actuó!, y gracias a eso pasamos a la siguiente instrucción que es esta*/
  console.log("nv");

}

/* 12. Ya el bucle acabado y fuera de este mismo, por ultimo se mostrara
este ultimo console log (fini), ya que todo en js se ejecuta linea por linea de arriba hacia abajo! */
console.log("fini");
```

<br>

**[Enlace 12 bucles](https://replit.com/@javascript-studi/Les-boucles-Code-12-DumitruSF1)**

<br>

Intentemos entender cómo funciona el programa.

<br>

Leyendo los comentarios siguiendo los comentarios por orden numérica

<br>

---

**La consola muestra:**

```js
110
nv
120
130
fini
```

---

---