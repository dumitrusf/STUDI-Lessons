# Operadores aritméticos

## Objetivo

Conocer los operadores aritméticos más comunes y saber cómo utilizarlos.

## Puesta en situación

En un curso anterior, vimos que las variables servían para almacenar datos con el fin de reutilizarlos y manipularlos posteriormente. En el caso de los datos de tipo numérico (`integer`, `float`), se pueden realizar diferentes operaciones mediante los operadores aritméticos. Vamos a ver para qué sirven y cómo utilizarlos.

## Los operadores aritméticos estándar

Los operadores aritméticos utilizan valores numéricos como operandos, ya sean literales o variables, y devuelven un valor numérico. Los más utilizados son la suma, la resta, la multiplicación y la división. Los operadores aritméticos estándar (`+`, `-`, `*` y `/`) funcionan de la misma manera que cualquier operación clásica.

```javascript
const maVariableNumerique = 10;
const addition = maVariableNumerique + 5; // addition valdrá 15
const soustraction = maVariableNumerique - 5; // soustraction valdrá 5
const multiplication = maVariableNumerique * 5; // multiplication valdrá 50
const division = maVariableNumerique / 5; // division valdrá 2
```

## `Nota`

>Además de los operadores aritméticos estándar, JavaScript proporciona algunos operadores aritméticos adicionales, como el módulo (`%`), el incremento (`++`), el decremento (`--`), el más y la negación unaria (`+` y `-`).

## El módulo

El módulo (`%`) es un operador que devuelve el resto entero de la división entre dos operandos. Este resto es siempre menor que el valor del divisor.

```javascript
const monNumerateur = 63;
const monDenominateur = 5;
const modulo = monNumerateur % monDenominateur; // modulo valdrá 3
```

```javascript
let modulo = 63 % 5; // modulo valdrá 3
modulo = -63 % 5; // modulo valdrá -3
modulo = 63 % -5; // modulo valdrá 3
modulo = -63 % -5; // modulo valdrá -3
```

## El incremento y el decremento

El incremento permite sumar 1 al operando y devuelve un valor numérico. Si el operador se utiliza como sufijo (`variable++`), devuelve el valor antes del incremento. Si se utiliza como prefijo (`++variable`), devuelve el valor después del incremento⁵[5].

```javascript
let maVariable = 5;
const incrementationSuffixe = maVariable++; // incrementationSuffixe valdrá 5 y maVariable valdrá 6
const incrementationPrefixe = ++maVariable; // incrementationPrefixe valdrá 6 y maVariable valdrá 6
```

El decremento permite restar 1 al operando y devuelve un valor numérico. Si el operador se utiliza como sufijo (`variable--`), devuelve el valor antes del decremento. Si se utiliza como prefijo (`--variable`), devuelve el valor después del decremento.

```javascript
let maVariable = 12;
const decrementationSuffixe = maVariable--; // decrementationSuffixe valdrá 12 y maVariable valdrá 11
const decrementationPrefixe = --maVariable; // decrementationPrefixe valdrá 11 y maVariable valdrá 11
```

## El más unario y la negación unaria

El más unario se sitúa antes del operando y devuelve el operando, convertido en número si es posible y si no lo es ya. Permite convertir cadenas de caracteres compuestas únicamente por números enteros o flotantes, así como booleanos y el valor `null`. Si la operación no se puede realizar, el valor devuelto será `NaN`. `NaN` representa el valor «Not a Number». Esta propiedad indica que el valor no es un número «legal» o, más simplemente, el valor no es un número. Es raro utilizarlo en un programa. Generalmente, se va a recuperar a raíz de una función matemática que ha fallado o cuando una función que intenta interpretar un número falla (ejemplo: `parseFloat("coucou")`).

```javascript
+12; // Se evaluará a 12
+"12"; // Se evaluará a 12
+true; // Se evaluará a 1
+false; // Se evaluará a 0
+null; // Se evaluará a 0
+"cadena de caracteres"; // Se evaluará a NaN
```

El menos unario se sitúa antes del operando y devuelve el opuesto del operando, después de haberlo convertido en número si es posible y necesario.

```javascript
let maVariable = 12;
-maVariable; // Se evaluará a -12
maVariable = -12;
-maVariable; // Se evaluará a 12
-"12"; // Se evaluará a -12
-true; // Se evaluará a -1
-false; // Se evaluará a 0
-null; // Se evaluará a 0
-"cadena de caracteres"; // Se evaluará a NaN
```

## A recordar

Hemos visto cómo realizar operaciones estándar como las sumas, restas, multiplicaciones y divisiones, pero también cómo incrementar y decrementar un valor, y obtener el resto entero de una división gracias al módulo. Estas operaciones son las más habituales en JavaScript y serán útiles en muchas situaciones.

## Complemento

**[Operadores aritméticos](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#Op%C3%A9rateurs_arithm%C3%A9tiques)**