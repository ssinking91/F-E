import styled from "styled-components";
import alert from "sweetalert2";
import { useLocation, useHistory } from "react-router-dom";

export default function NaverLogin() {
  const location = useLocation();
  const history = useHistory();

  const naverScript = document.createElement("script");
  naverScript.src =
    "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
  naverScript.type = "text/javascript";
  document.head.appendChild(naverScript);

  naverScript.onload = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: `ZRzqCFcqpiEhAdr5vdzG`,
      callbackUrl: "http://localhost:3000",
      callbackHandle: false,
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "green", type: 3, height: "40" },
    });

    naverLogin.init();
    naverLogin.logout();
    naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log("naver 로그인 상태", naverLogin.user);
        const { id, name, profile_image } = naverLogin.user;
        localStorage.setItem("userKey", id);
        localStorage.setItem("userName", name);
        localStorage.setItem("userImage", profile_image);

        getNaverToken();

        history.replace("/");

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

        if (id === undefined) {
          alert("필수정보제공동의 필요");
          naverLogin.repromt();
          return;
        } else {
          console.log("naver 비로그인 상태");
        }
      }
    });
  };

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
    console.log(token);
    sessionStorage.setItem("accessToken", token);
  };

  return (
    <>
      <NaverLoginBtn id="naverIdLogin"></NaverLoginBtn>
    </>
  );
}

const NaverLoginBtn = styled.div`
  height: 40px;
  -webkit-box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  border-radius: 3px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
