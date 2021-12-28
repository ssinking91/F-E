import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GoogleLogin from "../utilities/GoogleLogin";
import FacebookLogin from "../utilities/FacebookLogin";
import { RiKakaoTalkFill } from "react-icons/ri";
import NavBar from "../organisms/NavBar";

export default function Login() {
  const history = useHistory();

  if (sessionStorage.getItem("accessToken")) {
    history.replace("/");
  }

  const REST_API_KEY = "75adc3fd31a1e2d36b7d122383795fd7";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  // const REDIRECT_URI = "https://together-zip.netlify.app/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <NavBar />
      <SocialWrap>
        <Logins>
          <Kakao>
            <RiKakaoTalkFill style={{ marginRight: "20px" }} size="30" />
            <a href={KAKAO_AUTH_URL}>Sign In With KAKAO</a>
          </Kakao>
          <GoogleLogin />
          <FacebookLogin />
        </Logins>
      </SocialWrap>
    </>
  );
}

const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logins = styled.div`
  position: relative;
  top: 250px;
`;

const Kakao = styled.div`
  width: 300px;
  height: 45px;
  background-color: yellow;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin: 20px 0;
  padding-left: 6px;
  outline: none;
  -webkit-box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  cursor: pointer;
  font-size: 16px;
`;
