import { takeEvery, call, put } from 'redux-saga/effects';

import { DATARECORDS, ONEDATARECORD } from '../constants/types';

import { getAllDocumentsByType, getDocumentById, createDocument, updateDocument, deleteDocument } from '../services/pouchdDBService';

export const watchGetDataRecords = function* () {
  yield takeEvery(DATARECORDS.LOAD, workerGetdataRecords);
}

function* workerGetdataRecords() {
  console.log('get dataRecords');
  try {
    const dataRecords = yield call(getAllDocumentsByType, 'dataRecord');
    yield put({ type: DATARECORDS.LOAD_SUCCESS, dataRecords: dataRecords });
  } catch (error) {
    // dispatch error action
    yield put({ type: DATARECORDS.LOAD_FAIL, error: error });
  }
}

export const watchDeleteDataRecord = function* () {
  yield takeEvery(ONEDATARECORD.DELETE_SUCCESS, workerDeletedataRecords);
}

function* workerDeletedataRecords(action) {
  console.log('DELETE one dataRecord');

  try {
    yield call(deleteDocument, action.payload);
    const dataRecords = yield call(getAllDocumentsByType, 'dataRecord');
    yield put({ type: DATARECORDS.LOAD_SUCCESS, dataRecords: dataRecords });
  } catch (error) {
    // dispatch error action
    yield put({ type: DATARECORDS.LOAD_FAIL, error: error });
  }
}

export const watchGetDataRecord = function* () {
  yield takeEvery(ONEDATARECORD.LOAD, workerGetdataRecord);
}

function* workerGetdataRecord(action) {
  try {
    const dataRecord = yield call(getDocumentById, action.payload);
    yield put({ type: ONEDATARECORD.LOAD_SUCCESS, dataRecord: dataRecord });
  } catch (error) {
    // dispatch error action
    yield put({ type: ONEDATARECORD.LOAD_FAIL, error: error });
  }
}

export const watchUpdateDataRecord = function* () {
  yield takeEvery(ONEDATARECORD.UPDATE, workerUpdatedataRecord);
}

function* workerUpdatedataRecord(action) {
  try {
    const dataRecord = yield call(updateDocument, action.payload.data);
    yield put({ type: ONEDATARECORD.UPDATE_SUCCESS, dataRecord: dataRecord });
  } catch (error) {
    // dispatch error action
    yield put({ type: ONEDATARECORD.UPDATE_FAIL, error: error });
  }
}

export const watchPostDataRecord = function* () {
  yield takeEvery(ONEDATARECORD.CREATE, workerPostdataRecord);
}

function* workerPostdataRecord(action) {
  try {
    console.log('Data', action.payload)
    const payload = action.payload
    const newPayload = { ...{ type: 'dataRecord' }, ...payload.data }
    const dataRecord = yield call(createDocument, newPayload);
    yield put({ type: ONEDATARECORD.CREATE_SUCCESS, dataRecord: dataRecord });
  } catch (error) {
    yield put({ type: ONEDATARECORD.CREATE_FAIL, error: error });
  }
}