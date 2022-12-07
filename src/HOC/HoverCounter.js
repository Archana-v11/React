import React, { Component } from 'react'
import Encomponent from './Hoc'

class HoverCounter extends Component {
    
  render() {
    const{name,count,inc}=this.props
    return (
      <div>
      {name}
      <h1 onMouseEnter={inc}>Hoverme {count}</h1>
      </div>
    )
  }
}
export default Encomponent(HoverCounter)
