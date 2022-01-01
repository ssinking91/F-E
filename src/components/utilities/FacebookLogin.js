import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import alert from "sweetalert2";
import { apis } from "./axios";

import { FaFacebookSquare } from "react-icons/fa";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const FaceBookLogin = () => {
  const history = useHistory();

  const responseFacebook = (res) => {
    console.log(res);
    const { id, name, accessToken } = res;
    localStorage.setItem("userKey", id);
    localStorage.setItem("userName", name);
    localStorage.setItem("userImage", res.picture.data.url);
    sessionStorage.setItem("accessToken", accessToken);

    const userKey = localStorage.getItem("userKey");
    const userName = localStorage.getItem("username");

    console.log(sessionStorage.getItem("accessToken"));
    console.log(userKey, userName);
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
            <FaFacebookSquare
              style={{
                marginRight: "10px",
                color: "white",
              }}
              size="30"
            />
            <ButtoninnerText>페이스북 아이디로 로그인</ButtoninnerText>
          </ButtonInnerDiv>
        </FaceBookLoginButton>
      )}
    ></FacebookLogin>
  );
};

const FaceBookLoginButton = styled.button`
  width: 185px;
  display: flex;
  background-color: cornflowerblue;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
  -webkit-box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  transition: 0.5s;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonInnerDiv = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`;

const ButtoninnerText = styled.h3`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

export default FaceBookLogin;
