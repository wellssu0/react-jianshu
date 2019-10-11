import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  themeBtn:false,
  themeNight:false,
  showAnimation:false,
  focusd:false,
  searchInfoList:[],
  page:0,
  mouseIn:false,
})
 const reducer = (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.SEARCH_FOCUS:
      return state.set("focusd",true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focusd',false)
    case actionTypes.SEARCH_LIST:
      return state.set('searchInfoList',action.data)
    case actionTypes.SET_PAGE:
      return state.set('page',action.page)
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn',true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn',false)
    case actionTypes.SWITCH_PAGE:
      return state.set('page',action.page)
    case actionTypes.OPEN_ROTATE:
      return state.set('showAnimation',true)
    case actionTypes.CLOSE_ROTATE:
      return state.set('showAnimation',false)
    case actionTypes.BLACK_THEME:
      return state.set('themeNight',true)
    case actionTypes.WHITE_THEME:
      return state.set('themeNight',false)
    case actionTypes.TOGGLE_THEME_BOX:
      return state.set('themeBtn',!state.get("themeBtn"))
    default:
      return state
  }
}
export default reducer