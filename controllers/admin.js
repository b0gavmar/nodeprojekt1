import Book from '../model/book.js'

export const getAddBook = (req, res, next) => {
    res.render('admin/edit-book', {
      pageTitle: 'Edit Book',
      path: '/admin/add-book',
      editing: false
    })
  }
  
  export const postAddBook = (req, res, next) => {
    const title = req.body.title
    const imageUrl = req.body.imageUrl || "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png"
    const desc = req.body.description
    const book = new Book(null, title, imageUrl,desc)
    book.save()
    res.redirect('/')
  }
  
  export const getEditBook = (req, res, next) => {
    const editMode = req.query.edit
    if (!editMode) {
      return res.redirect('/')
    }
    const prodId = req.params.bookId
    const book = Book.findById(prodId)
    if (!book) {
      return res.redirect('/')
    }
    res.render('admin/edit-book', {
      pageTitle: 'Edit Book',
      path: '/admin/edit-book',
      editing: editMode,
      book: book
    })
  }
  
  export const postEditBook = (req, res, next) => {
    const bookId = req.body.bookId
    const updatedTitle = req.body.title
    const updatedImageUrl = req.body.imageUrl
    const updatedDescription = req.body.description

    const updatedBook = new Book(bookId, updatedTitle, updatedImageUrl, updatedDescription)
    updatedBook.save()
    res.redirect('/')
  }
  
  export const getBooks = (req, res, next) => {
    const books = Book.fetchAll()
        res.render('admin/adminlibrary', {
        prods: books,
        pageTitle: 'Admin Books',
        path: '/admin/adminlibrary'
      })
  }
  
  export const postDeleteBook = (req, res, nwxt) => {
    const bookId = req.body.bookId
    Book.deleteById(bookId)
    res.redirect('/admin/adminlibrary')
  }
  