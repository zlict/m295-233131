import express from 'express'
import { findAll, remove } from './repository/books.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/books', (req, res) => {
  res.send(findAll())
})

app.delete('/books/:isbn', (req, res) => {
  remove(req.params.isbn)
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`Server auf Port ${port} gestartet.`)
})

export default app
