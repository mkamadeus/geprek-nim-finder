import { parse, stringify } from 'query-string';

export const setQueryStringWithoutReload = (qs: string) => {
  const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${qs}`;
  window.history.pushState({ path: newUrl }, '', newUrl);
};

export const setQueryStringValue = (
  key: string,
  value: string,
  queryString = window.location.search,
) => {
  const values = parse(queryString);
  const newValues = stringify({ ...values, [key]: value });
  setQueryStringWithoutReload(`?${newValues}`);
};

export const getQueryStringValue = (key: string, queryString = window.location.search) => {
  const values = parse(queryString);
  return values[key];
};
