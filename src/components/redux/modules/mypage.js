import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utilities/axios";

// action type
const GET_USERINFO = " GET_USERINFO";
const EDIT_USERINFO = "EDIT_USERINFO";

// action creator
const getUserInfo = createAction(GET_USERINFO, (userInfo) => ({ userInfo }));
const editUserInfo = createAction(EDIT_USERINFO, (sido) => ({ sido }));

// middleware
const getUserInfosFB = (userKey) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log("getUserInfosFB 시작");
      const response = await apis.getUserInfos(userKey);

      dispatch(getUserInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const editUserInfosFB = (userName) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log("editUserInfosFB 시작");

      const response = await apis.editUserInfos(userName);
      console.log(response);

      dispatch(editUserInfo(response)); // 댓글 목록 다시 요청
    } catch (error) {
      console.log("editUserInfosFB error");
    }
  };
};

// initial state
const initialState = {
  list: {
    email: "",
    sido: "인천광역시",
    likes: [
      {
        공공: [{}],
        민영: [{}],
      },
    ],
  },
};

export default handleActions(
  {
    [GET_USERINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.userInfo;
      }),
    [EDIT_USERINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list.sido = action.payload.sido;
      }),
  },
  initialState
);

const mypagetActions = {
  getUserInfosFB,
  editUserInfosFB,
};

export { mypagetActions };
