import React from "react"
import {render} from "react-dom"
import {Link} from 'react-router-dom'
import '../styles/login.sass'
import axios from 'axios'
export class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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
      axios.post('/api/v1/auth/sign-in', {
        email: this.state.email,
        password: this.state.password
      }).then((response) =>{
        document.getElementById('message').innerHTML = response.data.token;
        this.props.history.push("/offers")

      }).catch(function(error) {
        console.log(error);
        document.getElementById('message').innerHTML = error.response.data.message
      });

  }
  componentDidMount() {
    document.title = "Login"
  }
  render() {
    return (<section class="login">
      <div class="columns">
        <div class="column">
          <form onSubmit={this.handleSubmit}>
            <label class="label title is-1">Login</label>
              <div class="field">
                <label class="label subtitle has-text-danger" id='message'></label>
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
