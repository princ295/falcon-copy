import { combineReducers } from "redux";
import { globalReducer } from "./ducks/Global/reducer";



export const rootReducer = combineReducers({
  Gobal: globalReducer,
  // User: userReducer
})

