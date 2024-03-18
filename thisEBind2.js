function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000) // Com o comentário, ocorrerá o erro.
}

new Pessoa // Retornando erro NaN.
//Nesse caso, inserir .bind(this ao final da declaração.)

function Pessoa1(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // Com o comentário, ocorrerá o erro.
}
new Pessoa1

/*
Nesse caso, existe a maneira de declara uma constante = this.
Ela irá "Driblar" o problema e não será necessário utilizar .bind(this)
NÃO RECOMENDADO PARA CÓDIGO LIMPO
*/