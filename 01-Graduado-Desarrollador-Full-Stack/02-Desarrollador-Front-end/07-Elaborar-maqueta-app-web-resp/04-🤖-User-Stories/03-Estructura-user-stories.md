# Estructura de las User Stories

## Regla de quien, que & por que

Varias estructuras listas para usar permiten definir user stories. Aunque es posible crear nuestras propias estructuras según las necesidades específicas de un proyecto, estas también pueden servir de guía para asegurarnos de que nuestras user stories sean efectivas. Además de las estructuras existentes, hay una regla muy conocida que, si la respetamos, nos permitirá asegurarnos de que nuestra user story será efectiva. Pero antes de eso, la pregunta que podríamos hacernos es: ¿qué es una user story efectiva?

Una user story efectiva es una user story clara, concisa y fácil de entender por todo el equipo del proyecto. Para ello, debe respetar la siguiente regla: ¿Quién? ¿Qué? ¿Por qué?

La regla del quién, qué, por qué es la más común. Es aplicable independientemente de la estructura que elijamos. Sirve como hilo conductor.

- El "quién" se refiere al usuario o a la persona que necesita la funcionalidad. Puede ser un usuario, un cliente, etc. Para simplificar, responde a la pregunta: ¿quién necesita esta funcionalidad?
- El "qué": describe la necesidad del usuario / la funcionalidad. Esta parte debe estar escrita desde el punto de vista del usuario utilizando un lenguaje simple y comprensible (lo que llamamos lenguaje de negocio). Responde a la pregunta: ¿qué quiere lograr el usuario?
- El "por qué". Esta parte describe la razón por la que el usuario necesita esta funcionalidad. Debe explicar claramente el beneficio que el usuario obtiene de esta funcionalidad. Responde a la pregunta: ¿por qué el usuario necesita la funcionalidad?

Combinando estos 3 elementos, la user story puede describir claramente y de forma sucinta la necesidad de un usuario. Veamos ahora algunos ejemplos de estructura:

- Como [rol], quiero [funcionalidad], para [beneficio],
- Como [rol], quiero [funcionalidad] para [razón],
- Como [rol], quiero [funcionalidad] para poder [tarea a realizar],
- Como [rol], quiero [funcionalidad] porque [razón],
- Como [rol] quiero [funcionalidad] para [beneficio], para [ra.

### Ejemplo

Ilustremos este caso práctico con la siguiente user story.

Como usuario, quiero poder registrarme en el sitio web para poder acceder a las funcionalidades reservadas a los miembros, porque me permitirá interactuar en el foro.

Lo que podemos ver es que en esta user story encontramos los 3 componentes mencionados anteriormente:

- Quién: el usuario,
- Qué: registrarse en el sitio web,
- Por qué: acceder a las funcionalidades reservadas a los miembros e interactuar en el foro.

En esta user story, la necesidad del usuario se comunica de forma clara y concisa.

### Método

Para realizar tus user stories de forma eficaz, tienes a tu disposición varias herramientas. Una de ellas es Miro. Descubramos ahora cómo funciona.

### Herramienta Miro

**[Video Miro](https://ressources.studi.fr/contenus/opale/41641e650e24cb74b2014d85b0b1c382ee44352a/co/regle-qui-quoi-pourquoi.html)**

## Los criterios de aceptación de una user story

Esto permite, entre otras cosas, comprender mejor las expectativas del cliente y también puede facilitar la etapa de validación del proyecto. Sin embargo, hay ciertas condiciones que se deben cumplir para que una user story se considere terminada y eficaz. Una de las condiciones importantes de las user stories es que deben ser **testables**. Es decir, deben poder ser validadas o invalidadas durante la fase de prueba. Para ser relevantes, deben ser claras, específicas, medibles y realizables. Para ayudarte, puedes inspirarte en el acrónimo INVEST inventado por Bill Wake, consultor en desarrollo de software y coach ágil. Según él, para ser consideradas como eficaces, las user stories deben ser:

- I: **Independientes** unas de otras para ser realizadas.
- N: **Negociables** y por lo tanto lo suficientemente flexibles para ser ajustadas a lo largo de los comentarios.
- V: tener **Valor** y una utilidad concreta para el usuario final.
- E: **Estimables**. Es decir, deben ser lo suficientemente precisas para poder ser estimadas y cuantificadas en términos de tiempo y recursos necesarios para realizarlas.
- S: **Small** (significa "pequeño" en inglés), es decir, que deben ser lo suficientemente concisas.
- T: **Testables**. Las user stories deben ser testables para permitir validar su realización y su conformidad con las necesidades expresadas por el cliente.

Estos criterios de aceptación también pueden incluir requisitos funcionales como la accesibilidad, la seguridad o la compatibilidad de la funcionalidad. También deben ser modificables y evolutivos en función de los comentarios de los usuarios y de los cambios realizados durante el desarrollo. Es muy importante revisarlas regularmente para asegurarse de que siguen siendo pertinentes y relacionadas con las necesidades del usuario.

Estos criterios de aceptación son una parte esencial de la user story, ya que permiten validar su eficacia en situación real.

### Complemento

Otro método de aceptación, que esta vez también permite realizar pruebas automatizadas, es utilizar el lenguaje Gherkin. Se trata de seguir la siguiente estructura:

- Dado que...
- Cuando...
- Entonces...

Para ilustrar el lenguaje Gherkin, retomemos el ejemplo anterior. Para recordar, la user story era la siguiente:

"Como usuario, quiero poder registrarme en el sitio web para poder acceder a las funcionalidades reservadas a los miembros, porque esto me permitirá interactuar en el foro".

Aquí está un posible test de aceptación en lenguaje Gherkin para esta user story:

"Dado que me he registrado en el sitio web desde la página principal, cuando introduzco mis credenciales de acceso (mi nombre de usuario y contraseña), y son correctos, entonces tengo acceso al contenido reservado a los miembros y puedo interactuar en el foro."

## Cómo integrar las user stories a las especificaciones técnicas

Como hemos visto a lo largo del curso, las user stories son extremadamente útiles en programación. Pero para obtener el máximo beneficio de ellas, se recomienda integrarlas a las especificaciones técnicas del proyecto.

### Especificaciones técnicas

Una especificación técnica es un documento que incluye todos los detalles relacionados con la forma en que se debe implementar una funcionalidad. A menudo incluye información sobre los lenguajes de programación que se van a utilizar en el proyecto, las bibliotecas y frameworks a usar, por ejemplo. Estas especificaciones técnicas ayudan a los desarrolladores a entender cómo crear e implementar cada funcionalidad.

En cuanto a las user stories, será importante separarlas claramente de las especificaciones técnicas. Por ejemplo, si las especificaciones técnicas están incluidas en una tabla, se puede crear una sección distinta que incluya las especificaciones técnicas y otra sección aparte destinada a las user stories.

Es importante que estas respeten los criterios mencionados en las partes anteriores, es decir:

- estar escritas en lenguaje de negocio, es decir, en un lenguaje natural;
- verificar que sean comprensibles por todos los miembros del equipo del proyecto, incluidos los no técnicos.

Pero un punto central de las user stories es aquí aún más crucial. Se trata de su longitud. Es muy importante que sean concisas, porque si las user stories son demasiado largas en una tabla, por ejemplo, podría volverse inmanejable e ilegible.

También es importante asegurarse de que las especificaciones técnicas estén claramente vinculadas a la user story correspondiente usando la nomenclatura de su elección. Esto permite, entre otras cosas, al equipo de desarrolladores conocer los requisitos funcionales (es decir, a través de la user story) y técnicos al mismo tiempo (las características puramente técnicas como el lenguaje de programación de la funcionalidad, por ejemplo). Esto facilitará enormemente el desarrollo de la user story correspondiente.

Veamos ahora uno de los métodos de organización más comunes. Este método consiste en incluir las especificaciones técnicas en la descripción de la user story. Este enfoque se puede utilizar para las personas que prefieren mantener toda la información en el mismo lugar. Así, pueden conocer todos los requisitos de un vistazo.

Por ejemplo, para una user story que describe la funcionalidad "añadir un artículo al carrito", las especificaciones técnicas podrían incluir información sobre la forma en que se almacenarán los datos, las funcionalidades de validación o seguridad. En este caso, las especificaciones técnicas y la user story están incluidas en la misma sección. Así, las especificaciones técnicas se incluyen en la descripción de la user story misma.

Este enfoque permite vincular de forma clara las especificaciones técnicas a la user story correspondiente. Esto facilita la comprensión y la comunicación entre los diferentes miembros del equipo del proyecto.

Este método es solo un ejemplo entre muchos otros. Cualquiera que sea el método elegido, lo importante es que el vínculo entre la user story y sus especificaciones técnicas sea claramente identificable por todo el equipo del proyecto.

### Método

Para facilitar la creación de sus user stories, es posible crear "personas". En el siguiente vídeo, vamos a descubrir este concepto y crear su primera persona gracias a la herramienta gratuita disponible en esta dirección: **[https://www.hubspot.fr/make-my-persona](https://www.hubspot.fr/make-my-persona)** .

### Creación persona

**[Creacion Persona](https://ressources.studi.fr/contenus/opale/41641e650e24cb74b2014d85b0b1c382ee44352a/co/com-integ-user-stor-spe-tech.html)**
