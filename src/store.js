// It'd be better to use @redux-toolkit with configureStore
// Example https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600370
// Read docs on react-thunk

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux_state/reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
