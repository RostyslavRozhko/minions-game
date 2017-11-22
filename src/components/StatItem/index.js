import React, { Component } from 'react'
import StarIconActive from '../../assets/favorite-3.png'
import StarIconPassive from '../../assets/favoriteGrey.png'
import ButtonIcon from '../../assets/btn.png'
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
    let {person: {id, name, percent, city}} = this.props
    percent = Math.round(percent)
    const percentLineWidth = percent < 200 ? Math.round(percent/2) : 100
    const {icon, style} = getProgressStyle(percent)

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
    
    return (
      <div className="stat-item__container">
        <div className="stat-item__name-section">
          <div className="stat-item__name">{name} ({city})</div>
          <div className="stat-item__star-container">
            {stars}
          </div>
        </div>
        <div className="stat-item__progress-bar-container">
          <div className="stat-item__100perc-indicator"></div>                    
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
        </div>
        <div className="stat-item__btn-container">
          <img src={ButtonIcon} alt="btn" className="stat-item_btn" />
        </div>
      </div>
    );
  }
}
