# **Funciones Internas a PHP**

<br>

---

## **Introducción**

---

<br>

PHP cuenta con numerosas funciones internas ya definidas.

**En la primera parte, hemos visto funciones de este tipo, como:**

- `strlen()`

  o

- `count()`

<br>

---

---

<br>
<br>

---

### **Atención!:**

---

<br>

Algunas funciones internas de PHP solo están disponibles con extensiones de PHP.

**En esta sección, veremos las funciones básicas para trabajar, por ejemplo, con:**

- cadenas de caracteres

- arreglos

  o

- realizar operaciones matemáticas.

<br>

---

---

<br>
<br>

---

## **Funciones sobre las cadenas de caracteres**

---

<br>

Estas funciones permiten manipular variables de tipo cadena de caracteres.

Su lista completa se encuentra en la **[documentación oficial de PHP](https://www.php.net/manual/fr/ref.strings.php)**.

<br>

---

Tomemos el ejemplo de una aplicación que recibe cadenas de caracteres y las muestra en un bloque de tamaño fijo que solo admite 20 caracteres.

Cualquier cadena que supere este límite se truncará y terminará con "...".

Hay dos funciones internas que permiten realizar esta operación.

La primera, como mencionamos, es strlen(), que devuelve la cantidad de caracteres que contiene la cadena.

La segunda es substr(), que devuelve una subsección de una cadena de caracteres y que toma tres argumentos.

Veamos su definición.

**Ejemplo:**

```php
<?php
substr(string $string, int $offset, ?int $length = null): string
```

---

<br>

El primer argumento, `$string`, es la cadena de caracteres sobre la cual realizar la operación. El segundo, `$offset`, es el índice de inicio desde el cual truncar la cadena.

<br>

---

### **Atención!:**

---

<br>

El índice del primer carácter de una cadena es 0.

<br>

---

El tercer argumento, `$length`, es opcional.

Si no se especifica, su valor por defecto es 0.

El valor de retorno de `substr()` es una cadena de caracteres.

Luego, simplemente es necesario concatenar los puntos suspensivos al final del valor de retorno.

**Ejemplo:**

```php
<?php
$sentence = "It's raining cats and dogs";
if (strlen($sentence) > 20) {
         $sentence = substr($sentence, 0, 17) . "...";
}
```

---

<br>

Aquí tienes algunas de las funciones internas relacionadas con las cadenas de caracteres que son útiles de conocer:

- `str_split()`: Convierte una cadena de caracteres en un array asociativo. Valor de retorno: el array.
- `implode()`: Une los elementos de un array en una cadena de caracteres. Valor de retorno: la cadena de caracteres.
- `explode()`: Divide una cadena de caracteres según el separador proporcionado como argumento y devuelve un array. Valor de retorno: el array.
- `str_contains()`: Permite verificar si una cadena de caracteres contiene la subcadena proporcionada como argumento. Valor de retorno: booleano.
- `str_replace()`: Permite reemplazar una subsección de una cadena de caracteres por otra. Valor de retorno: una cadena de caracteres.
- `str_repeat()`: Repite una cadena de caracteres el número de veces deseado. Valor de retorno: una nueva cadena de caracteres.

<br>

---

Imaginemos un programa que oculta los nombres de animales.

La función `str_replace()` permite buscar en una frase las palabras a reemplazar.

Los argumentos se presentan en el siguiente orden: `$search`, el valor o los valores a buscar (se puede usar un array); `$replace`, el valor o los valores por los que se reemplazarán; `$subject`, la cadena de caracteres en la que se realizará el reemplazo; y opcionalmente, `$count`, el número de modificaciones a realizar.

**Ejemplo:**

```php
<?php
$sentence = "It's raining cats and dogs";
$redactedSentence = str_replace(["cats", "dogs"], "***", $sentence);
```

<br>

---

---
