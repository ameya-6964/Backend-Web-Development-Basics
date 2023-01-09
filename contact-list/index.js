const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send("<h1> Hey I Am Home Page </h1>")
})

app.get('/profile', (req, res) => {
    res.send("<h1> Hey I am Profile Page </h1>")
  })
  app.get('/about', (req, res) => {
    res.send("<h1> Hey I Am About Page </h1>")
  })
  app.get('/gallery', (req, res) => {
    res.send("<h1> Wonderful Photos </h1>")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})