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

    const userKey = localStorage.getItem("userKey");
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
      callbackUrl="https://www.dotzip.today"
      isPopup="false"
      render={(renderProps) => (
        <NaverLoginBtn
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          isPopup="false"
        >
          <SiNaver size="30" />
          {/* 네이버 아이디로 로그인 */}
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
  width: 100px;
  height: 58px;
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #dadada;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  color: green;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 5px;
    width: 110px;
    margin-top: -126px;
    border-top: 1px solid #363940;
    pointer-events: none;
  }
`;
