export const buildRequest = (url, query, limit, page) => {
  return `${url}?q=${query}&page=${page}&per_page=${limit * page}`;
};
