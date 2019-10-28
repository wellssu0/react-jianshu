import React, { memo,useEffect } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../actionCreators";
import { Scroll } from '../style'

const ScrollTop = props => {

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
  return(
    <Scroll className={props.scrollShow ? "show":''} onClick={ handleGoTop }>TOP</Scroll>
  )
}
const mapState = state => ({
  scrollShow:state.getIn(["home","scrollShow"]),
  themeNight:state.getIn(["header","themeNight"])
})
const mapDispatch = dispatch => ({
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 400){
      dispatch(actionCreators.getScrollTopShow())
    }else{
      dispatch(actionCreators.getScrollTopHidden())
    }
  }
});

export default memo(connect(mapState,mapDispatch)(ScrollTop))
