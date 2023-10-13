# La programación declarativa

## Objetivos

- Descubrir el principio de la programación declarativa
- Comprender lo que aporta este paradigma

## Contexto

Hasta ahora, todos los paradigmas que hemos visto definen medios que los desarrolladores tienen para llegar a un resultado. En efecto, la programación imperativa y la Programación Orientada a Objetos son formas diferentes de concebir todas las etapas que conducen a la buena ejecución de un programa.

La programación declarativa toma el problema en sentido inverso: en lugar de concentrarse en cómo llegar al resultado, permite describir cómo debe ser. 

## La programación declarativa

La programación declarativa es un paradigma que permite describir la acción deseada en lugar de los pasos para conseguirlo. Nos enfocamos en lo que queremos hacer en lugar de cómo queremos obtenerlo.

Así, si queremos escribir un programa que resuelva un cubo de Rubik, la programación imperativa implementaría el conjunto de rotaciones a realizar, mientras que la programación declarativa describiría simplemente cómo debe ser el cubo final.

Para ello, la programación declarativa tiene como regla no basarse en estados internos: cada función debe ser determinista. Esto significa que una función con los mismos parámetros devolverá siempre el mismo resultado. Al contrario, una función no determinista podrá devolver un resultado diferente si se llama con los mismos parámetros.

Para conseguir este objetivo, los programas deterministas no manipulan nunca sus estados internos. Los valores almacenados en las variables, por ejemplo, no se modifican nunca: preferiremos usar nuevas variables, o incluso no usarlas en absoluto.

La ventaja de este paradigma es que permite evitar al máximo los efectos secundarios, es decir, el hecho de que una función influya en el resto de la ejecución del programa. En programación declarativa, cada elemento es completamente independiente de los demás. Por consecuencia, el orden de las etapas tiene mucho menos importancia que en programación imperativa.

## Ejemplo: Una función no determinista

La función de abajo hace uso de una variable declarada en el script principal para contar el número de veces que se ha ejecutado. El resultado no será el mismo en cada ejecución: es una función que no es determinista.

```javascript
var contador = 0; // Este contador no forma parte de la función
function cuenta() {
  // Incrementamos el contador y lo devolvemos
  contador++;
  return contador;
}
console.log(cuenta()); // En la primera llamada, esta función mostrará 1
console.log(cuenta()); // En la segunda llamada, esta función mostrará 2
```

## Ejemplo: El SQL un lenguaje declarativo

Para ilustrar el principio de programación declarativa, un muy buen ejemplo es el lenguaje SQL. SQL permite encontrar datos almacenados en una base de datos. Por ejemplo, la información de nuestros usuarios, como su identificador, su nombre o su correo electrónico, se almacenarán en la base de datos. Para luego encontrar un usuario en particular, o recuperar todos los usuarios cuyo correo electrónico termina por "@example.com", usaremos el SQL.

El principio del SQL es describir cómo debe ser el resultado. Por ejemplo, para recuperar el correo electrónico del usuario que posee el identificador 36, basta con escribir:

```sql
SELECT email FROM users WHERE id = 36;
```

El SELECT permite indicar la información a recuperar (aquí, "email"), el FROM permite indicar de dónde hay que recuperarla (aquí, del lugar donde se almacenan los usuarios, es decir "users") y el WHERE permite especificar qué usuarios recuperar (en nuestro caso, queremos el que tiene el ID igual a 36).

La búsqueda en sí misma no le incumbe al desarrollador, sino al motor de base de datos: él se encargará de recorrer todos los usuarios para saber si su identificador es igual a 36 o no, y, si es así, extraer su correo electrónico. El desarrollador solo ha descrito lo que esperaba del resultado final.

En esta consulta, no tenemos ningún estado interno, por lo tanto ninguna manipulación de variable, simplemente una descripción de la acción esperada.

El aspecto determinista del SQL es también importante aquí: si ejecutamos esta consulta sobre la misma base de datos, sabemos que tendremos siempre el mismo resultado.

## A recordar

- La programación declarativa permite describir el resultado esperado en lugar de los pasos para conseguirlo.
- Las funciones deben ser deterministas, es decir, devolver siempre el mismo resultado si se les dan los mismos parámetros.
- Cada función siendo una llamada independiente, el orden de las etapas tiene mucho menos importancia que en programación imperativa.

## Complemento

- **[Programación declarativa](https://fr.wikipedia.org/wiki/Programmation_d%C3%A9clarative)**

- **[El SQL](https://fr.wikipedia.org/wiki/Structured_Query_Language)**
