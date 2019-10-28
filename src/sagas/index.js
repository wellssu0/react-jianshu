import { takeEvery, all, put } from 'redux-saga/effects'
import axios from 'axios'

import * as constants from '../constants'
import * as actionCreators from '../actionCreators'


function* getHomeData (){
  try {
    const response = yield axios.get("/home")
    yield put(actionCreators.setHomeDataAction(response.data))
  } catch (error) {
    console.log(error)
  }
}
function* addListItem (){
  try {
    const response = yield axios.get("/addlist")
    yield put(actionCreators.setAddListItemAction(response.data))
  } catch (error) {
    console.log(error)
  }
}
function* getSearchInfoList (){
  try {
    const response = yield axios.get("/searchInfo")
    yield put(actionCreators.setSearchInfoList(response.data))
  } catch (error) {
    console.log(error)
  }
}
function* getChangeWriterList (action){
  try {
    const page = action.page % 4
    const response = yield axios.get(`/users?_page=${page}&_limit=5`)
    yield put(actionCreators.getChangeWriterListAction(response.data))
  } catch (error) {
    console.log(error)
  }
}
function* getDetailData (action){
  try {
    const id = action.id
    const response = yield axios.get(`/detail?id=${id}`)
    yield put(actionCreators.setDetailData(response.data))
  } catch (error) {
    console.log(error)
  }
}
function* login (action){
  try {
    const response = yield axios.get('/login?account=' + action.accout + '&password=' + action.password)
    if(response.data){
      yield put(actionCreators.changeLogin())
    }else {
      alert('登陆失败')
    }
  } catch (error) {
    console.log(error)
  }
}



function* watchGetHomeData (){
  yield takeEvery(constants.GET_HOME_DATA, getHomeData)
}
function* watchAddListItem (){
  yield takeEvery(constants.ADD_LIST_ITEM, addListItem)
}
function* watchGetSearchInfoList (){
  yield takeEvery(constants.GET_SEARCH_INFO_LIST, getSearchInfoList)
}
function* watchGetChangeWriterList (){
  yield takeEvery(constants.GET_CHANGE_DATA, getChangeWriterList)
}
function* watchGetDetailData (){
  yield takeEvery(constants.GET_DETAIL_DATA, getDetailData)
}
function* watchLogin (){
  yield takeEvery(constants.LOGIN, login)
}

export default function* rootSaga () {
  yield all([
    watchGetHomeData(),
    watchAddListItem(),
    watchGetSearchInfoList(),
    watchGetChangeWriterList(),
    watchGetDetailData(),
    watchLogin(),
  ])
}