import * as constants from '../constants'
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
 const headerReducer = (state = defaultState, action) => {
  switch(action.type){
    case constants.SEARCH_FOCUS:
      return state.set("focusd",true)
    case constants.SEARCH_BLUR:
      return state.set('focusd',false)
    case constants.SET_SEARCH_INFO_LIST:
      return state.set('searchInfoList',fromJS(action.data))
    case constants.SET_PAGE:
      return state.set('page',action.page)
    case constants.MOUSE_ENTER:
      return state.set('mouseIn',true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn',false)
    case constants.SWITCH_PAGE:
      return state.set('page',action.page)
    case constants.SEARCH_OPEN_ROTATE:
      return state.set('showAnimation',true)
    case constants.SEARCH_CLOSE_ROTATE:
      return state.set('showAnimation',false)
    case constants.BLACK_THEME:
      return state.set('themeNight',true)
    case constants.WHITE_THEME:
      return state.set('themeNight',false)
    case constants.TOGGLE_THEME_BOX:
      return state.set('themeBtn',!state.get("themeBtn"))
    default:
      return state
  }
}
export default headerReducer