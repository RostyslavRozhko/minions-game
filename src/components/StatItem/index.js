import React, { Component } from 'react'
import StarIconActive from '../../assets/favorite-3.png'
import StarIconPassive from '../../assets/favoriteGrey.png'
import {getProgressStyle} from '../../utils/getProgressStyle'
import delay from 'lodash.delay'
import './index.css'

export default class StatItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      in: false
    }
  }

  componentDidMount () {
    delay(() => this.setState(() => ({in: true})), 200)
  }
  
  render() {
    const {person: {id, name, city}, fields} = this.props
    let {person: {percent}} = this.props
    percent = Math.round(percent)

    const getPercentCoeff = () => {
      switch(true) {
        case percent <= 300: return Math.round(percent/fields)
        case percent > 300 && percent < 1000: return 75 + (25-(1000-percent)*0.035)
        default: return 100 

      }
    }
    const percentLineWidth = getPercentCoeff()
    const {icon, style} = getProgressStyle(percent, fields)

    let stars = []
    const starsCount = (name.length + id) % 4
    for (let i = 0; i < 3; i++) {
      if(i < starsCount) {
        stars.push(<img key={i} src={StarIconActive} alt="star" className="stat-item__star" />)
      } else {
        stars.push(<div key={i} className="tooltip">
                      <img src={StarIconPassive} alt="star" className="stat-item__star" />
                      <div className="tooltip-text">Sales exam needs to passed</div>
                    </div>)
      }
    }

    let perc = []
    for (let i = 1; i < fields; i++){
      perc.push(<div className="stat-item__100perc-indicator" key={i} style={{left: `${100/fields*i}%`}}>
        <div className="stat-item__100perc-indicator-number" style={{fontWeight: i===1 && 'bold'}}>{i*100}%</div>
      </div>)
    }
    
    return (
      <div className="stat-item__container">
        <div className="stat-item__progress-bar-container">
          <div className="stat-item__line__grey" ></div>          
          <div className="stat-item__progress-bar" style={{
              width: this.state.in && `${percentLineWidth}%`   
            }}>
          <img src={icon} alt="minion" className="stat-item__minion-icon" style={{
                right: style.right,
                opacity: this.state.in && 1
              }} />
          <div className="stat-item__line" style={{
              style,
              backgroundColor: style.backgroundColor
            }}></div>
            <div className="stat-item__indicator" style={{
              ...style,
              opacity: this.state.in && 1
            }}>{percent}%</div>
          </div>
          <div className="stat-item__100perc-indicator" style={{left: 0}}>
            <div className="stat-item__100perc-indicator-number" style={{left: -5}}>0%</div>
          </div>
          {perc}    
          <div className="stat-item__line__dark-green" style={{
            width: this.state.in && percent > 100 ? `${100/fields}%` : 0
            }}></div>                
        </div>
        <div className="stat-item__name-section">
          <div className="stat-item__star-container">
            {stars}
          </div>
          <div className="stat-item__name">{name}</div>
          <div className="stat-item__name__nobold">({city})</div>  
        </div>
      </div>
    );
  }
}
