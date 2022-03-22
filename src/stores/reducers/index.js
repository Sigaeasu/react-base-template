import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import notificationReducer from "./notificationReducer"

const reducers = combineReducers({
  Sample: sampleReducer,
  Notification: notificationReducer
});

export default reducers;