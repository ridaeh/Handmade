import React from "react"
import {render} from "react-dom"
import '../styles/home.sass'
import {Link} from 'react-router-dom'
export class Home extends React.Component{
  componentDidMount() {
    document.title = "Handmade Store"
  }
  render(){
    return(
      <div class="home">
        <h1 class="title is-1">Welcome to Handmade Store <br/></h1>
        <h1 class="subtitle is-3">Shop products made by hand </h1>
        <Link to="/offers" class="button">Buy</Link>
        <Link to="/sellers"class="button">Sell</Link>

      </div>
    );
  }
}
