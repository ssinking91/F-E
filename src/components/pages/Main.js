import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Main2Card from "../organisms/Main2-card";
import Main3Card from "../organisms/Main3-card";
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
      <Main2Card /> <br/> <br/> <br/>
      <Main3Card /> <br/> <br/> <br/>
      {/* <iframe width="490" height="277" src="https://www.youtube.com/embed/nEtiX7nN9qE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </>
  );
}
