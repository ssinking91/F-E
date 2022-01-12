import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import Main from "./modules/main";
import Detail from "./modules/detail";
import Mypage from "./modules/mypage";
import Comment from "./modules/comment";
import CardSave from "./modules/cardSave";
import allList from "./modules/allList";
import map from "./modules/map";

//---- Reducer ----

//---- history----
export const history = createBrowserHistory();

//---- rootReducer ----
const rootReducer = combineReducers({
  main: Main,
  detail: Detail,
  mypage: Mypage,
  comment: Comment,
  cardSave: CardSave,
  allList: allList,
  map: map,
  router: connectRouter(history),
});

// ---- middleware ----
const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//---- redux devTools ----
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

//---- 미들웨어 묶기 ----
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//---- 스토어 만들기 ----
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
