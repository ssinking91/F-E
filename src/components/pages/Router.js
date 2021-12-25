import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";
import Login from "./Login";
import KakaoAuth from "../utilities/KakaoAuth";
import KakaoLogin from "../utilities/KakaoLogin";

export default function router() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/detail/1" component={Detail} />
          <Route path="/login" exact component={Login} />
          <Route path="/login/kakao" component={KakaoLogin} />
          <Route path="/oauth/kakao/callback" component={KakaoAuth} />
          <Route exact path="/" component={Main} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}
