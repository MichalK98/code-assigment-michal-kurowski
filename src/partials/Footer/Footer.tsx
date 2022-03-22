import React from 'react';
import styled from 'styled-components';
import * as theme from '@Components/theme';

const StyledFooter = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  padding: 4px 32px;
  color: ${theme.colors.white};
  background: ${theme.colors.blue};
  min-width: 300px;
  text-align: center;
`;

const DefaultLayout = () => {
  return (
    <StyledFooter>
      <i>
        Created by{' '}
        <a href="https://www.linkedin.com/in/michal-kurowski98/">
          Michal Kurowski
        </a>
      </i>
    </StyledFooter>
  );
};

export default DefaultLayout;
