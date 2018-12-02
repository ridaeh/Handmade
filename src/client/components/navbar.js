import React from "react";
import {render} from "react-dom";
import {NavLink} from 'react-router-dom'
import "../styles/navbar.sass"
export class Navbar extends React.Component {
  render() {
    return (<nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h3 class="title is-3 navbar-item">Handmade Sto<span class="brand-end">re</span>
        </h3>
      </div>
      <div class="navbar-menu">
        <ul class="navbar-end">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/offers">Buy</NavLink>
          </li>
          <li>
            <NavLink to="/sellers">Sell</NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <button>Sign In</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>);
  }
}
