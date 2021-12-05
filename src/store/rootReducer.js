import { combineReducers } from "redux";

import { globalReducer } from "./ducks/Global/reducer";
import { userReducer } from "./ducks/User/reducer";

export const rootReducer = combineReducers({
  Gobal: globalReducer,
  User: userReducer
})

