// IIFE -> Immediately Invoked Function Expression
// Função invocada assim que declarada.

// A IIFE precisa estar envolta de um '(' -> abrindo e um ')' -> Fechando
(function(){
    console.log('Será executada assim que declarada')
    console.log('Fugirá do escopo mais abrangente!')
})() // () no fim está invocando a função.

// Tudo que está definido na função, não será acessada. Tudo estará apenas na função.
// Apenas se for puxado os dados, por outras formas.
