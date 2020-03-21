import { takeEvery, call, put } from 'redux-saga/effects';

import { FORMS, ONEFORM } from '../constants/types';

import { getAllDocuments, getDocumentById, createDocument, updateDocument, deleteDocument } from '../services/pouchdDBService';

export const watchGetForms = function* () {
  yield takeEvery(FORMS.LOAD, workerGetforms);
}

function* workerGetforms() {
  console.log('get forms');
  try {
    const forms = yield call(getAllDocuments, 'form');
    yield put({ type: FORMS.LOAD_SUCCESS, forms: forms });
  } catch (error) {
    // dispatch error action
    yield put({ type: FORMS.LOAD_FAIL, error: error });
  }
}

export const watchDeleteForm = function* () {
  yield takeEvery(ONEFORM.DELETE_SUCCESS, workerDeleteforms);
}

function* workerDeleteforms(action) {
  console.log('DELETE one form');

  try {
    yield call(deleteDocument, action.payload);
    const forms = yield call(getAllDocuments, 'form');
    yield put({ type: FORMS.LOAD_SUCCESS, forms: forms });
  } catch (error) {
    // dispatch error action
    yield put({ type: FORMS.LOAD_FAIL, error: error });
  }
}

export const watchGetForm = function* () {
  yield takeEvery(ONEFORM.LOAD, workerGetform);
}

function* workerGetform(action) {
  console.log('get one form');

  try {
    const form = yield call(getDocumentById, action.payload);
    yield put({ type: ONEFORM.LOAD_SUCCESS, form: form });
  } catch (error) {
    // dispatch error action
    yield put({ type: ONEFORM.LOAD_FAIL, error: error });
  }
}

export const watchUpdateForm = function* () {
  yield takeEvery(ONEFORM.UPDATE_SUCCESS, workerUpdateform);
}

function* workerUpdateform(action) {
  try {
    const form = yield call(updateDocument, action.payload);
    yield put({ type: ONEFORM.UPDATE_SUCCESS, form: form });
  } catch (error) {
    // dispatch error action
    yield put({ type: ONEFORM.UPDATE_FAIL, error: error });
  }
}

export const watchPostForm = function* () {
  yield takeEvery(ONEFORM.CREATE, workerPostform);
}

function* workerPostform(action) {
  try {
    const form = yield call(createDocument, action.payload);
    yield put({ type: ONEFORM.CREATE_SUCCESS, form: form });
  } catch (error) {
    yield put({ type: ONEFORM.CREATE_FAIL, error: error });
  }
}