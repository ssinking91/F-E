import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
        <Heading1>로고</Heading1>
        <Heading1>관심지역.zip</Heading1>
        <Heading1>뜨는청약.zip</Heading1>
        <Heading1>청약정보.zip</Heading1>
        {(sessionStorage.getItem("accessToken") && (
          <div style={{ fontSize: "30px" }} onClick={() => logOut()}>
            로그아웃
          </div>
        )) || (
          <div style={{ fontSize: "30px" }} onClick={() => logIn()}>
            로그인
          </div>
        )}
      </HeaderWrap>
    </>
  );
}

const Heading1 = styled.h1`
  color: black;
  margin: 0 20px;
`;

const HeaderWrap = styled.div`
  display: flex;
  margin:  0 auto;
  width: 100%;
  height: 38px;
`;
