import React from 'react'
import render from 'react-dom'
import '../../../public/images/undefined-profile-picture.png'
import '../styles/profile.sass'
import axios from 'axios'

export class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        fullName: '',
        country: '',
        city: '',
        phoneNumber: '',
        avatar: '',
        avatar_name: 'Empty'
      },
      isUploading: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Decode the acess token to get user information
    this.acess_token = localStorage.getItem('access_token')
    var base64Url = this.acess_token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    this.token = JSON.parse(window.atob(base64));

  }
  componentDidMount() {
    document.title = "Profile"
    this.fetchProfile(this.token._id)
  }
  fetchProfile(id) {
    axios.get('/api/v1/user/' + id).then(function(response) {
      document.getElementById('avatar-img').src = response.data.avatar
      document.getElementById('fullName').value = response.data.fullName
      document.getElementById('country').value = response.data.country
      document.getElementById('city').value = response.data.city
      document.getElementById('phoneNumber').value = response.data.phoneNumber == undefined
        ? ''
        : response.data.phoneNumber

    }).catch(function(error) {
      console.log(error);
      document.getElementById('message').innerHTML = error.response.data.message
    });
  }
  updateProfile() {}
  handleChange(event) {
    var value = event.target.name
    const state = this.state
    if (!(event.target.name == 'avatar' && event.target.value == "")) {
      if (event.target.name == 'avatar') {
        state.user['avatar'] = event.target.files[0]
        state.user['avatar_name'] = event.target.files[0].name
      } else
        state.user[event.target.name] = event.target.value
    }

    this.setState(state)

  }

  handleSubmit(event) {
    event.preventDefault();
    var bodyFormData = new FormData()
    console.log(this.token)
    for (var key in this.state.user) {
      if (this.state.user[key] != '')
        bodyFormData.append(key, this.state.user[key])
    }
    const state = this.state
    state.isUploading = 'is-loading'
    this.setState(state)
    axios.post('/api/v1/user/', bodyFormData, {
      headers: {
        "x-access-token": this.acess_token
      }
    }).then((response) => {
      document.getElementById('avatar-img').src = response.data.avatar
      document.getElementById('fullName').value = response.data.fullName
      document.getElementById('country').value = response.data.country
      document.getElementById('city').value = response.data.city
      document.getElementById('phoneNumber').value = response.data.phoneNumber == undefined
        ? ''
        : response.data.phoneNumber
      const state = this.state
      state.isUploading = ''
      this.setState(state)
      console.log(response.data)

    }).catch(function(error) {
      console.log(error);
      document.getElementById('message').innerHTML = error.response.data.message
    });
  }

  render() {

    return (<section class="profile">
      <form onSubmit={this.handleSubmit}>
        <div class="columns">
          <div class="column is-one-third">
            <img class="avatar" src='' id="avatar-img"/>
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
                  {this.state.user.avatar_name}
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
                <input class="input" type="text" name="fullName" id='fullName' onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">Country</label>
              <div class="control">
                <input class="input" type="text" name="country" id='country' onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">City</label>
              <div class="control">
                <input class="input" type="text" name="city" id='city' onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">Phone number</label>
              <div class="control">
                <input class="input" type="tel" name="phoneNumber" id='phoneNumber' onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class={"button is-large is-fullwidth " + this.state.isUploading + " is-primary"} type="submit">Save</button>
              </div>
            </div>

          </div>
        </div>
      </form>
    </section>)
  }
}
