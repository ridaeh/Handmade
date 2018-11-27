import React from 'react'
import {render} from 'react-dom'
import {ArticleItem} from './article-item'
export class Offers extends React.Component{
  constructor(props){
        super(props)
        this.data = [
            { id:"213" ,name: "Hy", link: "http://www.pretacreer.com/2394-large_default/kit-diy-tapis-pompons.jpg",price:"13"},
            { id:"214" ,name: "Hy", link: "http://www.pretacreer.com/2394-large_default/kit-diy-tapis-pompons.jpg",price:"13"},
            { id:"215" ,name: "Hy", link: "http://www.pretacreer.com/2394-large_default/kit-diy-tapis-pompons.jpg",price:"13"},
            { id:"216" ,name: "Hy", link: "http://www.pretacreer.com/2394-large_default/kit-diy-tapis-pompons.jpg",price:"13"},
            { id:"217" ,name: "Hy", link: "http://www.pretacreer.com/2394-large_default/kit-diy-tapis-pompons.jpg",price:"13"},
            { id:"218" ,name: "Hy", link: "http://www.pretacreer.com/2394-large_default/kit-diy-tapis-pompons.jpg",price:"13"},
            { id:"219" ,name: "Hy", link: "http://www.pretacreer.com/2394-large_default/kit-diy-tapis-pompons.jpg",price:"13"},
            { id:"210" ,name: "Hy", link: "http://www.pretacreer.com/2394-large_default/kit-diy-tapis-pompons.jpg",price:"13"}
          ];

  }
  componentDidMount(){
    document.title = "Offers"
  }
  render(){
    const items=this.data.map((item,index) =>
  <ArticleItem key={index} id={item.id} name={item.name} link={item.link} price={item.price}/>);
    return (
      <section>
      <h1>TODAY DEALS</h1>
      {items}
      </section>
  );
  }
}
