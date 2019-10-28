import { fromJS } from 'immutable'

import * as constants from "../constants"

const defaultState = fromJS({
  scrollShow:false,
  rotate:false,
  footerLink:[],
  topicList:[],
  contentList:[],
  recommendList:[],
  writerList:[],
  isLogIn:false,
  page:1,
  })
  
const homeReducer = (state = defaultState,action) => {
  switch(action.type){
    case constants.SET_HOME_DATA :
      return state.merge({
        footerLink:fromJS(action.data.footerLink),
        topicList:fromJS(action.data.topicList),
        contentList:fromJS(action.data.contentList),
        recommendList:fromJS(action.data.recommendList),
        writerList:fromJS(action.data.writerList)
      })
    case constants.CHANGE_FOCUS :
      return state.setIn(["writerList" , action.item.get("id")-1,"focusd"],!action.item.get('focusd'))
    case constants.WRITER_OPEN_ROTATE :
      return state.set("rotate",true)
    case constants.WRITER_CLOSE_ROTATE :
      return state.set("rotate",false)
    case constants.CHANGE_WRITER_LIST :
      return state.merge({
        writerList:fromJS(action.data),
        page:fromJS(state.get('page')+1)
      })
    case constants.SET_ADD_LIST_ITEM :
      return state.set("contentList",[...state.get("contentList"),...fromJS(action.data)])
    case constants.SCROLL_TOP_SHOW :
      return state.set("scrollShow",true)
    case constants.SCROLL_TOP_HIDDEN :
      return state.set("scrollShow",false)
    default:
      return state
  }
    
}
export default homeReducer