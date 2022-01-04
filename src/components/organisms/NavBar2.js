import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";

import { Grid } from "../atoms/index";

export default function NavBar2() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

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
            <Logo width="40" color="black" />
          </Atag>
        </Grid>
        <Grid is_flex>
          <Atag href="/#page2" style={{ margin: "0 0 0 auto" }}>
            {(location.hash === "#page2" && (
              <Heading1 style={{ color: "#20D7FF", fontWeight: "800" }}>
                관심지역.zip
              </Heading1>
            )) || <Heading1>관심지역.zip</Heading1>}
          </Atag>
          <Atag href="/#page3" style={{ margin: "0" }}>
            {(location.hash === "#page3" && (
              <Heading1 style={{ color: "#20D7FF", fontWeight: "800" }}>
                뜨는청약.zip
              </Heading1>
            )) || <Heading1>뜨는청약.zip</Heading1>}
          </Atag>
          <Atag href="/#page4" style={{ margin: "0 auto 0 0" }}>
            {(location.hash === "#page4" && (
              <Heading1 style={{ color: "#20D7FF", fontWeight: "800" }}>
                청약정보.zip
              </Heading1>
            )) || <Heading1>청약정보.zip</Heading1>}
          </Atag>
        </Grid>
        <Grid>
          {(sessionStorage.getItem("accessToken") && (
            <Heading1 onClick={() => logOut()} style={{ margin: "auto" }}>
              로그아웃
            </Heading1>
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
  cursor: pointer;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 97px;
  margin: 0px auto;
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
`;
