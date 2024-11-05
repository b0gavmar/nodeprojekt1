import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

import __dirname from './util/rootpath.js'
import * as errorController from './controllers/error.js'
import adminRoutes from './routes/admin.js'
import libraryRoutes from './routes/library.js'

const app=express()
const PORT = 3003

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use('/', libraryRoutes)

app.use(errorController.get404)

app.listen(PORT, () => console.log(`app is running on port http://localhost:${PORT}`))
