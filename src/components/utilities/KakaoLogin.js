import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apis } from "./axios";
import Swal from "sweetalert2";

export default function KakaoLogin() {
  const history = useHistory();

  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
      localStorage.setItem("userkey", data.id);
      localStorage.setItem("usernickname", data.properties.nickname);

      apis.login(data.id, data.properties.nickname);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("첫번째");
    getProfile().then(history.replace("/"));
    console.log("move");
  }, []);

  return null;
}
