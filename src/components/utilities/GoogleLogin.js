import React from "react";
import { GoogleLogin } from "react-google-login";
import alert from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function Google() {
  const history = useHistory();

  const responseGoogle = (res) => {
    console.log(res);
    localStorage.setItem("username", res.profileObj.name);
    sessionStorage.setItem("accessToken", res.accessToken);

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
      title: `${localStorage.getItem("username")}님, 환영합니다.`,
    });
  };

  const failureMsg = (res) => {
    console.log(res);
  };

  return (
    <GoogleLogin
      //localhost
      clientId="651636673303-7r5ukngucs24s929n6irun22kjc1kbh2.apps.googleusercontent.com"
      buttonText="Sign In With Google"
      onSuccess={responseGoogle}
      onFailure={failureMsg}
      cookiePolicy={"single_host_origin"}
      isSignedIn={false}
    />
  );
}
