import React from "react"
import {render} from "react-dom"
import {Link} from 'react-router-dom'
import '../styles/login.sass'
export class Register extends React.Component {
  componentDidMount() {
    document.title = "Register"
  }
  render() {
    return (<section class="login">
      <div class="columns">
        <div class="column">
          <form>
            <label class="label title is-1">Register</label>
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
              <label class="label subtitle">Re-Password</label>
              <div class="control">
                <input class="input" type="password"/>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="button is-large is-fullwidth" type="submit" value="Register"/>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <Link to="login" class="no-text-deco">Have already an account?<br/>Click here to sign in.</Link>
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
