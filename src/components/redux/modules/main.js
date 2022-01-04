import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../utilities/axios";
// import axios from "axios";

const GET_INFO = "GET_INFO";

const getInfo = createAction(GET_INFO, (list) => ({ list }));

const initialState = {
  list: [],
};

const getInfoDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPrivateInfo()
      .then((res) => {
        console.log("getInfoDB 접근");
        console.log(res.data);
        dispatch(getInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  getInfo,
  getInfoDB,
};

export { actionCreators };
