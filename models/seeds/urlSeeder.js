const mongoose = require('mongoose')
const Url = require('../url')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/urlShorten', { useNewUrlParser: true })

const db = mongoose.connection

const data = [
  {
    originUrl: 'https://www.google.com.tw/',
    newUrl: 'ddddd',
  },
  {
    originUrl: 'https://tw.yahoo.com/',
    newUrl: 'fffff',
  },
]

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected!')

  for (var i = 0; i < 10; i++) {
    Url.create(data)
  }

  console.log('done')
})