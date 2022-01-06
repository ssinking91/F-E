import styled from "styled-components";
import { NavLink, Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Logins from "./Logins";
import { Grid, Text } from "../atoms/index";

export default function NavBar() {
  const history = useHistory();

  // function logIn() {
  //   console.log(11);
  //   history.push("/login");
  // }

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
          <Grid>
            <Text h4 padding="6px 0">
              <NavLink
                to="/#page2"
                // activeStyle={{ color: "#20D7FF", fontWeight: "900" }}
                style={{ textAlign: "center" }}
              >
                관심지역.zip
              </NavLink>
            </Text>
          </Grid>
          <Grid>
            <Text h4 padding="6px 0">
              <NavLink
                to="/#page3"
                // activeStyle={{ color: "#20D7FF", fontWeight: "900" }}
                style={{ textAlign: "center" }}
              >
                뜨는청약.zip
              </NavLink>
            </Text>
          </Grid>
          <Grid>
            <Text h4 padding="6px 0">
              <NavLink
                to="/#page4"
                // activeStyle={{ color: "#20D7FF", fontWeight: "900" }}
                style={{ textAlign: "center" }}
              >
                청약정보.zip
              </NavLink>
            </Text>
          </Grid>
          <Grid>
            <Text h4 padding="6px 0">
              <NavLink
                to="/list"
                activeStyle={{
                  color: "#20D7FF",
                  fontWeight: "900",
                }}
                style={{ textAlign: "center" }}
              >
                전체보기.zip
              </NavLink>
            </Text>
          </Grid>
        </Grid>
        <Grid is_flex>
          {(sessionStorage.getItem("accessToken") && (
            <Grid is_flex>
              <Grid
                padding="6px 0"
                margin="0 0 0 auto"
                width="120px"
                center="center"
              >
                <Text h4 margin="auto">
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
        </Grid>
      </HeaderWrap>
      <Hr />
    </>
  );
}
const Hr = styled.div`
  border-top: 1px solid #e3e5eb;
`;

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
  position: fixed;
`;

// const HandleOn = styled.div`
//   transition: opacity 1s;
//   position: relative;

//   &:hover .handle {
//     transition: 1s;
//     opacity: 1 !important;
//     pointer-events: auto !important;
//   }
// `;

const HandleOff = styled.div`
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: -20px;
  left: -128px;
`;
