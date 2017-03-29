import React, {Component} from 'react'
import {Link} from 'react-router'

class Content extends Component {
  render() {
    return (
      <div>
        Hello Content Content! ... <Link to="/content">content</Link>
      </div>
    )
  }
}

export default Content
