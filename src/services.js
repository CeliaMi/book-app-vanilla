//CREATE

async function createBooks(newBook){

}
//READ
async function getBooks(){
    const result = await fetch('http://localhost:3000/books')
    const data = result.json()
    return data
}
//UPDATE

async function updateBooks(id, editedBook){

}
//DELETE
async function deleteBooks(id){

}

//imprimir 
let booksContainer = document.querySelector('section')
async function printBooks(){
    console.log('hola')
    let books = await getBooks();
    const bookList = books.map(book => {
        return booksContainer.innerHTML += `<h1>${book.title}</h1>`
    });

    return bookList
}
