import { Header, Link, List } from './SharedLayout.styled.js';

export const SharedLayout = () => {
  return (
    <Header>
      <nav>
        <List>
          <li>
            <Link
              to="/goit-react-hw-05-movies/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/goit-react-hw-05-movies/movies"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Movies
            </Link>
          </li>
        </List>
      </nav>
    </Header>
  );
};
