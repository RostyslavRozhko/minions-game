import { combineReducers } from 'redux'
import {
  INVALIDATE_LEADERS,
  REQUEST_LEADERS,
  RECEIVE_LEADERS,
  SORT_LEADERS,
  SEARCH_LEADERS,
  UPDATE_LEADER
} from '../actions'

const leaders = (state = {
  isLoading: false,
  error: false,
  entities: {},
  result: [],
  currPage: 1
}, action) => {
  switch (action.type) {
    case INVALIDATE_LEADERS:
      return {
        ...state,
        error: true
      }
    case REQUEST_LEADERS:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case RECEIVE_LEADERS:
      return {
        ...state,
        isLoading: false,
        error: false,
        entities: action.entities,
        result: action.result,
        currPage: action.currPage,
        maxPage: action.maxPage
      }
    case UPDATE_LEADER:
      let stateEntity = state.entities[action.id]
      if (stateEntity) {
        stateEntity.percent = action.percent
      }
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.id]: stateEntity
        }
      }
    default:
      return state
  }
}

const filters = (state = {
  query: '',
  sort: true
}, action) => {
  switch (action.type) {
    case SORT_LEADERS:
      return {
        ...state,
        sort: action.sort
      }
    case SEARCH_LEADERS:
      return {
        ...state,
        query: action.query
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  leaders,
  filters
})

export default rootReducer