
//factory - está criando meu objeto
function createBook (title, author, pages){ 
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
    
    printBook: function(){
    console.log('Printing')
        }
    }
    return book//return = retorna as informações para o createBook
}

const book1 = createBook('Atomic', 'James', 306)
const book2= createBook('Think', 'Napolean', 450)
//book3 etc
//o blue print quem faz é a factory.

console.log(book1)
console.log(book2)



