# Metadatos en practica

Para ilustrar mejor cómo se pueden utilizar los metadatos en una situación real, vamos a analizar juntos un caso práctico.

### Ejemplo

Imaginemos que eres desarrollador y que trabajas en un equipo de 4 personas que incluye: un product owner, una desarrolladora y un web designer. La empresa para la que trabajas te ha asignado un objetivo común: modernizar el sitio web de la empresa.

Para llevar a cabo este proyecto, el product owner te invita a una primera reunión. Se trata del backlog refinement.

## Backlog refinement

El backlog refinement, también llamado backlog grooming, es una práctica de metodología ágil que consiste en revisar y actualizar regularmente el backlog de producto (product backlog en inglés). Esto permite asegurarse de que las user stories son claras, comprensibles y listas para ser implementadas.

Esta práctica implica aclarar los detalles de cada user story, evaluar su prioridad, su complejidad e incluso eliminar las user stories que se consideren obsoletas o no relevantes.

El backlog refinement permite al equipo mantener un product backlog de calidad y asegurarse de que las user stories están realmente listas para ser implementadas en la próxima iteración.

### Ejemplo

Retomemos nuestro ejemplo. El día D, el product owner decide hacer un repaso del product backlog.

![Video Herramientas product backlog](https://ressources.studi.fr/contenus/opale/80b28b4df986ee47d248c4eaf6c092fd9fd2cecc/co/metadonnees-pratique.html)

## Product backlog

Un product backlog tiene la misma función que un pliego de condiciones, pero mucho más flexible y evolutivo. De hecho, un pliego de condiciones es un documento que describe las funcionalidades y todas las especificaciones técnicas de un proyecto. Recoge las expectativas del cliente, los entregables y los requisitos técnicos. Generalmente, permanece sin cambios a lo largo del proyecto.

Por el contrario, el product backlog es un documento dinámico en el sentido de que, al igual que un pliego de condiciones, describe las funcionalidades y los requisitos del cliente, pero esta vez, en forma de lista jerarquizada. Se modifica a menudo a lo largo del proyecto, al ritmo de los comentarios recogidos durante el mismo.

### Ejemplo

Retomemos nuestro ejemplo. El product owner empieza la reunión presentando la primera user story. Se pide primero la opinión de todo el grupo sobre la viabilidad técnica de la misma. A continuación, se determinan los criterios de aceptación para poder medir posteriormente la user story y su correcta realización.

Llega ahora el momento de asignar la user story a los equipos gracias al metadato "responsable". Hecho esto, llega ahora la cuestión de la prioridad y su complejidad. El equipo va a determinar juntos la prioridad de la user story. Para ello, vais a utilizar el método del Scrum Poker.

![Scrum poker online offline](https://ressources.studi.fr/contenus/opale/80b28b4df986ee47d248c4eaf6c092fd9fd2cecc/co/metadonnees-pratique.html)

## Scrum poker/poker planning

El scrum poker o poker planning es una técnica de planificación utilizada en metodología ágil que permite estimar la duración y la complejidad de las user stories.

¿Cómo funciona?

Por ejemplo, los equipos se reúnen para estimar la duración de desarrollo de cada user story. Esto se hace a menudo utilizando un juego de cartas previsto para este fin. Cada miembro del equipo selecciona una carta que representa su estimación para la user story, sin que los demás miembros del equipo puedan ver su carta. Una vez que todos los miembros han elegido su carta, ésta se revela simultáneamente para no influir en el resultado de su vecino.

Si las estimaciones son muy diferentes, los miembros del equipo discuten y justifican su elección antes de votar de nuevo. Esta técnica permite obtener una estimación más precisa sobre la duración y la complejidad de cada user story. Ayuda a tener en cuenta la experiencia y las opiniones de cada uno de los miembros del equipo.

## Nota

>Para evaluar la complejidad de una user story, se puede basar en varios métodos:
>
>- La serie de Fibonacci: 1, 3, 5, 8, 13... donde 1 representa el esfuerzo mínimo y el número más alto, el esfuerzo máximo.
>- El método que se inspira en el tamaño de las camisetas: así la puntuación iría de XS a XXL donde XS significaría que la tarea es muy poco compleja de realizar y XXL, que es muy compleja de realizar.

### Ejemplo

Continuemos. El método de puntuación elegido, cada miembro responde de forma individual según por ejemplo el método del Scrum Poker. Esta estimación hecha, todos los miembros revelan su respuesta al mismo tiempo. Momento por cierto muy importante, porque permite que los miembros del equipo no se influyan unos a otros. Sigue un tiempo de debate limitado para sopesar los pros y los contras. Después de haberos puesto de acuerdo, podéis determinar la prioridad de la user story, y así sucesivamente para cada metadato definido.

## Complemento: La noción de time box

Cuando se hace una estimación, puede ocurrir que todo el equipo del proyecto no esté de acuerdo. En estos casos, es habitual que las personas que han puesto las estimaciones más altas y las más bajas, expliquen la razón de su elección. Sigue un intercambio que se dice "time box". Esto significa que el intercambio entre los miembros del equipo será cronometrado. Generalmente, el plazo es muy corto. Puede ir desde 30 segundos hasta 1 minuto. Esto permite ser más eficientes y evitar los intercambios superfluos.

Al final de este intercambio, se vuelve a votar para determinar la estimación final.

Por lo tanto, hay que saber que el metadato de complejidad es un concepto abstracto, porque se trata de una estimación que puede variar en función de varios factores (la antigüedad, el dominio del tema por ejemplo).

Para estimar la complejidad de una tarea, es importante que el equipo tenga en mente la siguiente metodología que muestra los puntos a cuestionar, para determinar mejor la complejidad de una user story:

- La dificultad: la dificultad para realizar la user story.
- El esfuerzo: el esfuerzo que será necesario para realizar la user story.
- Los riesgos: los riesgos potenciales que el equipo podría encontrar durante el desarrollo de la user story.
- Las incertidumbres: aquí se trata de definir las incertidumbres que tiene el equipo para realizar la user story.
- Las interdependencias: ¿cuáles son las interdependencias que tenemos para realizar la user story? De hecho, a veces para la realización de algunas user stories, necesitamos utilizar una herramienta externa. Esto puede ser por ejemplo una herramienta propuesta por un proveedor. En ese caso, no tenemos un control total del proyecto. Como depende de una herramienta externa, hay que tener en cuenta este hecho en la definición de la complejidad.

Como hemos visto, hay varios métodos que permiten evaluar la complejidad de una user story. Esto se puede hacer utilizando números (serie de Fibonacci) o letras (el método de las camisetas). Para estos 2 métodos, la letra o el número más bajo significa que la complejidad es baja, y el número o la letra más alto significa que la complejidad es extremadamente alta.

Para las user stories cuya complejidad se considera extremadamente alta - lo que equivale por ejemplo a un XXL con la metodología de las camisetas -, quizás sea una señal de que esta user story necesita ser dividida en etapas que, a su vez, forman otras user stories. Esto tiene como objetivo reducir la confusión que rodea a esta user story, estimarla mejor y por lo tanto realizarla mejor.

También es la razón por la cual no es obligatorio realizar estas estimaciones utilizando todos los números de la serie de Fibonacci. Para la mayoría de los proyectos, puede ser necesario guardar sólo algunos. De hecho, para los proyectos de mayor envergadura, convendría utilizar otros métodos de puntuación como el método de cotización extrema.

## Método

1. Retoma el juego de planning poker. Esta vez, en lugar de que el product owner presente cada user story y anime a la votación del equipo, se debe hacer lo contrario. Es decir, que todas las cartas del juego de planning poker se colocan sobre una mesa y las user stories se anotan en otras cartas. El objetivo es colocar cada user story frente a la cotización que parezca más adecuada.

2. Los miembros del equipo irán por turnos modificando la cotización de la user story moviéndola frente a la cotización que les parezca más realista.

3. Por el momento, no se permite ningún intercambio entre los miembros.

4. Si el equipo no logra ponerse de acuerdo sobre algunas user stories, se abre el diálogo para determinar la cotización que sería más coherente.

La otra particularidad de la cotización extrema, es que a diferencia del planning poker donde las user stories se tratan una por una, aquí es posible tratar varias user stories al mismo tiempo.

## Complemento
También puede ser tentador estimar la complejidad de una tarea en términos de día-hombre, pero este método es generalmente menos eficaz, porque es menos flexible. Cuando se define la complejidad de una tarea en jH, el equipo está tentado a centrarse en la realización de la user story en el tiempo asignado. Podríamos pensar que esto no es un problema en sí mismo, pero el problema es que esto va en contra del principio mismo de la metodología ágil. De hecho, uno de los conceptos clave de la metodología ágil es que el desarrollo de un proyecto debe permanecer flexible, para poder reaccionar a los imprevistos y a los diferentes feedbacks. Esta metodología también es menos estresante para el equipo y proporciona mejores resultados.

---

Para concluir, estimar la complejidad de una user story es más complicado de lo que parece. De hecho, dependiendo de la experiencia de cada uno, las estimaciones pueden variar enormemente. Por eso es importante utilizar metodologías precisas y preestablecidas como las que hemos visto en este curso para organizar mejor los intercambios y así obtener el máximo beneficio de ellos. También es importante timeboxear los intercambios para asegurarse de que sean lo más productivos posible. Durante las rondas de discusión, también puede ser interesante basarse en el principio siguiente: "el que lo hace, sabe". De hecho, en el marco de la programación de algunas user stories, es crucial que los equipos de desarrolladores den su opinión sobre la tarea en cuestión, ya que estarán más capacitados para dar una respuesta coherente que un product owner por ejemplo.
