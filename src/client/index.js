import React from "react"
import {render} from "react-dom"
import {Route ,BrowserRouter,Switch } from 'react-router-dom'
import {Navbar} from "./components/navbar"
import {Home} from './components/home'
import {Offers} from './components/offers'
import {Sellers} from './components/sellers'
import './styles/style.sass'

class Root extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div>
      <Navbar />
          <Route path='/offers/' component={Offers} />
          <Route exact path='/' component={Home}/>

          <Route path='/sellers' component={Sellers} />

    </div>
    </BrowserRouter>



      );
  }
}

render(<Root/>,document.getElementById("root"))
