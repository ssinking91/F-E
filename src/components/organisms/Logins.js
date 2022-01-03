import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GoogleLogin from "../utilities/GoogleLogin";
import FacebookLogin from "../utilities/FacebookLogin";
import NaverLogin from "../utilities/NaverLogin";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function Login() {
  const history = useHistory();

  if (sessionStorage.getItem("accessToken")) {
    history.replace("/");
  }

  const REST_API_KEY = "75adc3fd31a1e2d36b7d122383795fd7";
  // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const REDIRECT_URI = "https://together-zip.netlify.app/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <SocialWrap>
        <Logins>
          <Kakao>
            <a
              href={KAKAO_AUTH_URL}
              style={{ display: "flex", alignItems: "center" }}
            >
              <RiKakaoTalkFill
                style={{ marginRight: "20px", fontSize: "30px" }}
              />
              카카오 아이디로 로그인
            </a>
          </Kakao>
          <GoogleLogin />
          <FacebookLogin />
          <NaverLogin />
        </Logins>
      </SocialWrap>
    </>
  );
}

const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 50px;
`;

const Logins = styled.div`
  transition: 0.5s;
  padding: 50px;

  &:hover {
    border: 1px solid #999;
    border-radius: 10px;
    transform: scale(1.1);
  }
`;

const Kakao = styled.div`
  width: 185px;
  height: 40px;
  background-color: yellow;
  display: flex;
  /* align-items: center; */
  border-radius: 4px;
  margin: 20px 0;
  padding-left: 6px;
  outline: none;
  -webkit-box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;
