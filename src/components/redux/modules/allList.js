import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";

// state
const initialState = {};

// actions
const GET_PRIVATE_LIST = "/GET_PRIVATE_LIST";
const GET_PUBLIC_LIST = "/GET_PUBLIC_LIST";
const GET_PRIVATE_ADRESS = "/GET_PRIVATE_ADRESS";
const GET_PUBLIC_ADRESS = "/GET_PUBLIC_ADRESS";

// create actions
const getPrivateList = createAction(GET_PRIVATE_LIST, (privateList) => ({
  privateList,
}));
const getPublicList = createAction(GET_PUBLIC_LIST, (publicList) => ({
  publicList,
}));
const getPrivateAdress = createAction(GET_PRIVATE_ADRESS, (adress) => ({
  adress,
}));
const getPublicAdress = createAction(GET_PUBLIC_ADRESS, (adress) => ({
  adress,
}));

// middleware thunk
export const getPrivateListDB = (ftSido) => {
  return (dispatch, getState, { history }) => {
    apis
      .getPrivateLists(ftSido)
      .then((res) => {
        const privateList = res.data.result;
        console.log(privateList);
        const privateAddress = [];
        for (let i = 0; i < privateList.length; i++) {
          privateAddress.push(privateList[i].address);
        }

        const privateAd = new Set(privateAddress);
        const adress = [...privateAd];
        dispatch(getPrivateList(privateList));
        dispatch(getPrivateAdress(adress));
      })
      .catch((e) => console.log(e));
  };
};

export const getPublicListDB = (ftSido) => {
  return async (dispatch, getState, { history }) => {
    apis
      .getPublicLists(ftSido)
      .then(async (res) => {
        const publicList = res.data.result[0];
        let publicAdress = [];
        for (let i = 0; i < publicList.length; i++) {
          publicAdress.push(publicList[i].address);
        }
        const publicAd = new Set(publicAdress);
        const adress = [...publicAd];

        dispatch(getPublicList(publicList));
        dispatch(getPublicAdress(adress));
      })
      .catch((e) => console.log(e));

    // const result = await apis.getPublicLists(ftSido);
    // const publicList = result.data.result[0];
    // let publicAdress = [];
    // for (let i = 0; i < publicList.length; i++) {
    //   publicAdress.push(publicList[i].address);
    // }
    // const publicAd = new Set(publicAdress);
    // const publicLocation = [...publicAd];
    // console.log(publicLocation);

    // dispatch(getPublicAdress(publicLocation));
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
    [GET_PUBLIC_ADRESS]: (state, action) => {
      return {
        ...state,
        publicAdress: action.payload.adress,
      };
    },
    [GET_PRIVATE_ADRESS]: (state, action) => {
      return {
        ...state,
        privateAdress: action.payload.adress,
      };
    },
  },
  initialState
);
