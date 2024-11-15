function CreateBook (title, author, pages){ 
    //const book = {//nao precisa dá nome ao meu objeto no constructor.
        this.bookTitle= title;
        this.bookAuthor= author;
        this.bookPages= pages;
    //return book = nao precisa no constructor. utiliza 'this.'.
}

const book1 = new CreateBook('Atomic', 'James', 306)
const book2= new CreateBook('Think', 'Napolean', 450)


console.log(book1)
console.log(book2)