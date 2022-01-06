import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GoogleLogin from "../utilities/GoogleLogin";
import FacebookLogin from "../utilities/FacebookLogin";
import NaverLogin from "../utilities/NaverLogin";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Grid } from "../atoms/index";

export default function Login() {
  const history = useHistory();

  if (sessionStorage.getItem("accessToken")) {
    history.replace("/");
  }

  const REST_API_KEY = "75adc3fd31a1e2d36b7d122383795fd7";
  // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const REDIRECT_URI = "https://www.dotzip.today/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <SocialWrap>
        <Logins>
          <Kakao>
            <a
              href={KAKAO_AUTH_URL}
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <RiKakaoTalkFill
                style={{ marginRight: "5px", fontSize: "26px" }}
              />
              카카오 로그인
            </a>
          </Kakao>
          <Grid is_flex justify_content="space-between">
            <GoogleLogin />
            <FacebookLogin />
            <NaverLogin />
          </Grid>
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

const Logins = styled.div``;

const Kakao = styled.div`
  width: 360px;
  height: 58px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin: 43px 0 70px;
  padding-left: 6px;
  cursor: pointer;
  font-size: 16px;
`;
