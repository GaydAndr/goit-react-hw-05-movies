import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link, List } from './MovieDetails.styled';
import { fetchDetails } from 'services/mdAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';

export const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchDetails(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <GoBackButton />
      {movie && <MovieCard movie={movie} />}
      <List>
        <li>
          <Link
            state={location.state}
            to="cast"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            state={location.state}
            to="reviews"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Review
          </Link>
        </li>
      </List>
      <Outlet />
    </>
  );
};
