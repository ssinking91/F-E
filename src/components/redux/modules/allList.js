import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";

// state
const state = {};

// actions
const GET_PRIVATE_LIST = "/GET_PRIVATE_LIST";
const GET_PUBLIC_LIST = "/GET_PUBLIC_LISt";

// create actions
const getPrivateList = createAction(GET_PRIVATE_LIST, (privateList) => ({
  privateList,
}));
const getPublicList = createAction(GET_PUBLIC_LIST, (publicList) => ({
  publicList,
}));

// middleware thunk
export const getPrivateListDB = (ftSido) => {
  return (dispatch, getState, { history }) => {
    apis
      .getPrivateLists(ftSido)
      .then((res) => {
        const privateList = res.data.result[0];
        console.log(privateList);
        dispatch(getPrivateList(privateList));
      })
      .catch((e) => console.log(e));
  };
};

export const getPublicListDB = (ftSido) => {
  return (dispatch, getState, { history }) => {
    apis
      .getPublicLists(ftSido)
      .then((res) => {
        const publicList = res.data.result[0];
        console.log(publicList);
        dispatch(getPublicList(publicList));
      })
      .catch((e) => console.log(e));
  };
};

// reducer
export default handleActions(
  {
    [GET_PRIVATE_LIST]: (state, action) => {
      return {
        ...state,
        privateList: action.payload.privateList,
      };
    },
    [GET_PUBLIC_LIST]: (state, action) => {
      return {
        ...state,
        publicList: action.payload.publicList,
      };
    },
  },
  state
);
