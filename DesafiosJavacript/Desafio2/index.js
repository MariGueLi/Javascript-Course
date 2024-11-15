// associar a variável ao que o usuário digitar. sem mexer com campus.
// ter a possibilidade do user digitar no meu browser.

//let productvalue = prompt ('Enter the product value: ')
//console.log(typeof(productvalue))


//o valor que entrar nao pode ser uma string. tem que ser number.
//converter a entrada para number.

let productvalue = Number (prompt('Enter the product value: '))
console.log(typeof(productvalue))

//criando uma decisao

if (productvalue >=20){
    document.getElementById('result').innerHTML = 'Approved'
}
else {
    document.getElementById('result').innerHTML = 'Denied'
}