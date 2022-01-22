import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../utilities/axios";


const GET_TOTAL = "GET_TOTAL";
const GET_PRIVATEINFO = "GET_PRIVATEINFO";
const GET_PUBLICINFO = "GET_PUBLICINFO";
const GET_PUBLICHOT = "GET_PUBLICHOT";
const GET_PRIVATEHOT = "GET_PRIVATEHOT";


// Section 01
const getTotal = createAction(GET_TOTAL, (total) => ({ total }));
// Section 02
const getPrivateInfo = createAction(GET_PRIVATEINFO, (private_list) => ({
  private_list,
}));
const getPublicInfo = createAction(GET_PUBLICINFO, (public_list) => ({
  public_list,
}));
// Section 03
const getPublicHot = createAction(GET_PUBLICHOT, (publicHOTList) => ({
  publicHOTList,
}));
const getPrivateHot = createAction(GET_PRIVATEHOT, (privateHOTList) => ({
  privateHOTList,
}));

// Section 01
const getTotalDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getTotalNum()
      .then((res) => {
        // console.log("getTotalDB 접근");
        // console.log(res.data);
        dispatch(getTotal(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// Section 02
const getPrivateInfoDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPrivateInfo()
      .then((res) => {
        // console.log("getPrivateInfoDB 접근");
        // console.log(res.data);
        dispatch(getPrivateInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const getPublicInfoDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPublicInfo()
      .then((res) => {
        // console.log("getPublicInfoDB 접근");
        // console.log(res.data);
        dispatch(getPublicInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// Section 03
const getPublicHotFB = () => {
  return async function (dispatch, getState, { history }) {
    try {
      
      const response = await apis.getPublicHot();
      dispatch(getPublicHot(response.data));
      
    } catch (error) {
      console.log(error);
    }
  };
};

const getPrivateHotFB = () => {
  return async function (dispatch, getState, { history }) {
    try {

      const response = await apis.getPrivateHot();
      dispatch(getPrivateHot(response.data));

    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  total: {},
  private_list: {
    privateSido1: [],
    statusArr: [],
  },
  public_list: [],
  //찜하기
  publicHotList: [],
  privateHotList: {
    privateHotList: [],
    statusArr: [],
  },
};

export default handleActions(
  {
    // Section 01
    [GET_TOTAL]: (state, action) =>
      produce(state, (draft) => {
        draft.total = action.payload.total;
      }),
    // Section 02
    [GET_PRIVATEINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.private_list = action.payload.private_list;
      }),
    [GET_PUBLICINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.public_list = action.payload.public_list;
      }),
    // Section 03
    [GET_PUBLICHOT]: (state, action) =>
      produce(state, (draft) => {
        console.log("찜하기 공공 시작");
        console.log(action.payload);
        draft.publicHotList = action.payload.publicHOTList;
      }),
    [GET_PRIVATEHOT]: (state, action) =>
      produce(state, (draft) => {
        console.log("찜하기 민영 시작");
        console.log(action.payload);
        draft.privateHotList = action.payload.privateHOTList;
      }),
  },
  initialState
);

const actionCreators = {
  // Section 01
  getTotal,
  getTotalDB,
  // Section 02
  getPrivateInfo,
  getPrivateInfoDB,
  getPublicInfo,
  getPublicInfoDB,
  // Section 03
  getPublicHotFB,
  getPrivateHotFB,
 
};

export { actionCreators };
