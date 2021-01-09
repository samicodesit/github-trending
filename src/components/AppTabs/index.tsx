import React, { useCallback, useState } from "react";

import TabsPanel from './panel';
import { TabsProps, TabID } from '../../utils/types'
import { LOCALSTORAGE_KEY } from "../../utils/constants";
import { appTabs } from "../../utils/schemas";

import { TabsWrapper, TabsList, TabsItem, SubHeading } from './styling';

const Tabs = (props: TabsProps) => {
  const { repos, starredRepos, updateStarred }  = props;
  const [selectedTab, setSelectedTab] = useState<TabID>('all');
  const [starredIds, setStarredIds] = useState<string[] | undefined>(starredRepos?.map(repo => repo.id));

  const handleTabChange = useCallback((e, val) => {
    setSelectedTab(val);
    return false;
  }, []);

  const handleStar = useCallback(id => {
    let _storedIds = [];
    if (starredIds?.includes(id)) {
      _storedIds = starredIds.filter((_id: string) => _id !== id);
    } else {
      _storedIds = starredIds ? [...starredIds, id] : [id];
    }

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(_storedIds));
    setStarredIds(_storedIds);
    updateStarred(_storedIds);
  }, [starredIds, updateStarred]);

  const reposToRender = selectedTab === 'all' ? repos : starredRepos;

  console.log(reposToRender)
  return (
    <>
      <TabsWrapper>
        <SubHeading>Trending GitHub repositories created last week</SubHeading>
        <TabsList role="tablist">
          {
            appTabs.map(tabId => (
              <TabsItem key={tabId} role="presentation" selected={selectedTab === tabId}>
                <a
                  role="tab"
                  id={`tab-${tabId}`}
                  href={`#/${tabId}`}
                  aria-selected={selectedTab === tabId}
                  onClick={(e) => handleTabChange(e, tabId)}
                  onFocus={(e) => handleTabChange(e, tabId)}
                >
                  {tabId.toUpperCase()}
                </a>
              </TabsItem>
            ))
          }
        </TabsList>
      </TabsWrapper>

      <TabsPanel
        selectedTab={selectedTab}
        data={reposToRender}
        starredIds={starredIds}
        handleStar={handleStar}
      />
    </>
  );
};

export default Tabs;
