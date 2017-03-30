import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import Root from '../src/Root'
// import content from '../src/server'

const router = express.Router()

router.get('/', function(req, res, next) {
  const context = {}
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Root />
    </StaticRouter>,
  )
  console.log(content)
  res.render('index', {
    title: 'Express',
    content,
  })
})

export default router
