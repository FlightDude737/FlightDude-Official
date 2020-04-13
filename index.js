const express = require('express');
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const hbs = require('hbs')

app.use(express.static('public/images'))
app.set('view engine', 'hbs')
app.set('views', 'public/views')

app.get('/', (req, res) => {
  res.render('index.hbs')
})

app.get('/blog', (req, res) => {
  res.send({
    error: 'Cannot GET /blog yet.'
  })
})

http.listen('3000', () => {
  console.log('The server is on PORT*3000')
})