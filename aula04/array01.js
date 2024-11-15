//criando variaveis em array

const num = [7,8,9]
//add temporarily values in the end of the array, use PUSH:
num.push(10, 11, 12)
//add values in the beginning, use UNSHIFT:
num.unshift(1, 2, 3)
//add in the middle, use SPLICE (it comes with instructions. I have to use a start number)
//add since the index ..., is it necessary to delete a index ?
num.splice(3, 0, 4, 5, 6)
//index starts in 3, how many I want to delete 0 and what I am adding? 4, ,5 ,6.
//in between
console.log(num)




