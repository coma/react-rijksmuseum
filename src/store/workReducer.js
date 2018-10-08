import { FETCH_DONE, FETCH_FAILED } from './workActions';
import { SEARCH_DONE } from './worksActions';
import { workMapFull, worksMapPartial } from './workMap';

export default function workReducer (state = {}, { type, payload }) {
  switch (type) {
    case SEARCH_DONE:
      return payload.artObjects.reduce(worksMapPartial, state);

    case FETCH_DONE:
      return workMapFull(state, payload);

    case FETCH_FAILED:
      return { ...state, [payload.workId]: { error: payload.error } };

    default:
      return state;
  }
}
