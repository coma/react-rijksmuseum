import { takeEvery, select, call, put } from 'redux-saga/effects';
import { fetchWork } from './api';
import { FETCH, fetchDoing, fetchDone, fetchFailed } from './workActions';

function* handleWorkFetch ({ payload: { workId } }) {
  try {
    const isNotFetched = yield select(state => !state.work[workId] || !state.work[workId].isFull);
    if (isNotFetched) {
      yield put(fetchDoing(workId));
      const response = yield call(fetchWork, workId);
      yield put(fetchDone(response.body));
    }
  } catch(error) {
    yield put(fetchFailed(workId, error));
  }
}

function* onWorkFetch () {
  yield takeEvery(FETCH, handleWorkFetch);
}

export default function workSaga () {
  return [onWorkFetch()];
}
