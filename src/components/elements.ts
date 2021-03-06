import styled from 'styled-components';
import * as theme from '@Components/theme';

type BoxProps = {
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
};

export const Box = styled.div<BoxProps>`
  margin-top: ${(props: BoxProps) => (props.mt ? `${props.mt}px` : 0)};
  margin-bottom: ${(props: BoxProps) => (props.mb ? `${props.mb}px` : 0)};
  margin-left: ${(props: BoxProps) => (props.ml ? `${props.ml}px` : 0)};
  margin-right: ${(props: BoxProps) => (props.mr ? `${props.mr}px` : 0)};
`;

export const Buttons = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.green};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${theme.colors.white};
  border-bottom: 4px solid ${theme.colors.blue};
`;

export const Flex = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  max-width: 1140px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 576px) {
    height: 225px;
  }
`;

export const Socials = styled(Box)`
  display: flex;
  justify-content: end;
  margin-left: auto;
`;

export const Strong = styled.strong`
  color: ${theme.colors.blue};
`;

export const Table = styled.table`
  max-width: 1140px;
  width: 100%;
  margin: auto;
  background-color: ${theme.colors.white};
  border-collapse: collapse;
  border-bottom: 4px solid ${theme.colors.blue};
`;

export const THead = styled.thead`
  text-align: left;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  border: none;
`;

export const TBody = styled.tbody`
  background-color: ${theme.colors.white};

  &:nth-child(even) {
    background-color: ${theme.colors.grey};
  }
`;

export const TR = styled.tr``;

export const TH = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
`;

export const TD = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  border: none;
`;
