export interface QueryParams {
  q: string;
  sort: string;
  order: string;
}

export interface RepoBody {
  id: string;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: string;
  forks_count: string;
}

export interface ResponseInterface {
  items: RepoBody[];
  total_count: number;
  incomplete_results: boolean;
}

export interface TabsProps {
  repos: RepoBody[] | undefined;
  starredRepos: RepoBody[] | undefined;
  updateStarred: (repos: RepoBody[]) => void;
}

export interface TabsPanelProps {
  selectedTab: string;
  data?: RepoBody[];
  starredIds?: string[];
  handleStar: (id: string) => void;
}

export type TabID = "all" | "starred";
