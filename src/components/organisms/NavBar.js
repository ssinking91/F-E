import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";

import { Grid, Image, Text, Button } from "../atoms/index";

export default function NavBar() {
  const history = useHistory();

  function logIn() {
    console.log(11);
    history.push("/login");
  }

  function logOut() {
    console.log("logOut");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userkey");
    localStorage.removeItem("usernickname");
    sessionStorage.removeItem("accessToken");
    history.replace("/");
  }

  return (
    <>
      <HeaderWrap>
        <Grid width="100%">
          <a href="/">
            <Logo width="40" />
          </a>
        </Grid>
        <Grid is_flex>
          <Heading1>관심지역.zip</Heading1>
          <Heading1>뜨는청약.zip</Heading1>
          <Heading1>청약정보.zip</Heading1>
        </Grid>
        <Grid>
          {(sessionStorage.getItem("accessToken") && (
            <Heading1 onClick={() => logOut()}>로그아웃</Heading1>
          )) || (
            <Heading1 style={{ margin: "auto" }} onClick={() => logIn()}>
              로그인
            </Heading1>
          )}
        </Grid>
      </HeaderWrap>
    </>
  );
}
const Atag = styled.div`
  width: 40px;
  height: 40px;
`;

const Heading1 = styled.h1`
  color: black;
  margin: 0 20px;
  padding: 13px 0;
  width: 70px;
  height: 38px;
  font-size: 12px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  z-index: 1;
  position: absolute;
  margin: 30px auto;
  display: flex;
`;
