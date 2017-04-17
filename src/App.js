import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Api />
        <Edit />
      </div>
    )
  }
}

const Root = () => <div>router app</div>

const Home = () => <div>Home</div>

const Api = () => <div>Api</div>

const Edit = () => <div>Edit</div>
