import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";
import Login from "./Login";

export default function router() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/detail/1" component={Detail} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}
