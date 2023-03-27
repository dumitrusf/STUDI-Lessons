# **Operadores de Base**

<br>

---

## **Operadores aritméticos**

---

<br>

---

### **Descubrimiento de los símbolos aritméticos.**

---

<br>

**Las operaciones aritméticas, como las aprendimos en nuestra infancia, también existen en PHP:**

- La **suma**, representada con el carácter **"+"**

- La **resta**, representada con el carácter **"-"**

- La **multiplicación**, representada con el carácter **"*"**

- La **división**, representada con el carácter **"/"**

<br>

---

**Además de estas 4 operaciones básicas, también encontramos las siguientes 2 operaciones:**

- **El módulo,** que **es el resto de la división**, representado por el carácter **"%"**,

    y

- **La exponenciación,** es decir, **la potencia de un número indicada con un exponente,** representada por **" ** "**.

<br>

---

---

<br>
<br>

---

### **Manipulación de operadores aritméticos**

---

<br>

**En los siguientes ejemplos, utilizamos la palabra clave `"echo"` para mostrar el resultado de las operaciones.**

<br>

---

**Ejemplo:**

```php
<?php
echo 2+3, "\n"; # muestra 5, y salta de linea
echo 10-3, "\n" ; # muestra 7, y salta de linea
echo 3*4, "\n" ; # muestra 12, y salta de linea
echo 15/3, "\n" ; # muestra 5, y salta de linea
?>
```

<br>

---

**Dos aclaraciones sobre estas primeras líneas de ejemplo:**

- Para que el código `"PHP"` sea interpretado, debe estar entre las etiquetas `"<?php"` al principio y `"?>"` al final.

- La palabra clave `"echo"` tiene el efecto de mostrar todos los elementos que le siguen, separados por comas.

<br>

---

En estos ejemplos, la expresión aritmética se calcula y se muestra, luego una cadena especial de caracteres **`"\n"`** que significa **`"nueva línea"`**.

**Sin este `"\n"`**, los 4 resultados se mostrarían pegados uno tras otro en una sola línea.

<br>

---

**Implementemos ahora las dos últimas operaciones aritméticas presentadas :**

```php
<?php
echo 2**3, "\n" ; # muestra 8, lo que corresponde a 2*2*2
echo 3**4, "\n" ; # muestra 81, lo que corresponde a 3*3*3*3
echo 15%2, "\n" ; # muestra 1, ya que 15=2*7+1

/*con el "%" le decimos que nos divida 15 entre 2, y este daría 7,
pero cuando uno usa el modulo "%", es por que no le interesa el 7 sino el valor que da la division o sea el resto, que en este caso es 1!*/

echo 23%4, "\n" ; # muestra 3, ya que 23=4*5+3
//23 entre 4, y el resto es 3!
?>
```

<br>

---

---

<br>
<br>

---

## **Operadores de cadena de caracteres**

---

<br>

<br>

---

### **Los delimitadores de cadena de caracteres**

---

<br>

Una cadena de caracteres es una secuencia de caracteres.

Para ser específicos, es necesario saber dónde comienza y dónde termina una cadena de caracteres.

Para ello, utilizamos delimitadores, que indican precisamente dónde comienza y dónde termina una cadena.

**Existen 4 tipos de delimitadores de cadenas de caracteres:**

- **El medio más sencillo es el uso de comillas simples `" ' "` al principio y al final.** 

  Así que **en el caso de que una cadena delimitada por comillas simples contenga un apóstrofe** (o sea esto  **`[ ' ]`**, lo que hay entre los corchetes ), se debe poner el apostrofe poniéndole antes el carácter **`"\"`**, **llamado "barra invertida" o "backslash" en inglés `(\')`.**
  
  **De igual manera,** **para** indicar **un "\"**, **se debe escribir doblemente para que uno solo aparezca`" \\ "`.**
  
  <br>

  **EJEMPLO:**

  ```php
  echo 'una simple cadena de caracteres', "\n" ;
  echo 'et maintenant avec l\'apostrophe !',"\n" ;
  ```
  ---

  <br>

  ---
  
  <br>

- **El segundo medio se llama `NOWDOC`.**

  **Permite** definir una cadena de caracteres sin preocuparse por los caracteres **`" ' "`** y **`" \ "`**.
  
  Para ello, **debes definir tu propio delimitador de inicio y fin** para la cadena de caracteres.
  
  En el ejemplo **a continuación, hemos definido 'MI_DELIMITADOR'**.
  
  Este delimitador, tiene final de cadena con el mismo nombre que empieza, y se escribe al comienzo de la línea.
  
  Este mismo delimitador, al inicio de la cadena, **está rodeado de comillas simples `( ' )`** y precedido por **`( <<< )`** **" `echo <<<'MI_DELIMITADOR' mucho texto y de todo aquí dentro! MI_DELIMITADOR` "**.
  
  <br>

  **EJEMPLO:**

  ```php
  echo <<<'MI_DELIMITADOR'
  He aquí el comienzo del texto
  que puede ir en varias lineas
  y contener caracteres especiales
  comme l'apostrophe y la barra oblicua inversa \
  MI_DELIMITADOR;
  ```
  ---

  <br>

  ---
  
  <br>

- **El tercer medio es el uso de `comillas dobles`, como vimos en los ejemplos anteriores para preparar una nueva línea con `"\n"`.**

  La ventaja de este método es que se pueden incluir en la cadena caracteres especiales, como **"nueva línea" ( "\n" )** que hemos visto.
  
  **De igual manera, para incluir comillas dobles o una barra invertida en la cadena, se debe anteponer con "\"**.
  
  Existen una docena de caracteres especiales que se pueden descubrir en detalle en la documentación oficial.
  
  Finalmente, lo más interesante de este método de comillas dobles es la interpretación de variables en la cadena.
  
  Para hacerlo, se utilizan las llaves **"{"** y **"}"**, como verás en el ejemplo que sigue.

  <br>

  **EJEMPLO:**

  ```php
  $quantite = 12 ; # on affecte la valeur 12 à la variable $quantite, cf. section suivante.
  echo "\nCette boîte contient {$quantite} oeufs.\n" ;
  ```
  ---

  <br>

  ---
  
  <br>

- **El último medio se llama `HEREDOC` y consiste en crear tu propio delimitador, pero sin rodearlo de comillas simples.**

  **_La ventaja de esta técnica es la interpretación de caracteres especiales y variables_**.
  
  **En el ejemplo a continuación, observa "mi_identificador_de_cadena" utilizado como delimitador.**

  <br>

  **EJEMPLO:**

  ```php
  echo <<<mon_identifiant_de_chaine
  \nune chaîne avec\ndes\nlignes\nmultiples
  ainsi que des variables interprétées :
  {$quantite}
  mon_identifiant_de_chaine;
  ```
  ---

<br>

---

---

<br>

<br>

---

### **La concatenación**

---

<br>

La operación de concatenación consiste en unir dos cadenas de caracteres para crear una nueva cadena mediante la simple yuxtaposición de una detrás de la otra.

- El símbolo de concatenación que convierte varias cadenas en una sola como si fuera una suma en `PHP` es el carácter **`"."`** (punto).

- El símbolo de " coma " no convierte nada, simplemente mantiene varias cadenas una detras de otra en su orden declarado como si fuera una cadena de cadena de cadenas de caracteres, en `PHP` se consigue con el carácter **`","`** (punto).

<br>

---

**EJEMPLO:**

```php
<?php
echo "réveil","-","matin","\n" ;

echo "réveil"."-"."matin"."\n" ;
?>
```

<br>

---

---

<br>
<br>

---

## **Operadores de afectación**

---

<br>

<br>

---

### **Principio de asignación**

---

<br>

La asignación es la acción de definir un valor a una variable.

En **`PHP`**, los nombres de **las variables siempre comienzan con el carácter `"$"`**, y el símbolo de **asignación de valor es el carácter `"="`**.

Ya vimos esto en el ejemplo anterior con la línea "$quantite = 12;".

<br>

---
---

<br>

<br>

---

### **Hacer asignaciones simples**

---

<br>

El siguiente **ejemplo** mostramos **dos casos de asignaciones básicas y dos casos de uso de estas variables** al mostrar el texto **`"Frédéric tiene 32 años"`**.

<br>

---

**Ejemplo:**

```php
<?php
$name = "Frédéric" ; # Asignación de una cadena de caracteres
$age = 32 ; # Asignación de un número entero
echo $name," a ",$age," ans.\n" ;
// las comas avan después de las variables ATENTOS!, y no confundir y creer que van entre una variable y una doble comilla ...  a simple vista podría causar confusión a alguien

echo "{$name} a {$age} ans.\n" ;
?>
```

<br>

---

---

<br>

<br>

---

### **Operador de asignación combinado**

---

<br>

**En programación, es común que el valor de una variable evolucione:**

**El nuevo valor proviene del valor anterior.**

Por **ejemplo**, **el nuevo saldo de su cuenta bancaria depende del saldo anterior y del balance de las transacciones realizadas.**

En este **ejemplo**, habría una **variable llamada** **`"saldo"`** **que necesita ser actualizada**.

Para tener un código más conciso, **`PHP`** **ofrece operadores de asignación combinados con actualización:**

<br>

---

**Ejemplo:**

- **`" += "`:** actualiza la variable sumándole el valor indicado,

- **`" -= "`:** actualiza la variable restando el valor indicado,

- **`" *= "`:** actualiza la variable multiplicándola por el valor indicado,

- **`" /= "`:** actualiza la variable dividiéndola por el valor indicado,

- **`" %= "`:** actualiza la variable tomando el resto de la división por el valor indicado,

- **`" **= "`:** actualiza la variable elevándola a la potencia del valor indicado,

- **`" .= "`:** actualiza la variable concatenándola con la cadena indicada.

<br>

---

---

<br>

<br>

---

### **Hacer asignaciones combinadas**

---

<br>

**Veamos de inmediato ejemplos concretos :**

<br>

---

**Ejemplo:**

```php
<?php
$quantite = 12 ;
echo "La cantidad vale {$quantite}.\n" ; # $quantite vaut 12

$quantite += 3 ; # equivalente a : $quantite = $quantite + 3 ;
echo "La cantidad vale {$quantite}.\n" ; # $quantite vaut 15

$quantite *= 3 ; # equivalente a : $quantite = $quantite * 3 ;
echo "La cantidad vale {$quantite}.\n" ; # $quantite vaut 45

$quantite /= 5 ; # equivalente a : $quantite = $quantite / 5 ;
echo "La cantidad vale {$quantite}.\n" ; # $quantite vaut 9

$chaine = "una cadena" ;
echo $chaine,"\n" ;

$chaine .= " mas larga." ;
echo $chaine,"\n" ;

?>
```

<br>

---

---

<br>
<br>

---

## **Prioridad de los operadores**

---

<br>

<br>

---

### **Los paréntesis**

---

<br>

Sin duda, aprendimos alguna vez en nuestra juventud a usar paréntesis en nuestros cálculos matemáticos.

Estos símbolos **`"("`** y **`")"`** definen las operaciones que se deben realizar en un orden específico.

El funcionamiento es el mismo en **`PHP`**.

<br>

---
---

<br>

<br>

---

### **Uso de los paréntesis**

---

<br>

**Algún que otro ejemplo practico :**

```php
<?php
echo 1+2*3,"\n" ; # calcula 2 x 3, y después calcula 1+6, que es 7
echo (1+2)*3,"\n" ; # calcula 2 + 1, y después calcula 3*3, que es 9
echo (3+2)/(3+2)*(3+2),"\n" ; # calcula 5/5, y después 1*5, que es 5
echo (3+2)/((3+2)*(3+2)),"\n" ; # calcula antes 5 x 5, y después 5/25, que es 0.2
?>
```

<br>

---

En caso de duda en nuestros programas, es mejor usar paréntesis que ayuden a la comprensión, aunque sean innecesarios para el funcionamiento del programa.

<br>

---
---

<br>

<br>

---

### **Los niveles de prioridad**

---

<br>

Como has podido observar en el ejemplo anterior, y seguramente lo sospechabas, la multiplicación tiene prioridad sobre la suma y la resta.

**Aquí está la lista de los operadores ordenados según su nivel de prioridad:**

- **`" ** "`** representa la operación de exponenciación, que es **la de mayor prioridad**.

- **`" * "`**, **`" / "`**, **" % "**: representan la multiplicación, división y módulo, respectivamente.

- **`" + "`**, **`" - "`**: representan la suma y resta, respectivamente.

- **" . "** representa la concatenación, que es la operación de menor prioridad.

<br>

---
---

<br>

<br>

---

#### **Testear las propiedades**

---

<br>

**Ejemplo:**

```php
<?php
$n = 10 ;
echo "la mitad de {$n} es ".$n/2,"\n" ; # La división se hace antes de la concatenación
echo 1-2**3/4+3 ." €\n" ; # muestra 2 €
# calculo 2**3=8, después 8/4=2, después 1-2=-1, después -1+3=2, después la concatenación


/* El comentario nos dice que el orden de evaluación de la expresión es el siguiente:

1. Se calcula el valor de $n/2, que es 5.
2. Se concatena el resultado con el texto "la mitad de {$n} es ".
3. Se muestra el resultado final: "la mitad de 10 es 5\n".

Es decir, la división se hace antes de unir los textos. ¿Te queda más claro? */

?>
```

<br>

---
---

<br>
<br>

---

## **Operador de ejecución**

---

<br>

<br>

---

### **Descubrir el operador de ejecución**

---

<br>

**Ejemplo:**

```php
<?php
echo `dir` ; # Para listar el contenido del directorio actual en Windows
echo `tasklist` ; # Para listar procesos activos en Windows
echo `ls` ; # para listar el contenido del directorio actual en Linux
echo `ps` ; # para listar los procesos activos del usuario en Linux
?>
```

El lenguaje `PHP` ofrece un operador de ejecución que permite enviar un comando al sistema operativo y recuperar su resultado como una cadena de caracteres.

El comando del sistema debe estar encerrado entre el carácter de comillas invertidas "`", que se puede escribir en el teclado manteniendo presionadas simultáneamente las teclas "AltGr" y "7". Un mnemotécnico para escribir este símbolo: en realidad, es un acento grave, que se encuentra en la letra "è", ¡escrito con la misma tecla!

Para escribir el carácter de comillas invertidas en PHP en un teclado Mac, puedes utilizar la combinación de teclas "Alt" y "`" (Alt corresponde a la tecla "Option" en el teclado Mac).

<br>

---
---