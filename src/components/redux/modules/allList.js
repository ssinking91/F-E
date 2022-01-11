import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";
import produce from "immer";

// state
const state = {};

// actions
const GET_PRIVATE_LIST = "/GET_PRIVATE_LIST";
const GET_PUBLIC_LIST = "/GET_PUBLIC_LIST";
const GET_PUBLIC_ADRESS = "/GET_PUBLIC_ADDRESS";

// create actions
const getPrivateList = createAction(GET_PRIVATE_LIST, (privateList) => ({
  privateList,
}));
const getPublicList = createAction(GET_PUBLIC_LIST, (publicList) => ({
  publicList,
}));
const getPublicAdress = createAction(GET_PUBLIC_ADRESS, (publicAdress) => ({
  publicAdress,
}));

// middleware thunk
export const getPrivateListDB = (ftSido) => {
  return (dispatch, getState, { history }) => {
    apis
      .getPrivateLists(ftSido)
      .then((res) => {
        const privateList = res.data.result[0];
        dispatch(getPrivateList(privateList));
      })
      .catch((e) => console.log(e));
  };
};

export const getPublicListDB = (ftSido) => {
  return (dispatch, getState, { history }) => {
    apis
      .getPublicLists(ftSido)
      .then(async (res) => {
        const publicList = res.data.result[0];
        let publicAdress = [];
        for (let i = 0; i < publicList.length; i++) {
          publicAdress.push(publicList[i].address);
        }
        const publicAd = new Set(publicAdress);
        const publicLocation = [...publicAd];

        dispatch(getPublicList(publicList));
        dispatch(getPublicAdress(publicLocation));
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
    // [GET_PUBLIC_ADRESS]: (state, action) => {
    //   return {
    //     ...state,
    //     adress: action.payload.publicAdress,
    //   };
    // },

    [GET_PUBLIC_ADRESS]: (state, action) =>
      produce(state, (draft) => {
        draft.adress = action.payload.publicAdress;
      }),
  },
  state
);
