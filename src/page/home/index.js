import React, { memo,useEffect } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../actionCreators";
import Footer from './components/Footer.jsx'
import Carousel from './components/Carousel'
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Download from "./components/Download";
import Writer from "./components/Writer";
import ScrollTop from "./components/ScrollTop";
import {HomeBody, Main, LeftArea, RightArea } from "./style";

const Home = props => {

  //获取数据第二个参数要放一个空数组
  useEffect(() => {
    //判断contentList的大小来确定是否调用getHomeData
    props.contentList&&props.contentList.size<=0 && props.getHomeData()
  }, [])

  const { themeNight } = props
  return (
    <React.Fragment>
    <HomeBody themeNight={themeNight}>
      <Main >
        <ScrollTop />
        <LeftArea>
          <Carousel/>
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
  contentList:state.getIn(["home","contentList"]),
  themeNight:state.getIn(["header","themeNight"])
})
const mapDispatch = dispatch => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData());
  },
});

export default memo(connect(mapState,mapDispatch)(Home))
