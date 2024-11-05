import express from 'express'

import * as libraryController from '../controllers/library.js'

const router = express.Router()

// / => GET
router.get('/', libraryController.getBooks)


export default router