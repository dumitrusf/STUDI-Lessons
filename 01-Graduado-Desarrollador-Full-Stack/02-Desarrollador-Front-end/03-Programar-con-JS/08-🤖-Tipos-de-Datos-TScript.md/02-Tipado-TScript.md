# El tipado en TypeScript
Antes de entrar en detalle sobre los diferentes tipos de datos en TypeScript, es crucial recordar que TypeScript es un superset de JavaScript. Por lo tanto, los tipos de datos que vamos a ver son igualmente aplicables en JavaScript.

La diferencia radica en que TypeScript ofrece una comprobación de tipos durante la compilación, lo que ayuda a detectar errores de tipo por adelantado y hace que el código sea más robusto.

## Tipado estático vs tipado dinámico
Primero, intentemos entender la diferencia entre el tipado estático y el tipado dinámico. Pero antes de adentrarnos en el tema, recordemos las ventajas de usar TypeScript además de JavaScript.

Y antes de eso, aclaremos qué es un tipado. El tipado es la asociación de un tipo a una variable, constante, función, etc. Existen dos tipos de tipado: el tipado dinámico y el tipado estático.

## Tipado dinámico
El tipado dinámico, también conocido como tipado débil, es un tipo de tipado donde los tipos de las variables se determinan durante la ejecución del programa. ¿Qué significa esto? Significa que una misma variable puede tener diferentes tipos a lo largo de la ejecución del programa. Los lenguajes de programación que utilizan un tipado dinámico incluyen, por ejemplo: Python, Ruby, PHP y JavaScript.

El tipado dinámico es más flexible y permite una escritura de código más rápida, pero puede hacer que el código sea más difícil de mantener y depurar debido a errores de tipo que solo se detectan durante la ejecución.

### Ejemplo de Tipado Dinámico
Para demostrar esto, declaremos una variable `x`, a la cual se le asigna un valor `y` sin asignarle un tipo. Ahora, si preguntamos al programa cuál es el tipo de `x`, lo adivinará. Además, en JavaScript, si asignamos otro valor `z` de otro tipo, se le asignará el nuevo tipo.

De hecho, el tipo se adivina durante la ejecución, lo que significa que el tipo de las variables no es fijo; puede ser modificado a lo largo del código.

### Código de Ejemplo
```javascript
nombre = "Naranja";
nombre = 17;
console.log(nombre); // 17
```

## tipado estático
A diferencia del tipado dinámico, el tipado estático es un sistema de tipado donde los tipos de las variables se determinan en el momento de su declaración. Esto significa que los tipos de las variables deben ser declarados explícitamente por el desarrollador. Los lenguajes de programación que utilizan tipado estático incluyen, por ejemplo: Java, C#, C++ y TypeScript.

El tipado estático tiene la ventaja de permitir una detección más temprana de errores de tipo, lo cual puede hacer que el código sea más robusto y más fácil de mantener. Sin embargo, puede resultar más verborreico y restrictivo para el programador, ya que debe especificar explícitamente los tipos de datos.

### Ejemplo de Tipado Estático
En el siguiente ejemplo, veremos que el programa detectará un error en el código.

```typescript
let fruta : string = "Naranja";
fruta = "Cereza";
fruta = 14; // Se produce un error de tipo que dice (Type 'number' is not assignable to type 'string')
let edad : number = 30;
edad = "Albaricoque"; // Se produce un error de tipo que dice (Type 'string' is not assignable to type 'number')
```

Como se puede ver en el ejemplo, agregar el tipado hace que el código sea más legible y estable, lo que resulta en un código de mejor calidad.

## Desventajas del tipado dinámico
El tipado dinámico en JavaScript ciertamente tiene sus ventajas; de hecho, proporciona flexibilidad y simplicidad que pueden ayudar a desarrollar rápidamente una aplicación.

Sin embargo, el tipado dinámico hace más difícil la detección de errores, ya que los errores no se detectan en la compilación, sino en la ejecución. Esto puede llevar a problemas de rendimiento y seguridad, ya que los errores pueden no detectarse antes de que el código se despliegue y ejecute.

### Problemas de mantenimiento en aplicaciones complejas
Además, la creciente complejidad de las aplicaciones, especialmente en el lado del cliente, dificulta la gestión de grandes bases de código que utilizan tipado dinámico. Esto puede llevar a problemas de mantenimiento y depuración, ya que los desarrolladores pueden tener dificultades para comprender cómo interactúan los diferentes componentes y cómo se propagan los errores. Aquí hay un simple ejemplo de un error simple que puede causar problemas.

```javascript
let fruta1 = {
      naame : 'Naranja', // Error tipográfico no detectado
}
let fruta2 = {
      name : 'Cereza',
}
console.log(fruta1.name); // No hay mensaje de error
console.log(fruta2.name);
```

### Ejemplo de un problema difícil de depurar
En el ejemplo anterior, vemos cuán problemático puede ser cometer un error tan simple sin que sea detectado en una aplicación. Es un error que parece simple pero difícil de depurar.

### Comparación con el tipado estático
Si retomamos el mismo ejemplo con un lenguaje de tipado estático como TypeScript, detectará fácilmente estos errores durante la compilación en lugar de la ejecución.

```typescript
let fruta1 = {
      naame : 'Naranja', // Error tipográfico detectado
}
let fruta2 = {
      name : 'Cereza',
}
console.log(fruta1.name); // Mensaje de error: La propiedad 'name' no existe en el objeto 'fruta1'
console.log(fruta2.name);
```

### Conclusión y ventajas del tipado estático
El ejemplo anterior muestra la utilidad del tipado y cómo esto puede mejorar significativamente la calidad de nuestro código y aumentar nuestra eficiencia. Es por eso que es más relevante adoptar el tipado estático. Esto nos permite abordar estos problemas, mientras seguimos siendo compatibles con los navegadores web modernos.

🤖🤖🤖

## Ejemplo:  Desventajas del tipado en JavaScript
En JavaScript, cuando se declara una variable y se le asigna un valor, el tipo de la variable se determina por el tipo del valor asignado. Esto se conoce como inferencia de tipo.

Por ejemplo, si declaramos una variable `x` y le asignamos el valor 10, JavaScript entenderá que la variable `x` es de tipo "número", ya que el valor asignado es un número.

Podemos determinar el tipo de la variable utilizando el operador `typeof`, o simplemente pasando el cursor sobre la variable, el IDE mostrará información acerca de esta variable.

Aquí hay un ejemplo de código para ilustrar esto:

```javascript
let x = 10; // la variable x es de tipo number
console.log(x); // 10
console.log(typeof x); // number
```

### Tipado dinámico en JavaScript
Sin embargo, es importante tener en cuenta que el tipado en JavaScript es dinámico, lo que significa que el tipo de una variable puede cambiar en cualquier momento. Por ejemplo, podemos asignar un valor de tipo "string" a una variable que previamente tenía un valor de tipo "number". Esto puede llevar a errores y comportamientos inesperados, por lo que es importante ser consciente del tipo de cada variable que usamos en nuestro código. Aquí hay un ejemplo para ilustrar esto:

```javascript
let x = 10;
x = "S10"; // la variable x ahora es de tipo string
console.log(x); // S10
console.log(typeof x); // string
```

### Tipado dinámico en objetos JavaScript
Además, los objetos en JavaScript tienen un tipado dinámico, lo que significa que su estructura puede ser modificada en cualquier momento al agregar o eliminar propiedades. Esto puede hacer que la programación en JavaScript sea más flexible, pero también puede hacer que la detección de errores sea más difícil, ya que las propiedades pueden ser añadidas o eliminadas de manera inesperada.

Por ejemplo, podemos crear un objeto en JavaScript y añadir propiedades a este en cualquier momento. Aquí hay un ejemplo:

```javascript
let stagiaire = {
  nom: "Lola",
  age: 25
};
console.log(stagiaire.nom); // Lola
console.log(stagiaire.age); // 25
stagiaire.adresse = "12 Avenue de la Victoire";
console.log(stagiaire.adresse); // 12 Avenue de la Victoire
```

### Complicaciones en la detección de errores
Esto puede hacer que el código sea aún más confuso y la detección de errores más difícil. Por ejemplo, si se elimina una propiedad del objeto `stagiaire`, podrían surgir errores inesperados en el resto del código.

🤖🤖

## Soluciones proporcionadas por TypeScript
A diferencia de JavaScript, en TypeScript la verificación de tipos se lleva a cabo desde las etapas iniciales del desarrollo. Esto nos permite detectar anomalías relacionadas con el tipado de manera temprana en el proceso de desarrollo. Esto significa que cuando escribimos nuestro código en TypeScript, el compilador verifica si los tipos de datos utilizados son correctos y coherentes, y señala un error si no es así.

### Beneficios de la verificación temprana de tipos
Esta verificación temprana de tipos puede ayudar a evitar errores de tipado que podrían ocurrir durante la ejecución y reducir significativamente el número de errores a medida que avanzamos en el proyecto.

### Mejora de la legibilidad y mantenibilidad del código
Además de detectar errores de tipado, la verificación temprana de tipos también puede ayudar a mejorar la legibilidad y la mantenibilidad del código, proporcionando una documentación clara de los tipos de datos utilizados en el código. Esto puede facilitar la colaboración entre desarrolladores y permitir que otras personas comprendan nuestro código de manera rápida y sencilla.