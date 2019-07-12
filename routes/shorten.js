const express = require('express')
const router = express.Router()
const Url = require('../models/url')
const randomCode = require('../randomCode.js')
const keroku = 'https://alvis-url-shortener.herokuapp.com/'

function shortPath() {
  let getCode = randomCode(5)
  Url.findOne({ newUrl: getCode }, (err, url) => {
    if (err) return console.error('err1:', err)
    if (url) return shortPath()
    return getCode
  })
}

router.post('/', (req, res) => {
  if (!req.body.originUrl) res.render('index', { message: '請輸入網址！' })

  Url.findOne({ originUrl: req.body.originUrl }, (err, url) => {
    if (err) return console.error('err2:', err)
    if (url) return res.render('result', { url, keroku })

    const urlData = new Url({
      originUrl: req.body.originUrl,
      newUrl: shortPath(),
    })

    urlData.save((err, url) => {
      if (err) return console.log('err3:', err)
      return res.render('result', { url, keroku })
    })
  })
})

module.exports = router