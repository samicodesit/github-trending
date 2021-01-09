import { getLastWeek } from "./helpers";

export const initialParams = {
  q: `created:>${getLastWeek()}`,
  sort: "stars",
  order: "des",
};

export const appTabs = ["all", "starred"];
