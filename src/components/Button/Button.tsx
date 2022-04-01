import React from 'react';
import styled from 'styled-components';
import * as theme from '@Components/theme';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  position: relative;
  min-width: 160px;
  padding: 15px;
  background: ${theme.colors.green};
  color: ${theme.colors.blue};
  border: 4px solid ${theme.colors.green};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;

  &:hover {
    border-bottom: 4px solid ${theme.colors.blue};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default Button;
