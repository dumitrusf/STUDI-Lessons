# Los niveles de lenguajes

## Objetivos

- Comprender el funcionamiento básico de un ordenador
- Distinguir los lenguajes de "bajo nivel" y los lenguajes de "alto nivel"

## Mise en situation

Una de las grandes diferencias entre todos los lenguajes es lo que se llama su nivel: existen lenguajes de alto nivel y lenguajes de bajo nivel. Esto representa su proximidad con lo que entiende el ordenador.

## Definición

### Funcionamiento de un ordenador

Un ordenador funciona gracias a señales eléctricas y a su manipulación. Una señal eléctrica es binaria, es decir, que solo puede tomar dos valores: o el circuito está abierto, por lo que la corriente no pasa, o está cerrado y deja pasar la corriente. Estos estados se representan respectivamente por 0 y 1: estos dos valores son las únicas cosas que nuestro ordenador sabe manipular nativamente. Todo lo demás (letras, números, imágenes, sonidos) no son más que 0 y 1, disfrazados para ser más legibles por el usuario. Por ejemplo, cuando se deben manipular palabras, cada letra se asocia a un valor binario, que puede cambiar según la codificación. Así, usando la codificación ASCII, la letra "o" tiene el código binario 01101111 (que corresponde también al número 111: para mostrar "o", se muestra en realidad el 111º símbolo de la tabla de caracteres ASCII).

### El lenguaje máquina

Sería por tanto teóricamente posible comunicarse con nuestro ordenador usando solo 0 y 1: esto es lo que se llama el lenguaje máquina. Este lenguaje representa el nivel más bajo que un lenguaje pueda tener. Es comprendido y ejecutado por el procesador. Sin embargo, surge un nuevo problema: no todos los procesadores usan el mismo lenguaje máquina, lo que hace su uso directo muy complejo. Para tener una idea de cómo puede ser este lenguaje, aquí está el código necesario para mostrar "Hello World!" en la pantalla en lenguaje máquina, destinado a máquinas de 32 bits con procesadores Intel:

```text
10111010 00010000
00000001 10110100
00001001 11001101
00100001 00110000
11100100 11001101
00010110 10111000
00000000 01001100
11001101 00100001
01001000 01100101
01101100 01101100
01101111 00100000
01010111 01101111
01110010 01101100
01100100 00100001
00100100
```

Este código es muy difícilmente comprensible, incluso por los desarrolladores más experimentados. Siendo atentos, podemos sin embargo detectar el código binario de varias "o", que hemos visto anteriormente. Hay una en la línea 11, a la izquierda (la de "Hello", se nota además que la línea de arriba está compuesta por dos números binarios similares, representando las dos L) y otra a la derecha de la línea de abajo (la de World). No es viable escribir programas directamente en lenguaje máquina: por eso se crearon los lenguajes de programación. Sin embargo, algunos de estos lenguajes siguen siendo bastante cercanos a la lógica del lenguaje máquina: son los llamados lenguajes de bajo nivel. Otros, en cambio, se alejan para aportar una mayor comodidad a los desarrolladores: son los lenguajes de alto nivel.

### El impacto del tiempo de ejecución

Al momento de ejecutar un programa, los algoritmos se convierten en lenguaje máquina para que el ordenador pueda interpretarlos. Cuanto más alto sea el nivel del lenguaje, más lenta será su conversión. Cuidado sin embargo, la "lentitud" mencionada aquí se mide en milisegundos, o incluso microsegundos. Los lenguajes de bajo nivel se usarán entonces en los casos donde cada microsegundo cuenta, como los sistemas integrados en los aviones o los cohetes, los sistemas operativos, los drivers, etc. En cambio, para los programas tradicionales con una base de código más importante, se preferirá usar un lenguaje de alto nivel, que permitirá una arquitectura del código mucho más fácil de usar.

## A recordar

- El ordenador solo entiende el lenguaje máquina.
- Se crearon lenguajes de programación para evitar que los desarrolladores tengan que manipular este lenguaje máquina directamente.
- Cuanto más cercano sea un lenguaje de programación a la lógica de la máquina, más bajo será su nivel. En cambio, cuanto más se aleje de esta lógica, más alto será su nivel.
- Todos los lenguajes se traducen en lenguaje máquina para poder ser ejecutados: esta traducción es más rápida con los lenguajes de bajo nivel.