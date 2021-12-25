import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function Main() {
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
      {(sessionStorage.getItem("accessToken") && (
        <div style={{ fontSize: "30px" }} onClick={() => logOut()}>
          로그아웃
        </div>
      )) || (
        <div style={{ fontSize: "30px" }} onClick={() => logIn()}>
          로그인
        </div>
      )}
    </>
  );
}
