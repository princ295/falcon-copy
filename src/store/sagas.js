import { all } from "redux-saga/effects";
import { userSaga } from "./ducks/User/sagas";

export default function* rootSaga() {
  yield all([ userSaga()])
}