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
    localStorage.removeItem("userKey");
    localStorage.removeItem("userName");
    localStorage.removeItem("userImage");
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
  z-index: 1;
  position: absolute;
  display: flex;
`;
