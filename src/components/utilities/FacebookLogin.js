import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import alert from "sweetalert2";
import { apis } from "./axios";

import { BsFacebook } from "react-icons/bs";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const FaceBookLogin = () => {
  const history = useHistory();

  const responseFacebook = (res) => {
    const { id, name, accessToken } = res;
    localStorage.setItem("userKey", id);
    localStorage.setItem("userName", name);
    localStorage.setItem("userImage", res.picture.data.url);
    sessionStorage.setItem("accessToken", accessToken);

    const userKey = localStorage.getItem("userKey");
    const nickname = localStorage.getItem("userName");

    apis.login(userKey, nickname);

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

  return (
    <FacebookLogin
      appId={3024486014468635}
      // appId={1354313235001903}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      render={(renderProps) => (
        <FaceBookLoginButton>
          <ButtonInnerDiv onClick={renderProps.onClick}>
            <BsFacebook size="30" />
          </ButtonInnerDiv>
        </FaceBookLoginButton>
      )}
    ></FacebookLogin>
  );
};

const FaceBookLoginButton = styled.button`
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
  color: #376aed;

  &::before {
    content: "다른 방법 로그인";
    position: absolute;
    color: #363940;
    font-size: 16px;
    margin-top: -126px;
    pointer-events: none;
  }
`;

const ButtonInnerDiv = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`;

export default FaceBookLogin;
