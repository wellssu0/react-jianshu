import { fromJS } from 'immutable'
import * as constants from '../constants'

const defaultState = fromJS({
  scrollShow:false,
  title:null,
  content:null,
})

const detailReducer = (state = defaultState , action) => {
  switch (action.type) {
    case constants.SET_DETAIL_DATA:
      return state.merge({
        title: fromJS(action.data[0].title),
        content: fromJS(action.data[0].content)
      })
    default:
      return state
  }
}


export default detailReducer