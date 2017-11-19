import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import MenuElement from './MenuElement'
import ChartIcon from '../../assets/profit-chart.png'
import BarChartIcon from '../../assets/bar-chart-1.png'
import LogoutIcon from '../../assets/logout-1.png'
import './index.css'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="list-menu-containter">
        <NavLink to="/salesmen">
          <MenuElement title="Minion Rush" icon={ChartIcon} />
        </NavLink>
        <NavLink to="/overview">
          <MenuElement title="Generel Overview" icon={BarChartIcon} />
        </NavLink>

        <MenuElement title="Logout" icon={LogoutIcon} />
      </div>
    );
  }
}
