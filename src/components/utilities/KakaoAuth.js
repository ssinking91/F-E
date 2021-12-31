import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import qs from "qs";

export default function KakaoAuth() {
  const history = useHistory();

  const REST_API_KEY = "75adc3fd31a1e2d36b7d122383795fd7";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  // const REDIRECT_URI = "https://together-zip.netlify.app/oauth/kakao/callback";
  const CLIENT_SECRET = "GmNPzWqReNj1l9p0Xz7JWprN6XUhi9yy";

  const code = new URL(window.location.href).searchParams.get("code");

  // localStorage.setItem("code", code);

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );

      window.Kakao.init(REST_API_KEY);
      console.log(res.data);
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      localStorage.setItem("refreshToken", res.data.refresh_token);
      sessionStorage.setItem("accessToken", res.data.access_token);
      history.replace("/login/kakao");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{code}</div>;
}
