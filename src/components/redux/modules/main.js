import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../utilities/axios";

const IS_SAVED = "IS_SAVED";
const GET_TOTAL = "GET_TOTAL";
const GET_PRIVATEINFO = "GET_PRIVATEINFO";
const GET_PUBLICINFO = "GET_PUBLICINFO";
const GET_PUBLICHOT = "GET_PUBLICHOT";
const SAVE_CARD = "SAVE_CARD";

const saved = createAction(IS_SAVED, (aptNo) => ({ aptNo }));
// Section 01
const getTotal = createAction(GET_TOTAL, (total) => ({ total }));
// Section 02
const getPrivateInfo = createAction(GET_PRIVATEINFO, (private_list) => ({
  private_list,
}));
const getPublicInfo = createAction(GET_PUBLICINFO, (public_list) => ({
  public_list,
}));
// Section 03
const getPublicHot = createAction(GET_PUBLICHOT, (public_list_hot) => ({
  public_list_hot,
}));

const savedCard = createAction(SAVE_CARD, (aptNo, status, islike) => ({
  aptNo,
  status,
  islike,
}));

const savedPost = (aptNo) => {
  return function (dispatch, getState, { history }) {
    apis
      .seved()
      .then((res) => {
        console.log("savedPost 접근");
        console.log(res.data);
        dispatch(saved(aptNo));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// Section 01
const getTotalDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getTotalNum()
      .then((res) => {
        console.log("getTotalDB 접근");
        // console.log(res.data);
        dispatch(getTotal(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// Section 02
const getPrivateInfoDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPrivateInfo()
      .then((res) => {
        console.log("getPrivateInfoDB 접근");
        console.log(res.data);
        dispatch(getPrivateInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const getPublicInfoDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPublicInfo()
      .then((res) => {
        console.log("getPublicInfoDB 접근");
        console.log(res.data);
        dispatch(getPublicInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// Section 03
const getPublicHotDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPublicHot()
      .then((res) => {
        console.log("getPublicHotDB 접근");
        // console.log(res.data);
        dispatch(getPublicHot(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const savedFB2 = (aptNo, status, islike) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("main savedFB 시작");
      const response = await apis.saved(aptNo);
      console.log(response.data.data);

      //let result = response.data.data;
      islike=String(islike);
      console.log(islike);
      console.log(typeof islike);
      dispatch(savedCard(aptNo, status, islike));
      console.log("main savedFB 끝");
      dispatch(savedCard(aptNo, status, islike));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  total: {},
  private_list: {
    privateSido1: [],
    statusArr: [],
  },
  public_list: [],
  public_list_hot: [],
};

export default handleActions(
  {
    // [IS_SAVED]: (state, action) =>
    // produce(state, (draft) => {

    // })
    // Section 01
    [GET_TOTAL]: (state, action) =>
      produce(state, (draft) => {
        draft.total = action.payload.total;
      }),
    // Section 02
    [GET_PRIVATEINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.private_list = action.payload.private_list;
      }),
    [GET_PUBLICINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.public_list = action.payload.public_list;
      }),
    // Section 03
    [GET_PUBLICHOT]: (state, action) =>
      produce(state, (draft) => {
        draft.public_list_hot = action.payload.public_list_hot;
      }),

    [SAVE_CARD]: (state, action) =>
      produce(state, (draft) => {
        console.log("main save_card 리듀서 시작");
        console.log(action.payload.islike);
        if (action.payload.status === "public") {
         const section2IslikeIdx = draft.public_list.findIndex((item, idx) => {
            return item.panId === action.payload.aptNo;
          });
          console.log("main public save_card 리듀서 중간");
          draft.public_list[section2IslikeIdx] = {
            ...draft.public_list[section2IslikeIdx], 
            islike : action.payload.islike,
          };
          console.log(draft.public_list[section2IslikeIdx])
          console.log(draft.public_list)

        } 
        
        else if (action.payload.status === "private") {
          const section2IslikeIdx = draft.private_list.privateSido1.findIndex((item, idx) => {
            return item.pblancNo === action.payload.aptNo;
          });
          console.log("main private save_card 리듀서 중간");
          draft.private_list.privateSido1[section2IslikeIdx] = {
            ...draft.private_list.privateSido1[section2IslikeIdx],
            islike: action.payload.islike,
          };
          console.log(draft.private_list.privateSido1[section2IslikeIdx]);
          console.log(draft.private_list.privateSido1);
          
        }
      }),
  },
  initialState
);

const actionCreators = {
  // Section 01
  getTotal,
  getTotalDB,
  // Section 02
  getPrivateInfo,
  getPrivateInfoDB,
  getPublicInfo,
  getPublicInfoDB,
  // Section 03
  getPublicHot,
  getPublicHotDB,
  savedPost,
  //찜하기 버튼
  savedFB2,
};

export { actionCreators };
