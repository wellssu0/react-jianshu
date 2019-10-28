import React from 'react'

import { DownloadWrapper } from './../style'

const Download = (props) => {
  return(
    <DownloadWrapper href="#"  >
      <img className="img" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
      <p className="p1">下载简书手机App ></p>
      <p className="p2">随时随地发现和创作内容</p>
      <div className="show">
        <div className="showQR">
          <img className="imgQR" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        </div>
        <div className="showQR-sharp"></div>
      </div>
    </DownloadWrapper>
  )
}

export default React.memo(Download) 