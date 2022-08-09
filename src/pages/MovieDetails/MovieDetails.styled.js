import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 15px;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  background-color: #fff;

  &.active {
    color: #fff;
    background-color: blue;
  }
`;
