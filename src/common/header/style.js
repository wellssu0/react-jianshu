import styled from "styled-components";
import navLogoPic from "./../../statics/nav-logo.png";
import beta from "./../../statics/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png";

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background: ${props =>
    props.themeNight
      ? props.theme.night.background
      : props.theme.day.background};
  border-bottom: 1px solid ${props =>
    props.themeNight
      ? props.theme.night.borderColor
      : props.theme.day.borderColor};
`;
export const NavAll = styled.div`
  overflow: hidden;
  width: 1440px;
  margin: 0 auto;
`;
export const Logo = styled.div`
  float: left;
  width: 100px;
  height: 56px;
  background: url(${navLogoPic});
  background-size: contain;
`;

export const NavItemRight = styled.div`
  float: right;
  cursor: pointer;
  text-align: center;
  &.active {
    color: #ea6f5a;
  }
  .iconfont {
    font-size: 25px;
    line-height: 56px;
  }
`;

export const NavItemA = styled(NavItemRight)`
  color: ${props =>
    props.themeNight ? props.theme.night.color : props.theme.day.color};
  font-size: 15px;
  line-height: 56px;
  margin: 0 15px 0 10px;
`;
export const NavItemAa = styled(NavItemA)``;
export const NavItemLogin = styled(NavItemA)`
  margin: 0 12px;
  padding: 0 3px;
  color: ${props =>
    props.themeNight ? props.theme.night.color : props.theme.day.color};
`;
export const NavItemBeta = styled(NavItemA)`
  width: 57px;
  height: 25px;
  margin-top: 15px;
  background: url(${beta});
  background-size: contain;
`;
export const NavItemBtn = styled(NavItemRight)`
  font-size: 15px;
  outline: none;
  border-radius: 20px;
`;
export const NavItemWrite = styled(NavItemBtn)`
  width: 100px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: #ea6f5a;
  margin: 8px 12px 0;
  .iconfont {
    font-size: 20px;
    line-height: 40px;
    margin: 0 5px 0 0;
  }
`;
export const NavItemSignIn = styled(NavItemBtn)`
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px 5px 0 15px;
  color: #ea6f5a;
  background-color: transparent;
  border: 1px solid rgba(236, 97, 73, 0.7);
`;
export const ThemeBox = styled.div`
  z-index: -1;
  position: absolute;
  overflow: hidden;
  top: 56px;
  right: 393px;
  width: 234px;
  padding: 20px 20px 20px 24px;
  color: ${props =>
    props.themeNight ? props.theme.night.color : props.theme.day.color};
  background: ${props =>
    props.themeNight
      ? props.theme.night.background
      : props.theme.day.background};
  border-radius: 4px;
  box-shadow: ${props =>
    props.themeNight
      ? props.theme.night.borderShadow
      : props.theme.day.borderShadow};
`;

export const ThemeBefore = styled.div`
  position: absolute;
  top: 50px;
  left: 1075px;
  width: 15px;
  height: 15px;
  background-color: ${props =>
    props.themeNight
      ? props.theme.night.background
      : props.theme.day.background};
  transition: tansform;
  transform: rotate(45deg);
  box-shadow: -3px -2px 3px rgba(0, 0, 0, 0.1);
`;
export const ThemeTitle = styled.div`
  color: ${props =>
    props.themeNight ? props.theme.night.color : props.theme.day.color};
  background: ${props =>
    props.themeNight
      ? props.theme.night.background
      : props.theme.day.background};
  font-size: 18px;
  line-height: 44px;
  float: left;
  width: 110px;
  height: 44px;
`;

export const ThemeOpenBtn = styled.div`
  font-size: 14px;
  line-height: 44px;
  width: 50px;
  height: 44px;
  border: 1px solid #787878;
  border-right: none;
  float: left;
  border-top-left-radius: 21px;
  border-bottom-left-radius: 21px;
  background: ${props => (props.themeNight ? "#6dacf4" : "#fff")};
  color: ${props => (props.themeNight ? "#fff" : "#969696")};
`;
export const ThemeCloseBtn = styled.div`
  font-size: 14px;
  line-height: 44px;
  width: 50px;
  height: 44px;
  border: 1px solid #787878;
  border-left: none;
  float: left;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
  background: ${props => (props.themeNight ? "#fff" : "#6dacf4")};
  color: ${props => (props.themeNight ? "#969696" : "#fff")};
`;

export const NavMiddle = styled.div`
  box-sizing: border-box;
  width: 945px;
  margin: 0 auto;
`;
export const NavItemLeft = styled.div`
  float: left;
  color: ${props =>
    props.themeNight ? props.theme.night.color : props.theme.day.color};
  padding: 0 15px;
  font-size: 17px;
  line-height: 56px;
  text-align: center;
  cursor: pointer;
  &.home {
    padding: 0 15px 0 8px;
  }
  &.active {
    color: #ea6f5a;
  }
  &.icon {
    color: #ea6f5a;
  }
  .iconfont {
    line-height: 56px;
    font-size: 20px;
    margin: 0 5px 0 0;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .search {
    position: absolute;
    cursor: pointer;
    right: 24px;
    bottom: 13px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focusd {
      color: #fff;
      background: #777;
    }
    :hover {
      color: #b5b5b5;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  margin: 9px 20px;
  padding: 0 40px 0 15px;
  width: 240px;
  height: 38px;
  font-size: 14px;
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 19px;
  background-color: ${props =>
      props.themeNight ? props.theme.night.searchColor : props.theme.day.searchColor};
  &::placeholder {
    color: ${props =>
      props.themeNight ? props.theme.night.color : props.theme.day.color};
  }
  &.focused {
    width: 300px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 300px;
  }
  &.slide-enter-done {
    width: 300px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  top: 57px;
  left: 500px;
  width: 260px;
  padding: 15px;
  margin-left: 20px;
  box-sizing: border-box;
  background-color: ${props =>
    props.themeNight
      ? props.theme.night.background
      : props.theme.day.background};
  border-radius: 4px;
  box-shadow: ${props =>
    props.themeNight
      ? props.theme.night.borderShadow
      : props.theme.day.borderShadow};
`;

export const SearchInfoBefore = styled.div`
   position: absolute;
    top: -8px;
    left: 20px;
    display: block;
    width: 15px;
    height: 15px;
    background-color: ${props =>
    props.themeNight
      ? props.theme.night.background
      : props.theme.day.background};
    transition: tansform;
    transform: rotate(45deg);
    box-shadow: -3px -2px 3px rgba(0, 0, 0, 0.1);
`

export const SearchInfoTitle = styled.span`
  float: left;
  margin-top: 15px;
  font-size: 15px;
  color: ${props =>
    props.themeNight ? props.theme.night.color : props.theme.day.color};
`;
export const SearchInfoBtn = styled.div`
  float: right;
  position: relative;
  margin-top: 15px;
  margin-right: 15px;
  font-size: 13px;
  color: ${props =>
    props.themeNight ? props.theme.night.color : props.theme.day.color};
  cursor: pointer;
  .rotate {
    position: absolute;
    top: 0;
    left: -16px;
    width: 16px;
    height: 16px;
    display: block;
    transition: transform 0.5s ease-out;
    transform: rotate(-360deg);
    transform-origin: top;
  }
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
  margin-top: 25px;
`;
export const SearchInfoItem = styled.a`
  float: left;
  margin: 11px 15px 0 0;
  padding: 3px 8px;
  border: 1px solid #909090;
  border-radius: 5px;
  font-size: 10px;
  line-height: 12px;
  cursor: pointer;
  color: ${props =>
    props.themeNight ? props.theme.night.color : props.theme.day.color};
`;
