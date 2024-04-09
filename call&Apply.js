function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto1 = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// Imprimir a função chamando o nome do objeto e o getPreco.
console.log(produto1.getPreco())
console.log(getPreco())

// Outra maneira de chamar essa função.
const carro = {preco: 69990, desc: 0.20}
// O segredo está no print
console.log(getPreco.call(carro))
//Usou o get para puxar a função e o call para o objeto ser tratado na função.
// Também é possível utilizar o aplly.
console.log(getPreco.apply(carro))

/*
E qual seria a diferença entre as duas chamadas:

1) Call pode ser usado diretamente, inserindo os parâmetros dentro da função.
2) Já a chamada do Apply, os parâmetros precisarão estar dentro de um array.

Ex.:
*/
/*
1) Valor ou Objeto, pode ser chamado de CONTEXTO.
2) Após isso, deve ser inserido os PARÂMETROS da função. Já iniciados na declaração da função;
*/
console.log(getPreco.call(carro, 0.2, '$')) //Diretamente.
console.log(getPreco.apply(carro, [0.2, '$'])) //Dentro de um array