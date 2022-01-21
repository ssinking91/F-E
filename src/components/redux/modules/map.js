import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";

// state
const state = {
  show: true,
  hidden: false,
};

// action
const SAVE_STATE = `/SAVE_STATE/`;
const CLICK_ONE = `/CLICK_ONE/`;
const CLICK_BUTTON = `/CLICK_BUTTON/`;
const AREA_STATE = `/AREA_STATE/`;
const CHANGE_COORDS = `/CHANGE_COORDS/`;
const PUBLIC_AREA_STATE = `/PUBLIC_AREA_STATE`;
const PRIVATE_AREA_STATE = `/PRIVATE_AREA_STATE`;
const SHOW_MODAL = `/SHOW_MODAL/`;
const DROP_MODAL = `/DROP_MODAL/`;

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
const publicAreaState = createAction(PUBLIC_AREA_STATE, (ftSido) => ({
  ftSido,
}));
const privateAreaState = createAction(PRIVATE_AREA_STATE, (ftSido) => ({
  ftSido,
}));

export const showModal = createAction(SHOW_MODAL, (show) => ({ show }));
export const dropModal = createAction(SHOW_MODAL, (hidden) => ({ hidden }));

// middelWare
export const getPublicListMapDB = (ftSido) => {
  return (dispatch, getState, { history }) => {
    apis.getPublicLists(ftSido).then((res) => {
      console.log(res.data.result[0]);
      dispatch(publicAreaState(res.data.result[0]));
    });
  };
};
export const getPrivateListMapDB = (ftSido) => {
  return (dispatch, getState, { history }) => {
    apis.getPrivateLists(ftSido).then((res) => {
      console.log(ftSido);
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
        public_sido: action.payload.ftSido,
      };
    },
    [PRIVATE_AREA_STATE]: (state, action) => {
      return {
        ...state,
        private_sido: action.payload.ftSido,
      };
    },
    [CHANGE_COORDS]: (state, action) => {
      return {
        ...state,
        coords: action.payload.coords,
      };
    },
    [SHOW_MODAL]: (state, action) => {
      return {
        ...state,
        show: action.payload.show,
      };
    },
    [DROP_MODAL]: (state, action) => {
      return {
        ...state,
        hidden: action.payload.hidden,
      };
    },
  },
  state
);
