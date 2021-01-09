import styled from "styled-components";
import Container from './common/Container';

import AppLogo from '../assets/logo.png';

const Header = styled.header`
  padding: 1rem 1.4rem;
  background-color: var(--gray);
`;

const LogoWrapper = styled.div`
  margin-top: 10px;
  img {
    max-width: 260px;
  }

  h1 {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-top: 6px;
  }
`;

const AppHeader = () => {
  return (
    <Header>
      <Container>
        <LogoWrapper>
          <img alt="mytheresa" src={AppLogo}></img>
          <h1>Front-end Challenge</h1>
        </LogoWrapper>
      </Container>
  </Header>
  );
};

export default AppHeader;