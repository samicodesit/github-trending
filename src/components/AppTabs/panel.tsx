import Container from '../common/Container';
import { TabsPanelProps } from '../../types'
import { ReactComponent as Fork } from '../../fork.svg'
import {
  RepoItem,
  RepoInfo,
  RepoStats,
  RepoActions,
  StarButton,
  SVGWrapper
} from './styling'

const TabsPanel = (props: TabsPanelProps) => {
  const { selectedTab, data, starredIds, handleStar } = props;

  return (
    <section
      style={{marginBottom: 50}}
      role="tabpanel"
      id={selectedTab}
      aria-labelledby={`tab-${selectedTab}`}
    >
      <Container bordered={true}>
        {
          (!data || !data.length) && (
            <p>Nothing to show here</p>
          )
        }
        {
          data?.map((repo) => (
            <RepoItem key={repo.id}>
              <RepoInfo>
                <a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name}</a>
                <small>{repo.description}</small>
                <RepoStats>
                  <p title="total stars">★ {repo.stargazers_count}</p>

                  <SVGWrapper>
                    <Fork />
                  </SVGWrapper>
                  <p title="total forks">{repo.forks_count}</p>
                </RepoStats>
              </RepoInfo>
              <RepoActions>
                <StarButton onClick={() => handleStar(repo.id)} starred={starredIds?.includes(repo.id)}>
                  {starredIds?.includes(repo.id) ? 'Starred' : 'Star'}
                </StarButton>
              </RepoActions>
            </RepoItem>
          ))
        }
      </Container>
    </section>
  )
};

export default TabsPanel;
