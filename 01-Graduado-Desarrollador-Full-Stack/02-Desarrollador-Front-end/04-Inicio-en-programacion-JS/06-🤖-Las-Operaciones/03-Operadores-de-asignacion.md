# Operadores de asignación

## Objetivo

Conocer los diferentes operadores de asignación y su funcionamiento.

## Situación

En un curso anterior, vimos qué eran las variables y para qué podían servir, así como una de las formas de asignarles un valor. Ahora vamos a aprender otras formas de usarlas.

## Nota

>Los operadores de asignación asignan valores basados en el operando derecho a su operando izquierdo.

## Asignación simple

Para asignar un valor a una variable, podemos usar el operador de asignación simple ( = ). El resultado de esta asignación será el valor asignado. Es posible encadenar varios operadores de asignación para asignar el mismo valor a varias variables: esto se llama una asignación por transitividad.

```javascript
let maVariable = 5 ;
let monAutreVariable = 12 ;
const maDerniereVariable = 50 ;
maVariable = monAutreVariable ; // maVariable vale ahora 12
maVariable = monAutreVariable = maDerniereVariable ; // maVariable, monAutreVariable y maDerniereVariable valen ahora 50
```

## Nota

>También podemos asignar un valor después de diferentes operaciones, como después de una suma, una resta, una multiplicación...

## Asignación después de suma

La asignación después de una suma permite sumar el valor del operando derecho a la variable definida a la izquierda. El resultado de la operación se asigna a la variable en cuestión. El operador tendrá un comportamiento diferente según el tipo de los dos operandos. Por lo tanto, podemos obtener una concatenación en el caso de cadenas de caracteres, y una suma en el caso de números.

```javascript
let maVariableNombre = 10 ;
let monAutreVariableNombre = 50 ;
let maVariableString = "mi cadena de caracteres" ;
const monAutreVariableString = "mi segunda cadena de caracteres" ;
const maVariableBooleen = true ;
maVariableNombre += monAutreVariableNombre ; // Número + número realiza una suma, el resultado será 60
monAutreVariableNombre += maVariableString ; // Número + cadena de caracteres realiza una concatenación, el resultado será "50mi cadena de caracteres"
maVariableString += maVariableBooleen ; // Cadena de caracteres + booleano realiza una concatenación, el resultado será "mi cadena de caracterestrue"
maVariableString += monAutreVariableString ; // Cadena de caracteres + cadena de caracteres realiza una concatenación, el resultado será "mi cadena de caracteresmi segunda cadena de caracteres"
```

## Asignación después de resta

La asignación después de una resta permite restar el valor del operando derecho a la variable definida a la izquierda. El resultado de la operación se asigna a la variable en cuestión. Para cualquier tipo diferente de number , la operación devolverá " NaN ".

```javascript
let maVariableNombre = 10 ;
const monAutreVariableNombre = 50 ;
const maVariableString = "mi cadena de caracteres" ;
maVariableNombre -= monAutreVariableNombre ; // Número - número, el resultado será -40
maVariableNombre -= maVariableString ; // NaN, la asignación después de resta devuelve NaN para cualquier operación sobre tipos diferentes a números
```

## Asignación después de división

La asignación después de división devuelve el cociente del operando izquierdo como numerador, y del operando derecho como denominador. Para cualquier tipo diferente de number , la operación devolverá " NaN ".

```javascript
let monNumerateur = 10 ;
const monDenominateur = 5 ;
const maVariableString = "mi cadena de caracteres" ;
monNumerateur /= monDenominateur ; // monNumerateur valdrá 2
monNumerateur /= maVariableString ; // monNumerateur valdrá NaN
```

## Asignación después de multiplicación

La asignación después de multiplicación permite multiplicar una variable por el valor del operando derecho y asignar el resultado de esta operación a la variable. Para cualquier tipo diferente de number , la operación devolverá " NaN ".

```javascript
let maVariableNombre = 10 ;
const monAutreVariableNombre = 5 ;
const maVariableString = "mi cadena de caracteres" ;
maVariableNombre *= monAutreVariableNombre ; // monNumerateur valdrá 50
maVariableNombre *= maVariableString ; // monNumerateur valdrá NaN
```

## Asignación después de módulo

El operador módulo permite dividir un valor por el valor del operando derecho, y asignar el resto entero de esta división a la variable.

```javascript
let maVariableNombre = 78 ;
const monAutreVariableNombre = 4 ;
const maVariableString = "mi cadena de caracteres" ;
maVariableNombre %= monAutreVariableNombre ; // maVariableNombre valdrá 2
maVariableNombre %= maVariableString ; // maVariableNombre valdrá NaN
```

## Para recordar

Ahora conocemos métodos de asignación de valor a una variable distintos de la asignación simple: la asignación después de suma, resta, división, multiplicación y el módulo.

## Complemento

**[Operadores de asignación](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#Op%C3%A9rateurs_d'affectation)**