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
const savedCard = createAction(SAVE_CARD, (aptNo, status) => ({
  aptNo,
  status,
}));

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

const savedFB = (aptNo, page, status) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("mypage savedFB 시작");
      const response = await apis.saved(aptNo);
      console.log(response);

      //let result = response.data.data;

      dispatch(savedCard(aptNo, status));

      console.log("mypage savedFB 끝");
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
        console.log("mapage save_card 리듀서 시작");
        if (action.payload.status === "public") {
          draft.list.public = draft.list.public.filter((item, idx) => {
            //console.log(action.payload.aptNo, typeof action.payload.aptNo);
            return item.panId !== action.payload.aptNo;
          });
        } else if (action.payload.status === "private") {
          draft.list.private = draft.list.private.filter((item, idx) => {
            //console.log(action.payload.aptNo, typeof action.payload.aptNo);
            return item.pblancNo !== action.payload.aptNo;
          });
        }
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
