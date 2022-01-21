import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utilities/axios";

// action type
const GET_COMMENT = "GET_COMMENT";
// const ADD_COMMENT = "EDIT_COMMENT";
// const DELETE_COMMENT = "DELETE_COMMENT";

// action creator
const getComment = createAction(GET_COMMENT, (comments) => ({ comments }));
// const addComment = createAction(ADD_COMMENT, (commentInfo) => ({
//   commentInfo,
// }));
// const deleteComment = createAction(DELETE_COMMENT, (commentInfo) => ({
//   commentInfo,
// }));

// middleware
const getCommentsFB = (aptNo) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log("getCommentsFB 시작");
      const response = await apis.getComments(aptNo);
      console.log(response.data);

      dispatch(getComment(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const addCommentsFB = (aptNo, content) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log("addCommentsFB 시작");
      console.log(aptNo, content);
      const response = await apis.addComments(aptNo, content);
      console.log(response);

      dispatch(getCommentsFB(aptNo)); // 댓글 목록 다시 요청
    } catch (error) {
      console.log("addCommentsFB error");
    }
  };
};

const deleteCommentsFB = (aptNo, commentId) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("deleteCommentsFB 시작");
      const response = await apis.deleteComments(aptNo, commentId);
      console.log(response);
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
