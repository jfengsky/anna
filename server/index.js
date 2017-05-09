import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import layout from '../views/layout'
import App from '../src/components/App'

const app = express()
app.use('/static', express.static('./dist'))

app.get('*', (req, res) => {
  const context = {}
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
  if(context.url){
    res.writeHead(301, {
      Location: context.url
    })
  } else {
    res.send(layout({title: 'server', content: html}))
  }
})

const PORT = 3200
app.listen(PORT, ()=> console.log(`start server: http://localhost:${PORT}`))