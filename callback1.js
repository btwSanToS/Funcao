const fabricantes = ['Mercedes', 'Volkswagen', 'Audi', 'BMW']

function imprimirEmpresas(nome, indice) {
    console.log(`${indice + 1}. + ${nome}`)
}
/*
forEach é utilizado para percorrer os elementos de um Array.
Podendo ser utilizado para executar operações específicas em cada um deles.
*/
fabricantes.forEach(imprimirEmpresas)
fabricantes.forEach(fabricante => console.log(fabricante))