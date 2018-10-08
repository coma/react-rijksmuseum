export const FETCH = '@@work/FETCH';
export const fetchWork = workId => ({
  type: FETCH,
  payload: { workId },
});

export const FETCH_DOING = '@@work/FETCH_DOING';
export const fetchDoing = workId => ({
  type: FETCH_DOING,
  payload: { workId },
});

export const FETCH_DONE = '@@work/FETCH_DONE';
export const fetchDone = work => ({
  type: FETCH_DONE,
  payload: work,
});

export const FETCH_FAILED = '@@work/FETCH_FAILED';
export const fetchFailed = (workId, error) => ({
  type: FETCH_FAILED,
  payload: { workId, error },
});
