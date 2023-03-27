# **Nociones Base: Argumentos y valores de retorno**

<br>

---

## **Argumentos**

---

<br>

**Para ejecutarse correctamente, una función a veces necesita argumentos.**

**Estos son datos que se pasan entre paréntesis, separados por comas si hay varios.**

<br>

---

**Ejemplo:**

Tomemos, por ejemplo, la función **`strlen()`**, que permite conocer la longitud de una cadena de caracteres.

---

<br>

**Esta función requiere obligatoriamente un parámetro que debe ser de tipo string:**

es la cadena de caracteres que se desea medir.

**Para conocer la longitud de la siguiente cadena de caracteres:** `"Don’t repeat yourself"`, puedes llamar a la función como se muestra en el ejemplo a continuación.

```php
<?php
strlen("Don’t repeat yourself");
```

<br>

---

**La cadena de caracteres entre paréntesis es el argumento de la función.**

**También es posible asignar esta cadena de caracteres a una variable y luego pasar la variable como argumento.**

```php
<?php
$sentence = "Don’t repeat yourself"; // sentence es 'frase'
strlen($sentence);
```

<br>

---

---

<br>
<br>

---

### **Complemento:**

---

<br>

**Tal vez ya hayas oído hablar de los parámetros de una función.**

**Los parámetros son los nombres enumerados al definir la función.**

**Por lo tanto, la definición de la función strlen() incluye un parámetro, que es una cadena de caracteres.**

**El argumento es la variable que pasas cuando llamas a la función.**

**En el ejemplo anterior, la variable $sentence es el argumento de la función.**

<br>

---

---

<br>

<br>

---

### **Atención!:**

---

<br>

**Si la función toma varios argumentos, deben pasarse en el mismo orden que los parámetros de la función.**

<br>

---

**Imaginemos una aplicación web que saluda a un usuario conectado usando su nombre y luego su apellido.**

**Ejemplo:**

```php
<?php
function sayHello($firstName, $lastName) {
	echo “Hola ” . $firstName . “ “ . $lastName “!”;
}
sayHello(“John”, “Doe”);
```

---

<br>

**En este ejemplo, el programa saludará al usuario con un `"¡Hola John Doe!"`.**

**Puedes observar que los argumentos pasados a la función `sayHello()` respetan el orden de los parámetros definidos previamente.**

<br>

---

<br>

Al definir una función, es posible especificar el tipo de los parámetros.

Esto ocurre cuando consultas la documentación oficial de las funciones internas de `PHP`.

Esto te proporciona información sobre los argumentos esperados.

<br>

---

En el caso de la función `sayHello()`, puede ser útil especificar que las variables esperadas como argumentos deben ser siempre cadenas de caracteres.

Si los argumentos proporcionados son de otro tipo, el programa generará un error.

**Ejemplo**

```php
<?php
function sayHello(string $firstName, string $lastName) {
	echo “Hola ” . $firstName . “ “ . $lastName “!”;
}
```

En este ejemplo, si la función `sayHello()` es llamada con un array como argumento, el programa generará un error de tipo TypeError.

👇 Asi no!

```php
<?php
function sayHello(string $firstName, string $lastName) {
	echo "Hola " . $firstName . " " . $lastName . "!";
}

$nombreCompleto = ["Juan", "Pérez"];

// Llamando a la función con un array como argumento
sayHello($nombreCompleto[0], $nombreCompleto[1]);
?>

```

<br>

---

<br>

Asi si! 👇

```php
<?php
function sayHello(string $firstName, string $lastName) {
	echo "Hola " . $firstName . " " . $lastName . "!";
}

$primerNombre = "Juan";
$apellido = "Pérez";

// Llamando a la función con cadenas de caracteres como argumentos
sayHello($primerNombre, $apellido);
?>

```

<br>

---

---

<br>
<br>

---

### **Atención:**

---

<br>

**Es importante señalar que en ciertos contextos, `PHP` va a convertir el tipo del argumento para que coincida con el tipo esperado.**

**Por lo tanto, si pasas un entero en lugar de una cadena de caracteres, este será tratado como una cadena de caracteres.**

<br>

---

La lista de argumentos no siempre tiene un tamaño fijo.

Una función puede aceptar un número ilimitado de argumentos si utiliza el token `"..."` (puntos suspensivos).

Los argumentos deben estar separados por comas.

Luego, la función los manejará como si fueran un arreglo **(array)**.

<br>

---

La función **`sayHello()`** ahora se utiliza para saludar a una lista de personas que se le proporciona.

Sin importar la cantidad de argumentos, recorre uno por uno y saluda a cada persona.

**Ejemplo:**

```php
<?php
function sayHello(...$persons) {
	foreach($persons as $person) {
		echo “Bonjour “ . $person . “!\n”;
  }
}
sayHello(“Agnès”, “Kenza”, “Nour”);
```
---

<br>

Es el **`token "..."`** colocado **delante del parámetro `$persons`** de la función **`sayHello()`** lo que indica que acepta un número ilimitado de argumentos.

Dentro de la función, **`$persons`** es un array, lo que permite a la función iterar sobre cada elemento utilizando un **`bucle foreach`**.

<br>

---

<br>

Una función puede recibir argumentos opcionales.

Si no están presentes al llamar a la función, se utilizará su valor por defecto.

<br>

---

**Ejemplo:**

```php
<?php
function sayHello($name = “ilustre desconocido”) {
	echo “Hola ” . $name . “!”
}
sayHello();
```

<br>

En este ejemplo, **la aplicación saludará al usuario con `"¡Hola ilustre desconocido!"`** ya que no se ha proporcionado ningún nombre como argumento.

Por lo tanto, se utilizó el valor predeterminado.

<br>

---

<br>

Aquí es donde la función de autocompletado de un editor de texto como Visual Studio Code es valiosa, **gracias a la extensión PHP IntelliSense**.

Te permite conocer rápidamente el número de argumentos que deben pasarse a la función interna que estás llamando, su tipo y si son opcionales, cuál es su valor por defecto.

También te alerta si faltan argumentos o si son de un tipo incorrecto.

<br>

---

Por defecto, las variables pasadas como argumentos a una función son pasadas por valor, no por referencia.

**Esto significa que una variable definida globalmente y modificada dentro de la función no tiene su valor alterado fuera de la función.**

<br>

---

La función **`sayHello()`** debe convertir la primera letra del nombre en mayúscula antes de saludar al usuario.

Para lograr esto, utiliza la función interna de PHP ucfirst(), la cual convierte el primer carácter de una cadena en mayúscula.

**Ejemplo:**

```php
<?php
$name = “hector”;
function sayHello($name) {
	$name = ucfirst($name);
	echo “Bonjour ” . $name . “!”
}
sayHello($name);
```

---

<br>

En este ejemplo, el programa saludará al usuario correctamente con la primera letra de su nombre en mayúscula **("¡Hola Héctor!")**.

Sin embargo, **`fuera de la función sayHello()`**, **la variable `$name` mantendrá su valor inicial `("hector")`**.

<br>

---

<br>

---

**Un argumento se pasa por referencia si hay un `'&'` delante del argumento en la declaración de la función.**

```php
<?php
$name = “hector”; // hector con h minuscula
function sayHello(&$name) { // ahora hay paso de referencia
	$name = ucfirst($name); // ahora hecto es "Hector" con h mayuscula
	echo “Bonjour ” . $name . “!”
}
sayHello($name);
```


En este ejemplo, después de la ejecución de la función, la variable $name ha cambiado. Ahora su valor es "Héctor".

<br>

---

---

<br>
<br>

---

### **Atención!:**

---

<br>

Es importante prestar atención a este símbolo, por ejemplo, cuando consultamos la documentación de una función interna de `PHP`.

Si este símbolo `&` está presente delante del parámetro de la función, ten en cuenta que la variable pasada como argumento se pasará por referencia y, por lo tanto, será modificada por la ejecución de la función.

<br>

---

---

<br>

<br>

---

## **Valores de retorno**

---

<br>

**Cuando una función se ejecuta, puede producir un resultado:**

- modificar una variable

- mostrar texto

- leer un documento PDF

- etc.

**pero también puede devolver un resultado.**

<br>

---

<br>

**Este comportamiento se logra con la palabra clave return**.

Cuando se llama a esta palabra clave, la función detiene su ejecución.

**Esto significa que todas las instrucciones `"después de un RETURN"` nunca se ejecutarán !.**

El valor devuelto por la palabra clave return puede ser almacenado en una variable para su reutilización.

<br>

---

**Tomemos el ejemplo de una función que verifica si una persona es mayor o menor.**

**Ejemplo:**

```php
<?php
function isOver18($age) {
      if($age < 18) {
         return false;	
      } return true;
}
$result = isOver18(17);
```

---

<br>

En este ejemplo, se puede observar que **el resultado de llamar a la función con "el valor 17" se guarda en la variable `$result`**.

Por lo tanto, el valor de la variable `$result` es el valor devuelto por la función cuando se le pasa 17 como argumento (falso).

En este ejemplo, la condición **`$age < 18`** es verdadera, **por lo que la función se detiene dentro del bloque if, en la primera instrucción return**.

Mientras esta condición sea verdadera, la función siempre se detendrá en el mismo lugar y nunca devolverá `true`.

<br>

---

### **Atención!:**

---

<br>

Si la funcion no tiene el comando `"RETURN"`, su valor de retorno sera siempre `null` (nulo).

<br>

---

Si retomamos **el ejemplo de la función `sayHello()`**, observamos que esta muestra una cadena de caracteres utilizando el comando `echo`, pero no devuelve ningún valor.

En el ejemplo siguiente, el valor de **`$result`** será, por lo tanto, **`null`**.

**Ejemplo:**

```php
<?php
function sayHello($firstName, $lastName) {
	echo “Bonjour ” . $firstName . “ “ . $lastName “!”
}
$result = sayHello(“John”, “Doe”);
```

---

<br>

Al igual que los parámetros de una función, el valor de retorno de una función puede tener un tipo especificado.

Esto significa que, al definir la función, se ha indicado el tipo del valor de retorno.

Esta información debe tenerse en cuenta al consultar la documentación de `PHP` o al prototipar tus propias funciones.

El tipo de valor de retorno se especifica al definir la función, justo después de los parámetros.

<br>

---

```php
<?php
function isOver18($age): bool {
	if($age < 18) {
        return false;	
	} return true;
}
```

Si la función no devuelve nada, el tipo de valor de retorno será void.

Una función cuyo tipo de valor de retorno es mixed puede retornar diferentes tipos de variables.

<br>

---

---