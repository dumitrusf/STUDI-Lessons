# Conversión de Tipos (Casting)

La conversión de tipos, también conocida como _casting_, es una operación que cambia el tipo de datos de una variable a otro tipo de datos. En TypeScript, al igual que en muchos otros lenguajes de programación, es posible realizar operaciones de casting con variables.

### Tipos de Casting en TypeScript
Hay 2 tipos de conversiones de tipos en TypeScript: el casting implícito y el casting explícito.

## Casting Implícito
El casting implícito es realizado automáticamente por el compilador cuando es posible convertir implícitamente un tipo de datos a otro. Por ejemplo, si sumas una cadena de texto a un número, TypeScript convierte automáticamente el número en una cadena de texto para poder concatenar ambos.

#### Ejemplo de Casting Implícito
```javascript
let a: number = 5;
let b: string = "10";
let c: string = a + b; // TypeScript convierte automáticamente 'a' en una cadena de texto para concatenar ambos
console.log(c); // Muestra '510'
```

🤖🤖

## Casting Explícito

El casting explícito, en contraposición al casting implícito, requiere que el desarrollador especifique explícitamente el tipo de datos al que desea convertir una variable. Esto se puede hacer utilizando el operador `as` o mediante el uso de ángulos de soporte `<>`.

### Ejemplo de Casting Explícito con el Operador `as`
```javascript
let a: any = "5";
let b: number = a as number; // Convierte explícitamente 'a' en un número utilizando el operador "as"
console.log(b); // Muestra 5
```

### Ejemplo de Casting Explícito con Ángulos de Soporte `<>`
```javascript
let a: any = "5";
let b: number = <number>a; // Convierte 'a' en un número utilizando ángulos de soporte <>
console.log(b); // Muestra 5
```

### Precauciones y Posibles Errores
Es importante destacar que el uso incorrecto del casting explícito puede llevar a errores, especialmente si el tipo de datos original no puede ser convertido al tipo de datos destino. Por lo tanto, se aconseja utilizar esta técnica con cautela y asegurarse de que los tipos de datos sean compatibles antes de realizar un casting.

🤖🤖

## Casting Implícito y Explícito en Arrays y Funciones

Aquí tienes un ejemplo que ilustra el uso de casting implícito y explícito en arrays y funciones en TypeScript. Supongamos que tenemos un array de números y queremos aplicar una función que multiplica cada número por un factor dado. Sin embargo, la función que queremos usar toma un array de números en forma de cadena de caracteres y devuelve un array de números también en forma de cadena de caracteres.

### Solución Propuesta
Para resolver este problema, debemos usar casting explícito para convertir el array de números en un array de cadenas de texto antes de llamar a la función. Luego, usamos el casting implícito para convertir el array resultante de cadenas de texto de nuevo a un array de números.

### Código Correspondiente
```typescript
// Array de números
const nombres = [1, 2, 3, 4, 5];
// Función que multiplica cada número por un factor dado
function multiplierNombres(nombres: string[], facteur: number): string[] {
  const resultat: string[] = [];
  nombres.forEach(nombre => {
    const resultatMultiplication = Number(nombre) * facteur;
    resultat.push(resultatMultiplication.toString());
  });
  return resultat;
}
// Llamada a la función con el array de números
const facteur = 2;
const nombresEnChaineDeCaracteres = nombres.map(nombre => nombre.toString());
const resultatsMultiplication = multiplierNombres(nombresEnChaineDeCaracteres as string[], facteur);
const resultats = resultatsMultiplication.map(resultat => Number(resultat)) as number[];
// Mostrar resultados
console.log(nombres); // [1, 2, 3, 4, 5]
console.log(resultats); // [2, 4, 6, 8, 10]
```

### Detalles de Implementación
En este ejemplo, primero convertimos el array de números a un array de cadenas de texto utilizando el método `map` y el método `toString`. Luego, llamamos a la función `multiplierNombres` con el array de cadenas de texto utilizando el casting explícito `as string[]`.

La función devolvió un array de cadenas de texto que representan los resultados de la multiplicación. Luego, convertimos este a un array de números utilizando el método `map` y el método `Number`, seguido del casting implícito `as number[]`.

### Conclusión
En resumen, tanto el casting explícito como el implícito son técnicas útiles para manipular datos de diferentes tipos en TypeScript. Sin embargo, es crucial usarlos con cuidado para evitar errores de tipo.