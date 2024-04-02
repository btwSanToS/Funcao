class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

/* O this irá servir para indicar ao construtor, a nova classe Pessoa 
inserida.
Isso acontece pois o THIS torna uma variável pública.
*/
const p1 = new Pessoa('André')
p1.falar()
const p2 = new Pessoa('Stela')
p2.falar()


// Função Factory ↓↓↓↓

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = criarPessoa('Rodrigo')
p3.falar()
const p4 = criarPessoa('Daniele')
p4.falar()