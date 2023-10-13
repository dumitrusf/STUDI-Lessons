# Introducción al lenguaje Python

## Objetivos

- Aprender la sintaxis de Python
- Instalar un compilador
- Ejecutar un primer script en nuestra máquina

## Contexto

JavaScript es un lenguaje orientado al cliente que se ejecuta en un navegador web (aunque existe una versión de servidor con NodeJS). Python es un lenguaje destinado a ser usado en un puesto de trabajo o un servidor. Hay que instalar un intérprete en nuestro puesto o en el servidor. Vamos a ver juntos las diferencias sintácticas entre estos dos lenguajes.

## Recordatorio: La factorial en matemáticas

En matemáticas, la factorial de un número natural n es el producto de los números enteros positivos menores o iguales que n. **[Wikipedia](https://fr.wikipedia.org/wiki/Factorielle)**

Así, para calcular la factorial de 5 (también escrito 5!), se obtiene 5 * 4 * 3 * 2 * 1, es decir, 120.

## Ejemplo: Sintaxis de Python

Aquí está cómo podríamos calcular la factorial de un número. Aquí, pedimos al usuario que introduzca un número entero: se genera un error si no es positivo, se calcula su factorial y se muestra.

```python
#!/usr/bin/env python3
n = int(input('Introduce un número, y se mostrará su factorial: '))
if n < 0:
    raise ValueError('Debes introducir un número positivo')
fact = 1
i = 2
while i <= n:
    fact *= i
    i += 1
print(fact)
```

El equivalente de este programa podría escribirse así en JavaScript:

```javascript
const n = parseInt(prompt('Introduce un número, y se mostrará su factorial: '))
if (n < 0) {
    throw 'Debes introducir un número positivo'
}
let fact = 1
let i = 2
while (i <= n) {
    fact *= i
    i += 1
}
document.write(fact)
```

## Nota: Hashbang

La primera línea del script Python permite definir con qué programa se va a ejecutar. Es muy útil cuando queremos ejecutarlo desde la línea de comandos, porque el script sabe qué software debe usar para lanzarse.

## Complemento

Es posible crear un proyecto Python **[https://repl.it/](https://repl.it/)**. Para ello, hay que crear un nuevo repl y elegir Python. Una vez abierto el entorno, hay que copiar y pegar el código y hacer clic en Run para poder ejecutarlo.

## Instalar un intérprete Python

Aunque es posible trabajar en un entorno como Repl.it, puede ser más sencillo trabajar en un entorno local. Para Windows, es muy probable que tengamos que instalarlo manualmente. En Linux, es posible que Python ya esté instalado. Si no es así, también es posible usar un gestor de paquetes, si nuestro sistema operativo nos lo permite.

Para comprobar si Python ya está instalado, podemos ejecutar los siguientes comandos:

```bash
python --version
python3 --version
```

Si uno de estos comandos devuelve un número de versión, significa que Python está instalado en nuestra máquina. Si no es así, significa que necesitamos instalar un intérprete Python.

Afortunadamente para nosotros, Python ofrece intérpretes para todos los sistemas operativos. Para ello, podemos usar un gestor de paquetes o ir a **[la página de descarga](https://www.python.org/downloads/)** para descargar directamente el intérprete.

## Atención

En Windows, hay que marcar la casilla Add Python to PATH en el momento de la instalación para poder usar Python desde la línea de comandos Windows. No hay que olvidarse de hacerlo, o será imposible lanzar los scripts con los comandos de la siguiente parte.

## Ejecutar un script Python

Una vez instalado Python y disponible desde la línea de comandos, vamos a crear un archivo en algún lugar de nuestro sistema con un editor de texto estándar (Visual Studio Code, por ejemplo). Llamémoslo factorielle.py. py es la extensión de los archivos Python.

Una vez creado, hay que ir al directorio donde se encuentra el archivo mediante la línea de comandos, y escribir uno de los siguientes comandos:

```bash
python factorielle.py
python3 factorielle.py
```

El programa debería iniciar y proponernos introducir un valor para calcular su **[factorial](https://fr.wikipedia.org/wiki/Factorielle)**.

Gracias al hashbang, también es posible lanzar el script con este comando:

```bash
test.py
```

Gracias al hashbang, el sistema operativo es capaz de determinar qué programa necesita para ejecutar el script.

## Nota

>Aunque un simple editor de texto basta para escribir scripts Python, se recomienda usar un IDE para proyectos de mayor envergadura que una simple prueba. Para ello, podemos optar por **[PyCharm](https://www.jetbrains.com/fr-fr/pycharm/)**, que está desarrollado por IntelliJ, por ejemplo.

## A recordar

- Aunque parezca diferente, la sintaxis de Python no está tan alejada de la de JavaScript y otros lenguajes.
- Para ejecutar scripts Python en un sistema operativo, tenemos que instalar un intérprete.
- Luego es posible ejecutar scripts en nuestra máquina para probarlos más fácilmente.
- Para escribir un script Python, hay que nombrarlo con la extensión .py y editarlo con un simple editor de texto o un IDE.

## Complemento

- **[Sitio oficial de Python](https://www.python.org/)**
