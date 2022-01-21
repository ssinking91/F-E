import styled from "styled-components";
import { NavLink, Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Logins from "./Logins";
import { Grid, Text } from "../atoms/index";

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
        <Container>
          <Items>
            <Items1>
              <Atag href="/#page1">
                <Logo width="40" color="black" />
              </Atag>
            </Items1>

            <Items2>
              <Items2In>
                <Text h4 margin="0" padding="6px 0" width="120px">
                  <NavLink to="/#page2" style={{ textAlign: "center" }}>
                    관심지역.zip
                  </NavLink>
                </Text>
              </Items2In>
              <Items2In>
                <Text h4 margin="0" padding="6px 0" width="120px">
                  <NavLink to="/#page3" style={{ textAlign: "center" }}>
                    뜨는청약.zip
                  </NavLink>
                </Text>
              </Items2In>
              <Items2In>
                <Text h4 margin="0" padding="6px 0" width="120px">
                  <NavLink to="/#page4" style={{ textAlign: "center" }}>
                    청약정보.zip
                  </NavLink>
                </Text>
              </Items2In>
              <Items2In>
                <Text h4 margin="0" padding="6px 0" width="120px">
                  <NavLink to="/list" activeStyle={{ color: "#20d7ff" }}>
                    전체보기.zip
                  </NavLink>
                </Text>
              </Items2In>
              <Items2In>
                <Text h4 margin="0" padding="6px 0" width="120px">
                  <NavLink to="/map" activeStyle={{ color: "#20d7ff" }}>
                    청약지도.zip
                  </NavLink>
                </Text>
              </Items2In>
              {(localStorage.getItem("userKey") && (
                <>
                  <Items2In>
                    <Text h4 margin="0" color="black" width="120px">
                      <NavLink to="/mypage" activeStyle={{ color: "#20d7ff" }}>
                        My Page
                      </NavLink>
                    </Text>
                  </Items2In>
                  <Items2In>
                    <LogWrap
                      onClick={() => logOut()}
                      style={{ margin: "0 auto 0 0" }}
                    >
                      <Text h4 margin="0" color="#a5aab6">
                        로그아웃
                      </Text>
                    </LogWrap>
                  </Items2In>
                </>
              )) || (
                <Items2In>
                  <LogWrap>
                    <Link to="/login">
                      <Text h4 margin="0" color="#a5aab6">
                        로그인
                      </Text>
                    </Link>
                    <HandleOff className="handle">
                      <Logins />
                    </HandleOff>
                  </LogWrap>
                </Items2In>
              )}
            </Items2>
          </Items>
        </Container>
      </HeaderWrap>
      <Hr />
    </>
  );
}
const Hr = styled.div`
  border-top: 1px solid #e3e5eb;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 97px;
  margin: 0px auto;
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
  position: absolute;
  z-index: 800;
  position: fixed;
  opacity: 0.8;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94%;
  margin: 0 auto;
`;
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Items1 = styled.div`
  display: flex;
  width: 40px;
`;

const Items2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
`;

const Items2In = styled.div`
  width: 120px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const HandleOff = styled.div`
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: -20px;
  left: -128px;
`;

const Atag = styled.a`
  width: 100%;
  margin: auto;
  display: block;
`;

const LogWrap = styled.div`
  width: 100px;
  margin: 0;
  padding: 4px 0px;
  border: 1px solid #a5aab6;
  text-align: center;
  border-radius: 19px;
  cursor: pointer;
`;
