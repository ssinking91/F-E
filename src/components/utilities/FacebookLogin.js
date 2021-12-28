import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import alert from "sweetalert2";

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
      // appId={3024486014468635}
      appId={1354313235001903}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      render={(renderProps) => (
        <FaceBookLoginButton>
          <ButtonInnerDiv onClick={renderProps.onClick}>
            <FaFacebookSquare
              style={{
                marginRight: "20px",
                color: "white",
              }}
              size="30"
            />
            <ButtoninnerText>Sign In With Facebook</ButtoninnerText>
          </ButtonInnerDiv>
        </FaceBookLoginButton>
      )}
    ></FacebookLogin>
  );
};

const FaceBookLoginButton = styled.button`
  width: 300px;
  display: flex;
  background-color: cornflowerblue;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
  -webkit-box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonInnerDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

const ButtoninnerText = styled.h3`
  color: #fff;
  font-size: 16px;
`;

export default FaceBookLogin;
