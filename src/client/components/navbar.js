import React from "react";
import { render } from "react-dom";
import {NavLink} from 'react-router-dom'
import "../styles/navbar.sass"
export class Navbar extends React.Component {
  render(){
    return (
      <nav>
        <div class="brand">
          <h2>Handmade Sto<span class="brand-end">re</span>
        </h2>
      </div>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/offers">Buy</NavLink></li>
          <li><NavLink to="/sellers">Sell</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>
    );
  }
}
