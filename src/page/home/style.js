import styled from 'styled-components'

export const HomeBody = styled.div`
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
export const ViewBox = styled.div`
  float: left;
  width: 625px;
  box-sizing: border-box;
  .img-pic{
    width:100%;
    height:100%;
    border-radius:4px;
  }
`

export const RightArea = styled.div`
  float: right;
  width: 280px;
  padding-top:27px;
`
export const Scroll = styled.div`
  position:fixed;
  opacity:0;
  visibility:hidden;
  top:85%;
  left:90%;
  color:${props =>
    props.themeNight
      ? props.theme.night.titleColor
      : props.theme.day.titleColor};
  background:${props =>
    props.themeNight
      ? props.theme.night.TopicBackground
      : props.theme.day.TopicBackground};
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius:6px;
  line-height:50px;
  text-align: center;
  &.show{
    opacity:1;
    visibility:visible;
  }
`
export const TopicList = styled.div`
  overflow:hidden;
  width:100%;
  padding: 20px 0 10px 0;
  border-bottom:1px solid ${props =>
    props.themeNight
      ? props.theme.night.borderColor
      : props.theme.day.borderColor};
  .more{
    float:left;
    line-height:32px;
    font-size:14px;
    color:#000;
  }
`
export const TopicItem = styled.div`
    float: left;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0 27px 15px 1px;
    height: 32px;
    border-radius: 4px;

  border:1px solid ${props =>
    props.themeNight
      ? props.theme.night.borderColor
      : props.theme.day.borderColor};
  background:${props =>
    props.themeNight
      ? props.theme.night.TopicBackground
      : props.theme.day.TopicBackground};
  .img{
    width:38px;
    height:100%;
  }
  .link{

    vertical-align:top;
    padding:0 10px;
    text-decoration:none;
    line-height:32px;
    font-size:14px;
    color:#000;
  }
  .link:hover{
    color:#969696;
  }
  
`
export const ListList = styled.div`
  width:625px;
`
export const ListItem = styled.div`
  overflow:hidden;
  padding:25px 0;
  border-bottom:1px solid ${props =>
    props.themeNight
      ? props.theme.night.borderColor
      : props.theme.day.borderColor};
  .imgA{
    margin-top:15px;
    margin-left:15px;
    float:right;
  }
  .img{
    display:block;
    width:150px;
    height:100px;
    border-radius:4px;
    border:1px solid #f0f0f0;
  }
  .content{
    padding-top:20px;
    width:100%;
  }
  .title{
    display:block;
    text-decoration:none;
    font:bold 18px/20px '-apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif';
    margin:-7px 0 4px;
    color:#333;
  }
  .title:hover{
    text-decoration:underline;
  }
  .brief{
    color:#999;
    margin:10px 0;
    font-size:13px;
    line-height:25px;
  }
  .bar{
    height:20px;
    overflow:hidden;
    color:#b4b4b4;
    font-size:12px;
    line-height:20px;
    .iconfont{
      font-size:12px;
      margin-right:3px;
    }
    .a{
      color:#b4b4b4;
      text-decoration:none;
    }
    .a:hover{
      color:#787878;
    }
    .pr{
      margin-right:15px;
    }
  }
  .diamond{
    color:#ea6f5a;
  }
`
export const ListMoreItem = styled.div`
  width:625px;
  height: 40px;
  font-size:15px;
  text-align:center;
  line-height:20px;
  box-sizing:border-box;
  cursor: pointer;
  /* border:1px solid #a5a5a5 ; */
  border-radius: 20px;
  background:#a5a5a5;
  color:#fff;
  margin: 30px 0 60px;
  padding: 10px 15px;
  :hover {
    background:#787878;
  }
`

export const RecommendWrapper = styled.div`
  width:100%;
`
export const RecommendItem = styled.a.attrs({
})`
   display:block;
    width:280px;
    height:50px;
    background:url(${(props)=> props.imgUrl}) no-repeat;
    background-size:contain;
    margin-bottom:6px;
`
export const DownloadWrapper = styled.a`
  position:relative;
  display:block;
  box-sizing:border-box;
  text-decoration:none;
  width:280px;
  height:82px;
  padding:10px 22px;
  margin:10px 0 30px 0;
  border-radius:6px;
  border:1px solid ${props =>
    props.themeNight
      ? props.theme.night.borderColor
      : props.theme.day.borderColor};
  background:${props =>
    props.themeNight
      ? props.theme.night.background
      : props.theme.day.background};
  .show{
    opacity:0;
    transition:opacity .5s linear;
    visibility:hidden;
  }
  :hover .show{
    opacity:1;
    visibility:visible;
  }
  .img{
    float:left;
    width:60px;
    height:60px;
  }
  .p1{
    margin:17px 0 15px 13px;
    float:left;
    color:#333;
    font-size:15px;
  }
  .p2{
    float:left;
    margin:10px 0 10px 13px;
    color:#999;
    font-size:13px;
  }
  .showQR{
    position:absolute;
    top:-197px;
    left:47px;
    width:184px;
    height:184px;
    border-radius:10px;
    border:1px solid rgba(0,0,0,.2);
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    background:#fff;
    .imgQR{
      display:block;
      margin:12px auto;
      width:160px;
      height:160px;
    }
  }
  .showQR-sharp{
    position:absolute;
    top:-19px;
    left:131px;
    transform:rotate(45deg);
    border-right:1px solid rgba(0,0,0,.2);
    border-bottom:1px solid rgba(0,0,0,.2);
    width:15px;
    height:15px;
    background:#fff;
  }
`

export const WriterWrapper = styled.div`

`
export const WriterTitle = styled.div`
  overflow:hidden;
  width:280px;
  margin-top:30px;
  height:20px;
  color:${props =>
    props.themeNight
      ? props.theme.night.color
      : props.theme.day.color};
  font-size:14px;
  line-height:16px;
  .left{
    float: left;
  }
  .right{
    position:relative;
    cursor: pointer;
    float:right;
  }
  .rotate{
    display:block;
    position:absolute;
    top:0;
    left:-16px;
    width:16px;
    height: 16px;
    transition:transform .5s ease-out;
    transform:rotate(-360deg);
    transform-origin:center;
  }
`
export const WriterItem = styled.div`
  overflow:hidden;
  width:280px;
  margin-top:15px;
  height:48px;
  .content{
    overflow:hidden;
    float:left;
    width:222px;
    height:48px;
  }
  .anthorName{
    font-size:14px;
    color:#333;
    line-height:25px;
    text-decoration:none;
  }
  .focus{
    float:right;
    display:block;
    font-size:13px;
    color:#42c02e;
    line-height:25px;
    text-decoration:none;
  }
  .detail{
    font-size:12px;
    color:#969696;
    line-height:22px;
    text-decoration:none;
  }
`
export const WriterHead = styled.a`
  display:block;
  float:left;
  width:46px;
  height:46px;
  margin-right:10px;
  border-radius:23px;
  border: 1px solid #ddd;
  background:url(${(props)=>props.imgUrl});
  background-size:contain;
`
export const WriterMore = styled.a`
  display:block;
  text-decoration:none;
  font-size:13px;
  line-height:21px;
  text-align:center;
  width:280px;
  height:35px;
  padding:7px 7px 12px;
  margin-top:20px;
  box-sizing:border-box;
  color:#787878;
  background:${props =>
    props.themeNight
      ? props.theme.night.TopicBackground
      : props.theme.day.TopicBackground};
  border:1px solid #dcdcdc;
  border-radius:4px;
`

export const FooterAll = styled.div`
  overflow:hidden;
  width: 960px;
  margin: 0 auto 25px;
  padding-top:25px;
`
export const FooterContent = styled.div`
  width:660px;
  margin-left:15px;
  .link a{
    font-size:13px;
    line-height:13px;
    text-decoration:none;
    color:#969696;
  }
  .link a:hover{
    color:#333;
  }
  .link span{
      font-size:13px;
      line-height:13px;
      color:#969696;
      display:inline-block;
      margin:0 5px;
  }
  .warn{
    margin-top:10px;
  }
  .warn span{
    font-size:12px;
    line-height:30px;
    color:#c8c8c8;
  }
  .warn a{
    font-size:12px;
    line-height:30px;
    text-decoration:none;
    color:#c8c8c8;
  }
  .warn a:hover{
    color:#333;
  }
  .warn img{
    vertical-align: middle;
    height:30px;
  }
  
  
`


