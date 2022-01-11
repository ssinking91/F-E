import styled from "styled-components";
import { useHistory, useLocation, NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Logins from "./Logins";
import { Grid, Text } from "../atoms/index";

export default function NavBarAnchor() {
  const history = useHistory();
  const location = useLocation();
  // console.log(location);

  // function logIn() {
  //   console.log(11);
  //   history.push("/login");
  // }

  function logOut() {
    // console.log("logOut");
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
          <Grid>
            <Atag href="/#page2">
              {(location.hash === "#page2" && (
                <Text h4 color="#20D7FF" padding="6px 0">
                  관심지역.zip
                </Text>
              )) || (
                <Text h4 padding="6px 0">
                  관심지역.zip
                </Text>
              )}
            </Atag>
          </Grid>
          <Grid>
            <Atag href="/#page3">
              {(location.hash === "#page3" && (
                <Text h4 color="#20D7FF" padding="6px 0">
                  뜨는청약.zip
                </Text>
              )) || (
                <Text h4 padding="6px 0">
                  뜨는청약.zip
                </Text>
              )}
            </Atag>
          </Grid>
          <Grid>
            <Atag href="/#page4">
              {(location.hash === "#page4" && (
                <Text h4 color="#20D7FF" padding="6px 0">
                  청약정보.zip
                </Text>
              )) || (
                <Text h4 padding="6px 0">
                  청약정보.zip
                </Text>
              )}
            </Atag>
          </Grid>
          <Grid>
            <Text h4 margin="auto" padding="6px 0">
              <NavLink to="/list" activeStyle={{ color: "#20d7ff" }}>
                전체보기.zip
              </NavLink>
            </Text>
          </Grid>
        </Grid>
        <Grid is_flex>
          {(localStorage.getItem("userKey") && (
            <Grid is_flex>
              <Grid
                padding="6px 0"
                margin="0 0 0 auto"
                width="120px"
                center="center"
              >
                <Text h4 margin="auto" color="black">
                  <NavLink to="/mypage" activeStyle={{ color: "#20d7ff" }}>
                    My Page
                  </NavLink>
                </Text>
              </Grid>
              <LogWrap
                onClick={() => logOut()}
                style={{ margin: "0 auto 0 0" }}
              >
                <Text h4 margin="auto" color="#a5aab6">
                  로그아웃
                </Text>
              </LogWrap>
            </Grid>
          )) || (
            <LogWrap>
              {/* <HandleOn style={{ margin: "auto" }}> */}
              <Link to="/login">
                <Text h4 margin="auto" color="#a5aab6">
                  로그인
                </Text>
              </Link>

              <HandleOff className="handle">
                <Logins />
              </HandleOff>
              {/* </HandleOn> */}
            </LogWrap>
          )}
          <Link to="/test">
            <Text h4 margin="auto" color="#a5aab6">
              TestPage
            </Text>
          </Link>
        </Grid>
        {/* <Grid>
          {(sessionStorage.getItem("accessToken") && (
            <Heading1 onClick={() => logOut()} style={{ margin: "auto" }}>
              로그아웃
            </Heading1>
          )) || (
            <Heading1 style={{ margin: "auto" }} onClick={() => logIn()}>
              로그인
            </Heading1>
          )}
        </Grid> */}
      </HeaderWrap>
    </>
  );
}
const Atag = styled.a`
  margin: auto;
  display: block;
`;

const LogWrap = styled.div`
  width: 100px;
  margin: auto;
  padding: 4px 0px;
  border: 1px solid #a5aab6;
  text-align: center;
  border-radius: 19px;
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
  // position: absolute;
  z-index: 3;
  opacity: 0.8;
  transition: 0.5s;

  &:hover {
    opacity: 1;
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
