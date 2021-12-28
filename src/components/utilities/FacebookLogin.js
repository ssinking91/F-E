import React from "react";
import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const FaceBookLoginButton = styled.button`
{...styled-components}
`;

const ButtonInnerDiv = styled.div`
{...styled-components}
`;

const ButtoninnerText = styled.h3`
{...styled-components}
`;

const FaceBookLogin = ({ oAuthLoginHandler }) => {
  const responseFacebook = (response) => {
    const { id, email } = response;
    oAuthLoginHandler(Number(id), email);
  };

  return (
    <FacebookLogin
      appId={3024486014468635}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      render={(renderProps) => (
        <FaceBookLoginButton>
          <ButtonInnerDiv onClick={renderProps.onClick}>
            <FaFacebookSquare
              style={{
                marginRight: "23px",
                fontSize: "26px",
              }}
            />
            <ButtoninnerText>페이스북 계정으로 로그인</ButtoninnerText>
          </ButtonInnerDiv>
        </FaceBookLoginButton>
      )}
    ></FacebookLogin>
  );
};

export default FaceBookLogin;
