import React from 'react'
import {render} from 'react-dom'
import {ArticleItem} from './article-item'
import '../styles/offers.sass'
import axios from 'axios'

export class Seller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      user:{
        fullName:'',
        city:'',
        country:'',
        email:'',
        phoneNumber:'',
        avatar:''
      }
    }
    this.sellerID = this.props.match != undefined
      ? this.props.match.params.id
      : undefined
    if (this.sellerID === undefined) {
      // Decode the acess token to get user information
      this.acess_token = localStorage.getItem('access_token')
      var base64Url = this.acess_token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      this.token = JSON.parse(window.atob(base64));
      this.sellerID = this.token._id
    }
    this.fetchData()
  }
  componentDidMount() {
    document.title = "My products"
    this.fetchData()
  }
  fetchData() {
    axios.get('/api/v1/user/' + this.sellerID + '/products').then(response => {
      this.setState(response.data)
    }).catch(error => console.log('parsing failed', error))

  }
  render() {
    let addBtn
    if(this.sellerID==this.token._id)
      addBtn =<a class='button' href='/seller/product'>Add Product</a>
    const items = this.state.products.map((item, index) => <ArticleItem key={index} to="/seller/product"
      id={item._id} name={item.label} link={item.img} price={item.price}/>);
    return (<section class="offers">
      <div class="tile is-ancestor">
        <div class="tile is-3 is-vertical is-parent">
          <div class="tile is-child box">
            <img src={this.state.user.avatar} class="image is-squard"/>
            <label class="title is-5">{this.state.user.fullName}</label><br/>
              <label class="subtitle is-5">{this.state.user.city},{this.state.user.country}</label><br/>
              <label class="subtitle is-5">{this.state.user.email}</label><br/>
            <label class="subtitle is-5">{this.state.user.phoneNumber}</label>
          </div>
        </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
                <div class='tile'>{addBtn}</div>

              <div class="tile columns is-multiline">
                {items}
              </div>
            </div>
          </div>
        </div>
      </section>)
  }
}
