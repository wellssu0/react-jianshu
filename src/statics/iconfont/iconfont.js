import {injectGlobal} from 'styled-components' 

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1570345154797'); /* IE9 */
  src: url('iconfont.eot?t=1570345154797#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1570345154797') format('woff'),
  url('iconfont.ttf?t=1570345154797') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1570345154797#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xiazai1:before {
  content: "\e63b";
}

.icon-zuanshi:before {
  content: "\e675";
}

.icon-beta:before {
  content: "\e64c";
}

.icon-zuanshi1:before {
  content: "\e60d";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-hongxin:before {
  content: "\e60c";
}

.icon-xiaoxi1:before {
  content: "\e627";
}

.icon-xiaoxi:before {
  content: "\e626";
}

.icon-icon-checkin:before {
  content: "\e615";
}

.icon-shuaxin:before {
  content: "\e65a";
}

.icon-zhinanzhenfaxiandaohangdizhiweizhi:before {
  content: "\e786";
}

.icon-xiaoxitongzhitixinglingshenglingdang-xianxing:before {
  content: "\e795";
}

.icon-sousuo:before {
  content: "\e658";
}
`

