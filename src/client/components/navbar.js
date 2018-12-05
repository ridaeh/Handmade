import React from "react";
import {render} from "react-dom";
import {NavLink} from 'react-router-dom'
import {Router, browserHistory} from 'react-router'
import "../styles/navbar.sass"
export class Navbar extends React.Component {
  constructor(props) {
  super(props)
  this.state = {isLoggedIn: this.props.isLoggedIn}
  }
  componentWillReceiveProps(nextProps) {
      this.setState({isLoggedIn:nextProps.isLoggedIn})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let login_NavLink
    if (isLoggedIn) {
    login_NavLink=

        <button onClick={()=>this.props.action() }>Logout</button>

   } else {
     login_NavLink=<NavLink to="/login">
       <button>Sign In</button>
     </NavLink>
   }
    return (<nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img src="http://localhost:3000/images/favicon.png" width="46" height="10"/>
        <h3 class="title is-3 navbar-item">Sto<span class="brand-end">re</span>
        </h3>
      </div>
      <div class="navbar-menu">
        <ul class="navbar-end">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/offers">Buy</NavLink>
          </li>
          <li>
            <NavLink to="/sellers">Sell</NavLink>
          </li>
          <li>
            {login_NavLink}
          </li>
        </ul>
      </div>
    </nav>);
  }
}
