//CREATE

async function createBooks(){
    const book = {
            "title": "secreto de la naturaleza",
            "writer": "Oscar S. Aranda",
            "book_description": "Este libro es un viaje que nos llevará por maravillosos."
    }
    await fetch(`http://localhost:3000/books`, { method: 'POST' , headers:{ 'Content-Type': 'application/json'}, body: JSON.stringify(book) })
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
async function deleteBook(id){
    await fetch(`http://localhost:3000/books/${id}`, { method: 'DELETE'})
}

//imprimir 
let booksContainer = document.querySelector('section')
async function printBooks(){
    console.log('hola')
    let books = await getBooks();
    const bookList = await books.map(book => {
        return booksContainer.innerHTML +=
         `<h1>${book.title}</h1>
         <p>${book.writer}</p>
         <p>${book.book_description}</p>
         <button onClick=deleteBook(${book.id})>Delete</button>
         `
    });

    return bookList
}
