import React from 'react'
import {render} from 'react-dom'
import {ArticleItem} from './article-item'
export class Offers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    document.title = "Offers"
    this.fetchData()
  }
  fetchData() {
    fetch('/api/v1/products').then(response => response.json()).then(parsedJSON => {
      this.setState({data: parsedJSON})
    }).catch(error => console.log('parsing failed', error))

  }
  render() {
    const items = this.state.data.map((item, index) => <ArticleItem class="column " key={index} id={item._id} name={item.label} link={item.img} price={item.price}/>);
    return (<section>
      <div class="columns is-one-quarter">
        {items}
      </div>
    </section>)
  }
}
