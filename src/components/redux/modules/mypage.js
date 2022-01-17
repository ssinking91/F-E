import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utilities/axios";
import { actionCreators as mainActions } from "./main"

// action type
const GET_USERINFO = " GET_USERINFO";
const EDIT_USERINFO = "EDIT_USERINFO";
const EDIT_EMAIL = "EDIT_EMAIL";
const SAVE_CARD = "SAVE_CARD";

// action creator
const getUserInfo = createAction(GET_USERINFO, (userInfo) => ({ userInfo }));
const editUserInfo = createAction(EDIT_USERINFO, (sido) => ({ sido }));
const editEmailInfo = createAction(EDIT_EMAIL, (email) => ({ email }));
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
      console.log(response.data);

      dispatch(getUserInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const editUserInfosFB = (userName, sido) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log("editUserInfosFB 시작");

      const response = apis.editUserInfos(userName, sido);
      console.log(response.data);

      dispatch(editUserInfo(sido));
    } catch (error) {
      console.log("editUserInfosFB error");
    }
  };
};

const editEmailFB = (userName, email) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("mypage editEmailFB 시작");
      const response = apis.editEmail(userName, email);
      console.log(response);

      //let result = response.data.data;
      console.log(email);
      dispatch(editEmailInfo(email));

      console.log("mypage editEmailFB 끝");
    } catch (error) {
      console.log(error);
    }
  };
};

const savedFB = (aptNo, status) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("mypage savedFB 시작");
      const response = await apis.saved(aptNo);
      console.log(response.data.data, typeof response.data.data);

      console.log("mypage savedCard 시작");
      dispatch(savedCard(aptNo, status));
      console.log("mypage savedFB 끝");

      // console.log("main savedFB2 시작");
      // dispatch(mainActions.savedFB2(aptNo, status, response.data.data));
      
      // const userKey = localStorage.getItem("userKey");
      // await setTimeout(()=>{dispatch(getUserInfosFB(userKey))}, 1000); 

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
        draft.list.existuser.sido = action.payload.sido;
      }),

    [EDIT_EMAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.list.existuser.email = action.payload.email;
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
  editEmailFB,
  savedFB,
};

export { mypagetActions };
