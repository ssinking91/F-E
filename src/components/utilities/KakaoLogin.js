import { useEffect } from "react";
import { apis } from "./axios";
import alert from "sweetalert2";

export default function KakaoLogin() {
  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      localStorage.setItem("userKey", data.id);
      localStorage.setItem("userName", data.properties.nickname);
      localStorage.setItem("userImage", data.properties.profile_image);

      const Alert = alert.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", alert.stopTimer);
          toast.addEventListener("mouseleave", alert.resumeTimer);
        },
      });

      Alert.fire({
        icon: "success",
        title: `${localStorage.getItem("userName")}님, 환영합니다.`,
      });

      const userKey = data.id;
      const nickname = data.properties.nickname;

      apis.login(userKey, nickname);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
