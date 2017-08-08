import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuItem extends Component {
  render () {
    return (
      <NavLink
        className='item'
        activeClassName='active'
        exact={this.props.isExact}
        to={this.props.linkTo}
        key={this.props.i}
      >
        {' '}{this.props.text}
      </NavLink>
    )
  }
}

export default MenuItem
