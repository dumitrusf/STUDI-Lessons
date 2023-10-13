# Las condiciones y los bucles

## Objetivos

- Aprender a escribir una expresión booleana
- Utilizar las estructuras condicionales
- Utilizar los bucles

## Contexto

Como en JavaScript, Python permite escribir expresiones booleanas y utilizarlas en el marco de estructuras condicionales y de bucles. Vamos a ver juntos la sintaxis a utilizar para cada una de ellas.

## Expresión booleana

Una expresión booleana es una operación que permite determinar si un caso es verdadero o falso. En Python, podemos escribirlas gracias a los operadores de comparación, lógicos, de identidad y de pertenencia.

### Operadores de comparación

Entre los operadores de comparación, encontramos los mismos operadores que en JavaScript. Tenemos entonces:

- **La igualdad:** `==`

- **La desigualdad:** `!=`

- **La superioridad:** `>`

- **La inferioridad:** `<`

- **Y su variante con la matiz de igualdad:** `>= y <=`

### Operadores lógicos

Los mismos operadores lógicos existen, pero se escriben de manera diferente con respecto a JavaScript. Tenemos:

- and que devuelve verdadero, si las dos condiciones son verdaderas
- or que devuelve verdadero, si una de las dos condiciones es verdadera
- not que devuelve verdadero, si la condición es falsa

### Operadores de identidad

Los operadores de identidad en Python permiten verificar que dos objetos son los mismos, no a nivel de su valor, sino a nivel de su ubicación en la memoria. Encontramos:

- is que devuelve verdadero, si los dos objetos son los mismos
- is not que devuelve verdadero, si los dos objetos son diferentes

### Operadores de pertenencia

Los operadores de pertenencia se utilizan para comprobar que un valor está presente en un objeto. Existe:

- in que devuelve verdadero, si el valor se encuentra en el objeto
- not in que devuelve verdadero, si el valor está ausente del objeto

## Ejemplo:  Construir una expresión booleana

En JavaScript, escribiríamos:

```javascript
let expression = x > 5 && y <= 10
```

Mientras que en Python, sería:

```python
expression = x > 5 and y <= 10
```

## Estructura condicional

La única estructura condicional disponible en Python es el if/else . Se declara su estructura así:

```python
if b > a :
    print ( "b es mayor que a" )
else :
    print ( "a es mayor que b" )
```

Podemos omitir las líneas 3 y 4 si no las necesitamos.

## Atención:

A diferencia de muchos otros lenguajes, la delimitación de los bloques de código en Python se hace mediante la indentación. Por eso, es muy importante ser estricto cuando indentamos nuestro código. No olvides tampoco añadir un : al final de la línea de declaración de un bloque.

Por ejemplo, este código no funcionará:

```python
if b > a :
print ( "b es mayor que a" )
```

La palabra clave elseif presente en JavaScript se convierte en elif en Python. Vamos a ver un ejemplo con una expresión booleana más compleja:

```python
if b > a :
    print ( "b es mayor que a" )
elif a == b and b > c :
    print ( "a y b son iguales y b es mayor que c" )
```

## Complemento: Imbricar estructuras condicionales

Podemos imbricar estructuras condicionales unas dentro de otras. Atención sin embargo a la indentación.

```python
if x > 0 :
    print ( "x es positivo " )
    if x == 0 :
        print ( "y igual a 0" )
    else :
        print ( "estrictamente" )
```

## Bucles

Existen dos tipos de bucles en Python: for y while .

## Ejemplo: Bucle for

El bucle for se utiliza como en otros lenguajes. En JavaScript, haríamos:

```javascript
let users = [ "Nicolas" , "Laurent" , "Laure" ]
for ( let user of users ) {
    console . log ( user )
}
```

En Python, la sintaxis es casi la misma:

```python
users = [ "Nicolas" , "Laurent" , "Laure" ]
for user in users :
    print ( user )
```

### Ejemplo: Bucle while

En Python, la sintaxis del bucle while se parece mucho a la de JavaScript:

```python
users = [ "Nicolas" , "Laurent" , "Laure" ]
i = 0
while i < 3
    print ( users [ i ])
    i += 1
```

## A recordar

En Python, podemos utilizar los mismos operadores de comparación que en los otros lenguajes. Los operadores lógicos, ellos, se escriben en todas las letras: and , or , not . También existen los operadores de identidad y de pertenencia. Podemos combinarlos para obtener una expresión booleana, que será utilizada luego en estructuras condicionales ( if ) o iterativas ( for y while ). Atención sin embargo a la sintaxis, y sobre todo a la indentación. La indentación tiene un significado muy particular en Python, porque sirve para identificar un bloque de código.

## Complemento

- **[Operaciones booleanas](https://docs.python.org/fr/3/reference/expressions.html?highlight=boolean#boolean-operations)**

- **[Instrucciones if, for y while](https://docs.python.org/fr/3/reference/compound_stmts.html)**