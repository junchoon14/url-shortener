const express = require('express')
const router = express.Router()
const Url = require('../models/url')
const urlGenerate = require('../urlGenerate')

router.post('/', (req, res) => {
  const originUrl = req.body.originUrl
  if (!originUrl) res.render('index', { message: '請輸入網址！' })

  Url.findOne({ originUrl: originUrl }, (err, url) => {
    if (err) return console.error(err)
    if (url) return res.render('result', { url: url })

    const newUrl = urlGenerate(5)
    Url.findOne({ newUrl: newUrl }, (err, url) => {
      if (err) return console.error(err)
      if (url) return res.redirect('/shorten')

      const urlData = new Url({
        originUrl: req.body.originUrl,
        newUrl: newUrl,
      })
      urlData.save((err, url) => {
        if (err) return console.log(err)
        return res.render('result', { url: url })
      })
    })
  })
})

module.exports = router