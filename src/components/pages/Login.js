import { useHistory } from "react-router-dom";
import NavBar from "../organisms/NavBar";
import SocialLogin from "../organisms/Logins";

export default function Login() {
  const history = useHistory();

  if (sessionStorage.getItem("accessToken")) {
    history.replace("/");
  }

  return (
    <>
      <NavBar />
      <SocialLogin />
    </>
  );
}
