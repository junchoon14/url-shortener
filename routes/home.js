const express = require('express')
const router = express.Router()
const Url = require('../models/url')

router.get('/', (req, res) => {
  res.render('index')
})
router.get('/:shortenUrl', (req, res) => {
  Url.findOne({ newUrl: req.params.shortenUrl }, (err, url) => {
    if (err) return console.log(err)
    if (!url) {
      console.log('url is empty')
    } else {
      return res.redirect(url.originUrl)
    }
  })
})

module.exports = router