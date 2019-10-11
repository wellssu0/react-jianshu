import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
import axios from 'axios'

const getSearchList =(data) =>({
  type: actionTypes.SEARCH_LIST,
  data:fromJS(data),
})

export const getFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
})
export const getBlurAction =() => ({
  type: actionTypes.SEARCH_BLUR
})
export const getSwitchList= (page) =>({
  type:actionTypes.SET_PAGE,
  page
})
export const getMouseEnterAction = () =>({
  type:actionTypes.MOUSE_ENTER
})
export const getMouseLeaveAction = () =>({
  type:actionTypes.MOUSE_LEAVE
})
export const getSwitchPageAction = (page) =>({
  type:actionTypes.SWITCH_PAGE,
  page
})
export const getOpenRotateAction = () =>({
  type:actionTypes.OPEN_ROTATE
})
export const getCloseRotateAction = () =>({
  type:actionTypes.CLOSE_ROTATE
})
export const getBlackThemeAction = () =>({
  type:actionTypes.BLACK_THEME
})
export const getWhiteThemeAction = () =>({
  type:actionTypes.WHITE_THEME
})
export const getToggleShowThemeBoAction = () =>({
  type:actionTypes.TOGGLE_THEME_BOX
})


export const getSearchInfoList = () => {
  return (dispatch) => {
    axios.get('/api/searchInfoList.json').then((res)=>{
      const listData = res.data
      dispatch(getSearchList(listData.data))
    }).catch(()=>{
      console.log('请求数据出错')
    })
  }
}