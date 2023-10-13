# Las expresiones ternarias

## Objetivo

Comprender para qué sirven las expresiones ternarias y saber utilizarlas.

## Contexto

Vamos a ver cómo el operador ternario nos va a permitir evaluar condiciones de forma más concisa.

## `? :`

El operador ternario ( ? : ) es el único operador que tiene tres operandos. Una expresión ternaria se define la mayoría de las veces en una sola línea, y comprueba si una condición es verdadera o falsa. En un caso como en otro, un bloque de código se ejecutará a continuación. La estructura es la siguiente: `condición a probar ? código a ejecutar si es verdadero : código a ejecutar si es falso`.

```javascript
let x = 0;
let y = 9;
let isEqual;

// Esta condición...
if (x == y) {
  isEqual = true;
} else {
  isEqual = false;
}

// ... es equivalente a esta condición ternaria
x == y ? (isEqual = true) : (isEqual = false);
```

Las expresiones ternarias son un poco menos claras a la lectura del código, y la escritura de una condición ternaria en varias líneas es aún más difícil de entender. Es por esta razón que, aunque es totalmente posible escribir una ternaria en varias líneas, se considera generalmente como una buena práctica ponerlas en una sola línea y utilizarlas sólo para expresar condiciones simples. También es posible encadenar varias instrucciones a ejecutar en la ternaria rodeándolas de paréntesis y separándolas por comas.

```javascript
x == y
  ? ((isEqual = true), console.log("igualdad entre x e y!"))
  : (isEqual = false);
```

## A recordar

Hemos visto que el operador ternario permitía evaluar una condición equivalente a un if...else de forma más concisa.

## Complemento

**[Expresión ternaria](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator)**