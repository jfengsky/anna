import React from 'react'
import {Link} from 'react-router-dom'

export default props => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/api">Api</Link></li>
    <li><Link to="/modify">Modify</Link></li>
  </ul>
)
