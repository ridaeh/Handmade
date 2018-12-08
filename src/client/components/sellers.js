import React from "react"
import {render} from "react-dom"

export class Sellers extends React.Component{
  constructor(props) {
  super(props)
  }
  componentDidMount(){
    document.title = "Selles"
  }
  render(){
    return (
      <h1>Sellers</h1>
    );
  }
}
