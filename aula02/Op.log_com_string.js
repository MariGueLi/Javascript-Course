//usar op. de logico e definir as cores por string

//let corCliente = 'white'
let corCliente = undefined
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque //or || - foi definido, retorna a ordem 1.
//se a corCliente nao foi definida pelo cliente, vai p a corEstoue (ordem 2).

console.log(corVendida)