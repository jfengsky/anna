import React, {Component, PropTypes} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import Home from './component/Home'
// import Api from './component/Api'
// import Edit from './component/Edit'

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">列表</Link>
            </li>
            <li>
              <Link to="/api">接口</Link>
            </li>
            <li>
              <Link to="/edit">配置</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/api" component={Api} />
          <Route path="/edit" component={Edit} />
        </div>
      </Router>
    )
  }
}

Root.propTypes = {}

const Home = () => <div>Home</div>

const Api = () => <div>Api</div>

const Edit = () => <div>Edit</div>

export default Root
