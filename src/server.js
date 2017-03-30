import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import Root from './Root'

const content = renderToString(
  <StaticRouter location={req.url} context={context}>
    <App />
  </StaticRouter>,
)

export default content
