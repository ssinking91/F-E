import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apis } from "./axios";
import Swal from "sweetalert2";

export default function KakaoLogin() {
  const history = useHistory();

  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      localStorage.setItem("userkey", data.id);
      localStorage.setItem("usernickname", data.properties.nickname);
      localStorage.setItem("userImage", data.properties.profile_image);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `${localStorage.getItem("usernickname")}님, 환영합니다.`,
      });

      apis.login(data.id, data.properties.nickname);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile().then(history.replace("/"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
