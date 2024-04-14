/** @format */

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { seatReducer } from "./seatReducer";

export let rootReducer = combineReducers({
  userReducer,
  seatReducer,
});
