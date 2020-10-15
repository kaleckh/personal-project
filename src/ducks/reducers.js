import { combineReducers } from "redux";
import user from "./user";
import tournaments from "./tournaments";
const reducers = combineReducers({
  user,
  tournaments,
});

export default reducers;
