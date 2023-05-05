import request from 'supertest'
import app from './server.js'

describe('server.js', () => {
  describe('GET /books', () => {
    it('should return all books', async () => {
      const response = await request(app).get('/books').send()
      expect(response.text).toMatchInlineSnapshot(`"[{"isbn":"1","title":"Java Buch","year":2012,"author":"Mr. Java"},{"isbn":"2","title":"Python Buch","year":2020,"author":"Mrs. Python"},{"isbn":"3","title":"Scala Buch","year":2008,"author":"Scala Johanson"}]"`)
    })
  })
})
