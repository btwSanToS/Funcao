// Closure é o escopo criado quando uma função é declarada.
// Esse escopo permite a função acessar e manipular variáveis externas a função.

// Contexto léxico em ação.

const x = 'Geral'

function fora() {
    const x = 'Local Função'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())