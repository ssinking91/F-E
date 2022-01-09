import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import Main from "./Main";
import List from "./List.jsx";
import Detail from "./Detail";
import Login from "./Login";
import MyPage from "./MyPage";
import KakaoAuth from "../utilities/KakaoAuth";
import KakaoLogin from "../utilities/KakaoLogin";
import Test from "./Test";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPrivateListDB, getPublicListDB } from "../redux/modules/allList";

export default function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("test");
    dispatch(getPrivateListDB(""));
    dispatch(getPublicListDB(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/list" component={List} />
        <Route path="/private/:aptNo" component={Detail} />
        <Route path="/public/:aptNo" component={Detail} />
        <Route path="/MyPage" component={MyPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/login/kakao" component={KakaoLogin} />
        <Route path="/oauth/kakao/callback" component={KakaoAuth} />
        <Route path="/test" component={Test} />
        <Redirect from="*" to="/" />
      </Switch>
    </ConnectedRouter>
  );
}
