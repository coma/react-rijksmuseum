export const SEARCH = '@@works/SEARCH';
export const search = (searchTerm, sortBy, page = 0) => ({
  type: SEARCH,
  payload: { searchTerm, sortBy, page },
});

export const SEARCH_DOING = '@@works/SEARCH_DOING';
export const searchDoing = (searchTerm, sortBy, page = 0, resultsPerPage = 10) => ({
  type: SEARCH_DOING,
  payload: { searchTerm, sortBy, page, resultsPerPage },
});

export const SEARCH_DONE = '@@works/SEARCH_DONE';
export const searchDone = results => ({
  type: SEARCH_DONE,
  payload: results,
});

export const SEARCH_FAILED = '@@works/SEARCH_FAILED';
export const searchFailed = error => ({
  type: SEARCH_FAILED,
  payload: { error },
});
