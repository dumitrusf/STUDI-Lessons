# Los métodos del objeto Object()

## Objetivo

Utilizar los métodos del objeto Object()

## Contexto

Para realizar operaciones sobre los Object(), tendrás que utilizar la mayoría de las veces los métodos internos al objeto.

## Transformar un Object() en Array()

Para realizar ciertas operaciones, será necesario transformar nuestro Object en Array. Para ello, Object tiene métodos que facilitan su uso, por ejemplo para conocer las propiedades de un objeto, los valores de las propiedades, las propiedades con valores asociados, etc. Aquí vamos a citar algunas:

- Object.keys(): permite recuperar un array que contiene la lista de las propiedades del objeto dado.
- Object.values(): permite recuperar un array que contiene la lista de los valores de las propiedades del objeto.
- Object.entries(): devuelve un array de varias dimensiones que contiene las propiedades con los valores asociados.

### Ejemplo

```javascript
let user = {
  firstName: "John",
  lastName: "DOE",
  age: 36,
  email: "j.doe@email.com",
  phoneNumbers: ["0660504030", "0123456789"],
};
```

```javascript
console.log(Object.keys(user)); // ['firstName', 'lastName', 'age', 'email', 'phoneNumbers']
```

```javascript
console.log(Object.values(user)); // ['John', 'DOE', 36, 'j.doe@email.com', ['0660504030', '0123456789']]
```

```javascript
console.log(Object.entries(user));
/*[
  ['firstName', 'John'],
  ['lastName', 'DOE'],
  ['age', 36],
  ['email', 'j.doe@email.com'],
  ['phoneNumbers', ['0660504030', '0123456789']],
]*/
```

## HasOwnProperty()

No siempre es necesario modificar nuestro Object() en Array(). Cuando queremos verificar que una propiedad existe en el objeto y conocemos su nombre, podemos usar Object.hasOwnProperty('property').

### Ejemplo

```javascript
let user = {
  firstName: "John",
  lastName: "DOE",
  age: 36,
  email: "j.doe@email.com",
  phoneNumbers: ["0660504030", "0123456789"],
};
let propertyLastNameExist = user.hasOwnProperty("lastName");
if (propertyLastNameExist) {
  console.log(user["lastName"]); // DOE
}
```

## A recordar

Object ofrece diferentes métodos para conocer las propiedades y valores de un objeto.