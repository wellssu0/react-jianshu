import React from 'react'
import { connect } from "react-redux"

import * as actionCreators from "./../store/actionCreators"

import {
   WriterWrapper,
   WriterTitle,
   WriterItem,
   WriterHead,
   WriterMore
} from "./../style"

const Writer = (props) => {
  const {themeNight,rotate, writerList, handleChangeFocusd,handleChangeWriter,handleClosehangeWriter} = props
  return(
    <WriterWrapper themeNight={themeNight}>
      <WriterTitle themeNight={themeNight}>
        <div className="left">推荐作者</div>
        <div className="right" 
          onClick={handleChangeWriter}
          onMouseUp={handleClosehangeWriter}
        >
          <i className={rotate ? 'iconfont rotate':'iconfont'}>&#xe65a;</i>
          换一批
        </div>
      </WriterTitle>
      {
        writerList.map(item => (
          <WriterItem key={item.get("id")} themeNight={themeNight}>
            <WriterHead className="img" href={item.get("href")} imgUrl={item.get("imgUrl")} themeNight={themeNight}></WriterHead>
            <div className="content">
              <a className="anthorName" href={item.get("href")}>{item.get("author")}</a>
              <a className="focus" href="/" 
                onClick={(event)=>handleChangeFocusd(event,item)}
              >
              {item.get("focusd")? "已关注" : "+ 关注"}
              </a>
              <p className="detail">写了{item.get("write_count")}k字 · {item.get("like_count")}k喜欢</p>
            </div>
          </WriterItem>
        ))
      }
      
      <WriterMore href="#" themeNight={themeNight}>
        查看全部  >
      </WriterMore>
    
    </WriterWrapper>
  )
}
const mapState = (state) => {
  return{
    writerList:state.getIn(["home","writerList"]),
    rotate:state.getIn(["home","rotate"]),
    themeNight:state.getIn(["header","themeNight"])
  }
}
const mapDispatch = (dispatch) => {
  return{
    handleChangeFocusd(event,item){
      event.preventDefault()
      dispatch(actionCreators.getChangeFocusAction(item))
    },
    handleChangeWriter(){
      dispatch(actionCreators.getChangeWriterList())
      dispatch(actionCreators.getRotateAction())
    },
    handleClosehangeWriter(){
      dispatch(actionCreators.getCloseRotateAction())
    }
  }
}
export default React.memo(connect(mapState,mapDispatch)(Writer))