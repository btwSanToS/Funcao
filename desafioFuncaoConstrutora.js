// classe construtora padrão

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('André')
p1.falar()
const p2 = new Pessoa('Stela')
p2.falar()

// Modificando para função construtora ↓↓↓↓
const criarPessoa = function(nome) {
        this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new criarPessoa('Santos')
p3.falar()