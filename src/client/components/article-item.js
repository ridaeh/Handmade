import React from 'react'
import {render} from 'react-dom'
import '../styles/article-item.sass'
export class ArticleItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<article class="card">
      <a href={"/article/" + this.props.id}>

        <div class="card-image">
          <figure class="image is-4by3">
            <img src={this.props.link} alt={this.props.name}/>
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <h3>{this.props.name}</h3>
            <h4>Price :{this.props.price}$</h4>
          </div>
        </div>
      </a>
    </article>);
  }
}
