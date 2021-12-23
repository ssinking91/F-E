import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from "./Detail";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/detail/1" component={Detail} />
          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
