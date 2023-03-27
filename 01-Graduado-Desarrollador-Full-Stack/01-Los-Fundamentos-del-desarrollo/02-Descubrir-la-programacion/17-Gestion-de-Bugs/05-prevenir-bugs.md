# **Herramientas para la corrección de errores**

<br>

## **_Objetivo_**

- **Explorar métodos y herramientas para prevenir errores.**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

Si bien es crucial corregir errores cuando se detectan, es aún más beneficioso evitar que ocurran en primer lugar.

Aunque el riesgo cero no es posible, existen numerosas herramientas y métodos que permiten minimizar los riesgos y detectar problemas durante las etapas de desarrollo.

Aquí te presentamos algunas técnicas que puedes seguir para desarrollar programas lo más confiables posible.

Algunas son simples y otras más complejas de implementar, pero todas son ampliamente utilizadas por los equipos de desarrollo.

<br>

---

---

<br>

<br>

---

## **Implementar pruebas**

---

<br>

Cuando se desarrolla una nueva funcionalidad para un programa, es posible escribir pruebas que verifiquen su correcto funcionamiento ante situaciones esperadas e inesperadas.

Al corregir un error, se puede añadir una prueba para verificar la validez de la solución.

<br>

---

---

<br>

<br>

---

## **Adoptar convenciones de programación**

---

<br>

Seguir convenciones de programación comunes permite estructurar el código de manera adecuada y facilita que nuevos programadores no cometan errores posteriormente.

<br>

---

---

<br>

<br>

---

## **Convención de programación para JavaScript**

---

<br>

**Existen varios estándares de codificación en JavaScript que son similares entre sí.**

---

<br>

**Es común adoptar uno de ellos:**

- **[w3schools.com](w3schools.com)**

- **[standardjs.com](standardjs.com)**

<br>

---

---

<br>

<br>

---

## **Evitar la duplicación de código**

---

<br>

**La duplicación de código introduce una mantenibilidad más compleja y correcciones incompletas de errores.**

**Se debe evitar duplicar el código y en su lugar, se debe factorizar las partes repetidas.**

<br>

---

<br>

**Para lograrlo, se utilizan principalmente funciones.**

<br>

---

---

<br>

<br>

---

## **Utilizar herramientas de desarrollo** 

---

<br>

**Se pueden emplear herramientas para corregir el código:**

- **Los linters:**

  - analizan la sintaxis del programa mientras se escribe y señalan los errores a medida que aparecen.

  ---

  <br>

- **Los formateadores:**

  - ajustan la apariencia del código producido para que cumpla con ciertos estándares.

---

<br>

**Un linter solo identifica problemas de sintaxis o formato pero no los corrige.**

**Un formateador soluciona problemas de formato.**

<br>

---

### **Ejemplo: Linter de JavaScript**

---

<br>

`Repl.it` cuenta con su propio linter incorporado en su editor de texto.

Este linter señala problemas de sintaxis y formato.

![Linter](./04-Herram-para-correccion-de-bugs/img/linter.png)

---

<br>

También existen **extensiones** para editores **como Atom `(linter-js-standard)`** o **VSCode `(vscode-standardjs)`** que **facilitan su uso durante el desarrollo.**

<br>

---

### **Ejemplo: Formateadores de JavaScript**

---

<br>

`Repl.it` cuenta con su propio formateador accesible directamente desde su interfaz mediante un botón.

![Formateador](./04-Herram-para-correccion-de-bugs/img/formater_repltit.png)

**[https://beautifier.io](https://beautifier.io)**, una herramienta en línea para formatear JavaScript.

---

<br>

**También hay extensiones disponibles para editores como Atom o VSCode:**

**Como `Atom Beautify` **[https://atom.io/packages/atom-beautify](https://atom.io/packages/atom-beautify)**, que permiten utilizar formateadores directamente durante el desarrollo.**

<br>

---

---

<br>

<br>

---

### **Herramientas de comparación de contenido de archivos**

---

<br>

**Es posible utilizar una herramienta de comparación que realice la comparación de cadenas de caracteres entre dos archivos para observar las diferencias antes y después del formateo.**

<br>

---

**Por ejemplo:**

- **Para esto, se puede utilizar un formateador en línea como [https://www.diffchecker.com/](https://www.diffchecker.com/)**

  o
  
- **Directamente una utilidad de línea de comandos como `diff`.**

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Los "errores pueden prevenirse" adoptando "buenas prácticas durante el desarrollo".**

- **Herramientas de desarrollo como `linters` o `formateadores` pueden utilizarse para aplicar estas prácticas de manera más efectiva.**

<br>

---

---