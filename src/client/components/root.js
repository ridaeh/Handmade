'use strict'
import React from "react"
import {render} from "react-dom"
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Navbar} from "./navbar"
import {Home} from './home'
import {Offers} from './offers'
import {Sellers} from './sellers'
import {LogIn} from './login'
import {Register} from './register'
import '../styles/style.sass'

export class Root extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    let isLoggedIn = false
    // If the key existe in localStorage
    if (localStorage.hasOwnProperty('access_token')) {
      this.isLoggedIn = true
    }
    this.state = {
      isLoggedIn: this.isLoggedIn
    }
  }
  handleLogout() {
    localStorage.removeItem("access_token")
    const state = this.state
    state['isLoggedIn'] = false
    this.setState(state)
    this.props.history.push("/")
  }
  handleLogin(token) {
    localStorage.setItem("access_token", token)
    const state = this.state
    state['isLoggedIn'] = true
    this.setState(state)
    this.props.history.push("/")
  }
  render() {

    return (<div>
      <Navbar isLoggedIn={this.state.isLoggedIn} action={this.handleLogout}/>
      <Route path='/offers' component={Offers}/>
      <Route exact="exact" path='/' component={Home}/>
      <Route path='/sellers' component={Sellers}/>
      <Route path='/login' component={() => <LogIn login={this.handleLogin}/>}/>
      <Route path='/register' component={Register} login={this.handleLogin}/>
    </div>);

  }
}
