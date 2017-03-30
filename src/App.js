import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'

export default class App extends Component {
  render() {
    return <Root />
  }
}

const Root = () => <div>router app</div>
