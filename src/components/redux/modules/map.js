import { createAction, handleActions } from "redux-actions";
import { apis } from "../../utilities/axios";

// state
const state = {};

// action
const SAVE_STATE = `/SAVE_STATE/`;
const FILTERING_CHANGE_COORDS = `/FILTER/`;
const CLICK_ONE = `/CLICK_ONE/`;
const CLICK_BUTTON = `/CLICK_BUTTON/`;
const CHANGE_COORDS = `/CHANGE_COORDS/`;
const PUBLIC_AREA_STATE = `/PUBLIC_AREA_STATE`;
const PRIVATE_AREA_STATE = `/PRIVATE_AREA_STATE`;
const VISIBLE_MODAL = `/VISIBLE_MODAL/`;
const DETAIL_MODAL = `/DETAIL_MODAL/`;
const PRIVATE_STATUS_ARR = `/PRIVATE_STATUS_ARR/`;

// action creator
export const saveState = createAction(SAVE_STATE, (list) => ({
  list,
}));
export const filteringChangeCoords = createAction(
  FILTERING_CHANGE_COORDS,
  (filtering) => ({
    filtering,
  })
);
export const clickOne = createAction(CLICK_ONE, (clicked) => ({ clicked }));
export const clickButton = createAction(CLICK_BUTTON, (divisionClick) => ({
  divisionClick,
}));
export const changeCoords = createAction(CHANGE_COORDS, (coords) => ({
  coords,
}));
const publicAreaState = createAction(PUBLIC_AREA_STATE, (ftSido) => ({
  ftSido,
}));
const privateAreaState = createAction(PRIVATE_AREA_STATE, (ftSido) => ({
  ftSido,
}));

export const visibleModal = createAction(VISIBLE_MODAL, (visible) => ({
  visible,
}));

export const detailModal = createAction(DETAIL_MODAL, (detail) => ({ detail }));
export const privateStatusArr = createAction(
  PRIVATE_STATUS_ARR,
  (statusArr) => ({ statusArr })
);
// middelWare
export const getPublicListMapDB = (ftSido) => {
  return (dispatch, getState, { history }) => {
    apis.getPublicLists(ftSido).then((res) => {
      dispatch(publicAreaState(res.data.result[0]));
    });
  };
};
export const getPrivateListMapDB = (ftSido) => {
  return (dispatch, getState, { history }) => {
    apis.getPrivateLists(ftSido).then((res) => {
      dispatch(privateAreaState(res.data.result));
      dispatch(privateStatusArr(res.data.statusArr));
    });
  };
};

// reducer
export default handleActions(
  {
    [VISIBLE_MODAL]: (state, action) => {
      return {
        ...state,
        visible: action.payload.visible,
      };
    },
    [DETAIL_MODAL]: (state, action) => {
      return {
        ...state,
        detail: action.payload.detail,
      };
    },
    [SAVE_STATE]: (state, action) => {
      return {
        ...state,
        list: action.payload.list,
      };
    },
    [FILTERING_CHANGE_COORDS]: (state, action) => {
      return {
        ...state,
        filteringChangeCoords: action.payload.filtering,
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
    [PRIVATE_STATUS_ARR]: (state, action) => {
      return {
        ...state,
        statusArr: action.payload.statusArr,
      };
    },
  },
  state
);
