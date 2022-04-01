import React from 'react';
import styled from 'styled-components';
import * as theme from '@Components/theme';

const StyledHeader = styled.header`
  background-color: ${theme.colors.blue};
  display: flex;
  justify-content: center;
`;

const StyledNav = styled.nav``;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  font-size: 24px;
  padding: 16px 32px;
`;

const DefaultLayout = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <a href="/">Tretton37 - Employees</a>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default DefaultLayout;
