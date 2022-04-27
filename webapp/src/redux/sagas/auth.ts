import { put, call, takeEvery } from 'redux-saga/effects';
import { login, logout, getUser, setToken } from '../../services';
import { LOGIN_SAGA, LOGOUT_SAGA } from './actions';
import { 
  authLogin,
  authLoginSucceded,
  authLoginFailed,
  authLogoutSucceded,
  authLoadUserFailed,
  authLoadUserSucceded,
} from '../../redux/authSlice';

export function* loadPreferencesSaga(): any{
  try{
    const { data } = yield call(getUser);
    const { email, username } = data;
    const user = {
      email,
      username,
    }
    yield put(authLoadUserSucceded(user));
  }catch(error){
    yield put(authLoadUserFailed());
  }
};

export function* authLoginSaga(action: any): any {
  yield put(authLogin());
  const { payload } = action;
  try{
      const { data } = yield call(login, payload);
      const { key } = data;
      yield put(authLoginSucceded(key));
      setToken(key);
      yield loadPreferencesSaga();
    } catch (error) {
      setToken(null);
      yield put(authLoginFailed(error));
  }
}

export function* authLogoutSaga() {
  try {
    yield call(logout);
    yield put(authLogoutSucceded());
    setToken(null);
  }catch(error){
    console.log(error);
  }
}

export function* watchAuthSaga() {
  yield takeEvery(LOGIN_SAGA, authLoginSaga);
  yield takeEvery(LOGOUT_SAGA, authLogoutSaga);
}