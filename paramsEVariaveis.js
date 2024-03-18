function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma(1, 5, 4, 9, 6))
console.log(soma()) // 0 Pois na declaração foi informado o 0
console.log(soma(' Jogador ', 'Felicidade ' + 'Campo ')) // Modificado para melhor leitura de concatenação