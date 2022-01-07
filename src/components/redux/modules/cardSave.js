import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utilities/axios";
import { mypagetActions } from "./mypage";

// action type
const SAVE_CARD = "SAVE_CARD";

// action creator
const savedCard = createAction(SAVE_CARD, (result) => ({ result }));

// middleware
const savedFB = (aptNo, page) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("savedFB 시작");
      const response = await apis.saved(aptNo);
      console.log(response);

      let result = response.data.data;
      await dispatch(savedCard(result));

      console.log("savedFB 끝");
      
      if(page){
        const userKey = localStorage.getItem("userKey");
      dispatch(mypagetActions.getUserInfosFB(userKey));
      };
      
      console.log("getUserInfosFB 끝");
    } catch (error) {
      console.log(error);
    }
  };
};

// initial state
const initialState = {
  result: "false",
};

export default handleActions(
  {
    [SAVE_CARD]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.result);
        draft.result = action.payload.result;
      }),
  },
  initialState
);

const savedActions = {
  savedFB,
};

export { savedActions };
