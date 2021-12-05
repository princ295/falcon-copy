import { put, takeLatest } from "redux-saga/effects";
import { GlobalApi } from "../../../utils/globalApi";
import { setStage, setState, setUserData, setUserLoadingStatus } from "./actionCreator";



export function* fetchStateRequest(){
  try {
    // yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const data = yield call(GlobalApi.getState);
    // window.localStorage.setItem('token', data.token);
    yield put(setState(data));
    console.log('data store in sucessfully')
    // yield put(setNotificationSuccess('Login is Successfull'));
  }
  catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    // yield put(setModalStatus(undefined));
    // yield put(setNotificationError('Login Fail'));
  }
}



export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
//   yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
//   yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
}
    