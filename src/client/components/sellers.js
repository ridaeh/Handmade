import React, { Component } from "react"
import {render} from "react-dom"
import axios from 'axios';
import '../styles/login.sass'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};
const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
}

const image = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

export class Sellers extends React.Component{

  constructor() {
    super();
    this.state = {
      product:{
        label: '',
        price: '',
        img : ''
      },
      img: []
    };
  }
  onDrop(img) {
    const state = this.state
    state.product['img'] =img[0];
    state['img'] =img.map(file => Object.assign( {preview: URL.createObjectURL(file)}))
    this.setState(state);

 }
 componentWillUnmount() {
  // Make sure to revoke the data uris to avoid memory leaks
  this.state.img.forEach(f => URL.revokeObjectURL(f.preview))
}

  onChange (e) {
    const state = this.state
    state.product[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit (e){
    e.preventDefault();

    var bodyFormData = new FormData()
    for (var key in this.state.product) {
       //    if (this.state.product[key] != '')
            bodyFormData.append(key, this.state.product[key])
        }
        axios.post('/api/v1/sellers/', bodyFormData).
        then((response) => {

      console.log(response.data)

    }).catch(function(error) {
      console.log(error);
    });
        console.log(this.state);
  }

  render() {
      const {label,price,img} = this.state;

    const thumbs = img.map(file => (
      <div style={thumb}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={image}
          />
        </div>
      </div>
    ));


    return (<section class="login">
      <div class="columns" >
        <div class="column"  >
            <form onSubmit={this.onSubmit.bind(this)}>
              <div class="field">
                <label class="label subtitle">Product's label</label>
                  <div class="control">
                    <input type="text"  name="label" onChange={this.onChange.bind(this)} placeholder="label"  />
                  </div>
              </div>
              <div class="field">
                <label class="label subtitle">Price</label>
                  <div class="control">
                      <input type="text"  name="price"  onChange={this.onChange.bind(this)} placeholder="price"  />
                  </div>
              </div>
              <div class="field">
                <label class="label subtitle">Drop your images here </label>
                  <div class="control">
                  <section>
                  <Dropzone accept="image/*"
            onDrop={this.onDrop.bind(this)} multiple={true}>Drop your images here </Dropzone>
            <aside style={thumbsContainer}>{thumbs}</aside>
                  </section>
                  </div>
              </div>
              <button type="submit" class="button is-large is-fullwidth" >Submit</button>
            </form>
          </div>
      </div>
</section>
    );
  }
}

export default Sellers;
