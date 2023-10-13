# La condición if

## Objetivos

- Aprender cómo probar condiciones con el if
- Comprender el funcionamiento del if ... else

## Contexto

Vamos a ver cómo probar condiciones en JavaScript para decidir si ejecutar o no diferentes instrucciones.

## La instrucción if

La instrucción if verifica si una condición se evalúa a verdadero o falso, con el fin de realizar diversos tratamientos especificados a continuación. Cada instrucción if va seguida de llaves que contienen los tratamientos a realizar en el caso de que la condición probada sea evaluada a verdadero. La sintaxis es la siguiente:

```javascript
if (condición) {
  tratamiento a realizar si la condición es verdadera
}
```

Ejemplo:

```javascript
let firstname = 'Tristan';
if (firstname == 'Tristan') {
  // Se pasa a esta condición
  console.log("mi condición es verdadera!");
}
if (firstname == 'Jules') {
  // No se pasa a esta condición
  console.log("mi condición es verdadera!");
}
```

Si las instrucciones if están anidadas unas dentro de otras, el programa ejecutará el tratamiento para cada condición evaluada a verdadero.

## Nota:

>En el ejemplo anterior, se ha utilizado el operador ==: cuidado, no hay que confundirlo con el operador = que nos sirve para asignar un valor a una variable. El operador == indica que queremos verificar la igualdad entre el valor de la izquierda y el valor de la derecha.

Si la condición dada no se cumple, no pasa nada y el programa ejecuta directamente las instrucciones después de la llave cerrada del bloque if.

### Ejemplo:

```javascript
let firstname = 'Tristan';
if (firstname == 'Tristan') {
  console.log("mi condición es verdadera!"); // Ejecutado si la condición se cumple
}
console.log("la continuación de las instrucciones"); // Ejecutado en todos los casos
```

Es posible encadenar varias instrucciones if, así como anidarlas unas dentro de otras. Si están encadenadas, el programa probará cada condición una tras otra, y cada vez que una de ellas sea evaluada a verdadero, ejecutará el código colocado entre las llaves de la instrucción en cuestión.

Ejemplo:

```javascript
let age = 24;
let firstname = 'Tristan';
let ville = 'Nantes';
if (age == 24) {
  if (firstname == 'Tristan') {
    if (ville == 'Nantes') {
      // Todas las condiciones se cumplen
    }
  }
}
```

## La instrucción if ... else

Es posible definir un bloque de código a ejecutar en el caso de que la condición no se cumpla, mediante una instrucción if...else. La sintaxis es la siguiente:

```javascript
if (condición) {
  tratamiento efectuado si la condición se cumple
} else {
  tratamiento efectuado si la condición no se cumple
}
```

### Ejemplo:

```javascript
let age = 24;
if (age == 24) {
  console.log("La edad es bien 24!");
} else {
  console.log("La edad es diferente de 24");
}
```

Esta instrucción permite cubrir muchos más casos, ya que permite decir qué hacer en un caso o en otro. Tiene en cuenta los casos en que la condición es verdadera, así como los que es falsa, lo que no es el caso de un simple if.

## La instrucción if...else if...else

También es posible utilizar la instrucción else if para cubrir varios casos y ejecutar sólo el bloque de código correspondiente a la condición evaluada a verdadero. Este bloque se puede utilizar varias veces seguidas, se habla entonces de cadena. Es importante, si se debe hacer un tratamiento, independientemente del resultado, terminar la cadena con un último bloque else que se ejecutará en el caso de que ninguna de las condiciones sea evaluada a verdadero.

### Ejemplo:

```javascript
let age = 24;
if (age == 20) {
  // edad 20
} else if (age == 22) {
  // edad 22
} else if (age == 24) {
  // edad 24
} else {
  // La edad no es 20, 22 o 24
}
```

Si una de las condiciones se evalúa a verdadero, el programa no evaluará las condiciones siguientes. Por lo tanto, es importante elegir bien el orden en el que evaluar las condiciones, de manera a obtener el comportamiento deseado.

## A recordar

- Hemos visto que era posible ejecutar un bloque de código sólo en el caso de que una condición dada se cumpliera.

- También es posible encadenar e imbricar estas verificaciones según sea necesario, así como definir un bloque de código a ejecutar por defecto, en el caso de que las condiciones definidas no se cumplieran, gracias al if...else.

## Complemento

**[Condición if](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else)**