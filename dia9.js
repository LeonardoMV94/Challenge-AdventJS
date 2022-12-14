/** DIA 9
    En la f谩brica de Papa No茅l 馃巺 se acerca el d铆a especial... y todav铆a tenemos un mont贸n de cosas por contar. 馃槄

    Por suerte a Mark Zucktheelf 馃 se le ha ocurrido crear una funci贸n que permita agrupar un array, 
    que puede ser de valores u objetos, a trav茅s de una funci贸n o de una propiedad.

    Como ves, la funci贸n groupBy recibe una colecci贸n (array) y una funci贸n o una propiedad, 
    y devuelve un objeto con claves que son los valores de la funci贸n ejecutada pasando como 
    argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

    La dificultad del reto est谩 m谩s en comprender la funci贸n que en la implementaci贸n. 隆Suerte!.
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
