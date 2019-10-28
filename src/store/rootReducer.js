import { combineReducers } from 'redux-immutable'
import  headerReducer  from './headerReducer'
import  homeReducer  from './homeReducer'
import  detailReducer  from './detailReducer'
import  loginReducer  from './loginReducer'

const rootReducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default rootReducer
