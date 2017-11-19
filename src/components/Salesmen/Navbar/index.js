import React, { Component } from 'react'
import FilterIcon from '../../../assets/funnel.png'
import CalendarIcon from '../../../assets/weekly-calendar.png'
import SearchIcon from '../../../assets/search-1.png'
import {fetchLeaders, sortLeaders, searchLeaders} from '../../../actions'
import {connect} from 'react-redux'
import './index.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: false,
      query: ''
    }
  }

  componentDidMount () {
    const {sort, query} = this.props
    this.setState(() => ({
      sort,
      query
    }))
  }

  onSort = () => {
    const {dispatch} = this.props
    this.setState(() => ({
      sort: !this.state.sort
    }), () => {
      dispatch(sortLeaders(this.state.sort))
      dispatch(fetchLeaders(true))
    })
  }

  onSearch = (evt) => {
    evt.persist()
    const {dispatch} = this.props
    this.setState(() => ({
      query: evt.target.value
    }), () => {
      dispatch(searchLeaders(this.state.query))
      dispatch(fetchLeaders(true))
    })
  }

  render() {
    return (
      <div className="salesmen-navbar">
        <div className="salesmen-navbar__title">Salesmen stats</div>
        <div className="salesmen-navbar__btn-group">
          <div className="salesmen-navbar__btn" style={{backgroundColor: this.state.sort ? '#d8d4d4' : ''}} onClick={this.onSort} >
            <img src={FilterIcon} alt="filter" className="salesmen-navbar__btn-icon" />
          </div>
          <div className="salesmen-navbar__btn">
            <img src={CalendarIcon} alt="filter" className="salesmen-navbar__btn-icon" />
          </div>
          <div className="salesmen-navbar__input-container">
            <img src={SearchIcon} alt="filter" className="salesmen-navbar__btn-icon salesmen-navbar__input-icon" />
            <input type="search" 
              placeholder="Search by name" 
              className="salesmen-navbar__input" 
              value={this.state.query} 
              onChange={(e) => this.onSearch(e)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    filters: {
      query,
      sort
    },
    leaders: {
      entities
    }
  } = state

  return {
    entities,
    query,
    sort
  }
}

export default connect(mapStateToProps)(Navbar)