import { put, takeLatest, call } from "redux-saga/effects";
import { GlobalApi } from "../../../utils/globalApi";
import { setState } from "./actionCreator";
import { GlobalStateActionType } from "./contracts/actionType";



export function* fetchStateRequest(){
  try {
    alert('Api Hit')
    // yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const data = yield call(GlobalApi.getState);
    // window.localStorage.setItem('token', data.token);
    console.log(data)
    yield put(setState(data));
    console.log('data store in sucessfully')
    // yield put(setNotificationSuccess('Login is Successfull'));
  }
  catch (error) {
    // yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    // yield put(setModalStatus(undefined));
    // yield put(setNotificationError('Login Fail'));
  }
}



export function* globalSaga() {
  yield takeLatest(GlobalStateActionType.FETCH_STATE, fetchStateRequest);
//   yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
//   yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
}
    