import styled, { css } from "styled-components";

const borderedStyle = `
  border: 1px solid var(--gray);
  border-radius: 6px;
`;

const Container = styled.div<{ bordered?: boolean }>`
  width: var(--container);
  max-width: 90%;
  margin: 0 auto;

  ${(props) =>
    props.bordered
      ? css`
          ${borderedStyle}
        `
      : ""};
`;

export default Container;
