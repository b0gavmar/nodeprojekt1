import fs from 'fs'
import path from 'path'

import __dirname from '../util/rootpath.js'

const booksPath = path.join(__dirname, 'public/data', 'library.json')

const getBooksFileContent = () => {
  let content = []
  try {
    content = JSON.parse(fs.readFileSync(booksPath, 'utf8'))
  } catch(err) {
    console.error(`File reading error: ${err}`)
  }
  return content
}

const setBooksFileContent = (content) => {
  try {
    fs.writeFileSync(booksPath, JSON.stringify(content))
  } catch(err) {
    console.error(`File writing error: ${err}`)
    return false
  }
  return true
}

class Book {
  constructor(id, title, imageUrl) {
    this.id = id
    this.title = title
    this.imageUrl = imageUrl
  }

  save() {
    const books = getBooksFileContent()
    if (this.id) {
      const existingBookIndex = books.findIndex(book => book.id === this.id)
      books[existingBookIndex] = this
      setBooksFileContent(books)
    } else {
      this.id = Math.random().toString()
      books.push(this)
      setBooksFileContent(books)
    }
  }

  static updateById(id, newData) {
    const books = getBooksFileContent(); // Lekérdezi az összes könyvet
    const bookIndex = books.findIndex(book => book.id === id); // Keresd meg a könyv indexét
    if (bookIndex >= 0) {
        // Frissítsd a könyv adatait
        books[bookIndex] = {
            ...books[bookIndex],
            ...newData
        };
        fs.writeFileSync(booksPath, JSON.stringify(books, null, 2)); // Írd vissza a fájlba
    }
}

  static deleteById(id) {
    const books = getBooksFileContent()
    const book = books.find(book => book.id === id)
    const updatedBooks = books.filter(book => book.id !== id)
    const isDeleted = setBooksFileContent(updatedBooks)
    
  }

  static fetchAll() {
    const books = getBooksFileContent()
    return books
  }

  static findById(id) {
    const books = getBooksFileContent()
    const book = books.find(book => prod.id.toString() === id.toString())
    return book
  }
}

export default Book