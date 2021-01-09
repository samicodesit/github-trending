import React, { useEffect, useState } from 'react';

import GlobalStyles from './components/common/GlobalStyles';
import SpinnerLayout from './components/common/Spinner';
import AppHeader from './components/AppHeader';
import AppView from './components/AppView';

import { initialParams } from './utils/schemas';
import { RepoBody } from './types';
import useFetch from './api'

function App() {
  const { response, isLoading, error } = useFetch(initialParams);
  const [repos, setRepos] = useState<RepoBody[] | undefined>([]);

  useEffect(() => {
    setRepos(response?.items);
  }, [response])

  if (error) return <h2>{error?.message}</h2>

  return (
    <>
      <GlobalStyles />
      <div className="App">
        {
          isLoading ? (
            <SpinnerLayout />
          ) : (
            <>
              <AppHeader/>
              <AppView repos={repos} />
            </>
          )
        }
      </div>
    </>
  );
}

export default App;
