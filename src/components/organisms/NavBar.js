import styled from "styled-components";
import { NavLink, Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Logins from "./Logins";
import { Grid } from "../atoms/index";

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
        <Grid width="774px">
          <Atag href="/#page1" style={{ width: "40px" }}>
            <Logo width="40" color="black" />
          </Atag>
        </Grid>
        <Grid is_flex>
          <NavLink
            to="/#page2"
            activeStyle={{ color: "#20D7FF", fontWeight: "900" }}
          >
            <Heading1>관심지역.zip</Heading1>
          </NavLink>
          <NavLink
            to="/#page3"
            activeStyle={{ color: "#20D7FF", fontWeight: "900" }}
          >
            <Heading1>뜨는청약.zip</Heading1>
          </NavLink>
          <NavLink
            to="/#page4"
            activeStyle={{ color: "#20D7FF", fontWeight: "900" }}
          >
            <Heading1>청약정보.zip</Heading1>
          </NavLink>
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
              {/* <HandleOn style={{ margin: "auto" }}> */}
              <Link to="/login">로그인</Link>
              <HandleOff className="handle">
                <Logins />
              </HandleOff>
              {/* </HandleOn> */}
            </Heading1>
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
  height: 97px;
  margin: 0px auto;
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
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
