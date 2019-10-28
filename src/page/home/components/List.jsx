import React from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import * as actionCreators from "../../../actionCreators"
import { ListList, ListItem, ListMoreItem } from './../style'

const List = (props) => {
  const { contentList, handleAddListItem ,themeNight} = props
  
  return(
    <ListList themeNight={themeNight}>
      {
        contentList.map((item,index)=>(
          <ListItem key={index} themeNight={themeNight}>
            <Link to={`/detail/${item.get("id")}`}>
              {item.get("imgSrc") !== '' &&
                <div className="imgA" href={item.get("detail_link")}>
                  <img className="img" src={item.get("imgSrc")} alt=""/>
                </div>
              }
            </Link>    
            
              <div className="content">

                <Link to={`/detail/${item.get("id")}`} className="title">
                  {item.get("title")}
                </Link>

                <p className="brief">{item.get("brief")}</p>

                <div className="bar">

                  <span className="diamond pr">
                    <i className="iconfont">&#xe60d;</i>{item.get("diamond_count")}
                  </span>
                  <a href={item.get("author_link")} className="a pr" target="_blank" rel="noopener noreferrer">
                    {item.get("author_name")}
                  </a>

                  <Link to={`/detail/${item.get("id")}`} className="a pr">
                    <i className="iconfont">&#xe627;</i>{item.get("comment_count")}
                  </Link>


                  <span className="pr">
                    <i className="iconfont">&#xe60c;</i>{item.get("like_count")}
                  </span>
                </div>
              </div>
            
          </ListItem>
        ))
      }
      <ListMoreItem onClick={handleAddListItem}>阅读更多</ListMoreItem>
    </ListList>
  )
}
const mapStateToProps = (state) => {
  return {
    contentList : state.getIn(["home","contentList"]),
    themeNight:state.getIn(["header","themeNight"])
  }
}

const mapDispatch = (dispatch) => {
  return{
    handleAddListItem(){
      dispatch(actionCreators.getAddListItem())
    }
  }
}

export default React.memo(connect (mapStateToProps,mapDispatch)(List))