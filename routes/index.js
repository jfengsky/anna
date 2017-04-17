import express from 'express'
import indexHTML from './indexHTML'
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express', content: indexHTML})
})

module.exports = router
