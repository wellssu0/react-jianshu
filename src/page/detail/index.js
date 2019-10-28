import React,{ memo, useEffect } from 'react'
import { connect } from 'react-redux'

import * as actionCreators from "../../actionCreators";
import ScrollTop from '../home/components/ScrollTop'
import { DetailBody, Main, LeftArea, RightArea ,Header,Content} from './style'

const Detail = props => {
  const { themeNight, getDetailData, content,title} = props
  const { id } = props.match.params

  useEffect (() => {
    id !== undefined && getDetailData(id)
  },[])
  return(
    <DetailBody themeNight={themeNight}>
      <Main>
        <ScrollTop />
        <LeftArea>
          <Header>{title}</Header>
          <Content dangerouslySetInnerHTML={{__html: content}}>
                      
          </Content> 
          
            
          
        </LeftArea>
        <RightArea>
          
        </RightArea>



      </Main>    
    </DetailBody>
  )
}

const mapState = state => ({
  themeNight:state.getIn(["header","themeNight"]),
  title:state.getIn(["detail","title"]),
  content:state.getIn(["detail","content"])
})
const mapDispatch = dispatch => ({
  getDetailData(id) {
		dispatch(actionCreators.getDetailData(id));
	}
});


export default memo(connect(mapState,mapDispatch)(Detail))