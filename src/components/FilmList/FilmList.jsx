import { useLocation } from 'react-router-dom';
import { List, ListItem, ListLink, Title } from './FilmList.styled';
import { PropTypes } from 'prop-types';

export const FilmList = ({ filmList }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {filmList.map(({ id, title, name, poster_path }) => {
          return (
            <ListItem key={id}>
              <ListLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
                  }
                  alt={title ? title : name}
                />
                <Title>{title ? title : name}</Title>
              </ListLink>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

FilmList.propTypes = {
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
