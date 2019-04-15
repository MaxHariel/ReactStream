import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import streamsReducer from "./streamsReducer";
import { reducer as reducerForm } from "redux-form";

export default combineReducers({
  auth: AuthReducer,
  form: reducerForm,
  streams: streamsReducer
});
