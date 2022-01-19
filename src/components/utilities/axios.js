import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  // baseURL: "https://dotzip.shop",
  baseURL: "http://13.125.234.204",

  // 헤더에 넣을 정보
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    // authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  },
});

instance.interceptors.request.use(function (config) {
  config.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem(
    "accessToken"
  )}`;
  config.headers.common["userKey"] = `${localStorage.getItem("userKey")}`;
  return config;
});

export const apis = {
  // 카카오 로그인
  login: (userKey, nickname) =>
    instance.post("/api/users/login", {
      userKey,
      nickname,
      profileImg: localStorage.getItem("userImage"),
    }),

  // MainPage
  getTotalNum: () =>
    instance.get(`/api/main/total`, {
      userKey: localStorage.getItem("userKey"),
    }), // 전체 청약갯수
  getPrivateInfo: () =>
    instance.post(`/api/main/privateSido`, {
      userKey: localStorage.getItem("userKey"),
    }), // 민영 - 청약정보
  getPublicInfo: () =>
    instance.post(`/api/main/publicSido`, {
      userKey: localStorage.getItem("userKey"),
    }), // 공공 - 청약정보
  // getPrivateHot: () => instance.get(`/api/main/privateHot`), // 공공 - 찜하기 순
  getPublicHot: () => instance.post(`/api/main/publicHot`), // 공공 - 찜하기 순

  // DetailPage
  getDetailInfo: (locate) =>
    instance.post(`/api${locate}`, {
      userKey: localStorage.getItem("userKey"),
    }),

  getDetailImg: (locate) =>
    instance.post(`/api${locate}/img`, {
      userKey: localStorage.getItem("userKey"),
    }),

  // DetailPageComment
  getComments: (aptNo) =>
    instance.get(`/api/comments/${aptNo}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 댓글보기
  addComments: (aptNo, content) =>
    instance.post(`/api/comments/${aptNo}`, {
      userKey: localStorage.getItem("userKey"),
      content,
    }), // 댓글등록
  editComments: (aptNo, commentId) =>
    instance.patch(`/api/comments/${aptNo}/${commentId}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 댓글수정
  deleteComments: (aptNo, commentId) =>
    instance.delete(`/api/comments/${aptNo}/${commentId}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 댓글삭제

  // allList
  getPrivateLists: (ftSido) =>
    instance.post(`/api/private?sido=${ftSido}`, {
      userKey: localStorage.getItem("userKey"),
    }),
  getPublicLists: (ftSido) =>
    instance.post(`/api/public?sidoName=${ftSido}`, {
      userKey: localStorage.getItem("userKey"),
    }),
  // MyPage
  getUserInfos: (userKey) =>
    instance.get(`/api/users/${userKey}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 유저정보 조회

  editUserInfos: (userName, sido) =>
    instance.put(`/api/users/${userName}`, {
      userKey: localStorage.getItem("userKey"),
      sido: sido,
    }), // 유저정보 수정

  // 유저 정보 수정(관심지역)
  saved: (aptNo) =>
    instance.post(`/api/likes/${aptNo}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 청약정보 저장하기

  // 유저 정보 수정(이메일)
  editEmail: (userName, email) =>
    instance.put(`/api/users/${userName}/email`, {
      userKey: localStorage.getItem("userKey"),
      email: email,
    }), // 이메일 보내기
};
