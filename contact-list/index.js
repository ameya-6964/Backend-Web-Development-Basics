const express = require('express');
const path = require('path');
const app = express()
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname,'views'))
const port = 8000

app.get('/', (req, res) => {
  return res.render('home');
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