import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import layout from '../views/layout'
import App from '../src/App'

const app = express()
app.use('/static', express.static('./dist'))

app.get('*', (req, res) => {
  res.send(layout({title: 'client', content: ''}))
})

const PORT = 3300
app.listen(PORT, ()=> console.log(`start client: http://localhost:${PORT}`))