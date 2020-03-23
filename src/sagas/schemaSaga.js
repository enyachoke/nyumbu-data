import { takeEvery, call, put } from 'redux-saga/effects';

import { SCHEMAS, ONESCHEMA } from '../constants/types';

import {
  getAllDocumentsByType, getAllSchemaDocumentsByFormId, getDocumentById, createDocument,
  updateDocument, deleteDocument
} from '../services/pouchdDBService';

export const watchGetSchemas = function* () {
  yield takeEvery(SCHEMAS.LOAD, workerGetschemas);
}

function* workerGetschemas(action) {
  try {
    const schemas = yield call(getAllSchemaDocumentsByFormId, 'schema');
    yield put({ type: SCHEMAS.LOAD_SUCCESS, schemas: schemas });
  } catch (error) {
    // dispatch error action
    yield put({ type: SCHEMAS.LOAD_FAIL, error: error });
  }
}

export const watchDeleteSchema = function* () {
  yield takeEvery(ONESCHEMA.DELETE_SUCCESS, workerDeleteschemas);
}

function* workerDeleteschemas(action) {

  try {
    yield call(deleteDocument, action.payload);
    const schemas = yield call(getAllDocumentsByType, 'schema');
    yield put({ type: SCHEMAS.LOAD_SUCCESS, schemas: schemas });
  } catch (error) {
    // dispatch error action
    yield put({ type: SCHEMAS.LOAD_FAIL, error: error });
  }
}

export const watchGetSchema = function* () {
  yield takeEvery(ONESCHEMA.LOAD, workerGetschema);
}

function* workerGetschema(action) {
  try {
    const schema = yield call(getDocumentById, action.payload);
    yield put({ type: ONESCHEMA.LOAD_SUCCESS, schema: schema });
  } catch (error) {
    // dispatch error action
    yield put({ type: ONESCHEMA.LOAD_FAIL, error: error });
  }
}

export const watchUpdateSchema = function* () {
  yield takeEvery(ONESCHEMA.UPDATE_SUCCESS, workerUpdateschema);
}

function* workerUpdateschema(action) {
  try {
    const schema = yield call(updateDocument, action.payload);
    yield put({ type: ONESCHEMA.UPDATE_SUCCESS, schema: schema });
  } catch (error) {
    // dispatch error action
    yield put({ type: ONESCHEMA.UPDATE_FAIL, error: error });
  }
}

export const watchPostSchema = function* () {
  yield takeEvery(ONESCHEMA.CREATE, workerPostschema);
}

function* workerPostschema(action) {
  try {
    const newPayload = { ...{ type: 'schema' }, ...action.payload }
    const schema = yield call(createDocument, newPayload);
    yield put({ type: ONESCHEMA.CREATE_SUCCESS, schema: schema });
  } catch (error) {
    yield put({ type: ONESCHEMA.CREATE_FAIL, error: error });
  }
}