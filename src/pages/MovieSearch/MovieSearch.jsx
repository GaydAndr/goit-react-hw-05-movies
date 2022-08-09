import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/mdAPI';
import { toast } from 'react-toastify';

import { GoHomePage } from 'components/GoHomePage/GoHomePage';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { FilmList } from 'components/FilmList/FilmList';

export const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchData, setSearchData] = useState(null);
  const searchRequest = searchParams.get('q') ?? '';

  useEffect(() => {
    if (!searchRequest) {
      return;
    }
    fetchSearchMovies(searchRequest).then(({ data }) =>
      setSearchData(data.results)
    );
  }, [searchRequest]);

  const handleSubmit = search => {
    if (!search) {
      toast.error('Напишіть щось');
      return;
    }
    setSearchParams({ q: search });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {searchData && (
        <>
          {searchData.length === 0 ? (
            <>
              <GoHomePage />
            </>
          ) : (
            <FilmList filmList={searchData} />
          )}
        </>
      )}
    </>
  );
};
