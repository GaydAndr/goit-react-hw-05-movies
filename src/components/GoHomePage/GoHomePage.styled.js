import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Img = styled.img`
  width: 300px;
`;

export const Button = styled(NavLink)`
  margin-bottom: 20px;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  border: 1px solid transparent;
  background-color: blue;
  color: #fff;
  transition: all 250 linear;
  border-radius: 4px;
  font-size: 30px;
  &:hover {
    color: blue;
    background-color: #fff;
    border: 1px solid blue;
  }
`;
