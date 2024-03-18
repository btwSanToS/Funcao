const pessoa = {
    saudacao: 'Bom dia. Seja bem vindo!',
    falar() {
        console.log(this.saudacao)
    }

}
pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional e Orientada a Objeto.

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// Testes ↓↓↓↓

const pedido = {
    produto: 2541664,
    preco: 31.50,
    notaFiscal: '4452',
    venda() {
        console.log(this.preco) // Caso troque o This, mudará o resultado final.
    }
}

pedido.venda()
const venda = pedido.venda

const vendaRealizada = pedido.venda.bind(pedido)
vendaRealizada()