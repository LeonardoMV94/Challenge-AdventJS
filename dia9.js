/** DIA 9
    En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

    Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, 
    que puede ser de valores u objetos, a través de una función o de una propiedad.

    Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, 
    y devuelve un objeto con claves que son los valores de la función ejecutada pasando como 
    argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

    La dificultad del reto está más en comprender la función que en la implementación. ¡Suerte!.
 */

function groupBy(collection, it) {
  //
  const obj = {}
  const isFunction = typeof(it) == 'function'

  for (const valor of collection) {
    const key = isFunction ? it(valor) : valor[it] // SI 'it' es una funcion, key sera igual al retorno SINO sera igual a la propiedad del valor
    key in obj ? obj[key].push(valor) : (obj[key] = [valor]) // SI key esta dentro del obj agrega un nuevo valor al array SINO crea una nueva clave-valor
  }

  return obj;
}

// Ejemplos:
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(["one", "two", "three"], "length")) // { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([{ age: 23 }, { age: 24 }], "age")); // { 23: [{age: 23}], 24: [{age: 24}] }
console.log(groupBy([1397639141184, 1363223700000], (timestamp) => new Date(timestamp).getFullYear())) // { 2013: [1363223700000], 2014: [1397639141184] }

console.log(groupBy([
  { title: "JavaScript: The Good Parts", rating: 8 },
  { title: "Aprendiendo Git", rating: 10 },
  { title: "Clean Code", rating: 9 }
  ],
  "rating"
))

// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
