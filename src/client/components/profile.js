import React from 'react'
import render from 'react-dom'
import '../../../public/images/undefined-profile-picture.png'
import '../styles/profile.sass'
export class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      fullName: '',
      country: '',
      city:'',
      phoneNumber: '',
      avatar : 'Empty'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    var value = event.target.name
    const state = this.state
    if(! (event.target.name=='avatar' && event.target.value==""))
    state[event.target.name] = event.target.value
    this.setState(state)

  }

  handleSubmit(event) {
    event.preventDefault();
  

  }

  componentDidMount() {
    document.title = "Profile"

  }
  render() {
    return (<section class="profile">
      <form onSubmit={this.handleSubmit}>
        <div class="columns">
          <div class="column is-one-third">
            <img class="avatar" src='http://localhost:3000/images/undefined-profile-picture.png'/>
              <div class="file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="avatar" accept="image/*" onChange={this.handleChange}/>
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">
                    Choose a file…
                  </span>
                </span>
                <span class="file-name">
                  {this.state.avatar}
                </span>
              </label>
            </div>
          </div>
          <div class="column">

            <label class="label title is-1">Profile</label>
            <div class="field">
              <label class="label subtitle has-text-danger" id='message'></label>
            </div>
            <div class="field">
              <label class="label subtitle">Full Name</label>
              <div class="control">
                <input class="input" type="text" name="fullName" onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">Country</label>
              <div class="control">
                <input class="input" type="text" name="country" onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">City</label>
              <div class="control">
                <input class="input" type="text" name="city" onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">Phone number</label>
              <div class="control">
                <input class="input" type="tel" name="phoneNumber" onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="button is-large is-fullwidth" type="submit" value="Save"/>
              </div>
            </div>

          </div>
        </div>
      </form>
    </section>)
  }
}
