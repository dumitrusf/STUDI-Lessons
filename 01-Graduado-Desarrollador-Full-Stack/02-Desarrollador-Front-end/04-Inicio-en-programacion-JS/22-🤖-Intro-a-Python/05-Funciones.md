# Las funciones

## Objetivos

- Conocer cómo llamar a una función nativa
- Aprender a declarar y llamar a una función definida

## Contexto

Una función se utiliza de la misma manera en Python que en la mayoría de los lenguajes, en el sentido de que hay que primero declararla y luego llamarla. Se le puede pasar parámetros de entrada y devolver un resultado de salida. La sintaxis, sin embargo, es diferente a lo que hemos visto ya en JavaScript.

## Llamar a una función nativa

Se llama funciones nativas a las funciones incluidas en un lenguaje. Estas funciones son muy útiles para hacer operaciones básicas, y existen muchas en Python. Entre las más utilizadas, hay:

- Las funciones de conversión de tipo, también llamadas cast: `int()`, `str()`, `bool()`, etc.
- `input()` que permite obtener una entrada del usuario
- `print()` que permite mostrar un texto en la pantalla
- `len()` que permite obtener la longitud de un objeto (cadena de caracteres, lista, etc.)
- `min()` y `max()` que permiten obtener respectivamente el valor mínimo y máximo de una lista

Una lista de las funciones está disponible en **[esta página.](https://docs.python.org/3.0/library/functions.html)**

La llamada de una función en Python se hace de la misma manera que en la mayoría de los lenguajes.

### Ejemplo: Obtener la longitud de un objeto

```python
string = "Hello world"
length = len(string)
print("La cadena \"%s\" tiene %s caracteres de largo" % (string, length))
```

## Complemento: Los módulos

Se puede acceder a otras funciones presentes en módulos. Estos se deben importar con la palabra clave `import`. La línea de importación de un módulo debe estar posicionada al principio del script.

```python
import random
print(random.randint(0, 100))
```

Aquí, se muestra un valor entre 0 y 99, 100 no incluido.

## Declarar una función

Para declarar una función en Python, se va a utilizar la palabra clave `def` en lugar de `function` en JavaScript. La sintaxis, luego, es idéntica a lo que hemos visto con las estructuras condicionales y los bucles. Se le puede pasar parámetros.

### Ejemplo:

```python
def say_hello(name, age=0):
    print("Hola " + name)
    if age > 0:
        print("Tienes %s años" % (age))

say_hello("Nicolas")
```

Se puede declarar parámetros con valores por defecto (aquí, `age`) y escribir otros bloques de código dentro.

Resultado:

```python
Hola Nicolas
```

## Devolver un valor

Si se quiere poder devolver un valor, se utiliza la palabra clave `return`, como en los otros lenguajes.

### Ejemplo:

```python
def get_full_name(first_name, last_name):
    return first_name + " " + last_name

say_hello(get_full_name("Romain", "Delpierre"), 25)
```

Resultado:

```python
Hola Romain Delpierre
Tienes 25 años
```

## Complemento:

Cuando se llama a una función en Python, se puede también invertir los parámetros de una función nombrándolos.

```python
say_hello(age=25, name="Romain")
```

## A recordar

- En Python, existen funciones nativas disponibles en el lenguaje que nos permiten hacer operaciones básicas.

- Para declarar una función, se empieza con la palabra clave `def`, luego se indica su nombre y sus parámetros posibles. Se delimita el código de la función con la indentación, y se puede devolver un resultado con la palabra clave `return`.

- Se la llama luego simplemente por su nombre indicando entre paréntesis los parámetros, en el orden de su definición. Si se quiere pasarlos en otro orden, se puede nombrarlos en la llamada de la función.