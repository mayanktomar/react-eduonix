import countReducer from "./countReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: countReducer
})

export default allReducers;