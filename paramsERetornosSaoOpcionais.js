function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m2.`)
    }
    else {
        return area
    }
}

console.log(area(2, 5))
console.log(area(1)) // Como altura não foi informado, a múltiplicação irá retornar o erro NaN.
console.log(area(10, 2))
console.log(area(5, 5))