import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utilities/axios";

// action type
const GET_USERINFO = " GET_USERINFO";
const EDIT_USERINFO = "EDIT_USERINFO";

// action creator
const getUserInfo = createAction(GET_USERINFO, (userInfo) => ({ userInfo }));
const editUserInfo = createAction(EDIT_USERINFO, (sido) => ({ sido }));

// middleware
const getUserInfosFB = (userKey) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log("getUserInfosFB 시작");
      const response = await apis.getUserInfos(userKey);
      console.log(response);

      dispatch(getUserInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const editUserInfosFB = (userName) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log("editUserInfosFB 시작");

      const response = await apis.editUserInfos(userName);
      console.log(response);

      dispatch(editUserInfo(response)); // 댓글 목록 다시 요청
    } catch (error) {
      console.log("editUserInfosFB error");
    }
  };
};

// initial state
const initialState = {
  list: {
    existuser: {
      nickname: "곽",
      userKey: "12345",
      sido: "경기",
      createdAt: "2021-12-31T06:15:51.000Z",
      updatedAt: "2021-12-31T06:15:51.000Z",
    },

    public: [
      {
        panState: "접수마감",
        panUploadDate: "2021.12.02",
        aisTypeCode: "10",
        suplyTypeCode: "063",
        sidoName: "강원도",
        panId: "2015122300010090",
        uppAisTypeName: "임대주택",
        aisTypeName: "행복주택",
        startDate: "2021.12.13",
        closeDate: "2021.12.22",
        announceDate: "2022.04.22",
        submitStartDate: "2022.01.03",
        submitEndDate: "2022.01.07",
        contractStartDate: "",
        contractEndDate: "",
        houseCnt: "212",
        size: "21.74~44.93",
        moveYM: "2024.01",
        heatMethod: "개별가스난방",
        panDate: "20211202",
        uppAisTypeCode: "06",
        panName: "춘천후평 행복주택(산업단지형) 입주자 모집",
        allCount: "294",
        fileLink: "https://apply.lh.or.kr/fileDownAdapter.lh?fileid=46457240",
        address: "강원도 춘천시 후평동 333-13",
        detailUrl:
          "https://apply.lh.or.kr/LH/index.html?gv_url=SIL::CLCC_SIL_0065.xfdl&gv_menuId=1010203&gv_param=CCR_CNNT_SYS_DS_CD:03,PAN_ID:2015122300010090,LCC:Y",
        csCode: "03",
        createdAt: "2021-12-30T02:59:53.000Z",
        updatedAt: "2021-12-30T02:59:53.000Z",
        ImgUrl:
          "https://image.ajunews.com//content/image/2021/06/17/20210617221916152271.jpg",
        islike: "true",
      },
    ],
    
    private: [
      {
        pblancNo: 2021000878,
        executor: "(주)에버종합건설",
        operation: "민영",
        houseManageNo: 2021000878,
        houseName: "미륵산 더 테라스 오투그란데 2차",
        winDate: "2021-12-28",
        receptStartDate: "2021-12-20",
        receptEndDate: "2021-12-22",
        recruitDate: "20211209",
        rentSection: "분양주택",
        sido: "전북",
        createdAt: "2021-12-30T02:56:46.000Z",
        updatedAt: "2021-12-30T02:56:46.000Z",
        size: "112.2730~112.2730",
        supplyAmount: "36,920~44,490",
        ImgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6vvDaphvFtW2BvXsEgdzCPxINUdp3jlC151AIFQp664cKQ03&s",
        islike: "true",
      },
    ],
  },
};

export default handleActions(
  {
    [GET_USERINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.userInfo;
      }),
    [EDIT_USERINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list.sido = action.payload.sido;
      }),
  },
  initialState
);

const mypagetActions = {
  getUserInfosFB,
  editUserInfosFB,
};

export { mypagetActions };
