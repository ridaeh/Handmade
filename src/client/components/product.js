import React from 'react'
import {render} from 'react-dom'
import '../styles/product.sass'
import axios from 'axios'

export class Product extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state ={
    name:"Product Name",
    price:"21$",
    seller:"Ridae",
    city : "city",
    country :"Country",
    phone_number :"0939340843"
  }
  }
  render() {
    return (
    <div class="content">
      <p>{this.state.name}</p>
     <div class="content images">
      <img/>
     </div>
     <div class="content details">
         <label class="title is-4"> {this.state.name}</label>
         <div class="media-content">
          <label class="title is-4">Seller: </label>
          <label class="subtitle is-5">{this.state.seller}</label>
         </div>
         <div class="media-content">
            <label class="title is-4">City: </label>
            <label class="subtitle is-5">{this.state.city}</label>
         </div>
         <div class="media-content">
            <label class="title is-4">Country: </label>
            <label class="subtitle is-5">{this.state.country}</label>
         </div>
         <div class="media-content">
            <label class="title is-4">Phone Number: </label>
            <label class="subtitle is-5">{this.state.phone_number}</label>
         </div>
         <div class="media-content">
            <label class="title is-4">Price: </label>
            <label class="subtitle is-5">{this.state.price}</label>
         </div>
     </div>
    </div>

    );
  }
}
