import React, {Component, PropTypes} from 'react'

class Root extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">列表</a>
          </li>
          <li>
            <a href="/api">接口</a>
          </li>
          <li>
            <a href="/edit">配置</a>
          </li>
        </ul>
      </div>
    )
  }
}

Root.propTypes = {}

export default Root
