import React from "react"
import {render} from "react-dom"
import {Link} from 'react-router-dom'
import '../styles/login.sass'
export class LogIn extends React.Component {
  componentDidMount() {
    document.title = "Login"
  }
  render() {
    return (<section class="login">
      <div class="columns">
        <div class="column">
          <form>
            <label class="label title is-1">Login</label>
            <div class="field">
              <label class="label subtitle">Email</label>
              <div class="control">
                <input class="input" type="email" name="email"/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">Password</label>
              <div class="control">
                <input class="input" type="password" name="password"/>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="button is-large is-fullwidth" type="submit" value="Login"/>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <Link to="register" class="no-text-deco">Don’t have an account with us?<br/>Click here to sign up.</Link>
              </div>
              <div class="column">
                <Link to="reset-password" class="no-text-deco">Forgot your password?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>);
  }
}
