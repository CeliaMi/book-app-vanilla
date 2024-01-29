

async function updateBooks(id, editedBook){
    await fetch(`http://localhost:3000/books/${id}`, { method: 'POST' , headers:{ 'Content-Type': 'application/json'}, body: JSON.stringify(editedBook) })

}

async function getBook(id){
    const result = await fetch(`http://localhost:3000/books/${id}`)
    const data = result.json()
    return data
}


const bookId = params.id
getBook(bookId)
document.getElementById(writer).value = data.writer
