# **Escribir comentarios**

<br>

## **_Objetivos:_**

- Descubrir los comentarios en el código fuente y su utilidad;

- Descubrir los mensajes de modificaciones de código.

---

---

<br>
<br>

---

## **Contexto**

---

<br>

En general, el trabajo de desarrollador se hace a la vez solo, y en grupo.

Solos, por que en el momento de codear estamos solos frente a la maquina.

En grupo porque nuestro código se integra con el trabajo de otras personas.

Es el caso de hacer un proyecto con varios en equipo.

Pero aun asi si realizamos un proyecto en un instante "T", es probable que otros desarrolladores lleguen a ver nuestro código (o verificarlo) a un instante "T+1".

Asi que es necesario programar teniendo en cuenta el hecho de que el código producido debe ser legible para cualquier otra persona que no seamos nosotros.

Este proceso pasa por la escritura de un código claro y por el añadido de comentarios en cuanto nuestro código no sea autosuficiente, por ejemplo cuando es necesario precisar elecciones o funcionamientos no triviales.

<br>

---

---

<br>
<br>

---

## **Los comentarios**

---

<br>

Un comentario es una nota dejada por un desarrollador en un archivo que contiene código.

Esta NOTA es justo una información destinada a los lectores del código: su presencia no influye en como se ejecuta el código.

Estos son usados para describir las partes no explicitas del código.

Esta también pueden contener patrones como un "TODO", "NOTE" o "XXX".

<br>

---

---

<br>
<br>

---

## **Explicitar el comportamiento de una función**

---

<br>

Veamos un ejemplo de código que explicita la lógica de una función.

```js
function checkUserName(name) {
  // name es una cadena de caracteres.

  // El nombre del usuario necesita tener mas de 4 caracteres.

  if (name.length >= 4) {
    return true;
  }

  return false;
}
```

<br>

Es un buen comentario ya que es corto y explica el sentido de lo que hace la función y no lo que esta escrito técnicamente en el código.

<br>

---

---

<br>
<br>

---

### **Observación: Comentario estructurado por la documentación**

---

<br>

Existen comentarios estructurados que siguen un cierto formato y que son utilizados para generar las documentaciones técnicas.

<br>

---

---

<br>
<br>

---

### **Ejemplo: comentario estructurado de la función doxygen**

---

<br>

**_[JSDOC](https://jsdoc.app/)_** es una herramienta que le permite generar documentación técnica gracias a los comentarios estructurados.

Aquí hay un ejemplo de un comentario estructurado en JSDOC que explica el formato que se utilizará para explicar el comportamiento de una función Cstyle.

```js
/**

 * Representa un libro.

 *

 * @param {string} title - El titulo del libro.

 * @param {string} author - El autor del libro.

 */

function Book(title, author) {}
```

<br>

---

---

<br>
<br>

---

## **Mensaje de modificaciones**

---

<br>

Un commit toma todas las modificaciones o un solo conjunto (dependiendo de lo que marquemos en git), realizadas por un desarrollador en el código entre dos estados diferentes de software.

Aparte de las modificaciones, este contiene (el commit contiene) un comentario que especifica los cambios realizados, en el caso de necesitar explicarlos.

Es un elemento de comunicación importante que nos es util en cuanto leamos el histórico de modificaciones que es muy util a la vez para nosotros y para las personas con las que trabajamos.

<br>

---

---

<br>
<br>

---

## **Formato de mensaje de commit por el kernel linux**

---

<br>

EH!! Tú!! Que n o te has enterado de una mierda al igual que yo!!!

🤣🤣 Mejor 👇 mírate este video

[Commits convencionales, con Tipo, SCOPE y mensajes en cuerpo y footer](https://youtu.be/SigVVJmUGv8)

este 👇 es muy bueno mejor que el otro de arriba aun asi mírate los dos **_SUPER IMPORTANTE_** 👆

[convencional commit](https://youtu.be/Cp_SHttVTi0)

ademas aquí tenemos la documentación de commits: [Doc de commits para saber como hacerlos bien y pensar antes de commitear](https://www.conventionalcommits.org/es/v1.0.0/)

y

otra de CARLOS AZAUSTRE: [tipos de commit (feat chore build refactor style perf ci)](https://carlosazaustre.es/conventional-commits)

<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- _**Una buena comunicación es esencial en el trabajo del desarrollador.**_

- _**Los comentarios son notas al nivel del código incrustados en nuestro código, destinados a los desarrolladores: Indicando partes del código que no son triviales**_

- _**Los mensajes de commits son notas que explican los cambios realizados entre dos versiones del código.**_

<br>

---

---
