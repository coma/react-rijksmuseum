import qs from 'qs';

export const SORT_BY_RELEVANCE = 'relevance';
export const SORT_BY_TYPE = 'objecttype';
export const SORT_BY_DATE_ASC = 'chronologic';
export const SORT_BY_DATE_DESC = 'achronologic';
export const SORT_BY_ARTIST_ASC = 'artist';
export const SORT_BY_ARTIST_DESC = 'artistdesc';

const availableSorts = [
  SORT_BY_RELEVANCE,
  SORT_BY_TYPE,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DESC,
  SORT_BY_ARTIST_ASC,
  SORT_BY_ARTIST_DESC,
];

const createSorter = (asc, desc) => (link, by) => ({
  isAsc: asc === by,
  isDesc: desc === by,
  sort: link(by === asc ? desc : asc),
});

export const SORTER = {
  title: createSorter(SORT_BY_RELEVANCE, ''),
  type: createSorter(SORT_BY_TYPE, ''),
  date: createSorter(SORT_BY_DATE_ASC, SORT_BY_DATE_DESC),
  artist: createSorter(SORT_BY_ARTIST_ASC, SORT_BY_ARTIST_DESC),
};

export default function worksQueryParse ({ search }) {
  const query = qs.parse(search.replace(/^\?/, ''));
  const searchTerm = query.searchTerm.trim();

  if (!searchTerm) {
    throw new Error('empty searchTerm...');
  }

  let page = Number.parseInt(query.page, 10);
  page = isNaN(page) ? 0 : Math.max(page, 0);

  const sortBy = availableSorts.includes(query.sortBy)
    ? query.sortBy
    : undefined;

  return { page, searchTerm, sortBy };
}
