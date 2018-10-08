import qs from 'qs';

export function fromQueryParse ({ search }) {
  try {
    const query = qs.parse(search.replace(/^\?/, ''));
    return atob(query.from);
  } catch (error) {
    return '/';
  }
}

export function fromQueryStringify (pathname, search = '') {
  try {
    const url = `${pathname}${search}`
    return `from=${btoa(url)}`;
  } catch (error) {
    return '';
  }
}
