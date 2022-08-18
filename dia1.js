const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  
  function contarOvejas(ovejas) {
    // aquí tu magia
    const ovejasRojas = ovejas.filter( (bee) => bee.color == 'rojo')
    const obejasSinA = ovejasRojas.filter( b => b.name.toLowerCase().includes('a') )
    const obejasSinN = obejasSinA.filter( b => b.name.toLowerCase().includes('n') )
    return obejasSinN
}
  
  console.log(contarOvejas(ovejas))