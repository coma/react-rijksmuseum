import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'connected-react-router';
import qs from 'qs';
import parseQuery from './worksQueryParse';
import { searchWorks } from './api';
import { SEARCH, searchDoing, searchDone, searchFailed } from './worksActions';
import { fetchWork } from './workActions';

const pathname = '/works';
const resultsPerPage = 10;

function* handleWorksSearch ({ payload: { searchTerm, sortBy, page } }) {
  const query = qs.stringify({ searchTerm, sortBy, page });
  yield put(push(`${pathname}?${query}`));
}

function* handleWorksRouteChange ({ payload: { location } }) {
  if (location.pathname !== pathname) {
    return;
  }

  try {
    const query = parseQuery(location);

    const { searchTerm, sortBy, page } = query;
    yield put(searchDoing(searchTerm, sortBy, page, resultsPerPage));

    const response = yield call(searchWorks, searchTerm, sortBy, page, resultsPerPage);
    yield put(searchDone(response.body));

    const map = yield select(state => state.work);
    const ids = response.body.artObjects
      .filter(work => !map[work.objectNumber].isFetched)
      .map(work => work.objectNumber);

    while (ids.length) {
      yield put(fetchWork(ids.shift()));
    }

  } catch (error) {
    yield put(searchFailed(error));
  }
}

export function* onWorksSearch () {
  yield takeLatest(SEARCH, handleWorksSearch);
}

export function* onWorksRouteChange () {
  yield takeLatest(LOCATION_CHANGE, handleWorksRouteChange);
}

export default function worksSaga () {
  return [onWorksSearch(), onWorksRouteChange()];
}
