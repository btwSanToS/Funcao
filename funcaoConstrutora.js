function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // Método Público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método Público2
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

const bugatti = new Carro (400, 50)
bugatti.acelerar()
bugatti.acelerar()
bugatti.acelerar()
console.log(bugatti.getVelocidadeAtual())