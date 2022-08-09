import { useEffect, useState } from 'react';
import { FilmList } from 'components/FilmList/FilmList';
import { fetchTrendings } from 'services/mdAPI';

export const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    fetchTrendings().then(({ data }) => setTrendings(data.results));
  }, []);

  return <FilmList filmList={trendings} />;
};
