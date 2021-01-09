import styled from "styled-components";

export const RepoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  &:not(:last-child) {
    border-bottom: 1px solid var(--gray);
  }
  &:last-child {
    margin-bottom: 16px;
  }
  a {
    display: block;
    font-weight: 500;
    font-size: 20px;
    text-align: left;
    margin: 0.8rem 0;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: var(--blue);
    }
  }
`;

export const RepoInfo = styled.div`
  text-align: left;
  flex: 0 0 75%;

  @media (max-width: 420px) {
    flex-basis: 60%;
  }
`;

export const RepoStats = styled.div`
  display: flex;
  p {
    margin: 0;
    margin-top: 10px;
    margin-right: 20px;
  }
`;

export const RepoActions = styled.div``;

export const StarButton = styled.button<{ starred?: boolean }>`
  background-color: ${(props) => (props.starred ? "var(--yellow)" : "var(--gray)")};
  cursor: pointer;
  border: 1px solid var(--gray-dark);
  min-width: 50px;
  padding: 8px 24px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.4;
  &:hover {
    background-color: ${(props) =>
      props.starred ? "var(--yellow)" : "var(--gray-dark)"};
  }
  &:focus,
  :active {
    outline: none;
  }

  @media (max-width: 420px) {
    min-width: 20px;
    padding: 4px 12px;
  }
`;

export const TabsWrapper = styled.div`
  padding: 1rem;
  margin: 1.5rem 0;
`;

export const TabsList = styled.ul`
  display: inline-flex;
`;

export const TabsItem = styled.li<{ selected: boolean }>`
  min-width: 100px;
  background-color: ${(props) => (props.selected ? "var(--blue)" : "none")};
  color: ${(props) => (props.selected ? "var(--white)" : "inherit")};
  border-color: ${(props) => (props.selected ? "var(--blue)" : "var(--gray-dark)")};
  border-width: 1px;
  border-style: solid;
  &:first-of-type {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &:last-of-type {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &:hover {
    background-color: ${(props) => (props.selected ? "var(--blue)" : "var(--gray)")};
    transition: background-color 200ms ease;
  }
  &:not(:last-of-type) {
    border-right: ${(props) => (props.selected ? "none" : "1px solid var(--gray-dark)")};
  }
  a {
    font-size: 18px;
    font-weight: 500;
    padding: 10px 20px;
    display: block;
  }
`;

export const SubHeading = styled.h2`
  font-size: 14px;
  color: var(--black);
  font-weight: normal;
  margin-bottom: 20px;
`;

export const SVGWrapper = styled.span`
  display: inline-block;
  margin-top: 12px;
  margin-right: 4px;
`;
