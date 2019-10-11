import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { actionsCreators } from './store'
import {
  SearchInfo,
  SearchInfoTitle,
  HeaderWrapper,
  SearchInfoBtn,
  SearchInfoBefore,
  SearchInfoList,
  SearchInfoItem,
  Logo,
  NavItemAa,
  NavItemLogin,
  NavItemBeta,
  NavItemSignIn,
  NavItemWrite,
  NavItemLeft,
  NavAll,
  NavMiddle,
  NavSearch,
  SearchWrapper,
  ThemeBox,
  ThemeBefore,
  ThemeTitle,
  ThemeOpenBtn,
  ThemeCloseBtn
} from './style'

class Header extends React.PureComponent {
  render() {
    const { focusd, page, mouseIn, showAnimation, themeBtn, themeNight,searchInfoList, handleFocus, handleBlur, mouseLeave, mouseEnter, switchPage, closeRotateAnimotion,handleBlack,handleWhite,handleToggleShowThemeBox } = this.props
    const newPage = page % 5
    const newList = searchInfoList.slice(newPage * 10, (newPage + 1) * 10)
    return (
      <HeaderWrapper themeNight={themeNight} >
        <NavAll>
          <Link to="/"><Logo /></Link>
          <NavItemWrite><i className="iconfont">&#xe615;</i>写文章</NavItemWrite>
          <NavItemSignIn>注册</NavItemSignIn>
          <NavItemLogin themeNight={themeNight}>登录</NavItemLogin>
          <NavItemBeta></NavItemBeta>
          <NavItemAa 
            onClick={handleToggleShowThemeBox}
            themeNight={themeNight}>
            <i className="iconfont">&#xe636;</i>
            {themeBtn &&
              <React.Fragment>
              <ThemeBefore themeNight={themeNight}></ThemeBefore>
              <ThemeBox themeNight={themeNight}>
                <ThemeTitle themeNight={themeNight}>夜间模式</ThemeTitle>
                <ThemeOpenBtn themeNight={themeNight} onClick={handleBlack}>开</ThemeOpenBtn>
                <ThemeCloseBtn themeNight={themeNight} onClick={handleWhite}>关</ThemeCloseBtn>
              </ThemeBox>
              </React.Fragment>
            }
          </NavItemAa>
          
          
          <NavMiddle>
            <Link to="/">
              <NavItemLeft className="home active"><i className="iconfont">&#xe786;</i>首页</NavItemLeft>
            </Link>
            <NavItemLeft themeNight={themeNight}><i className="iconfont">&#xe63b;</i>下载App</NavItemLeft>
            
            <SearchWrapper themeNight={themeNight}>
              <CSSTransition
                in={focusd}
                timeout={200}
                classNames='slide'
              >
                <NavSearch
                  themeNight={themeNight}
                  className={focusd ? 'focusd' : ''}
                  onFocus={() => handleFocus(searchInfoList)}
                  onBlur={handleBlur}
                />
              </CSSTransition>
              <i className={focusd ? 'focusd iconfont search' : 'iconfont search'}>&#xe658;</i>
              
            </SearchWrapper>
            {(focusd || mouseIn) &&
              <SearchInfo themeNight={themeNight}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <SearchInfoBefore themeNight={themeNight}></SearchInfoBefore>
                <SearchInfoTitle themeNight={themeNight}>热门搜索</SearchInfoTitle>
                <SearchInfoBtn 
                themeNight={themeNight}
                onClick={() => switchPage(page + 1)}
                onMouseUp={closeRotateAnimotion}>
                  <i className={showAnimation?'iconfont rotate' :'iconfont'}>&#xe65a;</i>
                  <span className="span">换一批</span>
                </SearchInfoBtn>
                <SearchInfoList>
                  {
                    newList.map((item, index) => (
                      <SearchInfoItem themeNight={themeNight} key={index}>{item}</SearchInfoItem>
                    ))
                  }
                </SearchInfoList>
              </SearchInfo>
            }
          </NavMiddle>
        </NavAll>
        
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focusd: state.getIn(['header', 'focusd']),
    searchInfoList: state.getIn(['header', 'searchInfoList']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    showAnimation: state.getIn(['header', 'showAnimation']),
    themeBtn: state.getIn(['header', 'themeBtn']),
    themeNight: state.getIn(['header', 'themeNight'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(searchInfoList) {
      (searchInfoList.size === 0) && dispatch(actionsCreators.getSearchInfoList())
      dispatch(actionsCreators.getFocusAction())
    },
    handleBlur() {
      dispatch(actionsCreators.getBlurAction())
    },
    mouseEnter() {
      dispatch(actionsCreators.getMouseEnterAction())
    },
    mouseLeave() {
      dispatch(actionsCreators.getMouseLeaveAction())
    },
    switchPage(page) {
      dispatch(actionsCreators.getSwitchPageAction(page))
      dispatch(actionsCreators.getOpenRotateAction())
    },
    closeRotateAnimotion(){
      dispatch(actionsCreators.getCloseRotateAction())
    },
    handleBlack(){
      dispatch(actionsCreators.getBlackThemeAction())
    },
    handleWhite(){
      dispatch(actionsCreators.getWhiteThemeAction())
    },
    handleToggleShowThemeBox(){
      dispatch(actionsCreators.getToggleShowThemeBoAction())
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)