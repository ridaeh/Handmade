'use strict'
import React from "react"
import {render} from "react-dom"
import {Link} from 'react-router-dom'
import '../styles/login.sass'
import axios from 'axios'
// TODO : check if the email is empty or password or the lenght of it and fullName
export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      re_password: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.name
    const state = this.state
    state[event.target.name] = event.target.value
    this.setState(state)

  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.re_password) {
      document.getElementById('message').innerHTML = "Password dont match"
    } else {
      const state = this.state
      state['message'] = "!"
      this.setState(state)
      axios.post('/api/v1/auth/register', {
        email: this.state.email,
        fullName: this.state.fullName,
        password: this.state.password
      }).then(function(response) {
        document.getElementById('message').innerHTML = response.data.token

      }).catch(function(error) {
        console.log(error);
        document.getElementById('message').innerHTML = error.response.data.message
      });
    }
  }
  componentDidMount() {
    document.title = "Register"
  }
  render() {
    return (<section class="login">
      <div class="columns">
        <div class="column">
          <form onSubmit={this.handleSubmit}>
            <label class="label title is-1">Register</label>
            <div class="field">
              <label class="label subtitle has-text-danger" id='message'></label>
            </div>
            <div class="field">
              <label class="label subtitle">Full name</label>
              <div class="control">
                <input class="input" type="text" name="fullName" onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">Email</label>
              <div class="control">
                <input class="input" type="email" name="email" onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">Password</label>
              <div class="control">
                <input class="input" type="password" name="password" onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">Re-Password</label>
              <div class="control">
                <input class="input" type="password" name="re_password" onChange={this.handleChange}/>
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
