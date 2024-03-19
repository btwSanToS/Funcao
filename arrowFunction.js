let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = (a) => 2 * a // O return está implícito nesse caso
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá!'
}

ola = () => 'Olá!' // Function arrow em essência 
ola = _ => 'Olá!' // Existe programadores que utilizarão UnderLine no lugar dos parênteses.
console.log(ola())