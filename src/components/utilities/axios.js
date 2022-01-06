import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  // baseURL: "https://dotzip.shop",
  baseURL: "http://13.125.234.204",

  // 헤더에 넣을 정보
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  },
});

instance.interceptors.request.use(function (config) {
  config.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

export const apis = {
  // 카카오 로그인
  login: (userKey, nickname) =>
    instance.post("/api/users/login", { userKey, nickname }),

  // MainPage
  getTotalNum: () =>
    instance.get(`/api/main/total`, {
      userKey: localStorage.getItem("userKey"),
    }), // 전체 청약갯수
  getPrivateInfo: () =>
    instance.get(`/api/main/privateSido`, {
      userKey: localStorage.getItem("userKey"),
    }), // 민영 - 청약정보
  getPublicInfo: () =>
    instance.get(`/api/main/publicSido`, {
      userKey: localStorage.getItem("userKey"),
    }), // 공공 - 청약정보
  getPublicHot: () => instance.get(`/api/main/publicHot`), // 공공 - 찜하기 순
  // getMyPrivateInfo: (id) => instance.get(`/api/users/userId=${id}/privates`), // 민영 - 내가 지정한 지역정보
  // getMyPublicInfo: (id) => instance.get(`/api/users/userId=${id}/publics`), // 공공 - 내가 지정한 지역정보
  manySaved: () =>
    instance.get("/api/likes", { userKey: localStorage.getItem("userKey") }), // 저장된 청약정보 많은 순
  youtubeLink: () =>
    instance.get("/api/youtube", { userKey: localStorage.getItem("userKey") }), // 유튜브 링크 (예정)

  // DetailPage
  getDetailInfo: (locate) =>
    instance.get(`/api${locate}`, { userKey: localStorage.getItem("userKey") }),
  getDetailImg: (locate) =>
    instance.get(`/api${locate}/img`, {
      userKey: localStorage.getItem("userKey"),
    }),

  // DetailPageComment
  getComments: (aptNo) =>
    instance.get(`/api/comments/${aptNo}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 댓글보기
  addComments: (aptNo, commentInfo) =>
    instance.post(`/api/comments/${aptNo}`, {
      userKey: localStorage.getItem("userKey"),
      commentInfo,
    }), // 댓글등록
  editComments: (aptNo, commentId) =>
    instance.patch(`/api/comments/${aptNo}/${commentId}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 댓글수정
  deleteComments: (aptNo, commentId) =>
    instance.delete(`/api/comments/${aptNo}/${commentId}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 댓글삭제

  // MyPage
  getUserInfos: (userKey) =>
    instance.get(`/api/users/${userKey}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 유저정보 조회
  editUserInfos: (userName) =>
    instance.put(`/api/users/${userName}`, {
      userKey: localStorage.getItem("userKey"),
    }), // 유저정보 수정

  // Saved
  seved: (id) =>
    instance.post(`/api/userId=${id}/likes`, {
      userKey: localStorage.getItem("userKey"),
    }), // 청약정보 저장하기
};
