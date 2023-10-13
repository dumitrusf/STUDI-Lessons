# Manejo de Errores en JavaScript

## Estructura Try...Catch
La estructura try...catch permite ejecutar una instrucción mientras se gestionan los errores potenciales. El bloque `try` contiene el código que se va a ejecutar, mientras que el bloque `catch` contiene el código que se ejecutará en caso de error.

### Ejemplo
Ejemplo de código con try...catch:

```javascript
try {
  let x = 10;
  let y = x.toUpperCase();
  console.log(y);
} catch (error) {
  console.log("Ha ocurrido un error: " + error.message);
}
```

### Análisis del Ejemplo
Aquí vemos que el bloque `try` contiene 2 instrucciones. La primera asigna el valor 10 a la variable `x`. La segunda intenta convertir el valor de `x` a mayúsculas, lo que provoca un error. El bloque `catch` captura el error y muestra un mensaje personalizado en la consola.

**[Video Premier Try](https://ressources.studi.fr/contenus/opale/a6eeecb04f54407775a96b0ef0f42f4cf304813e/co/gerer-erreurs-javascript-1.html)**

## Generando Errores Personalizados Estructura Throw
La estructura `throw` permite generar un error personalizado. Se utiliza a menudo para señalar errores específicos de la aplicación.

### Ejemplo con Throw
Ejemplo de código que usa `throw`:

```javascript
function diviser(a, b) {
  if (b === 0) {
    throw new Error("División por cero imposible");
  }
  return a / b;
}
try {
  let resultado = diviser(10, 0);
  console.log(resultado);
} catch (error) {
  console.log("Ha ocurrido un error: " + error.message);
}
```

### Análisis del Ejemplo con Throw
En este ejemplo, tenemos una función `diviser` que realiza una división entre 2 números. Si el valor de `b` es igual a 0, lanzamos un error personalizado usando `throw`. Cuando la función `diviser` es llamada dentro del bloque `try`, se produce un error, ya que el valor de `b` es 0. El bloque `catch` captura el error y muestra un mensaje personalizado en la consola.

**[Video de Throw](https://ressources.studi.fr/contenus/opale/a6eeecb04f54407775a96b0ef0f42f4cf304813e/co/gerer-erreurs-javascript-1.html)**

## Errores Personalizados en JavaScript con Throw
Es importante señalar que `throw` puede generar cualquier error, no solo una instancia de `Error`. También podemos crear clases personalizadas que extienden la clase `Error` para definir errores personalizados con propiedades y métodos específicos para nuestra aplicación.

### Ejemplo de Clase de Error Personalizado
Ejemplo de código con una clase de error personalizada:

```javascript
class AgeInvalidoError extends Error {
  constructor(message) {
    super(message);
    this.name = "AgeInvalidoError";
    this.date = new Date();
  }
}
function verificarEdad(edad) {
  if (edad < 18) {
    throw new AgeInvalidoError("La edad debe ser mayor o igual a 18 años");
  }
  console.log("La edad es válida");
}
try {
  verificarEdad(15);
} catch (error) {
  if (error instanceof AgeInvalidoError) {
    console.error(`${error.name} : ${error.message} (${error.date})`);
  } else {
    console.error(`Ha ocurrido un error: ${error.message}`);
  }
}
```

### Análisis del Ejemplo de Error Personalizado
Hemos creado una clase de error personalizada `AgeInvalidoError` que extiende la clase `Error`. Hemos añadido una propiedad `name` y una propiedad `date` para añadir información adicional al error. En la función `verificarEdad`, si la edad es menor que 18, lanzamos un error personalizado utilizando nuestra clase `AgeInvalidoError`. En el bloque `catch`, verificamos si el error es una instancia de `AgeInvalidoError`, y si es así, mostramos información adicional sobre el error.

Al utilizar `throw`, podemos personalizar la gestión de errores en nuestra aplicación y proporcionar información adicional para ayudar a diagnosticar los problemas.

## Estructura de Uso de Finally
La estructura `finally` permite ejecutar código independientemente de los resultados de los bloques `try` y `catch`. Se utiliza a menudo para liberar recursos.

### Ejemplo con Finally
Ejemplo de código que usa `finally`:

```javascript
try {
  let x = 10;
  let y = x.toUpperCase();
  console.log(y);
} catch (error) {
  console.log("Ha ocurrido un error: " + error.message);
} finally {
  console.log("Fin de la ejecución del bloque try...catch.");
}
```

### Análisis del Uso de Finally
Aquí vemos que el bloque `finally` contiene una instrucción que se ejecutará pase lo que pase, ya sea después del bloque `try` o del bloque `catch`.