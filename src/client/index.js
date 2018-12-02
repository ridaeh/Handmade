import React from "react"
import {render} from "react-dom"
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Navbar} from "./components/navbar"
import {Home} from './components/home'
import {Offers} from './components/offers'
import {Sellers} from './components/sellers'
import {LogIn} from './components/login'
import {Register} from './components/register'
import './styles/style.sass'

class Root extends React.Component {
  render() {
    return (<BrowserRouter>
      <div>
        <Navbar/>
        <Route path='/offers' component={Offers}/>
        <Route exact="exact" path='/' component={Home}/>
        <Route path='/sellers' component={Sellers}/>
        <Route path='/login' component={LogIn}/>
        <Route path='/register' component={Register}/>
      </div>
    </BrowserRouter>);
  }
}

render(<Root/>, document.getElementById("root"))
