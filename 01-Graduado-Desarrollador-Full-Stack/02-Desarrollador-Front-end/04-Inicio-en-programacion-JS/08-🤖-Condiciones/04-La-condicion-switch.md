# La condición switch

## Objetivo

Comprender para qué sirve la condición switch y cómo utilizarla

## Contexto

La instrucción switch permite evaluar una expresión dada y ejecutar las instrucciones correspondientes al caso que se asocie con ella. La instrucción switch evalúa una expresión y realiza el tratamiento correspondiente al resultado obtenido. La evaluación de la expresión proporcionada se hace solo una vez. Permite evitar los if...else, muy largos en el caso de que haya que probar muchas posibilidades. Si hay varias coincidencias, se ejecuta la primera condición evaluada a verdadero. Es una buena práctica incluir en la instrucción switch un caso por defecto, en el supuesto de que ninguna de las expresiones se evalúe a verdadero. La sintaxis es la siguiente:

```javascript
switch (condición) {
  case valor1:
    // Instrucciones a ejecutar cuando el resultado de la condición corresponde a valor1
    instrucciones1;
    break;
  case valor2:
    // Instrucciones a ejecutar cuando el resultado de la condición corresponde a valor2
    instrucciones2;
    break;
  default:
    // Instrucciones a ejecutar cuando ninguna de las valores corresponde a la condición a evaluar
    instrucciones por defecto;
    break;
}
```

El programa empezará por buscar una coincidencia con el valor propuesto para cada case. Si no encuentra ninguna, ejecutará el bloque default. Las instrucciones en el bloque default solo se ejecutan en el caso de que no se haga ninguna coincidencia con los valores de los casos definidos. La instrucción break al final de cada bloque de instrucciones no es obligatoria, pero permite asegurarse de que una vez que se ha verificado una condición y se ha ejecutado el bloque de instrucciones correspondiente, se cortocircuite la ejecución del switch. Sin la instrucción break, el switch continuaría hasta el final para encontrar otras condiciones que podrían verificarse. Con el break, se pone fin inmediatamente al switch después de haber verificado una condición.

## Ejemplo

```javascript
let fruta = "kiwi";
switch (fruta) {
  case "plátano":
    console.log("Has elegido un plátano.");
    break;
  case "manzana":
    console.log("Has elegido una manzana.");
    break;
  case "kiwi":
    console.log("Has elegido un kiwi.");
    break;
  case "mandarina":
    console.log("Has elegido una mandarina.");
    break;
  default:
    console.log("No has elegido una fruta de la lista.");
    break;
}
// Mostrará "Has elegido un kiwi."
```

## A recordar

Hemos visto que la condición switch permitía probar múltiples valores y ejecutar solo el bloque de código correspondiente a la expresión probada, de manera más simple y legible que encadenando muchos if...else.

## Complemento

**[Condición switch](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch)**