import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";

// state
const state = {
  info: [],
};

// action
const GET_DETAILINFO = `/GET_DETAILINFO/`;

// action creators
const getDetailInfo = createAction(GET_DETAILINFO, (info) => ({ info }));

// middleware thunk
export function getDetailInfoDB(locate) {
  return function (dispatch, getState, { history }) {
    console.log("getDetail");
    console.log(locate);
    apis
      .getDetailInfo(locate)
      .then((res) => {
        console.log(res);
        dispatch(getDetailInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// reducer
export default handleActions(
  {
    [GET_DETAILINFO]: (state, action) => {
      return {
        ...state,
        list: action.payload.list,
      };
    },
  },
  state
);
