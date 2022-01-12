import { createAction, handleActions } from "redux-actions";

// state
const state = {
  list: [],
};

// action
const SAVE_STATE = `/SAVE_STATE/`;

// action creator
export const saveState = createAction(SAVE_STATE, (list) => ({ list }));

// reducer
export default handleActions(
  {
    [SAVE_STATE]: (state, action) => {
      return {
        ...state,
        list: action.payload.list,
      };
    },
  },
  state
);
