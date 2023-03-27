# **Operadores avanzados**

<br>

---

## **Introducción al calculo binario**

---

<br>

---

### **Nociones de bit y octeto**

---

<br>

**En informática, toda información se almacena en forma binaria, es decir, solo existen dos posibles valores.**

Normalmente **representamos los valores binarios usando los dígitos "0" y "1"**.

Estos valores binarios **se llaman bits,** acrónimo en inglés de **"binary digits",** que significa **"dígitos binarios"**.

**Para poder considerar información de mayor tamaño, agrupamos los bits en octetos: un octeto equivale a 8 bits.**

<br>

---

**Aquí tienes una tabla de correspondencia entre el sistema decimal y su representación en binario en un octeto:**

- 0 ⇔ 00000000

- 1 ⇔ 00000001

- 2 ⇔ 00000010

- 3 ⇔ 00000011

- 4 ⇔ 00000100

- 5 ⇔ 00000101

- 6 ⇔ 00000110

- 7 ⇔ 00000111

- 8 ⇔ 00001000

<br>

---

---

<br>
<br>

---

### **Conversion en Binario**

---

<br>

```
Para "traducir" un número decimal a binario y viceversa, puedes utilizar las dos funciones "decbin" - que traduce del decimal al binario - y "bindec" - que traduce del binario al decimal.
```

<br>

---

**Ejemplo: esto 👇 te ayudara a comprender mejor la siguiente sección del curso.**

```php
<?php
echo decbin("5"), "\n"; # muestra 101
echo decbin("8"), "\n"; # muestra 1000
echo decbin("15"), "\n"; # muestra 1111
echo decbin("32"), "\n"; # muestra 100000



echo bindec("1100"), "\n"; # muestra 12
echo bindec("10101"), "\n"; # muestra 21
echo bindec("100010"), "\n"; # muestra 34
echo bindec("111001"), "\n"; # muestra 57
?>
```

<br>

---

---

## **Operadores en Bits**

---

<br>

**El lenguaje `PHP` incorpora 4 operadores para realizar cálculos directamente sobre valores binarios:**

- **`"&"`, que se pronuncia `"... AND ..."`,  y cuyo resultado será "1" solamente si ambos operandos valen "1"**.

- **`"|"`, que se pronuncia `"... OR ..."`, y cuyo resultado será "0" solamente si ambos operandos valen "0".**

- **`"^"`, que se pronuncia `"OR exclusivo (XOR)"`, y cuyo resultado será "1" solamente si uno de los dos operandos vale "1", pero no ambos al mismo tiempo.**

- **`"~"`, que se pronuncia `"NOT "`, y representa el opuesto de los datos proporcionados.**

**NO HAY QUE CONFUNDIR LOS OPERADORES DE BIT CON LOS OPERADORES LÓGICOS!**

<br>

---
---

<br>
<br>

---

### **Utilizar los operadores binarios**

---

<br>

Para comprender el funcionamiento de los operadores binarios, es necesario realizar las operaciones dígito a dígito, comenzando desde la derecha.

<br>

---

**Ejemplo:**

```php
<?php
echo 1&2, "\n"; # traducido en 01 & 10 = 00, muestra 0

echo 1|2, "\n"; # traducido en 01 | 10 = 11, muestra 3

echo 5^7, "\n"; # traducido en 101 ^ 111 = 010, muestra 2

echo ~0, "\n"; # correspond au nombre binaire qui contient que des "1", muestra -1

/* 00000101 el 5 en binario
11111010 el -5 en binario
11111011 pero al mismo numero binario al final le pones un 1 */

?>
```

<br>

---

---

<br>
<br>

---

## **Operadores de comparación**

---

<br>

<br>

---

### **Los valores Booleanos**

---

<br>

```

El lenguaje "PHP" contiene los valores booleanos "true" y "false".

"True" significa "Verdadero", mientras que "false" corresponde a "Falso".

Estos conceptos fueron desarrollados por George Boole en el siglo XIX en Inglaterra.

Es considerado el padre de la lógica moderna y su nombre ahora se utiliza como adjetivo en informática en su honor.

Te encontrarás utilizando variables booleanas, es decir, variables que tienen como valores "true" o "false".

```

<br>

---
---

<br>

<br>

---

### **Las expresiones Booleanas**

---

<br>

En informática, al igual que en matemáticas, **llamamos "expresión" a una línea de cálculo.**

La mayoría de las veces, estas expresiones son literales, es decir, contienen variables.

**Por ejemplo, `"3 + a = 4"` es una expresión literal en la cual "a" es una variable.**

Si esta variable tiene el valor de 1, entonces la igualdad es correcta, pero si la variable tiene un valor diferente a 1, la igualdad es incorrecta.

No podemos saber de antemano si una expresión será correcta o incorrecta.

Para saberlo, la expresión debe ser evaluada, es decir, se debe calcular teniendo en cuenta los valores de las variables.

Una expresión literal que se evalúa como "true" o "false" es una expresión booleana. Para evaluar expresiones booleanas, necesitamos conocer los operadores de comparación.

<br>

---

---

<br>

<br>

---

### **Los operadores de comparación**

---

<br>

**Los operadores de comparación básicos son los siguientes:**

- **`a == b`**: 

    - compara la igualdad de las expresiones **`"a y b"`**, y **se evalúa como `"true"` únicamente si a es igual a b, de lo contrario `"false"`**.

    <br>

- **`a != b`**: 

    - compara la desigualdad de las expresiones **`"a y b"`**, y **se evalúa como `"true"` únicamente si a y b no son iguales.** 
    
    - **Si a es igual a b, esta comparación se evalúa como `"false"`.**

    <br>

- **`a < b`**: 

    - compara si a es menor que b, y **se evalúa como `"true"` si a es menor que b**.
    
    - **Si a es mayor que b o igual a b, esta comparación se evalúa como `"false"`.**

    <br>

- **`a <= b`**: 

    - compara si a es menor o igual a b, y **se evalúa como `"true"` si a es menor o igual a b.**
    
    - **Si a es mayor que b, esta comparación se evalúa como `"false"`.**

    <br>

- **`a > b`**: 

    - compara si a es mayor que b, y **se evalúa como `"true"` si a es mayor que b.**
    
    - **Si a es menor que b o igual a b, esta comparación se evalúa como `"false"`.**

    <br>

- **`a >= b`**: 

    - compara si a es mayor o igual a b, y **se evalúa como `"true"` si a es mayor o igual a b.**
    
    - **Si a es estrictamente menor que b, esta comparación se evalúa como `"false"`.**

    <br>

<br>

---

---

<br>

<br>

---

### **Testear las operaciones de comparación**

---

<br>

Hasta ahora, en nuestros ejemplos, hemos usado el comando **`"echo"`** para mostrar en pantalla.

Sin embargo, este comando **`"echo"` no es adecuado para visualizar los valores booleanos.**

**Por esta razón, los siguientes ejemplos utilizan la función `"var_dump"`, que muestra el tipo de dato (en este caso, booleano) junto con su valor (true o false).**

<br>

---

**Ejemplo:**

```php
<?php
var_dump(true) ; # muestra bool(true)
var_dump(false) ; # muestra bool(false)
var_dump(2==1) ; # muestra el resultado del test "2 es igual a 1", que es bool(false)
var_dump(2>1) ; # muestra el resultado del test "2 es supérieur a 1", que es bool(true)
var_dump(2!=1) ; # muestra el resultado del test "2 es diferente de 1", que es bool(true)
var_dump(2<=1) ; # muestra el resultado del test "2 es inferior o igual a 1", que es bool(false)

/* 
En consola aparece tal que asi:
bool(true)
bool(false)
bool(false)
bool(true)
bool(true)
bool(false)
*/
?>
```

<br>

---

---

<br>
<br>

---

## **Operadores lógicos**

---

<br>

<br>

---

### **El Álgebra de Boole**

---

<br>

**En la sección de [operadores de bits](#operadores-en-bits), se presentaron 4 operadores:**

- **`"AND" (y)`**
- **`"OR" (o)`**
- **`"XOR" (o exclusivo)`**  

    y
    
- **`"NOT" (no)`**

--- 

<br>

**Aquí ampliaremos estas nociones a expresiones booleanas.**

**En el `"Álgebra de Boole"`**, también **conocida como cálculo binario**, **se definen 4 funciones lógicas:**

- **"o" en español, `"or" en inglés y en "PHP"`.**

- **"y" en español, `"and" en inglés y en "PHP"`.**

- **"no" en español, `"not" en inglés y "!" en "PHP"`.**

- **"o exclusivo" en español, `anotado como "xor" en "PHP"`.**

---

<br>

**Estas funciones están definidas de la siguiente manera:**

- **(A or B)** es Verdadero si A es Verdadero o B es Verdadero (basta con que uno de los dos sea Verdadero).

- **(A and B)** es Verdadero si A es Verdadero y B es Verdadero (ambos deben ser Verdaderos).

- **(!A)** es el opuesto de A (la negación de A).

- **(A xor B)** es Verdadero si A es Verdadero o B es Verdadero, pero no ambos juntos.

---

Finalmente, existen otras 2 notaciones:

- **"&&" corresponde a "and (y)"** 

    y 
    
- **"||" corresponde a "or (o)"**

Estas notaciones también representan las operaciones lógicas "y" y "o" respectivamente.

<br>

---

**ejemplo :**

```php
<?php
var_dump( false or true ); # muestra bool(true)
var_dump( (true || false) && true ); # muestra bool(true)
var_dump( (true xor false) || (!true) ); # muestra bool(true)
?>
```

<br>

---
---