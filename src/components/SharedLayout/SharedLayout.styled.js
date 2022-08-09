import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  background-color: #3f51b5;

  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  z-index: 1100;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: #fff;

  &.active {
    color: white;
    background-color: blue;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
