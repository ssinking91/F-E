import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utilities/axios";

// action type
const GET_COMMENT = "GET_COMMENT";

// action creator
const getComment = createAction(GET_COMMENT, (comments) => ({ comments }));

// middleware
const getCommentsFB = (aptNo) => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await apis.getComments(aptNo);
      dispatch(getComment(response.data));
      
    } catch (error) {
      console.log(error);
    }
  };
};

const addCommentsFB = (aptNo, content) => {
  return async function (dispatch, getState, { history }) {
    try {

      const response = await apis.addComments(aptNo, content);
      dispatch(getCommentsFB(aptNo)); // 댓글 목록 다시 요청

    } catch (error) {
      console.log("addCommentsFB error");
    }
  };
};

const deleteCommentsFB = (aptNo, commentId) => {
  return async (dispatch, getState, { history }) => {
    try {
      
      const response = await apis.deleteComments(aptNo, commentId);
      dispatch(getCommentsFB(aptNo));

    } catch (error) {
      console.log("deleteCommentsFB error");
    }
  };
};

// initial state
const initialState = {
  list: [
    {
      userKey: "",
      commentId:"" ,
      profileImg: "",
      content: "",
      createdAt: "",
    },
  ],
};

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.comments.comments);
        draft.list = action.payload.comments.comments;
      }),
  },
  initialState
);

const commentActions = {
  getCommentsFB,
  addCommentsFB,
  deleteCommentsFB,
};

export { commentActions };
