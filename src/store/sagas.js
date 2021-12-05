import { all } from "redux-saga/effects";
import { globalSaga } from "./ducks/Global/saga";


export default function* rootSaga() {
  yield all([ globalSaga()])
}