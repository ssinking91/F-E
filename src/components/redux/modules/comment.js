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

const addCommentsFB = (aptNo, commentInfo) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log("addCommentsFB 시작");
      console.log(aptNo, commentInfo);
      const response = await apis.addComments(aptNo, commentInfo);
      console.log(response);

      dispatch(getCommentsFB(aptNo)); // 댓글 목록 다시 요청
    } catch (error) {
      console.log("addCommentsFB error");
    }
  };
};

const deleteCommentsFB = (aptNo, commentInfo) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("deleteCommentsFB 시작");
      const response = await apis.deleteComments(aptNo, commentInfo);
      console.log(response);

      window.alert("댓글이 삭제 되었습니다.");
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
      snsId: "유저고유값",
      commentId: "댓글고유값",
      content: "내용",
      createdAt: "작성시간",
    },
  ],
};

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.comments);
        draft.list = action.payload.comments;
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
