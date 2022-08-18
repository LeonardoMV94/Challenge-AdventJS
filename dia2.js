const carta = 'bici coche balón _playstation         bici coche peluche'

function listGifts(letter) {
    // ¡Tú puedes!
    const separados = letter.split(' ').filter(x => x.trim() && !x.includes('_'))
    const countsObj = {}
    separados.forEach(function(x) {
        countsObj[x] = (countsObj[x] || 0) +1
    })

    return countsObj
}

console.log(listGifts(carta))