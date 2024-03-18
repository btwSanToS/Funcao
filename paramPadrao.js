// Estratégia 1 para gerar valor padrão

const soma1 = function (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3, 1), soma1(2), soma1(0, 0, 0))

// Estratégia 2, 3 e 4 para gerar valor padrão
const soma2 = function (a, b, c) {
    a = a != undefined ? a : 1 // Casos de undefined e null, receberá o valor padrão (1)
    b = 1 in arguments ? b : 1 // Casos em que o indíce 1 (b) não tenha valor, receba o valor padrão (1)
    // Modificar o indíce caso necessário
    c = isNaN(c) ? 1 : c // Casos em que não seja um número, receba o valor padrão (1)
    return a + b + c
}
console.log(soma2(), soma2(3, 1), soma2(2), soma2(0, 0, 0))

// Valor padrão do ES2015
const soma3 = function (a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3, 1), soma3(2), soma3(0, 0, 0))