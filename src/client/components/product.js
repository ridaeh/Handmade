import React from 'react'
import {render} from 'react-dom'
import '../styles/product.sass'
import axios from 'axios'

export class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      price: "",
      seller: "",
      city: "",
      country: "",
      phone_number: "",
      img: ""
    }
    this.fetchProduct(this.props.match.params.id)
  }
  fetchProduct(id) {
    axios.get('/api/v1/product/' + id).then((response) => {
      //console.log(response)
      const state = this.state
      state.name = response.data.label
      state.price = response.data.price
      state.seller = response.data.user.fullName
      state.city = response.data.user.city
      state.country = response.data.user.country
      state.phone_number = response.data.user.phoneNumber
      state.img = response.data.img
      this.setState(state)
      document.title = response.data.label

    }).catch(function(error) {
      console.log(error);
      //document.getElementById('message').innerHTML = error.response.data.message
    });
  }
  render() {
    return (<div class="content product">
      <p>{this.state.name}</p>
      <div class="columns">
        <div class='column'>
          <img src={this.state.img}/></div>
        <div class="content column details">
          <label class="title is-4">
            {this.state.name}</label>
          <div class="media-content">
            <label class="title is-4">Seller:
            </label>
            <label class="subtitle is-5">{this.state.seller}</label>
          </div>
          <div class="media-content">
            <label class="title is-4">City:
            </label>
            <label class="subtitle is-5">{this.state.city}</label>
          </div>
          <div class="media-content">
            <label class="title is-4">Country:
            </label>
            <label class="subtitle is-5">{this.state.country}</label>
          </div>
          <div class="media-content">
            <label class="title is-4">Phone Number:
            </label>
            <label class="subtitle is-5">{this.state.phone_number}</label>
          </div>
          <div class="media-content">
            <label class="title is-4">Price:
            </label>
            <label class="subtitle is-5">{this.state.price}</label>
          </div>
        </div>
      </div>

    </div>);
  }
}
