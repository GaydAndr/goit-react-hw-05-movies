import { fetchReviews } from 'services/mdAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem } from './ReviewsItem';
import { List, ListItem } from 'components/FilmList/FilmList.styled';

export const Review = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(({ data }) => {
      setMovieReviews(data.results);
    });
  }, [movieId]);
  return (
    <>
      {movieReviews && movieReviews.length ? (
        <List>
          {movieReviews.map(item => {
            return (
              <ListItem key={item.id}>
                <ReviewsItem reviews={item}></ReviewsItem>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p> No data</p>
      )}
    </>
  );
};
