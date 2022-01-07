import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utilities/axios";

// action type
const GET_USERINFO = " GET_USERINFO";
const EDIT_USERINFO = "EDIT_USERINFO";
const SAVE_CARD = "SAVE_CARD";

// action creator
const getUserInfo = createAction(GET_USERINFO, (userInfo) => ({ userInfo }));
const editUserInfo = createAction(EDIT_USERINFO, (sido) => ({ sido }));
const savedCard = createAction(SAVE_CARD, (result) => ({ result }));

// middleware
const getUserInfosFB = (userKey) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log("getUserInfosFB 시작");
      const response = await apis.getUserInfos(userKey);
      console.log(response);

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

const savedFB = (aptNo, status) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("savedFB 시작");
      const response = await apis.saved(aptNo);
      console.log(response);

      let result = response.data.data;
      await dispatch(savedCard(result));

      console.log("savedFB 끝");
        
    } catch (error) {
      console.log(error);
    }
  };
};

// initial state
const initialState = {
  list: {
    existuser: {},

    public: [],

    private: [],
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

    [SAVE_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.result = action.payload.result;
      }),
  },
  initialState
);

const mypagetActions = {
  getUserInfosFB,
  editUserInfosFB,
  savedFB,
};

export { mypagetActions };
