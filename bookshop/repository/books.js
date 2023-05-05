let books = [
  {
    isbn: '1',
    title: 'Java Buch',
    year: 2012,
    author: 'Mr. Java'
  },
  {
    isbn: '2',
    title: 'Python Buch',
    year: 2020,
    author: 'Mrs. Python'
  },
  {
    isbn: '3',
    title: 'Scala Buch',
    year: 2008,
    author: 'Scala Johanson'
  }
]

export function findAll () {
  return books
}

export function findByISBN (isbn) {
  return books.find((b) => b.isbn === isbn)
}

export function insert (book) {
  books = [...books, book]
}

export function replace (book) {
  books = books.map((b) => b.isbn === book.isbn ? book : b)
}

export function remove (isbn) {
  books = books.filter((b) => b.isbn !== isbn)
}
