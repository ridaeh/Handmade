import React from 'react'
import render from 'react-dom'
import '../../../public/images/undefined-profile-picture.png'
import '../styles/profile.sass'
import axios from 'axios'

export class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product:{
      label: "",
      price: "",
      img: "",
      avatar_name: 'Empty'
          },

      isUploading: '',


    }


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)


    // Decode the acess token to get user information
    this.acess_token = localStorage.getItem('access_token')
    var base64Url = this.acess_token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    this.token = JSON.parse(window.atob(base64));
    this.fetchProduct(this.props.match.params.id)
  }
  fetchProduct(id) {
    axios.get('/api/v1/product/' + id).then((response) => {
      document.getElementById('avatar-img').src = response.data.img
      document.getElementById('label').value = response.data.label
      document.getElementById('price').value = response.data.price
      document.title = response.data.label

    }).catch(function(error) {
      console.log(error);
      document.getElementById('message').innerHTML = error.response.data.message
    });
  }

  componentDidMount() {
    document.title = "Product"

  }


  handleChange(event) {

    const state = this.state
    if (!(event.target.name == 'avatar' && event.target.value == "")) {
      if (event.target.name == 'avatar') {
        state.product['img'] = event.target.files[0]
        state.product['avatar_name'] = event.target.files[0].name
      } else
        state.product[event.target.name] = event.target.value
    }

    this.setState(state)


  }

  handleSubmit(event) {
    event.preventDefault();
    if(event.target.name == 'update'){
      var bodyFormData = new FormData()
      for (var key in this.state.product) {
        if (this.state.product[key] != '')
          bodyFormData.append(key, this.state.product[key])
      }
      bodyFormData.append('_id',this.props.match.params.id)
      const state = this.state
      state.isUploading = 'is-loading'
      this.setState(state)
      axios.put('/api/v1/product/', bodyFormData, {
        headers: {
          "x-access-token": this.acess_token
        }
      }).then((response) => {

        document.getElementById('avatar-img').src = response.data.img
        document.getElementById('label').value = response.data.label
        document.getElementById('price').value = response.data.price
        document.title = response.data.label
        const state = this.state
        state.isUploading = ''
        this.setState(state)


      }).catch(function(error) {
        console.log(error);
        document.getElementById('message').innerHTML = error.response.data.message
      });
    }
    else{
      axios.delete('/api/v1/product/',{data:{_id:this.props.match.params.id,token:this.acess_token}})
        .then((response) => {
          this.props.history.push('/seller')
      }).catch(function(error) {
        console.log(error);
        document.getElementById('message').innerHTML = error.response.data.message
      });
    }
  }

  render() {

    return (<section class="profile">
      <form >
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
                  {this.state.product.avatar_name}
                </span>
              </label>
            </div>
          </div>
          <div class="column">

            <label class="label title is-1">{this.state.product.label}</label>
            <div class="field">
              <label class="label subtitle has-text-danger" id='message'></label>
            </div>
            <div class="field">
              <label class="label subtitle">Label</label>
              <div class="control">
                <input class="input" type="text" name="label" id='label' onChange={this.handleChange}/>
              </div>
            </div>
            <div class="field">
              <label class="label subtitle">Price</label>
              <div class="control">
                <input class="input" type="text" name="price" id='price' onChange={this.handleChange}/>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button class={"button is-large is-fullwidth  " + this.state.isUploading + " is-warning"}
                type="submit" name="update" onClick={this.handleSubmit} >Update</button>
                <button class={"button is-large " + this.state.isUploading + "is-danger"} type="submit"
                name="delete" onClick={this.handleSubmit} >Delete</button>
              </div>
            </div>

          </div>
        </div>
      </form>
    </section>)
  }
}
