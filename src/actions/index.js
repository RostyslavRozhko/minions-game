import normalizeData from '../utils/normalize'

export const RECEIVE_LEADERS = 'RECEIVE_LEADERS'
export const REQUEST_LEADERS = 'REQUEST_POSTS'
export const INVALIDATE_LEADERS = 'INVALIDATE_LEADERS'
export const UPDATE_LEADER = 'UPDATE_LEADER'

export const SORT_LEADERS = 'SORT_ITEMS'
export const SEARCH_LEADERS = 'SEARCH_ITEMS'

export const sortLeaders = (sort) => ({
  type: SORT_LEADERS,
  sort
})

export const searchLeaders = (query) => ({
  type: SEARCH_LEADERS,
  query
})

export const invalidateReddit = () => ({
  type: INVALIDATE_LEADERS,
})

export const requestLeaders = () => ({
  type: REQUEST_LEADERS,
})

export const updateLeader = ({id, percent}) => ({
  type: UPDATE_LEADER,
  id,
  percent
})

export const receiveLeaders = ({maxPage, entities, result, currPage}) => {
  return {
    type: RECEIVE_LEADERS,
    maxPage,
    entities,
    result,
    currPage
  }
}

export const fetchLeaders = (nil) => (dispatch, getState) => {
  dispatch(requestLeaders())
  const {query, sort} = getState().filters
  const {entities, result} = getState().leaders
  let {currPage} = getState().leaders
  currPage = nil ? 1 : currPage
  const queries = `page=${currPage}&${sort ? 'sort=true' : ''}&${query.length > 0 ? 'q='+query : ''}`
  
  fetch(`https://minions-game.herokuapp.com/api/leaders?${queries}`)
    .then(res => res.json())
    .then(res => {
      const normalized = normalizeData(res.result)
      dispatch(receiveLeaders({
        entities: nil ? normalized.entities.leaders : {...entities, ...normalized.entities.leaders},
        result: nil ? normalized.result : [...result, ...normalized.result],
        maxPage: res.pages,
        currPage: currPage + 1
      }))
  })
}