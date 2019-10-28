import React from 'react'
import { connect } from "react-redux"

import { FooterAll, FooterContent, } from '../style'

const Footer = (props) => {
  const { footerLink } = props
  return(
    <FooterAll>
      <FooterContent>
        <div className="link">
        {
          footerLink.map(item=> (
            <React.Fragment key={item.get("id")}>
              <a href={item.get('href')} key={item.get('id')}>{item.get("title")}</a><span>·</span>
            </React.Fragment>
          ))
        }
        </div>
        <div className="warn">
          <span>©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /</span><a href="/"><img src='//cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png' alt=''/></a>
          <a href="/">沪公网安备31010402002252号 /</a>
          <a href="/"><img src='//cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png' alt=''/></a>
          <span>简书网举报电话：021-34770013 / </span>
          <a href="/"><img src='//cdn2.jianshu.io/assets/web/fanzha-10518f0f6b33635180b190975ae68ca6.jpg' alt=''/></a>
          <span>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 /</span>
          <a href="/"><img src='//cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png' alt=''/></a>
        </div>
      </FooterContent>
    </FooterAll>
  )
}
const mapStateToProps = (state) =>{
  return{
    footerLink: state.getIn(["home","footerLink"])
  }

}

export default React.memo(connect(mapStateToProps,null)(Footer)) 
