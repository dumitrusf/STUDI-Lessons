# **Funcionamiento de Variables y Constantes**

<br>

---

## **Variables**

---

<br>

---

### **El alcance de las variables**

---

<br>

**Llamamos "alcance" de una variable a las ubicaciones del código donde esta variable puede ser accedida, en PHP y en este punto, existen dos niveles de alcance:**

- **Una variable definida dentro de una función solo existe dentro de la función y no puede ser utilizada fuera de la función. Aquí hay un ejemplo para comprenderlo mejor:**

👇

```php
<?php
function cuanto(){ # Definimos una función de "cuanto"
    $peso = 300 ; # Definimos una variable $peso dentro de la función
}
cuanto(); # ejecutamos la función "cuanto" llamándola con "cuanto()"
echo $peso; # Queremos mostrar la variable $Peso
/* Pero no hay una variable $peso en este nivel,
(osea fuera del ámbito de la función no hay una variable $Peso)
*/

# Asi que se muestra un mensaje de error
?>
```

<br>

---

<br>

- Una variable definida fuera de una función se puede usar en todas partes

<br>

Sin embargo, hay un punto de vista a tener en cuenta.

De hecho, **las variables utilizadas en las funciones son, por defecto, locales a la función.**

Sin embargo, sucede que **a veces en una función necesitamos acceder a una variable global, es decir, definida fuera de una función.**

**En este caso, declaramos en la función la variable utilizando la palabra clave `"global"`.**

<br>

---

---

<br>
<br>

---

### **Distinguir el alcance de las variables**

---

<br>

**Descubramos dos casos para entenderlo mejor:**

```php
<?php
function mostrar(){ # definimos una función "mostrar"
    $cantidad = 2 ; # inicializamos una variable local $cantidad
    echo $cantidad,"\n" ; # mostramos esta variable
}
$cantidad = 5 ; # definimos una variable global $cantidad
mostrar(); # ejecutamos la función mostrar, llamando la función "mostrar", que muestra el 2
echo $cantidad,"\n" ; # vemos la variable global $cantidad, que es 5, por que esta en el mismo ámbito osea fuera de función es una variable global
?>
```

En este primer ejemplo, **La variable global `"$cantidad"` no esta conocida dentro de la función `“mostrar”`, por que como bien mencionamos, es global, osea que esta fuera de la función.**

Entonces **tenemos dos variables diferentes, con el mismo nombre `"$cantidad"`**, pero **uno de alcance local** (en la función unicamente) **y** el **otro del alcance global.**

<br>

```php
<?php
function muestra_bis(){ # definimos una función "muestra_bis"
    global $cantidad ; # declaramos utilizar la variable global $cantidad
    echo $cantidad,"\n" ; # mostramos esta variable
    $cantidad = 2 ; # modificamos esta variable dándole un valor de 2
}
$cantidad = 5 ; # modificamos la variable global $cantidad que antes valia 2, y ahora pasa a tener 5

muestra_bis(); # ejecutamos la función "muestra_bis" llamándola asi -> "muestra_bis()"
echo $cantidad,"\n" ; # mostramos la variable que fue modificada por la función
?>

en consola nos va a salir esto:

5
2

/* Nos va a salir 5 antes por que esta la variable con el valor 5 fuera de la funcion osea en global, osea que nos hace un javascript 🤣 vamos que como esta en global la sube arriba y es como si estuviera esa antes, esto es un hoisting */
```

<br>

**En este segundo ejemplo, solo existe una variable $quantite, con un alcance global.**

<br>

---

---

<br>
<br>

---

### **Las variables predefinidas**

---

<br>

**En la mayoría de los casos** que encontrarás, **utilizarás `PHP` en un servidor web.**

**Tus programas `PHP` se basarán en las características** relacionadas con el entorno **de ejecución:**

- **_versión del sistema operativo_**

- **_versión del servidor web_**

- **_versión de `PHP`_**

  y
  
- **_diversas configuraciones relacionadas con la configuración._**

<br>

---

**Todos estos 👆 parámetros están disponibles en `PHP` a través de variables llamadas `Superglobales`.**

**Estas variables Superglobales son ARRAYS** (o llámalo listas) **y se llaman:**

- **`$GLOBALS`**

- **`$_SERVER`**

- **`$_GET`**

- **`$_POST`**

- **`$_FILES`**

- **`$_COOKIE`**

- **`$_SESSION`**

- **`$_REQUEST`**

- **`$_ENV.`**

---
<br>

**El propósito aquí** no **es** detallar cada una de estas variables, sino **informarte de que existen y que puedes utilizarlas.**

Para ello, **puedes llamarlas directamente, incluso en una función sin declararlas con `"global"`.**

Puedes consultar la documentación oficial de `PHP` para satisfacer tu curiosidad en los detalles.

<br>

---

---

<br>

<br>

---

### **Las variables externas a `PHP`**

---

<br>

**Cuando completas un formulario en una página web, envías datos al servidor web.**

**Si el sitio web funciona con PHP, pues PHP recibirá tus datos del formulario.**

**Estos datos enviados a `PHP` por ti se almacenan en variables llamadas variables externas.**

**Estas variables son parte de las variables Superglobales (las que dijimos que son Arrays) explicadas anteriormente.**

<br>

---

**Por ejemplo, si un formulario en HTML contiene los siguientes 3 campos:**

```html
<input type="text" name="name" />
<input type="text" name="surname" />
<input type="text" name="email" />
```

---
<br>

Entonces podrás acceder a los datos enviados a `PHP` en estos 👆 tres campos del formulario con la variable **`$_REQUEST`**, y más precisamente con las siguientes tres sintaxis:

- $_REQUEST["name"]

- $_REQUEST["surname"]

- $_REQUEST["email"].

<br>

---

---

<br>
<br>

---

### **Las variables dinámicas**

---

<br>

El lenguaje `PHP` permite un uso poderoso del símbolo del dólar `"$"` para nombrar variables.

**Es posible utilizar nombres de variables dinámicos**, lo que significa que los nombres en sí mismos son evaluados para determinarlos y luego acceder al valor de la variable.

**Técnicamente, es posible tener varios símbolos del dólar "$" como prefijo de un nombre, para acceder a un valor después de interpretaciones sucesivas.**

<br>

---

#### **Manipular variables dinámicas**

---

<br>

**Veamos un primer ejemplo:**

```php
<?php
$texto = 'cadena' ; # definimos una variable "$texto" que tiene como valor -> "cadena"

$cadena = 'de caracteres' ; # definimos una variable "$cadena"que tiene como valor -> "de caracteres"

echo $texto,"\n" ; # mostramos la variable "$texto"
echo $cadena,"\n" ; # mostramos la variable "$cadena"
echo $$texto,"\n" ; # En el primer dólar vale cadena, ya que la variable "$texto", tiene como valor "cadena", y en el segundo dólar la variable pasara a llamarse como su contenido valor es decir ahora sera "$cadena", con lo cual esta linea de echo mostrara "de caracteres"
$document = 'texto' ; # definimos una variable "$document" que tiene como valor -> "texto"

echo $$$document,"\n" ; # Mostramos la interpretación final del nombre de la variable $$$document, que por tener tres dólares, esta empieza a adoptar en el segundo dólar como nombre como variable $texto entonces su valor ya no sera texto su valor sera cadena, y en el tercer dólar, la variable pasara a llamare como su contenido valor, es decir $cadena entonces el valor sera "de caractères"

/* en la consola tendremos esto:

cadena
de caracteres
de caracteres
de caracteres */
?>
```

<br>

---

<br>

Utilizando esta técnica, puede suceder que la sintaxis utilizada sea confusa.

Para aclararla, podemos utilizar las llaves, al igual que lo que hemos visto para interpretar variables en cadenas de caracteres.

<br>

**He aquí hay un segundo ejemplo de uso de variables dinámicas, de manera correcta.**

---

```php
<?php
$documento = 'texto' ; # Definimos una variable "$documento" que tiene como valor 'texto'

$texto = 'cadena' ; # Definimos una variable "$texto" que tiene como valor 'cadena'

$cadena = 'enlace' ; # Definimos una variable "$cadena" que tiene como valor 'enlace'

echo "$documento\n" ; # Mostramos en consola el valor de la variable "$documento", que es: 

# 'texto'


echo "$$documento\n" ; # Mostramos en consola el símbolo '$' seguido del valor de la variable $documento, que es 'texto', y en consola asi:

# $texto

echo "$$$documento\n" ; # Mostramos en consola 2 símbolos de '$' seguido del valor de la variable $documento, que es 'texto', y en consola asi:

# $$texto

echo "${$documento}\n" ; # Mostramos en consola el valor de la variable "$texto", y su valor es 'cadena'

echo "${${$documento}}\n" ; # Mostramos en consola el valor de la variable en el que el nombre es "$cadena", y valor 'enlace'

$datos = ['frase','palabras','letras']; # Definimos una tabla de datos

$frase = 'palabras'; # Definimos una variable "$frase" con valor 'palabras'

$palabras = 'letras'; # Definimos una variable "$palabras" con valor 'letras'

echo "una $datos[0] que contiene ${$datos[0]} con ${${$datos[0]}}";
# muestra 'una frase conteniendo palabras con letras'


# Esta seria la manera moderna y correcta, y no ambigua de declarar variables variables
# Ya que con el otro metodo visto mas arriba ....

# al declarar mostrar en consola la variable $$$document el programa va a pensar que queremos mostrar el valor de la variable document pero con dos símbolos de dólar precedidos!! 

?>
```

<br>

---
---

<br>
<br>

---

## **Constantes**

---

<br>

---

### **Diferencias entre variables y Constantes!**

---

<br>

Has visto que **las variables tienen un nombre que comienza con el símbolo `$` y una valor que puede ser modificado.**

**Las constantes se asemejan** a las variables en el sentido de que **un nombre corresponde a un valor.**

**Pero** la gran diferencia, **como su nombre indica,** radica en que **las constantes no son modificables.**

**Para declarar una constante, se debe utilizar el comando `"define"` según la sintaxis mostrada a continuación.**

Por convención, **es adecuado nombrar las constantes en MAYÚSCULAS.**

**Finalmente, las constantes tienen el mismo alcance que las variables Superglobales.**

Así, una constante es accesible en cualquier momento dentro del código.

<br>

---

---

<br>

<br>

---

### **DEFINIR_CONSTANTES**

---

<br>

**Ejemplo**

```PHP
<?php
define("MAJORITE",18); # on définit une constante nommée MAJORITE qui vaut 18
echo MAJORITE,"\n" ; # on affiche cette constante
define("MINIMUM_TEMPERATURE",-20); # on définit une constante MINIMUM_TEMPERATURE
echo MINIMUM_TEMPERATURE,"\n" ; # on l'affiche
?>
```

---
<br>

Tengamos en cuenta que también **existe la palabra clave `"const"` para definir una constante, pero con más restricciones.**

**Es por eso que preferimos usar `"define"` en este curso.**

<br>

---

---

<br>

<br>

---

### **CONSTANTES_PREDEFINIDAS**

---

<br>

**Probablemente recuerdes la sección sobre las variables predefinidas,** donde se presentaron las variables `Superglobales`, en la sección de **_[Las variables predefinidas.](#las-variables-predefinidas)_**

De hecho, **la mayor parte de esos datos son en realidad constantes.**

**En efecto, todos los parámetros relacionados con la configuración no pueden ser modificados en los programas!: están definidos desde el principio!.**

---
<br>

**Comenzamos este curso presentándote tres constantes particulares:**

- null

- true

  y

- false.

<br>

**Luego, utilizamos la constante `"PHP_INT_MAX"` para conocer el entero más grande.**

Así que podemos ver que las constantes están presentes en todas partes en nuestros programas.

<br>

---

**EJEMPLO: Aquí hay algunas de ellas:**

```php
<?php
echo PHP_VERSION,"\n" ; # la version de PHP utilizada
echo PHP_INT_MAX,"\n"; # el entero mas grande
echo PHP_FLOAT_MAX,"\n"; # el double (float, (decimal 10.5 por ejemplo)) mas grande
?>
```

<br>

---

---

<br>

<br>

---

### **Las constantes mágicas**

---

<br>

**PHP integra `9 constantes especiales llamadas "Mágicas"`.**

**Estas constantes obviamente no son modificables, pero tienen la particularidad de ser evaluadas diferentemente en función de su sitio en el código.**

**He aquí su significado, en función de donde serán llamadas estas constantes:**

<br>

- **`__LINE__`** : corresponde al número de línea en el archivo,

- **`__FILE__`** : corresponde al nombre completo del archivo,

- **`__DIR__`** : corresponde al nombre completo del directorio del archivo,

- **`__FUNCTION__`** : corresponde al nombre de la función actual,

- **`__CLASS__`** : corresponde al nombre de la clase actual,

- **`__TRAIT__`** : corresponde al nombre del trait actual,

  - **¿ Qué es un "trait" ?:**
  
    - un `"trait"` es una unidad de código reutilizable que puede ser incluida en varias clases.

      Es similar a una clase, pero no puede ser instanciada directamente.

        - **no puede ser instanciada directamente ? :**

          - **[Aqui la explicacion !:](./explicacion-chat-gpt.txt)**

        <br>
      
      Los `"traits"` permiten la reutilización de código y la implementación de comportamientos comunes en varias clases sin herencia múltiple.

  <br>

- **`__METHOD__`** : corresponde al nombre del método actual,

- **`__NAMESPACE__`** : corresponde al nombre del espacio de nombres actual,

- **`ClassName::class`** : corresponde al nombre completo de la clase actual.

<br>

**Luego, utilizamos la constante `"PHP_INT_MAX"` para conocer el entero más grande.**

Así que podemos ver que las constantes están presentes en todas partes en nuestros programas.

<br>

---

---

<br>

<br>

---

### **Utilizar las constantes mágicas**

---

<br>

**algún ejemplo de uso:**

```php
<?php
echo __FILE__,"\n" ; # Muestra el nombre completo de este archivo
echo __LINE__,"\n" ; # Muestra el número de esta línea
function visualización(){ # Definimos una función llamada 'visualización'
    echo __FUNCTION__ ; # Muestra el nombre de la función actual
}
visualización(); # ejecuta la función 'visualización'
?>
```

<br>

---

---