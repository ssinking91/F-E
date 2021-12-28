import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";

import { Grid } from "../atoms/index";

export default function NavBar() {
  const history = useHistory();

  function logIn() {
    console.log(11);
    history.push("/login");
  }

  function logOut() {
    console.log("logOut");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userKey");
    localStorage.removeItem("userName");
    localStorage.removeItem("userImage");
    sessionStorage.removeItem("accessToken");
    history.replace("/");
  }

  return (
    <>
      <HeaderWrap>
        <Grid width="100%">
          <Atag href="/#page1" style={{ width: "40px" }}>
            <Logo width="40" />
          </Atag>
        </Grid>
        <Grid is_flex>
          <Atag href="/#page2">
            <Heading1>관심지역.zip</Heading1>
          </Atag>
          <Atag href="/#page3">
            <Heading1>뜨는청약.zip</Heading1>
          </Atag>
          <Atag href="/#page4">
            <Heading1>청약정보.zip</Heading1>
          </Atag>
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
const Atag = styled.a`
  margin: auto;
  display: block;
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
  margin: 0px auto 50px;
  display: flex;
  padding-top: 30px;
`;
