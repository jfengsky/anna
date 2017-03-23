import express from 'express'
import content from '../src'

const router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    content,
  })
})

export default router
