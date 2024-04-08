// IIFE -> Immediately Invoked Function Expression
// Função invocada assim que declarada.

// A IIFE precisa estar envolta de um '(' -> abrindo e um ')' -> Fechando
(function () {
    console.log('Será executada assim que declarada')
    console.log('Fugirá do escopo mais abrangente!')
})() // () no fim está invocando a função.

// Tudo que está definido na função, não será acessada. Tudo estará apenas na função.
// Apenas se for puxado os dados, por outras formas.

// Testes ↓↓↓↓

var resultado = (function () { // Valor Fixo
    return 5 + 10
})();
console.log(resultado)

var resultado1 = (function (a, b) { // Declarando valor.
    return a + b
})(5, 5)
console.log(resultado1)


var meuModulo = (function () {
    var contador = 0
    return{
        incrementar1: function(){
            contador++
        },
        obterContador: function(){
            return contador
        }
    }
})();
meuModulo.incrementar1();
meuModulo.incrementar1();
meuModulo.incrementar1();
meuModulo.incrementar1();
console.log(meuModulo.obterContador());