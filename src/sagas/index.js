import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watchers';
import {
  watchGetForms, watchGetForm, watchPostForm,
  watchUpdateForm, watchDeleteForm
} from './formSaga';

import {
  watchGetDataRecords, watchGetDataRecord, watchPostDataRecord,
  watchUpdateDataRecord, watchDeleteDataRecord
} from './dataRecordSaga';

import {
  watchGetSchemas, watchGetSchema, watchPostSchema,
  watchUpdateSchema, watchDeleteSchema
} from './schemaSaga';
export default function* startForman() {
  yield fork(watchUserAuthentication);
  
  yield fork(watchGetForms);
  yield fork(watchGetForm);
  yield fork(watchPostForm);
  yield fork(watchUpdateForm);
  yield fork(watchDeleteForm);

  yield fork(watchGetSchemas);
  yield fork(watchGetSchema);
  yield fork(watchPostSchema);
  yield fork(watchUpdateSchema);
  yield fork(watchDeleteSchema);

  yield fork(watchGetDataRecords);
  yield fork(watchGetDataRecord);
  yield fork(watchPostDataRecord);
  yield fork(watchUpdateDataRecord);
  yield fork(watchDeleteDataRecord);
}