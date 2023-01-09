const express = require('express');
const path = require('path');
const app = express()
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname,'views'))
const port = 8000

app.get('/', (req, res) => {
  return res.render('home' , {title : "My Contact Lists" } );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})