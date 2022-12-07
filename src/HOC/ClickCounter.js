import React, { Component } from 'react'
import Encomponent from './Hoc'
class ClickCounter extends Component {
    
  render() {
    const{name,count,inc}=this.props
    return (
      <div>
      {name}
      <button onClick={inc}>Clickme {count}</button>
      </div>
    )
  }
}
export default Encomponent(ClickCounter);
