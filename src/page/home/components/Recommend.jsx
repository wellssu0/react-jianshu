import React from 'react'
import { connect } from "react-redux"
import {
  RecommendWrapper,
  RecommendItem,
}from "./../style"

const Recommend = (props) => {
  const { recommendList } = props
  return(
    <RecommendWrapper>
    {
      recommendList.map(item => (
        <RecommendItem key={item.get("id")} href={item.get("href")} imgUrl={item.get("imgUrl")}> 
        </RecommendItem>
      ))
    }
    </RecommendWrapper>
  )
}
const mapStateToProps = (state) => {
  return{
    recommendList:state.getIn(["home","recommendList"])
  }
}

export default React.memo(connect(mapStateToProps,null)(Recommend))