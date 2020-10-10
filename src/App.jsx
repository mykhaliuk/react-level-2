import React, { useCallback, useLayoutEffect, useState } from 'react';
import './App.css';
import { debounce } from 'lodash';
import { buildRequest } from './utils/build-request';
import { fetchData } from './utils/fetch-data';
import { Search } from './components/search';
import { UsersList } from './components/users-list';
import { ErrorMessage } from './components/error-message';

const URL = 'https://api.github.com/search/users';
const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
const limit = 25;
const page = 1;

function App() {
  const [query, setQuery] = useState('');
  const [respond, setRespond] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const request = buildRequest(URL, query, limit, page);

  useLayoutEffect(() => {
    if (query === '') return;
    (async function () {
      setIsLoading(() => true);
      const res = await fetchData(request, requestOptions);
      setRespond(res);
      setIsLoading(() => false);
    })();
  }, [query, request]);

  const handleSearch = (q = '') => {
    q = q.trim();
    if (!!q && q !== query) {
      setQuery(q);
    }
  };

  const handleSearchDebounced = useCallback(
    debounce(handleSearch, 1000, { leading: true, trailing: true }),
    [],
  );

  return (
    <div className="App">
      <Search onChange={handleSearchDebounced} {...{ isLoading }} />
      {respond ? (
        respond.error ? (
          <ErrorMessage data={respond.error} />
        ) : (
          <UsersList data={respond.data} />
        )
      ) : null}
    </div>
  );
}

export default App;
