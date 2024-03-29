import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./Main";
import List from "./List.js";
import Detail from "./Detail";
import Login from "./Login";
import MyPage from "./MyPage";
import KakaoAuth from "../utilities/KakaoAuth";
import KakaoLogin from "../utilities/KakaoLogin";
import Map from "./Map";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/list" component={List} />
      <Route path="/private/:aptNo" component={Detail} />
      <Route path="/public/:aptNo" component={Detail} />
      <Route path="/MyPage" component={MyPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/login/kakao" component={KakaoLogin} />
      <Route path="/oauth/kakao/callback" component={KakaoAuth} />
      <Route path="/map" component={Map} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
