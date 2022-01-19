import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";

// state
const state = {};

// action
const SAVE_STATE = `/SAVE_STATE/`;
const CLICK_ONE = `/CLICK_ONE/`;
const AREA_STATE = `/AREA_STATE/`;
const CHANGE_COORDS = `/CHANGE_COORDS/`;

// action creator
export const saveState = createAction(SAVE_STATE, (list) => ({
  list,
}));
export const clickOne = createAction(CLICK_ONE, (clicked) => ({ clicked }));
const areaState = createAction(AREA_STATE, (sido) => ({ sido }));
export const changeCoords = createAction(CHANGE_COORDS, (coords) => ({
  coords,
}));

// middelWare
export const getPublicListMapDB = (sido) => {
  return (dispatch, getState, { history }) => {
    apis.getPublicLists(sido).then((res) => {
      console.log(res);
      dispatch(areaState(res.data.result[0]));
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
    [AREA_STATE]: (state, action) => {
      return {
        ...state,
        sido: action.payload.sido,
      };
    },
    [CHANGE_COORDS]: (state, action) => {
      return {
        ...state,
        coords: action.payload.coords,
      };
    },
  },
  state
);
