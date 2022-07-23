import { combineReducers } from "redux";

import user from "./slices/Users";


const reducers = combineReducers({ 
  user,
});
export default reducers;