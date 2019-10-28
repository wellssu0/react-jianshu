import React from 'react'
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'

import * as actionCreators from "../../../actionCreators"
import {
   WriterWrapper,
   WriterTitle,
   WriterItem,
   WriterHead,
   WriterMore
} from "./../style"

const Writer = (props) => {
  const {themeNight, rotate,isLogIn, writerList, handleChangeFocusd, handleChangeWriter,handleClosehangeWriter, page} = props
  let history = useHistory()
  return(
    <WriterWrapper themeNight={themeNight}>
      <WriterTitle themeNight={themeNight}>
        <div className="left">推荐作者</div>
        <div className="right" 
          onClick={()=>handleChangeWriter(page)}
          onMouseUp={handleClosehangeWriter}
        >
          <i className={rotate ? 'iconfont rotate':'iconfont'}>&#xe65a;</i>
          换一批
        </div>
      </WriterTitle>
      {
        writerList.map(item => (
          <WriterItem key={item.get("id")} themeNight={themeNight}>
            <WriterHead className="img" href={item.get("href")} imgUrl={item.get("avatar_source")} themeNight={themeNight}></WriterHead>
            <div className="content">
              <a className="anthorName" href={item.get("href")}>{item.get("nickname")}</a>
              <a className="focus" href="/" 
                onClick={(event)=>handleChangeFocusd(event,item,isLogIn,history)}
              >
              {item.get("is_following_user")? "已关注" : "+ 关注"}
              </a>
              <p className="detail">写了{(item.get("total_wordage")/1000).toFixed(1)}k字 · {(item.get("total_likes_count")/1000).toFixed(1)}k喜欢</p>
            </div>
          </WriterItem>
        ))
      }
      
      <WriterMore href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users" target='_blank'  themeNight={themeNight}>
        查看全部  >
      </WriterMore>
    
    </WriterWrapper>
  )
}
const mapState = (state) => {
  return{
    writerList:state.getIn(["home","writerList"]),
    rotate:state.getIn(["home","rotate"]),
    themeNight:state.getIn(["header","themeNight"]),
    page:state.getIn(["home","page"]),
    isLogin: state.getIn(['login', 'login'])
  }
}
const mapDispatch = (dispatch) => {
  return{
    handleChangeFocusd(event,item,isLogIn,history){
      if(isLogIn){
        history.push('/')
      }
      // event.preventDefault()
      // dispatch(actionCreators.getChangeFocusAction(item))
    },
    handleChangeWriter(page){
      dispatch(actionCreators.getChangeWriterList(page))
      dispatch(actionCreators.getWriterOpenRotateAction())
    },
    handleClosehangeWriter(){
      dispatch(actionCreators.getWriterCloseRotateAction())
    }
  }
}
export default React.memo(connect(mapState,mapDispatch)(Writer))