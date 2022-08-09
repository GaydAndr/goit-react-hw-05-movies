import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  grid-gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  list-style: none;
  margin: 0 auto;
  max-width: calc(100vw - 48px);
  padding: 0;
`;
export const ListItem = styled.li`
  overflow: hidden;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%),
    0 2px 1px rgb(0 0 0 / 20%);
`;

export const ListLink = styled(Link)`
  width: 100%;
`;
export const Title = styled.p`
  color: #000;
  font-weight: bold;
  padding: 0 15px;
`;

export const Img = styled.img`
  width: 100%;
`;
