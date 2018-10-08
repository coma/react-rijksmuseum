import { SEARCH_DOING, SEARCH_DONE, SEARCH_FAILED } from './worksActions';

export default function worksReducer (state = {}, { type, payload }) {
  switch (type) {
    case SEARCH_DOING:
      return { ...payload, isSearching: true };

    case SEARCH_DONE: {
      const ids = payload.artObjects.map(work => work.objectNumber);
      const pages = Math.ceil(payload.count / state.resultsPerPage);
      const isSearching = false;

      return { ...state, ids, pages, isSearching };
    }

    case SEARCH_FAILED:
      return { ...state, ...payload, isSearching: false };

    default:
      return state;
  }
}
