import React from "react";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";

const SigninPage: React.FC = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <SignInContainer>
      <Container>
        <ContainerTop>
          <h1>Sign In whith Google</h1>
        </ContainerTop>
        <ContainerBody>
          <GoogleLogin
            clientId="클라이언트ID 입력"
            buttonText="GoogleLogin"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </ContainerBody>
      </Container>
    </SignInContainer>
  );
};

export default SigninPage;

const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Container = styled.div`
  border: 2px solid grey;
  box-shadow: -5px 5px darkgray;
  width: 600px;
  height: 500px;
`;

const ContainerTop = styled.div`
  background-color: white;
  border: none;
  text-align: center;
`;

const ContainerBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 300px;
`;
