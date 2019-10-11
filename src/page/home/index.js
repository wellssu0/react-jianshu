import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actionCreators";
import Footer from "./components/Footer";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Download from "./components/Download";
import Writer from "./components/Writer";
import {HomeBody, Main, LeftArea, RightArea, ScrollTop } from "./style";

const Home = props => {

  //获取数据第二个参数要放一个空数组
  useEffect(() => {
    //判断contentList的大小来确定是否调用getHomeData
    props.contentList&&props.contentList.size<=0 && props.getHomeData()
  }, [])


  useEffect(() => {
    window.addEventListener("scroll",props.changeScrollTopShow)
    return ()=>{
      window.addEventListener("scroll",props.changeScrollTopShow)
    }
  }); 
  

  const handleGoTop = () => {
    //window.scrollTo(0,0)  // 无动画

    //有过渡动画
    let scrollToTop = window.setInterval(function() {
      let pos = window.pageYOffset;
      if ( pos > 0 ) {
          window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
      } else {
          window.clearInterval( scrollToTop );
      }
   }, 2); 
  }
  const { themeNight } = props
  return (
    <React.Fragment>
    <HomeBody themeNight={themeNight}>
      <Main >
        <ScrollTop className={props.scrollShow ? "show":''} onClick={ handleGoTop }>TOP</ScrollTop>
        <LeftArea>
          <a href="/">
            <img
              className="img-pic"
              src="//upload.jianshu.io/admin_banners/web_images/4732/5d0b947b56c13a3d5e96fe8fe77c66079deed975.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt="img"
            />
          </a>
          <Topic />
          <List />
        </LeftArea>
        <RightArea>
          <Recommend />
          <Download />
          <Writer />
        </RightArea>
      </Main>
      <Footer />
      </HomeBody> 
    </React.Fragment>
  );
};

const mapState = state => ({
  scrollShow:state.getIn(["home","scrollShow"]),
  contentList:state.getIn(["home","contentList"]),
  themeNight:state.getIn(["header","themeNight"])
})
const mapDispatch = dispatch => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 400){
      dispatch(actionCreators.getScrollTopShow())
    }else{
      dispatch(actionCreators.getScrollTopHidden())
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home)
