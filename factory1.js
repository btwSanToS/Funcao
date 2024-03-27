// Maneira comum de inserir valores em um Objeto

const prod1 = {
    nome: 'Arroz marca X',
    preco: 28.99,
    barcode: '145560042'
}

const prod2 = {
    nome: 'Feijão marca Y',
    preco: 8.99,
    barcode: '145560137'
}

// Para casos de grande volume, terá que inserir individualmente cada produto, ocupando muito tempo.

// Para esses casos, é interessante utilizar a FACTORY SIMPLES.
// Factory sempre retornará um novo objeto.

// Valores já atribuídos ↓↓↓↓
function criarProdutoSuja(){ // Suja pois utilizarei o nome, para uma forma correta.
    return{
        nome: 'Goma de mascar',
        preco: 15.89,
        barcode: '145560146'
    }
}
console.log(criarProduto())

function criarProduto(nome, preco, desconto){
    return{
        nome,
        preco,
        desconto
    }
}
console.log(criarProduto('Garrafa de Café', 9.90, 0.05))
console.log(criarProduto('Peito de frango', 12.99, 0.05))
console.log(criarProduto('Playstation 5', 4399.90, 0.3))
console.log(criarProduto('Mouse Gamer RGB', 109.90))

// Teste 2 para desconto não apontar undefined ↓↓↓↓
function criarProduto1(nome, preco, desconto = 0){
    return{
        nome,
        preco,
        desconto
    }
}
console.log(criarProduto1('Garrafa de Café', 9.90, 0.05))
console.log(criarProduto1('Peito de frango', 12.99, 0.05))
console.log(criarProduto1('Playstation 5', 4399.90, 0.3))
console.log(criarProduto1('Mouse Gamer RGB', 109.90))