import React, { Component } from 'react'
import './index.css'

export default class MenuElement extends Component {
  render() {
    const {title, icon, active} = this.props
    return (
      <div className="list-item">
        <img src={icon} alt="logo" className="list-item__icon" style={{backgroundColor: active ? '#0f4fb2' : ''}} />
        <div className="list-item__title" style={{color: active ? '#9db6dd' : ''}}>{title}</div>
      </div>
    );
  }
}
