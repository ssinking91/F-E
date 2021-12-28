import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GoogleLogin from "../utilities/GoogleLogin";
import FacebookLogin from "../utilities/FacebookLogin";

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
      <Kakao>
        <a href={KAKAO_AUTH_URL}>KAKAO LOGIN</a>
      </Kakao>
      <GoogleLogin />
      <FacebookLogin />
    </>
  );
}

const Kakao = styled.div`
  width: 185px;
  height: 30px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin: 3px 2px;
  -webkit-box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 5px 19px 1px rgba(0, 0, 0, 0.55);
  cursor: pointer;
`;
