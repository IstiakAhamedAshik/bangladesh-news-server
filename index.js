const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const categories = require('./data/categories.json')
const newsCategories = require('./data/news.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('News Api running')
})
app.get('/news-catogories', (req, res) => {
  res.send(categories)
})
app.get('/news', (req, res) => {
  res.send(newsCategories)
})
app.get('/news/:id', (req, res) => {
  const id = req.params.id
  const selectNews = newsCategories.find((n) => n._id === id)
  res.send(selectNews)
})
app.get('/categori/:id', (req, res) => {
  const id = req.params.id
  if (id === '0') {
    res.send(newsCategories)
  } else {
    const categoriNews = newsCategories.filter((n) => n.category_id === id)
    res.send(categoriNews)
  }
})

app.listen(port, () => {
  console.log('Example app listening on', port)
})
