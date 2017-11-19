import React, { Component } from 'react'
import StatItem from '../StatItem'
import Navbar from './Navbar'
import InfiniteScroll from '../InfiniteScroll'
import {connect} from 'react-redux'
import {fetchLeaders} from '../../actions'
import './index.css'

class Salesmen extends Component {
  
  componentDidMount () {
    this.props.dispatch(fetchLeaders())
  }

  render() {
    const {entities, result, isLoading, currPage, maxPage, dispatch} = this.props
    return (
      <div className="main-container__outer">
        <div className="main-container__inner">
          <Navbar />
          <div className="salesmen-list">
             <InfiniteScroll
              throttle={100}
              threshold={300}
              isLoading={isLoading}
              onLoadMore={() => dispatch(fetchLeaders())}
              hasMore={maxPage >= currPage}
            >
            {result.map(id => <StatItem person={entities[id]} key={id} />)}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    leaders: {
      isLoading,
      entities,
      currPage,
      result,
      maxPage
    }
  } = state

  return {
    isLoading,
    entities,
    result,
    currPage,
    maxPage
  }
}

export default connect(mapStateToProps)(Salesmen)