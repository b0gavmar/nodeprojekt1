import Book from '../model/book.js'

export const getBooks = (req, res) => {
  const books = Book.fetchAll()
  res.render('library', {
    books: books,
    pageTitle: 'All Books',
    path: '/library'
  })
}


