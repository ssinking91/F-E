import React from "react";
import NaverLogin from "react-naver-login";
import alert from "sweetalert2";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SiNaver } from "react-icons/si";
import { apis } from "./axios";

export default function Naver() {
  const history = useHistory();

  const responseNaver = (res) => {
    console.log("success");
    console.log(res);
    localStorage.setItem("userKey", res.id);
    localStorage.setItem("userName", res.name);
    localStorage.setItem("userImage", res.profile_image);
    sessionStorage.setItem("accessToken", res.accessToken);

    const userKey = localStorage.getIetem("userKey");
    const userName = localStorage.getItem("username");

    apis
      .login(userKey, userName)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

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
  };

  const failureMsg = (res) => {
    console.log(res);
  };

  return (
    <NaverLogin
      clientId="ZRzqCFcqpiEhAdr5vdzG"
      callbackUrl="http://localhost:3000"
      isPopup="false"
      render={(renderProps) => (
        <NaverLoginBtn
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          isPopup="false"
        >
          <SiNaver size="30" style={{ color: "white", marginRight: "20px" }} />
          네이버 아이디로 로그인
        </NaverLoginBtn>
      )}
      buttonText="Sign In With Naver"
      onSuccess={responseNaver}
      onFailure={failureMsg}
      cookiePolicy={"single_host_origin"}
      isSignedIn={false}
    />
  );
}

const NaverLoginBtn = styled.button`
  width: 185px;
  height: 40px;
  font-size: 12px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  -webkit-box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  transition: 0.5s;
  font-weight: bold;
  background-color: green;
  color: #fff;

  &:hover {
    transform: scale(1.1);
  }
`;
