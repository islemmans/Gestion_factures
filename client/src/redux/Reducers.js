import { combineReducers } from "redux";

import user from "./slices/User";


const reducers = combineReducers({ 
  user,
});
export default reducers;