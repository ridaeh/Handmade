import React, { Component } from "react"
import {render} from "react-dom"
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
export class Sellers extends React.Component{

  constructor() {
    super();
    this.state = {
      label: '',
      price: '',
      img: ''
    };
  }
  onChange (e) {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);

      console.log("dones");
  }

  onSubmit (e){
    e.preventDefault();

    const {label,price,img} = this.state;

    axios.post('/api/v1/sellers', {label,price,img})
      .then((result) => {
        this.props.history.push("/")
      });
        console.log("doness");
  }

  render() {
    const {label,img,price} = this.state;
    return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text"  name="label" onChange={this.onChange.bind(this)} placeholder="label"  />
                <input type="text"  name="img"   onChange={this.onChange.bind(this)} placeholder="img" />
                <input type="text"  name="price"  onChange={this.onChange.bind(this)} placeholder="price"  />

              <button type="submit" >Submit</button>
            </form>



    );
  }
}

export default Sellers;
