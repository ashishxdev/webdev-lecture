const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/abt', (req, res) => {
  let aboutme = "Aashish"
  let mybranch = "it"
  let arr = ['Hello', 'Aashish', 'Rana']
  res.render('about', { aboutme: aboutme, mybranch: mybranch, arr })
})

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let contentName = "Search for it"
  let arr = ['Hey', 54, 65]
  res.render('index', { siteName: siteName, contentName: contentName, arr })
})

app.get('/blog/:slug', (req, res) => {
  let blogtitle = "Adidas why and when?"
  let blogcontent = "It's a good brand"
  res.render('blogpost', { blogtitle: blogtitle, blogcontent: blogcontent })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
