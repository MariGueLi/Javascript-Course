//variaveis relacionadas = pertencem a uma coisa só, o  livro.

let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306

//todas essas variáveis podem ficar dentro de uma coisa só, um objeto

const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentals',
        chap2: '1st law'
    },
    
    printBook: function(){
    console.log('Printing')
}
}

// como colocar o "printing..." no console?

book.printBook() //agora 'Printing...' aparecerá na tela.
////console.log(book)

////function printBook() {
 ///   console.log('Printing...')
///},
////printBook()
//essa função é 100% relacionada ao objeto.
//Para colocar a função dentro do objeto:

