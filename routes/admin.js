import express from 'express'

import * as adminController from '../controllers/admin.js'

const router = express.Router()


router.get('/add-book', adminController.getAddBook)

router.get('/books', adminController.getBooks)

router.post('/add-book', adminController.postAddBook)

router.get('/edit-book/:bookId', adminController.getEditBook)

router.post('/edit-book', adminController.postEditBook)

router.post('/delete-book', adminController.postDeleteBook)

export default router