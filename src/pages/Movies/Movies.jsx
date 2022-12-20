import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { movieByQuery } from '../../components/services/api-movie';
import { FilmList } from 'components/FilmList/FilmList';
import { MovieMain } from './Movies.styled';
import { Button } from '../../components/Button/Button';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);
  const [total_results, setTotalResults] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const formSubmit = inputQuery => {
    setPage(1);
    setSearchParams(inputQuery !== '' ? { query: inputQuery } : {});
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    movieByQuery(query, page).then(r => {
      setMovies(prevMovie => [...prevMovie, ...r.results]);
      setTotalResults(r.total_results);
    });
  }, [query, page]);

  if (!movies) {
    return;
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <MovieMain>
      <SearchBox onSubmit={formSubmit} />
      {query && <FilmList movies={movies} />}
      {total_results / 12 >= page && <Button onClick={loadMore} />}
    </MovieMain>
  );
};

export default Movies;
