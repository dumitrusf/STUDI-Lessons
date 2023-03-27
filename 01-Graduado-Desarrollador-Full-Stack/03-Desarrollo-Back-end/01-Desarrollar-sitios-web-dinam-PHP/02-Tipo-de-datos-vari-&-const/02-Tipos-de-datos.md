# **Los tipos de datos**

<br>

---

## **Tipos de bases**

---

<br>

---

### **Null, True, & False**

---

<br>

Cuando una variable se considera "vacía", esta puede ser "nula".

También se dice que su valor es "nulo" o que se evalúa como "nulo".

La palabra clave "null" no distingue entre mayúsculas y minúsculas, es decir, "null" y "NULL" son la misma cosa.

La palabra clave "null" representa un caso particular, ya que designa tanto un valor como un tipo de datos.

Un dato de tipo "null" solo puede tener un valor, que es "null".

El valor "null" es en realidad una constante (presentaremos las constantes al final de este curso).

La palabra clave "null" se utilizó ampliamente en versiones anteriores a PHP 8, pero esta versión definió un marco más estricto, limitando su uso.

<br>

---

<br>

En el siguiente ejemplo, verá dos casos de uso de comparación de datos con null.

Las palabras clave "true" y "false" también designan dos constantes, que se utilizan como valores.

Estos dos valores también son insensibles a mayúsculas y minúsculas, es decir, "true" y "TRUE" son idénticos, al igual que "false" y "FALSE".

Estos dos valores constituyen el conjunto de valores de datos de tipo booleano, notado como "bool" en PHP.

Un tipo booleano, cuyo nombre proviene de Georges Boole, padre de la lógica moderna, solo puede tener un valor "true" o "false".

"True" se traduce como "verdadero", mientras que "false" se traduce como "falso".

Utilizamos datos booleanos cuando realizamos comparaciones: el resultado es verdadero o falso.

<br>

---

---

<br>
<br>

---

### **Manipular null y los booleanos**

---

<br>

En el ejemplo de aquí abajo 👇, **utilizamos la función `"var_dump"` que muestra el tipo de datos (en este caso "bool") y el valor (en este caso "true" o "false")**.

<br>

---

**Ejemplo:**

```php
<?php
if(""==null){ # Compara la cadena de caracteres vacía con null
	echo "una cadena vacía !", "\n";
}
if([]==null){ # compara el ARRAY vació con null
	echo "un array vació !","\n";
}
var_dump(true) ; # muestra bool(true)
var_dump(false) ; # muestra bool(false)
var_dump(2==1) ; # muestra el resultado del test "2 es igual a 1", o bool(false)
var_dump(2>1) ; # muestra el resultado del test "2 es superior a 1", o bool(true)
var_dump(2!=1) ; # muestra el resultado del test "2 es diferente de 1", o bool(true)
var_dump(2<=1) ; # muestra el resultado del test "2 es inferior o igual a 1", o bool(false)
?>
```

<br>

---

---

<br>
<br>

---

### **Enteros y flotantes**

---

<br>

Probablemente sabes desde la escuela primaria lo que es un número entero.

**`En PHP, un número entero esta firmado, es decir que puede ser positivo o negativo (o nulo si es cero, ¡pero no lo confundas con nulo!).`**

Probablemente domines los números enteros en el sistema decimal, es decir, contando con los diez dígitos, del 0 al 9.

<br>

---

**Pero PHP también permite contar naturalmente en otros 3 sistemas de numeración:**

- El **`sistema binario`** con los **dos dígitos 0 y 1, prefijando los valores por "0b" o "0B",**

- El **`sistema octal`** con los **ocho dígitos del 0 al 7, prefijando los valores por "0o" o "0O",**

- El **`sistema hexadecimal`** con los **dieciséis dígitos del 0 al F, con los prefijos "0x" y "0X".**

<br>

---

<br>

En informática, un número entero no puede ser indefinidamente grande, ya que necesitamos memoria para almacenarlo, y el tamaño de la memoria es limitado.

Por lo tanto, **en PHP, el entero más grande es 9223372036854775807 y el más pequeño -9223372036854775807.**

Esto es cierto en un sistema de 64 bits, ya que sus programas en PHP se basan en el sistema en el que se ejecutan y, por lo tanto, dependen de él.

**La consecuencia de esta limitación para los enteros es que un dato entero que excede estos límites se convierte en números decimales.**

Para entenderlo, **veamos qué es un número decimal en informática, aquí abajo!.** 👇

<br>

---

<br>

```
Un número decimal está compuesto por una parte entera - situada antes de la coma - y una parte decimal - situada después de la coma.

El almacenamiento de un número decimal en la memoria de la computadora utiliza la notación científica, es decir, que la parte entera es solo de un solo dígito entre 1 y 9, y se indica una potencia de 10 para colocar la coma.

Por lo tanto, se dice que la coma es flotante.

Es por eso que, en informática, los números decimales se llaman números de punto flotante y se llaman "float" en inglés.

Un número flotante tiene una precisión máxima de 14 dígitos, lo que significa que después de la coma solo puede haber hasta 13 dígitos como máximo.

La sintaxis para escribir un número flotante es usar el carácter punto "." como coma, y las letras "e" y "E" para indicar el exponente.

Cuando use números flotantes, deberá ser especialmente cuidadoso en sus cálculos y comparaciones, ya que los comportamientos inesperados e incoherentes son frecuentes.

Por ejemplo, si necesita calcular precios, es mejor usar enteros considerando los centavos en lugar de decimales considerando los euros.

```

<br>

---

---

<br>

<br>

---

### **Manipular los enteros y los flotantes**

---

<br>

En los siguientes ejemplos, utilizamos el comando **`"echo"`** que **muestra la salida en la pantalla.**

**Este comando muestra todos los elementos que le siguen, separados por comas.**

**La cadena de caracteres `“\n”` indica “nueva línea” como en `JavaScript` en `console.log`**; sin ella, todo se mostraría en una sola línea.

Veremos este tema en la siguiente sección.

<br>

---

**Ejemplo: el comando `"echo"`**

```php
<?php
echo 195,"\n" ; # Un número entero escrito en el sistema decimal

echo 0b101,"\n" ; # El número 101 entero escrito en el sistema binario corresponde a 5 en decimal

echo 0o764,"\n" ; # el numero entero 764 escrito en el systema octal corresponde a 500 en decimal

echo 0x1F4,"\n" ; # el numero entero 1F4 escrito en el systema hexa corresponde a 500 en decimal

echo PHP_INT_MAX,"\n"; # esta constante corresponde al valor entero mas grande

echo PHP_INT_MAX + 1 ,"\n"; # añadiendo 1, El número ya no es mas entero, ahora es flotante

echo 42.5,"\n" ; # un numero decimal

echo 4.25e3,"\n" ; # un numero decimal con un exponente positivo, aquí 4250

echo 4.25e-3,"\n" ; # un numero decimal con un exponente negativo, aquí 0.00425

# cuidado con el uso de los float

echo 0.1+0.2,"\n"; # la suma de 0,1 y 0,2 vaut 0,3

var_dump(0.1+0.2); # en memoria, esto no vale realmente 0,3

echo 9.3-5.3,"\n"; # la diferencia de 9,3 menos 5,3 es 4

var_dump(9.3-5.3); # en memoria, esto no vale realmente 4

?>
```

<br>

---

---

<br>
<br>

---

### **Las cadenas de caracteres**

---

<br>

Una cadena de caracteres es una secuencia de caracteres.

Para ser precisa, es necesario saber dónde comienza y termina una cadena de caracteres.

Para ello, se utilizan delimitadores, que indican precisamente dónde comienza y termina una cadena.

<br>

---

**Existen 4 tipos de delimitadores de cadenas de caracteres:**

- El método más sencillo es usar una comilla simple `" ' "` al principio y al final.

  Por lo tanto, en el caso de que una cadena delimitada por comillas simples contenga un apóstrofo (como esta palabra (l'apostrophe)) , se debe anteponer este último con el carácter "\" llamado "barra invertida" o "backslash" en inglés.

---

<br>

- El segundo método se llama NOWDOC.

  Permite definir una cadena de caracteres, pero sin preocuparse por los caracteres “'” y "".

  Para ello, debe definir usted mismo un delimitador de inicio y fin para la cadena de caracteres.

  En el ejemplo que se muestra a continuación, he definido “MON_DELEMITEUR”.

  Este delimitador, al final de la cadena, se escribe al principio de la línea.

  Este mismo delimitador, al principio de la cadena, está rodeado de comillas simples y precedido por “<<<”. Puede revisar tranquilamente esta sintaxis con el siguiente ejemplo.

---

<br>

- El tercer método es el uso de comillas dobles.

  La ventaja de este método es que se pueden incluir caracteres especiales en la cadena.

  Por ejemplo, para indicar "nueva línea" (también conocido como "salto de línea"), se debe indicar asi --> "\n".

  Del mismo modo, para incluir comillas dobles o una barra invertida en la cadena, se debe anteponer con "\".

  Existen una docena de caracteres especiales que se pueden descubrir en detalle en la documentación oficial.

  Por último, lo más interesante de este método de comillas dobles es la interpretación de las variables en la cadena.

  Para ello, se utilizan las llaves "{" y "}", como se puede ver en el ejemplo que se muestra a continuación.

---

<br>

- El último método se llama HEREDOC y consiste en crear su propio delimitador, pero sin rodearlo de comillas simples.

  La ventaja de esta técnica es la interpretación de caracteres especiales y variables.

  En el ejemplo que se muestra a continuación, observe "mon_identifiant_de_chaine" utilizado como delimitador.

<br>

---

**EJEMPLO:**

```php
<?php
echo 'una simple cadena de caracteres', "\n" ;
echo 'et maintenant avec l\'apostrophe pour la france !',"\n" ;
echo <<<'MON_DELEMITEUR'
he aquí el comienzo del texto
que puede estar sobre varia lineas
y contener caracteres especiales
comme l'apostrophe y la barra oblicua inversa \
MON_DELEMITEUR;
$quantite = 12 ; # le asignamos el valor 12 a la variable $quantite
echo "\nEsta caja contiene {$quantite} huevos.\n" ;
echo "una\ttabulación" ; # el carácter especial "\t" est une tabulation
echo <<<mon_identifiant_de_chaine
\nuna cadena con\nmultiples\nsaltos\nde\nlinea
así como variables interpretadas :
{$quantite}
mon_identifiant_de_chaine;
?>
```

<br>

---

---

<br>
<br>

---

## **Tipos estructurados**

---

<br>

<br>

---

### **Arrays (Tablas)**

---

<br>

**Muy a menudo en programación, los datos constituyen conjuntos por ejemplo:**

<br>

- una lista de temperaturas

- una tabla de notas

- una cola de espera

- etc.

En `PHP`, un array es una secuencia ordenada de elementos, cada uno de los cuales tiene una clave y un valor.

Cuando las claves no se definen explícitamente, se inicializan con un índice.

<br>

---

**EJEMPLO de un Array sin clave explicita, el indice comienza en 0:**

| clave | 0   | 1   | 2   | 3   | 4   | 5     | 6   | 7   |
| ----- | --- | --- | --- | --- | --- | ----- | --- | --- |
| valor | RMC | FCB | BM  | ACM | ATM | Inter | LFC | MC  |

en este 👆 array como no hay una clave ... pues su clave sera los indices ...

---

<br>

Pero si le diéramos la clave ... este ya no seria el indice ... este tendría una clave

| clave | Madrid | Barcelona | Munich | Milan | Sevilla | Roma | Liverpool | Manchester |
| ----- | ------ | --------- | ------ | ----- | ------- | ---- | --------- | ---------- |
| valor | 22     | 26        | 20     | 28    | 32      | 25   | 19        | 17         |

Aquí Las claves serian las ciudades, y las temperaturas los valores

<br>

**La sintaxis para usar Arrays corresponde a los corchetes `"["` y `"]"`.**

**Se utilizan tanto para definir un array como para leer un valor (o actualizarlo).**

La palabra clave "array" también se puede utilizar para definir una tabla.

**Cada elemento de una tabla está separado por una coma.**

**Cuando la clave es explícita (osea declarada entre "comillas" y asignado un => valor), debe ser de tipo entero o cadena de caracteres.**

En este caso, **se utilizan los caracteres "=>" entre una clave y su valor asociado.**

Por supuesto, como un array es un conjunto asociativo, la clave debe ser única.

<br>

---

---

<br>

<br>

---

### **Manipular las tablas**

---

<br>

Veamos de inmediato ejemplos concretos que son más elocuentes que un largo discurso.

<br>

---

**EJEMPLO:**

```php
<?php

/* Ejemplo de 
lista */

$tableau = [4,5.3,-8,"programmation",true]; # una lista (en verdad es un array pero bueno...) de 5 elementos sin clave explicita
echo $tableau[0],"\n"; # El primer elemento de la lista, tiene el índice "0", que muestra el primer valor que es el 4
echo $tableau[3],"\n"; # el cuarto elemento de la lista, tiene el indice de "3", muestra programmation
$tableau[3] = "PHP" ; # actualizamos el valor del cuarto elemento de la lista que era "programmation" a "PHP", tiene el indice de "3"
echo $tableau[3],"\n"; # el cuarto elemento de la lista, que tiene el indice de "3", muestra "PHP"
$tableau[] = "new !"; # Agregamos un elemento al final de la lista con el valor indicado
print_r($tableau); # Muestra todo el contenido de la tabla; Observe también el último elemento agregado

/* Ejemplo de 
Lista */



/* Ejemplo de 
Array */

# un Array con claves explícitamente dadas
$famille = [
    "père"=>"jean",
    "mère"=>"marie",
    "grand-père_p"=>"antoine",
    "grand-mère_p"=>"alice",
    "grand-père_m"=>"franck",
    "grand_mère_m"=>"sarah"
];
echo $famille["père"],"\n" ;
# el valor del elemento del array en el que la clave es "père"

echo $famille["mère"],"\n" ;
# el valor del elemento del Array en el qu la clave es "mère"

/* Ejemplo de 
Array */

/* Ejemplo de 
Array con valores como Arrays */

# un Array en el que algunos de sus valores contienen Arrays
$famille_bis = array(
    "père"=>"jean",
    "mère"=>"marie",
    "grand-père"=>array(
        "paternel"=>"antoine",
        "maternel"=>"franck"),
    "grand-mère"=>array(
        "paternel"=>"alice",
        "maternel"=>"sarah")
);
print_r($famille_bis);
# Muestra todo el contenido del Array

/* Ejemplo de 
Array con valores como Arrays */

?>
```

<br>

---

---

<br>

<br>

---

### **Introducción a Objetos**

---

<br>

**En la vida cotidiana, un objeto tiene un conjunto de propiedades, como un color, dimensiones, peso, uso, etc.**

**En programación orientada a objetos, tenemos la misma lógica:** un objeto tiene varias propiedades y usos.

**Para ilustrar esta sección, nos centraremos en un objeto en particular:** Un libro.

---

**En nuestro caso, hemos seleccionado 3 propiedades, y cada libro tiene:**

- un título

- un autor

  y 

- un año de publicación

<br>

---

**En `PHP`, para utilizar los objetos, necesitamos proceder en 2 etapas:**

- Definir la estructura del objeto, es decir, el modelo, utilizando la palabra clave "class"

- Crear objetos con la palabra clave ‘new’, entonces hablamos de una instancia

<br>

---

---

<br>

<br>

---

### **Manipular los Objetos**

---

<br>

**Para definir nuestras 3 propiedades en nuestra clase:**

- **utilizamos la palabra clave `'public'`**

  - lo que permite acceder a estas propiedades.

---
<br>  

- **Una clase se define entre llaves, como se muestra a continuación.**

---
<br>

- **Finalmente, una vez que el objeto está instanciado `(copiado a decir de alguna manera ya que una instancia es una plantilla a reutilizar, y que le podemos dar otras propiedades ...)`, para acceder a las propiedades:**

  - utilizamos los caracteres `'->'`. 

<br>

---

**EJEMPLO:**

```php
<?php
# definimos nuestro modelo de Libro con nuestras 3 propiedades
class Book{
    public $title;
    public $author;
    public $publication;
}
# creamos una instancia del libro con new, luego le asignamos propiedades con ->
$Book1 = new Book();
$Book1->title = "Viaje al centro de la tierra"; # Proporcionamos el título
$Book1->author = "Jules Vernes"; # proporcionamos el autor
$Book1->publication = 1864 ; # Indicamos el año de la publicación
print_r($Book1); # Mostramos el contenido de la instancia


/*
Puesto que una instancia es una plantilla de un objeto aquí va lo mismo, y en una tienda digital estaría registrado el objeto como book object
*/

$Book2 = new Book();
$Book2->title = "El sueño de una tortuga"; 
$Book2->author = "Kylian Mbappé"; 
$Book2->publication = 2023 ; 
print_r($Book2); 

?>
```

<br>

Pues bien, como podemos ver, tenemos una sola variable $Book1 que tiene las 3 propiedades asignadas.

Podemos por ejemplo representar nuestra biblioteca mediante una lista de libros.

<br>

---

<br>

Vallamos más lejos con nuestra ilustración.

Con cada instancia de un nuevo libro, debemos asignar las 3 propiedades.

Hemos visto que todo esto requiere 4 líneas de código.

La idea es definir en la clase en sí misma el asignamiento de estas 3 propiedades.

Esto evitará indicarlo para cada libro creado.

<br>

---

**Para esto, usaremos dos cosas:**

- **Una función que se activa al crear un nuevo libro, con las palabras clave `"function__construct()"`.**

  - **A esto se le llama fabricante de clase.**

  <br>

- **La variable `$this`, que representa el objeto en sí mismo.**

```php
<?php
# Definimos una nueva clase que contiene un constructor
class Movie{
    public $title;
    public $author;
    public $publication;
    function __construct($t, $a, $p){
        $this->title = $t;
        $this->author = $a;
        $this->publication = $p;
    }
}
# al haber creado el objeto, pasamos al constructor los valores de las propiedades
$Movie = new Movie("El caballero oscuro","Christopher Nolan",2023);
print_r($Movie); # on affiche l’objet
?>
```

<br>

Ahora sabemos cómo crear estructuras personalizadas gracias a los objetos.

Esta sección fue una introducción a los objetos.

Todavía podemos descubrir muchas cosas mas, pero más tarde (en otro curso) sobre la programación-objeto, en particular en las nociones de herencia.

<br>

---

---