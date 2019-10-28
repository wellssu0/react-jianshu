import React,{memo} from 'react'

import { ViewBox } from '../style'


const Carousel = props => {
  return(
    <ViewBox>

      <div>
        <a href="/">
          <img
            className="img-pic"
            src="//upload.jianshu.io/admin_banners/web_images/4732/5d0b947b56c13a3d5e96fe8fe77c66079deed975.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="img"
          />
        </a>
      </div>
    </ViewBox>
    
  )
}
export default memo(Carousel)