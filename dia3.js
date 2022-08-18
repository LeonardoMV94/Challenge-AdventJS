/**
 * El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

    Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

    Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

    ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

    Ejemplos:

    "bici coche (balón) bici coche peluche" // -> ✅
    "(muñeca) consola bici" // ✅

    "bici coche (balón bici coche" // -> ❌
    "peluche (bici [coche) bici coche balón" // -> ❌
    "(peluche {) bici" // -> ❌
    "() bici" // ❌
        
    Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
 */

function isValid(letter) {
// ¡No dejes que el Grinch gane!
    const init = letter.indexOf('(')
    const fin = letter.indexOf(')')
    if(init === -1 || fin === -1) return false

    const word = letter.slice(init, fin+2)
    console.log(word)

    if(word.includes('{') || word.includes('}') || word.includes('[') || word.includes(']')) return false
    console.log(word)
    
    const intoParentesis = word.substring(word.indexOf('(') +1, word.indexOf(')'))
    if(intoParentesis == '' || intoParentesis.includes('(') || intoParentesis.includes(')')) return false
    console.log(intoParentesis)

    return true
}

console.log(isValid("bici coche (balón) bici coche peluche")) // true
console.log(isValid("(muñeca) consola bici")) // true

console.log(isValid("peluche (bici [coche) bici coche balón" )) // false
console.log(isValid("(peluche {) bici" )) // false
console.log(isValid("bici coche (balón bici coche" )) // false
console.log(isValid("() bici" )) // false
console.log(isValid("(()) bici" )) // false
console.log(isValid("({}) bici" )) // false
console.log(isValid("(a() bici (a)" )) // false