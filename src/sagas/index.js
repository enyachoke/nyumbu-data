import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watchers';
import { watchGetForms , watchGetForm , watchPostForm ,
   watchUpdateForm, watchDeleteForm} from './formSaga';
export default function* startForman() {
  yield fork(watchUserAuthentication);
  yield fork(watchGetForms);
  yield fork(watchGetForm);
  yield fork(watchPostForm);
  yield fork(watchUpdateForm);
  yield fork(watchDeleteForm);
}