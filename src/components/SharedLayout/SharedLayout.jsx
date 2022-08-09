import { Header, Link, List } from './SharedLayout.styled.js';

export const SharedLayout = () => {
  return (
    <Header>
      <nav>
        <List>
          <li>
            <Link
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
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
