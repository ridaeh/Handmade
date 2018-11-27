import React from 'react'
import {render} from 'react-dom'
import '../styles/article-item.sass'
export class ArticleItem extends React.Component{
  constructor(props) {
        super(props)
    }
  render(){
    return (
      <article>
      <a href={"/article/"+this.props.id}>
      <h3>{this.props.name}</h3>
      <img src={this.props.link} alt={this.props.name}/>
      <h4>Price :{this.props.price}$</h4>
      </a>
      </article>
    );
  }
}
