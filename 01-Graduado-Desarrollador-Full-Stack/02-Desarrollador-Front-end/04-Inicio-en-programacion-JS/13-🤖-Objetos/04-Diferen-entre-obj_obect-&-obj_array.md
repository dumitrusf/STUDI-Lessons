# Diferencias entre el objeto Object() y el objeto Array()

## Objetivo

- Aprender la diferencia entre un Object() y un Array().

## Contexto

En tus desarrollos, te encontrarás sistemáticamente con dos tipos de objetos: Object() y Array(). Aquí trataremos las diferencias y las similitudes entre estos dos objetos.

## Array()

El objeto Array() se puede asimilar a una lista. Para recuperar un elemento de la lista, vamos a usar su índice (posición en el array). El primer índice de un array es igual a 0.

## Diferencias

Cuando queremos recuperar un valor en un Array(), vamos a iterar sobre sus índices, mientras que, para un Object(), vamos a iterar sobre sus propiedades.

```javascript
const carInObject = { type: 'BMW', doors: 3, color: 'blue' }
const carInArray = ['BMW', 3, 'blue'];
console.log(carInObject.color); // blue
console.log(carInArray[2]); // blue
```

No es posible conocer el número de elementos presentes en un Object() sin transformarlo en Array().

```javascript
const carInObject = { type: 'BMW', doors: 3, color: 'blue' }⁶[6]
const carInArray = ['BMW', 3, 'blue'];
console.log(carInObject.length); // undefined
console.log(carInArray.length); // 3
```

## Similitud

Un Object() puede almacenar un Array(), y viceversa. Todo dependerá de las necesidades. Si un objeto tiene características diferentes, usaremos un Object(). El Array() nos servirá, en la mayoría de los casos, para almacenar listas de elementos del mismo tipo. Retomemos el ejemplo de los coches:

```javascript
const car1 = { type: 'BMW', doors: 3, color: 'blue' }
const car2 = { type: 'PEUGEOT', doors: 5, color: 'grey' }
// En el objeto garage almacenamos la lista de los objetos car
const garage1 = { cars: [car1, car2] }
const garage2 = { cars: [car1, car2] }
// Para almacenar la lista de los garages usaremos un Array()
const garages = [garage1, garage2]
```

## A recordar

- No se puede iterar directamente sobre un Object() mediante el índice de las propiedades.

- No se puede conocer directamente el número de propiedades contenidas en un objeto Object() sin transformarlo en Array().

## Complemento

- **[El JavaScript orientado a objetos para principiantes](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)**