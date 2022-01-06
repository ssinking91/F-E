import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../utilities/axios";
// import axios from "axios";

const GET_TOTAL = "GET_TOTAL";
const GET_PRIVATEINFO = "GET_PRIVATEINFO";
const GET_PUBLICINFO = "GET_PUBLICINFO";

const getTotal = createAction(GET_TOTAL, (total) => ({ total }));
const getPrivateInfo = createAction(GET_PRIVATEINFO, (private_list) => ({
  private_list,
}));
const getPublicInfo = createAction(GET_PUBLICINFO, (public_list) => ({
  public_list,
}));

const initialState = {
  total: {},
  private_list: [],
  public_list: [],
};

const getTotalDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getTotalNum()
      .then((res) => {
        console.log("getTotalDB 접근");
        console.log(res.data);
        dispatch(getTotal(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const getPrivateInfoDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPrivateInfo()
      .then((res) => {
        console.log("getPrivateInfoDB 접근");
        console.log(res.data);
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
        console.log("getPublicInfoDB 접근");
        console.log(res.data);
        dispatch(getPublicInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_TOTAL]: (state, action) =>
      produce(state, (draft) => {
        draft.total = action.payload.total;
      }),
    [GET_PRIVATEINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.private_list = action.payload.private_list;
      }),
    [GET_PUBLICINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.public_list = action.payload.public_list;
      }),
  },
  initialState
);

const actionCreators = {
  getTotal,
  getTotalDB,
  getPrivateInfo,
  getPrivateInfoDB,
  getPublicInfo,
  getPublicInfoDB,
};

export { actionCreators };
