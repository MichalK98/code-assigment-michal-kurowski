import React from 'react';
import styled from 'styled-components';
import * as theme from '@Components/theme';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  position: relative;
  min-width: 150px;
  padding: 15px;
  background: ${theme.colors.green};
  color: ${theme.colors.blue};
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default Button;
