import { useState, useEffect } from 'react';
import { fetchCredits } from 'services/mdAPI';
import { useParams } from 'react-router-dom';
import { CastItem } from './CastItem';
import { List, ListItem } from 'components/FilmList/FilmList.styled';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCredits(movieId).then(({ data }) => {
      setMovieCast(data.cast);
    });
  }, [movieId]);
  return (
    <>
      {movieCast && movieCast.length ? (
        <List>
          {movieCast.map(item => {
            return (
              <ListItem key={item.id}>
                <CastItem cast={item}></CastItem>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};
