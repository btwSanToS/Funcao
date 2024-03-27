const notas = [7.8, 5.4, 9.2, 6.3, 5.5, 4.9, 8.7, 10]

// Sem callback.
let reprovados = []
for (let i in notas) {
    if (notas[i] < 7) {
        reprovados.push(notas[i])
    }
}
console.log(reprovados)

// Teste com Aprovados ↓↓↓↓

let aprovados = []
for (let i in notas) {
    if (notas[i] > 7) {
        aprovados.push(notas[i])
    }
}
console.log(aprovados)

// Com callback.
const notasBaixas = notas.filter(function (nota) { // O filter funcionará como True and False.
    return nota < 7
})
console.log(notasBaixas)
// O filter constará como True, inserindo os valores em notasBaixas. Caso contrário, não retornará dados.

const NotasAltas = notas.filter(function (nota) {
    return nota > 7
})
console.log(NotasAltas) // O mesmo processo também pode ser feito para notas > 7

// Callback com Arrow Function  

const callArrowAlta = notas.filter(nota => nota > 7)
console.log(callArrowAlta)

const callArrowBaixa = notas.filter(nota => nota < 7)
console.log(callArrowBaixa)