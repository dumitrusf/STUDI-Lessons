# Copia profunda

## Objetivo

Aprender qué es la copia profunda.

## Situación

En algunos casos, necesitaremos clonar objetos enteros, que a su vez contienen otros objetos. Sin embargo, las limitaciones de la copia superficial hacen que este método no sea utilizable para estos casos complejos. Sin embargo, se pueden evitar gracias a la copia profunda. Esta operación consiste en crear un nuevo objeto copiando cada uno de sus valores recursivamente, y aquí también, hay varios métodos disponibles.

## Ejemplo

Tomemos el ejemplo de un array de usuarios:

```javascript
let users = [{ name : 'Nicolas' }, { name : 'Romain' }, { name : 'Laure' }]
let adminUsers = users . slice ()
users [ 0 ]. name = 'Pirate'
console . log ( users ) // Muestra [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]
console . log ( adminUsers ) // Muestra [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]
```

Aquí podemos ver que, a pesar de usar la copia superficial, el cambio del nombre del primer usuario se refleja en los valores de las dos variables. Para evitar este problema, vamos a ver juntos los diferentes métodos de copia profunda.

## Con una función

Es posible escribir una función recursiva que permita copiar cada primitiva de un objeto.

```javascript
const deepCopyFunction = ( inObject ) => {
  let outObject , value , key
  if ( typeof inObject !== "object" || inObject === null ) {
    return inObject // Devuelve el valor si inObject no es un objeto
  }
  // Creación de un array o un objeto que contendrá nuestro valor
  outObject = Array . isArray ( inObject ) ? [] : {}
  for ( key in inObject ) {
    value = inObject [ key ]
    // Se realiza una copia profunda de todos los objetos anidados, así como de los arrays
    outObject [ key ] = deepCopyFunction ( value )
  }
  return outObject
}
let users = [{ name : 'Nicolas' }, { name : 'Romain' }, { name : 'Laure' }]
let adminUsers = deepCopyFunction ( users )
users [ 0 ]. name = 'Pirate'
console . log ( users ) // Muestra [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]
console . log ( adminUsers ) // Muestra [{name: "Nicolas"}, {name: "Romain"}, {name: "Laure"}]
```

## Con JSON.parse() y JSON.stringify()

Si no usamos tipos complejos como fechas, funciones, undefined, Infinity, NaN, regex, etc., la llamada consecutiva de dos métodos permite realizar una copia profunda en una línea de código nativamente. Se trata de JSON.parse() y JSON.stringify().

```javascript
let users = [{ name : 'Nicolas' }, { name : 'Romain' }, { name : 'Laure' }]
let adminUsers = JSON . parse ( JSON . stringify ( users ))
users [ 0 ]. name = 'Pirate'
console . log ( users ) // Muestra [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]
console . log ( adminUsers ) // Muestra [{name: "Nicolas"}, {name: "Romain"}, {name: "Laure"}]
```

## Advertencia

Es posible utilizar librerías JavaScript externas (Lodash o RFDC por ejemplo) para realizar una copia profunda. Vamos a presentar un fragmento de código para cada una de ellas, pero es importante precisar que se trata solo de una idea de uso no explotable tal cual. Lodash y RFDC requieren previamente ser instaladas desde utilitarios como npm.

## Con Lodash

Lodash es una librería JavaScript que pone a disposición de los desarrolladores un cierto número de métodos para realizar operaciones cotidianas en JavaScript, pero que no son soportadas nativamente por el lenguaje, incluyendo la copia profunda.

```javascript
import _ from 'lodash'
let users = [{ name : 'Nicolas' }, { name : 'Romain' }, { name : 'Laure' }]
let adminUsers = _ . cloneDeep ( users )
users [ 0 ]. name = 'Pirate'
console . log ( users ) // Muestra [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]
console . log ( adminUsers ) // Muestra [{name: "Nicolas"}, {name: "Romain"}, {name: "Laure"}]
```

## Con RFDC (Really Fast Deep Clone)

Really Fast Deep Clone es una librería JavaScript que nos ofrece un método de copia profunda muy eficiente. Este método puede resultar muy interesante cuando se trata de manipular objetos de gran tamaño.

```javascript
const clone = require ( 'rfdc' )()
let users = [{ name : 'Nicolas' }, { name : 'Romain' }, { name : 'Laure' }]
let adminUsers = clone ( users )
users [ 0 ]. name = 'Pirate'
console . log ( users ) // Muestra [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]
console . log ( adminUsers ) // Muestra [{name: "Nicolas"}, {name: "Romain"}, {name: "Laure"}]
```

## ¿Qué método utilizar?

La copia profunda es más lenta que la copia superficial, por lo que solo debe utilizarse si es absolutamente necesario. Entre los diferentes métodos, la definición de una función es la más rápida en todos los casos. Sin embargo, si queremos evitar tener que definir una, que usamos objetos simples y que el rendimiento no es el centro de nuestras preocupaciones, la sintaxis con JSON.parse() y JSON.stringify() puede ser una solución viable. En cuanto a las librerías, la mayoría de los desarrolladores optarán por la solución de Lodash, porque es una librería muy extendida y que a menudo ya está incluida en el proyecto. Sin embargo, si tenemos que trabajar con objetos JSON grandes de más de unos pocos megabytes, podríamos usar RFDC, que será más eficiente que Lodash.

## Para recordar

- La copia profunda permite evitar las limitaciones de la copia superficial, pero esta operación tiene un coste en términos de rendimiento.

- Hay varios métodos disponibles, ya sea nativamente o mediante el uso de librerías. Habrá que elegir el método que más nos convenga, tanto en términos de legibilidad como de rendimiento.

## Complemento

- **[Lodash](https://lodash.com/)**

- **[Really Fast Deep Clone](https://www.npmjs.com/package/rfdc)**
