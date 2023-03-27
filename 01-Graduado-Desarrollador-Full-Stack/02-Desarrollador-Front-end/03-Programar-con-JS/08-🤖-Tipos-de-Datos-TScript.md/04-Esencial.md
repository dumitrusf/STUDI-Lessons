# Esencial: Tipo de datos con TScript

## Conceptos Básicos de Tipado en JavaScript

JavaScript se considera un lenguaje de tipado débil, pero aún así tiene un sistema de tipos. Aunque permite cambiar el tipo de una variable en cualquier momento, eso no significa que no exista tipado en absoluto.

## Relación entre TypeScript y JavaScript

TypeScript es un superset de JavaScript, por lo tanto, todos los tipos de datos en JavaScript son válidos en TypeScript y viceversa. Sin embargo, TypeScript añade algunos tipos de datos y características adicionales, como los tipos de enumeración, los tipos genéricos y las interfaces, que no están disponibles en JavaScript.

## Tipos Primitivos y Tipos Referencia en TypeScript

Los tipos de datos primitivos son los bloques de construcción fundamentales de cualquier programa TypeScript o JavaScript. Además, TypeScript también ofrece tipos de datos complejos, como arrays, objetos y funciones, que pueden construirse a partir de estos tipos de datos primitivos. Estos últimos se llaman tipos referencia.

## Copiado por Valor y por Referencia

Los tipos primitivos son copiados por valor, mientras que los tipos referencia son copiados por referencia. Cuando asignamos una variable de tipo primitivo a otra variable, se crea una copia del valor, y ambas variables contienen copias independientes del mismo valor. Sin embargo, para los tipos referencia, como los arrays y los objetos, se crea una copia de la referencia, pero ambas referencias apuntan al mismo objeto.