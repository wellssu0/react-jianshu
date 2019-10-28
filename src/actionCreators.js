import * as constants from "./constants";

export const getHomeData = () => ({
  type: constants.GET_HOME_DATA
});
export const setHomeDataAction = data => ({
  type: constants.SET_HOME_DATA,
  data
});

export const getChangeWriterList = (page) => ({
  type: constants.GET_CHANGE_DATA,
  page
});

export const getChangeWriterListAction = data => ({
  type: constants.CHANGE_WRITER_LIST,
  data
});



export const getAddListItem = () => ({
  type: constants.ADD_LIST_ITEM,
});

export const setAddListItemAction = data => ({
  type: constants.SET_ADD_LIST_ITEM,
  data
});

export const getChangeFocusAction = item => ({
  type: constants.CHANGE_FOCUS,
  item
});


export const getScrollTopShow = () => ({
  type: constants.SCROLL_TOP_SHOW
});
export const getScrollTopHidden = () => ({
  type: constants.SCROLL_TOP_HIDDEN
});
export const getDetailData = (id) => ({
  type: constants.GET_DETAIL_DATA,
  id
});
export const setDetailData = (data) => ({
  type: constants.SET_DETAIL_DATA,
  data
});




export const getFocusAction = () => ({
  type: constants.SEARCH_FOCUS
})
export const getBlurAction =() => ({
  type: constants.SEARCH_BLUR
})
export const getSwitchList= (page) =>({
  type:constants.SET_PAGE,
  page
})
export const getMouseEnterAction = () =>({
  type:constants.MOUSE_ENTER
})
export const getMouseLeaveAction = () =>({
  type:constants.MOUSE_LEAVE
})
export const getSwitchPageAction = (page) =>({
  type:constants.SWITCH_PAGE,
  page
})

export const getWriterOpenRotateAction = () =>({
  type:constants.WRITER_OPEN_ROTATE
})
export const getWriterCloseRotateAction = () =>({
  type:constants.WRITER_CLOSE_ROTATE
})
export const getOpenRotateAction = () =>({
  type:constants.SEARCH_OPEN_ROTATE
})
export const getCloseRotateAction = () =>({
  type:constants.SEARCH_CLOSE_ROTATE
})
export const getBlackThemeAction = () =>({
  type:constants.BLACK_THEME
})
export const getWhiteThemeAction = () =>({
  type:constants.WHITE_THEME
})
export const getToggleShowThemeBoAction = () =>({
  type:constants.TOGGLE_THEME_BOX
})

export const getSearchInfoList = () => ({
  type:constants.GET_SEARCH_INFO_LIST
})
export const setSearchInfoList = (data) => ({
  type:constants.SET_SEARCH_INFO_LIST,
  data
})



export const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})

export const login = (accout, password) => ({
  type:constants.LOGIN,
  accout, password
})
