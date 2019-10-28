import React from 'react'
import { connect } from "react-redux"

import { TopicList, TopicItem, } from "../style"

const Topic = (props) => {
  const { topicList ,themeNight } = props
  
  return (
    <TopicList themeNight={themeNight}>
      {
        topicList.map(item=>(
          <TopicItem key={item.get("id")} themeNight={themeNight}>
            <img className="img" src={item.get("imgSrc")} alt="63" />
            <a className="link" href={item.get("href")} >{item.get("title")}</a>
          </TopicItem>
        ))
      }
      <a className="more" href="/">更多热门专题</a>
    </TopicList>
    
  )
}
const mapStateToProps = (state) => {
  return{
    topicList : state.getIn(["home","topicList"]),
    themeNight:state.getIn(["header","themeNight"])
  }
}

export default React.memo(connect(mapStateToProps,null)(Topic))