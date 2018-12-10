'use strict'
import React from "react"
import {render} from "react-dom"
import {Route, BrowserRouter} from 'react-router-dom'
import {Root} from './components/root'
import '../../public/images/favicon.ico'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<BrowserRouter>
      <Route path="/" component={Root}/>
    </BrowserRouter>);
  }
}

render(<App/>, document.getElementById("root"))
