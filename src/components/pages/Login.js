import { useHistory } from "react-router-dom";
import LoginTemp from "../templates/LoginTemp";

export default function Login() {
  const history = useHistory();

  if (sessionStorage.getItem("accessToken")) {
    history.replace("/");
  }

  return (
    <>
      <LoginTemp />
    </>
  );
}
