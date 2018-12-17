'use strict'
import React from "react"
import {render} from "react-dom"
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Navbar} from "./navbar"
import {Home} from './home'
import {Offers} from './offers'
import {Seller} from './seller'
import {LogIn} from './login'
import {Register} from './register'
import {Product} from './product'
import {AddProduct} from './add-product'
import {NotFound} from './not-found'
import {Profile} from './profile'
import {EditProduct} from './edit-product'
import '../styles/style.sass'

export class Root extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
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
  handleRegister(token) {
    localStorage.setItem("access_token", token)
    const state = this.state
    state['isLoggedIn'] = true
    this.setState(state)
    this.props.history.push("/profile")
  }
  render() {

    return (<div class="container">
      <Navbar isLoggedIn={this.state.isLoggedIn} action={this.handleLogout}/>
      <Switch>
        <Route exact path='/' component={()=><Home isLoggedIn={this.state.isLoggedIn}/>}/>
        <Route path='/offers' component={Offers}/>
        <Route exact path='/seller' component={() => <Seller/>}/>
        <Route exact path='/seller/product' component={AddProduct}/>
        <Route exact path='/seller/product/:id' component={EditProduct}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/login' component={() => <LogIn login={this.handleLogin}/>}/>
        <Route path='/register' component={() => <Register register={this.handleRegister}/>}/>
        <Route exact="exact" path="/product/:id" component={Product}/>
        <Route component={NotFound}/>
      </Switch>
    </div>);

  }
}
