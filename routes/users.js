const express = require('express')
const router = express.Router()

router
  .post('/login', function (req, res) {
    res.send('login')
  })
  .post('/register', function (req, res) {
    res.send('register')
  })
  .get('/current', function (req, res) {
    res.send('current')
  })

module.exports = router
