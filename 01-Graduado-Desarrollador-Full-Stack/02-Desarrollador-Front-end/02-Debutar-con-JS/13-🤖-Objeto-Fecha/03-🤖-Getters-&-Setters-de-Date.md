⭐⭐ # Getters y setters de Date

## Introducción
Como sabes, en JavaScript, los getters y los setters son métodos que permiten recuperar o definir el valor de una propiedad sin pasar directamente por esa propiedad. Por lo tanto, permiten controlar el acceso a las propiedades de instancia de una clase. Veamos algunos getters y setters por defecto del objeto Date.

## Getters de Date
El objeto Date tiene varios getters que devuelven diferentes partes de la fecha y la hora. Por ejemplo:

- `getDate()` devuelve el día del mes (entre 1 y 31).
- `getDay()` devuelve el día de la semana (entre 0 y 6, donde 0 es domingo).
- `getFullYear()` devuelve el año completo (por ejemplo, 2023).
- `getHours()` devuelve la hora (entre 0 y 23).
- `getMinutes()` devuelve los minutos (entre 0 y 59).
- `getSeconds()` devuelve los segundos (entre 0 y 59).
- `getMilliseconds()` devuelve los milisegundos (entre 0 y 999).
- `getTime()` devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 00:00:00 UTC.
- `getTimezoneOffset()` devuelve la diferencia en minutos entre la hora local y la hora UTC.

## Setters de Date
El objeto Date también tiene varios setters que permiten modificar las partes de la fecha y la hora. Por ejemplo:

- `setDate(día)` establece el día del mes (entre 1 y 31).
- `setFullYear(año[, mes[, día]])` establece el año completo (por ejemplo, 2023) y opcionalmente el mes y el día.
- `setHours(hora[, minuto[, segundo[, milisegundo]]])` establece la hora (entre 0 y 23) y opcionalmente los minutos, segundos y milisegundos.
- `setMinutes(minuto[, segundo[, milisegundo]])` establece los minutos (entre 0 y 59) y opcionalmente los segundos y milisegundos.
- `setSeconds(segundo[, milisegundo])` establece los segundos (entre 0 y 59) y opcionalmente los milisegundos.
- `setMilliseconds(milisegundo)` establece los milisegundos (entre 0 y 999).
- `setTime(milisegundos)` establece el número de milisegundos transcurridos desde el 1 de enero de 1970 00:00:00 UTC.

