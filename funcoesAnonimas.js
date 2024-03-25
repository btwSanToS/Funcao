const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimirResultado(5, 4)
imprimirResultado(5, 4, function (x, y) {
    return x - y
})
//Neste caso, a função anônima entra como parâmetro e é realizada por conta do return. 
imprimirResultado(5, 4, (x, y) => x * y) // Mesmo processo, mas com Arrow Function

// Função Anônima com Obj ↓↓↓↓
const pessoa = {
    falar: function () {
        console.log('Boa tarde!')
    }
}
pessoa.falar()

//É possível, na nova versão do JavaScript, realizar com menos informações ↓↓↓↓
const pessoa1 = {
    falar() {
        console.log('Boa tarde!')
    }
}
pessoa1.falar()