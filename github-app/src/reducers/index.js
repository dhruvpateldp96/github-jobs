import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  theme: themeReducer,
  search: searchReducer,
  // globalState: searchReducer,
});
