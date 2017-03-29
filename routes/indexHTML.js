import React from 'react'
import {renderToString} from 'react-dom/server'
import App from '../src/App'

const content = renderToString(<App />)

export default content
