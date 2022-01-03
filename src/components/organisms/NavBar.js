import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Logins from "./Logins";

import { Grid } from "../atoms/index";

export default function NavBar() {
  const history = useHistory();

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
          <Atag href="/#page2" style={{ margin: "0 0 0 auto" }}>
            <Heading1>관심지역.zip</Heading1>
          </Atag>
          <Atag href="/#page3" style={{ margin: "0" }}>
            <Heading1>뜨는청약.zip</Heading1>
          </Atag>
          <Atag href="/#page4" style={{ margin: "0 auto 0 0" }}>
            <Heading1>청약정보.zip</Heading1>
          </Atag>
        </Grid>
        <Grid>
          {(sessionStorage.getItem("accessToken") && (
            <Heading1 onClick={() => logOut()} style={{ margin: "auto" }}>
              로그아웃
            </Heading1>
          )) || (
            <Heading1
              style={{
                margin: "auto",
                cursor: "default",
                width: "65px",
                height: "38px",
              }}
            >
              <HandleOn style={{ margin: "auto" }}>
                로그인
                <HandleOff className="handle">
                  <Logins />
                </HandleOff>
              </HandleOn>
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
  margin: 0 15px;
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

const HandleOn = styled.div`
  transition: opacity 1s;
  position: relative;

  &:hover .handle {
    transition: 1s;
    opacity: 1 !important;
    pointer-events: auto !important;
  }
`;

const HandleOff = styled.div`
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;

  position: absolute;
  top: -20px;
  left: -128px;
`;
