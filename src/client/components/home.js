import React from "react"
import {render} from "react-dom"
import '../styles/home.sass'
import {Link} from 'react-router-dom'
export class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {isLoggedIn: this.props.isLoggedIn}
  }
  componentDidMount() {
    document.title = "Handmade Store"
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn
    let sell_NavLink
    if (isLoggedIn)
      sell_NavLink= <Link to="/seller"class="button is-medium is-primary is-outlined">Sell</Link>
    else
      sell_NavLink=  <Link to="/login"class="button is-medium is-primary is-outlined">Sell</Link>
    return(
      <div class="home">

        <h1 class="title is-1">Welcome to Handmade Store <br/></h1>
        <h1 class="subtitle is-3">Shop products made by hand </h1>
        <Link to="/offers" class="button is-medium is-primary is-outlined">Buy</Link>
        {sell_NavLink}
          <div class='shoping-img'>
          <img src='http://localhost:3000/images/shoping.svg'/>
          </div>
      </div>
    );
  }
}
