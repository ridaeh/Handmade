import React from 'react'
import {render} from 'react-dom'
import {ArticleItem} from './article-item'
import '../styles/offers.sass'
import axios from 'axios'
export class Offers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      searchLabel: '',
      price : ''

    }
    this.handShearch=this.handShearch.bind(this)
  }
  componentDidMount() {
    document.title = "Offers"
    this.fetchData()
  }
  onChange(e) {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  fetchData() {
    fetch('/api/v1/products').then(response => response.json()).then(parsedJSON => {
      const state = this.state
      state.data = parsedJSON;
      this.setState(state);

    }).catch(error => console.log('parsing failed', error))
  }

  handShearch(event){
    axios.get('/api/v1/products?search=' + this.state.searchLabel+'&price='+this.state.price).then((response) => {
      //console.log(response)
      const state = this.state
      state.data = response.data;
      this.setState(state);

    }).catch(function(error) {
      console.log(error);
      //document.getElementById('message').innerHTML = error.response.data.message
    });

  }
  render() {
    const items = this.state.data.map((item, index) => <ArticleItem  key={index} id={item._id} to="/product" name={item.label} link={item.img} price={item.price}/>);
    return (<section class="offers">
    <div class="search">
        <input class="input" type="text" placeholder="I'm looking for..." name='searchLabel' onChange={this.onChange.bind(this)}/>
        <input class="input" type="number" placeholder="Min price" min='0' name='price' onChange={this.onChange.bind(this)}/>
        <a class="button s is-primary" onClick={this.handShearch}>Search</a>
    </div>
      <div class="columns is-multiline">
        {items}
      </div>
    </section>)
  }
}
