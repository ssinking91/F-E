import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";

// state
const state = {
  info: [],
};

// action
const GET_DETAILINFO = `/GET_DETAILINFO/`;
const GET_DETAIL_IMG = `/GET_DETAIL_IMG`;

// action creators
const getDetailInfo = createAction(GET_DETAILINFO, (info) => ({ info }));
const getDetailImg = createAction(GET_DETAIL_IMG, (img) => ({ img }));

// middleware thunk
export function getDetailInfoDB(locate) {
  return function (dispatch, getState, { history }) {
    apis
      .getDetailInfo(locate)
      .then((res) => {
        const info = res.data;
        dispatch(getDetailInfo(info));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getDetailImgDB(locate) {
  return function (dispatch, getState, { history }) {
    apis
      .getDetailImg(locate)
      .then((res) => {
        const img = res.data.privateImg
          ? res.data.privateImg
          : res.data.publicImg;
        dispatch(getDetailImg(img));
      })
      .catch((e) => console.log(e));
  };
}

// reducer
export default handleActions(
  {
    [GET_DETAILINFO]: (state, action) => {
      return {
        ...state,
        info: action.payload.info,
      };
    },
    [GET_DETAIL_IMG]: (state, action) => {
      return {
        ...state,
        img: action.payload.img,
      };
    },
  },
  state
);
