let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) // Retorna True. Modificações em escopo GLOBAL

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // Retorna False. O bind realizou a modificação para OBJ, por conta do bind.
comparaComThis(obj) // Retorna True. O bind realizou a modiicação. Obj True.

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // Retorna False. O this não é o global em uma função arrow
comparaComThisArrow(module.exports) // Apontando para o module referido.
comparaComThisArrow(this) // This === This. True. O mesmo é o global, nessa função arrow.

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // Retorna False.
comparaComThisArrow(module.exports) // Retorna True. O module não foi modificado com a tentativa do obj.

/*
Pode se verificar que, para funções comuns, o This será modificado e o obj tomará seu lugar.
Para arrow functions, não ocorrerá o mesmo processo. O obj não conseguirá modificar a arrow function.
*/