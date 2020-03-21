import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../services/authenticationService';

import * as types from '../actions'


export function* loginSaga(payload) {
  const response = yield call(loginUserService, payload);
  if (response.status === 1) {
    yield put({ type: types.LOGIN_USER_SUCCESS, response })
  } else {
    yield put({ type: types.LOGIN_USER_ERROR, response })
  }
}