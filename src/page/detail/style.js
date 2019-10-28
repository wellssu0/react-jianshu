import styled from 'styled-components'

export const DetailBody = styled.div`
  z-index:0;
  width: 100%;
  background:${props =>
    props.themeNight
      ? props.theme.night.background
      : props.theme.day.background};
`
export const Main = styled.div`
  overflow:hidden;
  margin:0 auto;
  padding: 56px 0 0 0;
  width: 960px;
`
export const LeftArea = styled.div`
  float: left;
  width: 625px;
  margin-left:15px;
  padding-top:30px;
  box-sizing: border-box;
`
export const Header = styled.div`
	margin: 50px 0 20px 0;
	line-height: 44px;
	font-size: 34px;
	color: #333;
	font-weight: bold;
`

export const Content = styled.div`
	color: #2f2f2f;
	img {
		width: 100%;
	}
	p {
		margin: 25px 0;
		font-size: 16px;
		line-height: 30px;
	}
	b {
		font-weight: bold;
	}
`
export const RightArea = styled.div`
  float: right;
  width: 280px;
  padding-top:27px;
`

