const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const exphbs = require('pug')
const bodyParser = require('body-parser')

app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/urlShorten', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

app.use('/', require('./routes/home'))
app.use('/shorten', require('./routes/shorten'))

app.listen(process.env.PORT || port, () => {
  console.log(`App is running`)
})