import React, { useState, useMemo } from 'react';
import Tabs from './AppTabs/index';

import { RepoBody } from '../types';
import { LOCALSTORAGE_KEY } from '../utils/constants';

const AppView = ({ repos }: { repos: RepoBody[] | undefined }) => {
  const [refreshStarred, setRefreshStarred] = useState(false);

  const starredRepos = useMemo(() => {
    const starredIdsStringified = localStorage.getItem(LOCALSTORAGE_KEY);
    const starredIds = starredIdsStringified ? JSON.parse(starredIdsStringified) : [];

    return repos?.filter(repo => starredIds.includes(repo.id))
  }, [repos, refreshStarred]);

  const updateStarred = () => {
    setRefreshStarred(val => !val);
  }

  return (
    <main>
      <Tabs repos={repos} starredRepos={starredRepos} updateStarred={updateStarred}></Tabs>
    </main>
  )
}

export default AppView
