import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";

// state
const state = {};

// action
const SAVE_STATE = `/SAVE_STATE/`;
const CLICK_ONE = `/CLICK_ONE/`;
const CLICK_BUTTON = `/CLICK_BUTTON/`;
const AREA_STATE = `/AREA_STATE/`;
const CHANGE_COORDS = `/CHANGE_COORDS/`;
const PUBLIC_AREA_STATE = `/PUBLIC_AREA_STATE`;
const PRIVATE_AREA_STATE = `/PRIVATE_AREA_STATE`;

// action creator
export const saveState = createAction(SAVE_STATE, (list) => ({
  list,
}));
export const clickOne = createAction(CLICK_ONE, (clicked) => ({ clicked }));
export const clickButton = createAction(CLICK_BUTTON, (divisionClick) => ({
  divisionClick,
}));
const areaState = createAction(AREA_STATE, (sido) => ({ sido }));
export const changeCoords = createAction(CHANGE_COORDS, (coords) => ({
  coords,
}));
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
    [CLICK_BUTTON]: (state, action) => {
      return {
        ...state,
        divisionClick: action.payload.divisionClick,
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
    [CHANGE_COORDS]: (state, action) => {
      return {
        ...state,
        coords: action.payload.coords,
      };
    },
  },
  state
);
