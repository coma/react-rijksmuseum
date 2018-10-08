import { all } from 'redux-saga/effects';
import worksSaga from './worksSaga';
import workSaga from './workSaga';

export default function* saga () {
  yield all([
    ...worksSaga(),
    ...workSaga(),
  ]);
}
