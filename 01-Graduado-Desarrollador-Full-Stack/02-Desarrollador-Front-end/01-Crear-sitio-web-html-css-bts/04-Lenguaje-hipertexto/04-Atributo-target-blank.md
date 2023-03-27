# **Atributo target="_blank"**

<br>

## **_Objetivos:_**

- Enriquecer el comportamiento de los enlaces

- Conocer los diferentes valores del atributo target

---

---

<br>

---

## **Contexto**

---

<br>

Es posible ordenar la apertura de un enlace en una nueva pestaña del navegador para que el usuario no pierda de vista la pagina en la que se encuentra.

<br>

---

---

<br>
<br>

---

## **target=""**

---

<br>

El atributo opcional target="" utilizado en un enlace `<a>` permite determinar dónde se abrirá el enlace.

Por defecto (si el atributo no se completa), el enlace se mostrará en la ventana actual del navegador, y perderiamos el contexto de la pagina en la que estábamos.

Sin embargo, es posible hacer que se abra una nueva pestaña al hacer clic en el enlace, con la propiedad _blank.

```html
<a href="../04-Lenguaje-hipertexto/02-Enlaces-hypertexto.md/#Enlaces-hypertexto" target="_blank">Esta pagina se abrirá en otra pestaña</a>
```

<a href="https://www.xbox.com" target="_blank">Esta pagina se abrirá en otra pestaña</a>


<br>

Abrir un enlace en una nueva pestaña permite que el usuario mantenga la página desde la que hizo clic, para poder volver a ella fácilmente si desea continuar navegando.


<br>

---

---

<br>
<br>

---

### **Observación**

---

<br>

**Es necesario usar el atributo target="_blank" con moderación, ya que puede afectar el rendimiento y presentar un riesgo potencial para la seguridad de su sitio web.**

Para solucionar estos problemas, se pueden utilizar **dos atributos adicionales:**

**rel="noopener":** muy útil para enlaces no verificados, este atributo _evita el acceso al documento de origen_ osea nuestro sitio web.

_Los hackers pueden acceder a nuestros datos y servirse de maldad a través de la propiedad window.opener del objeto "windows" (generalmente utilizada por los hackers)._

**rel="noreferrer":** _impide que el navegador divulgue información sobre la página de referencia (en este caso, su sitio web)._


<br>

---

---

<br>
<br>

---

## **A Recordar**

---

<br>

- **Para permitir que un enlace se abra en otra pestaña al hacer clic, se debe aplicar el atributo target="" con la propiedad _blank.**

<br>

---

---
