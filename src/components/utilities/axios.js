import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  // baseURL: "https://dotzip.shop",
  baseURL: "http://52.78.27.210",

  // 헤더에 넣을 정보
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  },
});

export const apis = {
  // 카카오 로그인
  login: (userkey, userName) =>
    instance.post("/api/users/login", { userkey, nickname: userName }),

  // MainPage
  getPrivateInfo: () => instance.get(`/api/main/privateSido`), // 민영 - 청약정보
  getMyPrivateInfo: (id) => instance.get(`/api/users/userId=${id}/privates`), // 민영 - 내가 지정한 지역정보
  getMyPublicInfo: (id) => instance.get(`/api/users/userId=${id}/publics`), // 공공 - 내가 지정한 지역정보
  manySaved: () => instance.get("/api/likes"), // 저장된 청약정보 많은 순
  youtubeLink: () => instance.get("/api/youtube"), // 유튜브 링크 (예정)

  // DetailPage
  getPrivateDetailInfo: (apt_id) =>
    instance.get(`/api/private/aptNo=${apt_id}`), // 민영 - 상세페이지 정보
  getPublicDetailInfo: (apt_id) => instance.get(`/api/public/aptNo=${apt_id}`), // 공공 - 상세페이지 정보

  // DetailPageComment
  getComments: (aptNo) => instance.get(`/api/comments/${aptNo}`), // 댓글보기
  addComments: (aptNo, commentInfo) =>
    instance.post(`/api/comments/${aptNo}`, commentInfo), // 댓글등록
  editComments: (aptNo, commentId) =>
    instance.patch(`/api/comments/${aptNo}/${commentId}`), // 댓글수정
  deleteComments: (aptNo, commentId) =>
    instance.delete(`/api/comments/${aptNo}/${commentId}`), // 댓글삭제

  // MyPage
  getUserInfo: (userKey) => instance.get(`/api/user/${userKey}`), // 유저정보 조회
  editUserInfo: (userName) => instance.put(`/api/user/${userName}`), // 유저정보 수정

  // Saved
  seved: (id) => instance.post(`/api/userId=${id}/likes`), // 청약정보 저장하기
};
