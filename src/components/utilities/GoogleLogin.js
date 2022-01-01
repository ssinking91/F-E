import React from "react";
import { GoogleLogin } from "react-google-login";
import alert from "sweetalert2";
import { useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import { apis } from "./axios";

export default function Google() {
  const history = useHistory();

  const responseGoogle = (res) => {
    console.log(res);
    localStorage.setItem("userKey", res.googleId);
    localStorage.setItem("userName", res.profileObj.name);
    localStorage.setItem("userImage", res.profileObj.imageUrl);
    sessionStorage.setItem("accessToken", res.accessToken);

    const userKey = localStorage.getIetem("userKey");
    const userName = localStorage.getItem("username");

    // apis
    //   .login(userKey, userName)
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));

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
    <GoogleLogin
      //localhost
      clientId="651636673303-7r5ukngucs24s929n6irun22kjc1kbh2.apps.googleusercontent.com"
      render={(renderProps) => (
        <GoogleLoginBtn
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <FcGoogle size="30" style={{ marginRight: "20px" }} />
          구글 아이디로 로그인
        </GoogleLoginBtn>
      )}
      buttonText="Sign In With Google"
      onSuccess={responseGoogle}
      onFailure={failureMsg}
      cookiePolicy={"single_host_origin"}
      isSignedIn={false}
    />
  );
}

const GoogleLoginBtn = styled.button`
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

  &:hover {
    transform: scale(1.1);
  }
`;
