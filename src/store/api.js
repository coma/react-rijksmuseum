import request from 'superagent';

const root = process.env.REACT_APP_RIJKSMUSEUM_API_ROOT.replace(/\/$/, '');
const key = process.env.REACT_APP_RIJKSMUSEUM_API_KEY;
const format = 'json';

export function searchWorks (q, s, p, ps = 10) {
  return request
    .get(`${root}/collection`)
    .query({ key, format, q, s, ps, p });
}

export function fetchWork (id) {
  return request
    .get(`${root}/collection/${id}`)
    .query({ key, format });
}
