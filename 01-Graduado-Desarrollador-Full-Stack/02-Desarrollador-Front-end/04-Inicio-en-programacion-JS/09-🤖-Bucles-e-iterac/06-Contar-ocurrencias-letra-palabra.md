# Contar el número de ocurrencias de una letra en una palabra

## Objetivos
- Contar el número de ocurrencias de una letra en una palabra
- Ver un ejemplo de condición

## Situación
Vamos a ver cómo contar el número de veces que una letra aparece en una palabra. Para ello, vamos a recorrer la palabra letra por letra. Pero esta vez, en lugar de incrementar nuestro contador en cada letra, vamos a verificar primero si la letra actual corresponde a la que buscamos. Para ello, vamos a usar una condición.

## Contar ocurrencias
Para contar el número de ocurrencias de una letra en una palabra, el principio es el mismo que para calcular la longitud de una palabra: vamos a recorrer la palabra letra por letra. Para hacer una condición, usamos la palabra clave `if`. En esta condición, comparamos dos valores usando el símbolo `==`.

Por ejemplo, vamos a contar el número de "o" en la palabra "Bonjour". Entonces, para cada letra, si la letra es igual a "o", entonces vamos a incrementar nuestro contador.

![consola](./06-Contar-ocurrencias-.letra-palabra/img/image.png)

Aquí está el código en JavaScript:

```javascript
let word = "Bonjour";
let cpt = 0;
for (let letter of word) {
  if (letter == "o") {
    // Si la letra actual es igual a "o", realizamos la operación entre las llaves, sino la ignoramos.
    cpt = cpt + 1; // Incrementamos nuestro contador.
  }
}
// Una vez salido del bucle, nuestro contador contendrá el número de "o". Lo mostramos con console.log:
console.log(cpt);
```

Declaramos en el `for` una variable `letter`, que contendrá en cada paso una letra de la palabra `word`.

### Ejemplo:

Aquí está el rastro del algoritmo de arriba:

![trace](./06-Contar-ocurrencias-.letra-palabra/img/image_02.png)

## A recordar
- Las condiciones permiten realizar instrucciones solo en ciertos casos.

## Complemento
- **[Las condiciones (Wikipedia)](https://fr.wikipedia.org/wiki/Instruction_conditionnelle_(programmation))**