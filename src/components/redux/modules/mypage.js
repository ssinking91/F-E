import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utilities/axios";
import { actionCreators as mainActions } from "./main";

// action type
const GET_USERINFO = " GET_USERINFO";
const EDIT_USERINFO = "EDIT_USERINFO";
const EDIT_EMAIL = "EDIT_EMAIL";
const MY_SAVE_CARD = "SAVE_CARD";

// action creator
const getUserInfo = createAction(GET_USERINFO, (userInfo) => ({ userInfo }));
const editUserInfo = createAction(EDIT_USERINFO, (sido) => ({ sido }));
const editEmailInfo = createAction(EDIT_EMAIL, (email) => ({ email }));
const mypageSavedCard = createAction(MY_SAVE_CARD, (aptNo, status) => ({
  aptNo,
  status,
}));

// middleware
const getUserInfosFB = (userKey) => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await apis.getUserInfos(userKey);
      dispatch(getUserInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const editUserInfosFB = (userName, sido) => {
  return async function (dispatch, getState, { history }) {
    try {
      apis.editUserInfos(userName, sido);
      dispatch(editUserInfo(sido));
    } catch (error) {
      console.log("editUserInfosFB error");
    }
  };
};

const editEmailFB = (userName, email) => {
  return async (dispatch, getState, { history }) => {
    try {
      apis.editEmail(userName, email);
      dispatch(editEmailInfo(email));
    } catch (error) {
      console.log(error);
    }
  };
};

const savedFB = (aptNo, status, sido) => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.saved(aptNo);
      console.log(response.data.data, typeof response.data.data);
      dispatch(mypageSavedCard(aptNo, status));
      if (status === "private") {
        dispatch(mainActions.getPrivateInfoDB());
      } else if (status === "public") {
        dispatch(mainActions.getPublicInfoDB());
      }
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

    statusArr: [],
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

    [MY_SAVE_CARD]: (state, action) =>
      produce(state, (draft) => {
        if (action.payload.status === "public") {
          draft.list.public = draft.list.public.filter((item, idx) => {
            return item.panId !== action.payload.aptNo;
          });
        } else if (action.payload.status === "private") {
          draft.list.private = draft.list.private.filter((item, idx) => {
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
