import React from 'react'
import {render} from 'react-dom'
import '../styles/article-item.sass'
export class ArticleItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<article class="card column is-one-quarter">
      <a href={"/article/" + this.props.id}>

        <div class="card-image">
          <figure class="image is-1by1">
            <img src={this.props.link} alt={this.props.name}/>
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <h3 class="title is-4">{this.props.name}</h3>
            <h4>Price :{this.props.price}$</h4>
          </div>
        </div>
      </a>
    </article>);
  }
}
