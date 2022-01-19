import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";

// state
const state = {};

// action
const SAVE_STATE = `/SAVE_STATE`;
const CLICK_ONE = `/CLICK_ONE/`;
const PUBLIC_AREA_STATE = `/PUBLIC_AREA_STATE`;
const PRIVATE_AREA_STATE = `/PRIVATE_AREA_STATE`;

// action creator
export const saveState = createAction(SAVE_STATE, (list) => ({
  list,
}));
export const clickOne = createAction(CLICK_ONE, (clicked) => ({ clicked }));
const publicAreaState = createAction(PUBLIC_AREA_STATE, (public_sido) => ({
  public_sido,
}));
const privateAreaState = createAction(PRIVATE_AREA_STATE, (private_sido) => ({
  private_sido,
}));

// middelWare
export const getPublicListMapDB = (public_sido) => {
  return (dispatch, getState, { history }) => {
    apis.getPublicLists(public_sido).then((res) => {
      console.log(res);
      dispatch(publicAreaState(res.data.result[0]));
    });
  };
};
export const getPrivateListMapDB = (private_sido) => {
  return (dispatch, getState, { history }) => {
    apis.getPrivateLists(private_sido).then((res) => {
      console.log(res);
      dispatch(privateAreaState(res.data.result));
    });
  };
};

// reducer
export default handleActions(
  {
    [SAVE_STATE]: (state, action) => {
      return {
        ...state,
        list: action.payload.list,
      };
    },
    [CLICK_ONE]: (state, action) => {
      return {
        ...state,
        clicked: action.payload.clicked,
      };
    },
    [PUBLIC_AREA_STATE]: (state, action) => {
      return {
        ...state,
        public_sido: action.payload.public_sido,
      };
    },
    [PRIVATE_AREA_STATE]: (state, action) => {
      return {
        ...state,
        private_sido: action.payload.private_sido,
      };
    },
  },
  state
);
