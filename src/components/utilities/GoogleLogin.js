import React from "react";
import { GoogleLogin } from "react-google-login";

export default function Google() {
  const responseGoogle = (res) => {
    console.log(res);
    localStorage.setItem("username", res.profileObj.name);
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
      isSignedIn={true}
    />
  );
}
