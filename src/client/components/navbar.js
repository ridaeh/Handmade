import React from "react";
import { render } from "react-dom";
import {Link} from 'react-router-dom'
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/offers">Buy</Link></li>
          <li><Link to="/sellers">Sell</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    );
  }
}
