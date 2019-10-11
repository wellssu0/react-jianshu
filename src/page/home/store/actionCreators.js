import * as constants from "./constants";

import axios from "axios";

const getHomeDataAction = data => ({
  type: constants.GET_HOME_DATA,
  data
});
const getChangeWriterListAction = data => ({
  type: constants.CHANGE_WRITER_LIST,
  data
});
const getAddListItemAction = data => ({
  type: constants.ADD_LIST_ITEM,
  data
});
export const getHomeData = () => {
  return dispatch => {
    axios
      .get("/api/home.json")
      .then(res => {
        const data = res.data.data;
        dispatch(getHomeDataAction(data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const getChangeFocusAction = item => ({
  type: constants.CHANGE_FOCUS,
  item
});

export const getRotateAction = () => ({
  type: constants.OPEN_ROTATE
});
export const getCloseRotateAction = () => ({
  type: constants.CLOSE_ROTATE
});
export const getScrollTopShow = () => ({
  type: constants.SCROLL_TOP_SHOW
});
export const getScrollTopHidden = () => ({
  type: constants.SCROLL_TOP_HIDDEN
});

export const getAddListItem = () => {
  return dispatch => {
    axios
      .get("/api/addListItem.json")
      .then(res => {
        const data = res.data;
        dispatch(getAddListItemAction(data.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getChangeWriterList = () => {
  return dispatch => {
    axios
      .get("/api/writerList.json")
      .then(res => {
        const data = res.data;
        dispatch(getChangeWriterListAction(data.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
